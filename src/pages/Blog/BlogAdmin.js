import React, { useState } from 'react';

// css
import '../../css/Blog/BlogAdmin.css';
import AWS from 'aws-sdk';




const BlogAdmin = () => {
    const [blogType, setBlogType] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogSubtitle, setBlogSubtitle] = useState('');
    const [blogAuthor, setBlogAuthor] = useState('');
    const [blogDatetime, setBlogDatetime] = useState('');
    const [sections, setSections] = useState([{type: 'subtitle', content: ''}]);
    const [selectedImage, setSelectedImage] = useState(null);

    const [message, setMessage] = useState('');

    const handleAddSection = (type) => {
        let newSection;
        if (type === 'subtitle') {
            newSection = { type: 'subtitle', content: '' };
        } else if (type === 'text') {
            newSection = { type: 'text', content: '' };
        } else {
            return; // Invalid type, do nothing
        }
        setSections([...sections, newSection]);
    };

    const handleDeleteSection = (index) => {
        setSections(prevSections => {
            const updatedSections = [...prevSections];
            updatedSections.splice(index, 1);
            return updatedSections;
        });
    };

    const handleSectionChange = (index, field, value) => {
        setSections(prevSections => {
            const updatedSections = [...prevSections];
            updatedSections[index] = {
                ...updatedSections[index],
                [field]: value,
            };
            return updatedSections;
        });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    // Create an instance of the AWS SDK
    const awsConfig = {
        apiVersion: 'latest',
        region: process.env.REACT_APP_AWS_REGION,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    };
    
    AWS.config.update(awsConfig);

    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const s3 = new AWS.S3();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if any input is empty
        if (
            blogType.trim() === '' ||
            blogTitle.trim() === '' ||
            blogSubtitle.trim() === '' ||
            blogAuthor.trim() === '' ||
            blogDatetime.trim() === '' ||
            sections.some(section => section.content.trim() === '') ||
            selectedImage === null
        ) {
            setMessage('* Please fill in all fields');
            return;
        }

        // Upload the selected image to S3
        const folderName = 'blogImages'; // Specify the folder name
        const fileName = selectedImage.name;
        const s3Params = {
            Bucket: process.env.REACT_APP_AWS_S3_BUCKET,
            Key: `${folderName}/${fileName}`,
            Body: selectedImage,
            ContentType: selectedImage.type, // Set the content type based on the uploaded file
        };

        try {
            const uploadResult = await s3.upload(s3Params).promise();
            const imageUrl = uploadResult.Location;
            console.log('Image uploaded to S3:', imageUrl);

            // Save the input data to DynamoDB
            const params = {
                TableName: process.env.REACT_APP_AWS_DYNAMODB_TABLE,
                Item: {
                    blogID: Date.now().toString(),
                    blogType,
                    blogTitle,
                    blogSubtitle,
                    blogAuthor,
                    blogDatetime,
                    blogSection: sections,
                    blogImageUrl: imageUrl
                }
            };
            console.log('imageURL:', imageUrl);
            try {
                await dynamoDB.put(params).promise();
                console.log('Blog saved to DynamoDB');
            } catch (error) {
                console.error('Error saving blog to DynamoDB:', error);
                console.error('Error stack trace:', error.stack);
                setMessage('* Error saving blog');
                return;
            }

        } catch (error) {
            console.error('Error uploading image:', error);
            console.error('Error stack trace:', error.stack);
            setMessage('* Error uploading image');
            return;
        }

        // Show a success message
        setMessage('Blog submitted successfully!');

        // Reset the input fields
        setBlogType('');
        setBlogTitle('');
        setBlogSubtitle('');
        setBlogAuthor('');
        setBlogDatetime('');
        setSections([{ title: '', text: '' }]);
        setSelectedImage(null);
    };

    return (
        <div className='blog-admin'>
            <form className='blog-admin-form'>
                <div className="blog-admin-title page-title-1-xl">
                    New Blog
                </div>
                <input
                    className="blog-admin-form-input"
                    type='text'
                    placeholder='Blog Type'
                    value={blogType}
                    onChange={(e) => setBlogType(e.target.value)}
                />
                <input
                    className="blog-admin-form-input"
                    type='text'
                    placeholder='Blog Title'
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                />
                <input
                    className="blog-admin-form-input"
                    type='text'
                    placeholder='Blog Subtitle'
                    value={blogSubtitle}
                    onChange={(e) => setBlogSubtitle(e.target.value)}
                />
                <input
                    className="blog-admin-form-input"
                    type='text'
                    placeholder='Blog Author'
                    value={blogAuthor}
                    onChange={(e) => setBlogAuthor(e.target.value)}
                />
                <input
                    className="blog-admin-form-input"
                    type='text'
                    placeholder='Date Published'
                    value={blogDatetime}
                    onChange={(e) => setBlogDatetime(e.target.value)}
                />
                <label className='blog-admin-form-label'>
                    Blog Image (jpg, png, or gif only)
                </label>
                 <input
                    className='blog-admin-form-image'
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />

                {sections.map((section, index) => (
                    <div key={index} className='blog-admin-form-section'>
                        {section.type === 'subtitle' ? (
                            <input
                                className='blog-admin-form-section-title'
                                type='text'
                                placeholder='Section Subtitle'
                                value={section.content}
                                onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
                            />
                        ) : (
                            <textarea
                                className='blog-admin-form-section-text'
                                placeholder='Section Text'
                                value={section.content}
                                onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
                            />
                        )}
                        <button className='blog-admin-delete-section'
                                onClick={() => handleDeleteSection(index)}>
                            Delete Section
                        </button>
                    </div>
                ))}
            </form>
            <button className='blog-admin-add-section'
                    onClick={() => handleAddSection('subtitle')}>
                Add Subtitle
            </button>
            <button className='blog-admin-add-section'
                    onClick={() => handleAddSection('text')}>
                Add Text
            </button>
            <button className='blog-admin-submit' 
                    onClick={handleSubmit}
                    type='submit'>
                Submit
            </button>
            {message && <div className='blog-admin-warning'>{message}</div>}
        </div>
    );
};

export default BlogAdmin;