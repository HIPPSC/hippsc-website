import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

// table component
import ProductHoldersTable from '../../components/ProductHoldersTable';

// css
import '../../css/product/ProductHoldersDetails.css';

// cloudfront url
const cloudfrontUrl = process.env.REACT_APP_CLOUDFRONT_URL;


const ProductHoldersDetails = () => {
    const {material, holderType, holderModel} = useParams();

    // get the image url from cloudfront
    const blueprintUrl = `${cloudfrontUrl}/holders/${material}/${holderType}/${holderModel}/blueprint.svg`;
    const productImageUrl = `${cloudfrontUrl}/holders/${material}/${holderType}/${holderModel}/product-image.svg`;


    return (
        <div className='product-holders-details'>
            {/* metadata */}
            <Helmet>
                <title>{"HIPPSC Shrink Fit - " + holderModel}</title>
                <meta 
                    name="description" 
                    content="Engineered with a high-temperature resistant surface, 
                    our tooling combats carbon accumulation, ensuring a perennially pristine 
                    appearance and extending the tool holder's lifespan." 
                />
                <meta name="keywords" content="shrink fit, tool holders, cnc machining" />
                <link rel="canonical" href={`https://www.hippsc.com/holders/${material}/${holderType}/${holderModel}`} />
            </Helmet>


            {/* dir */}
            <div className="product-holders-catalog-dir">
                <Link to="/product/holders"
                        className='product-holders-catalog-dir-link'>
                    Shrink Fit Holders
                </Link> 
                <span className='product-holders-catalog-dir-separator'>
                    /
                </span>
                <Link to={`/product/holders/${material}/${holderType}`}
                    className='product-holders-catalog-dir-link'>
                    {material.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + "-" + holderType}
                </Link> 
                <span className='product-holders-catalog-dir-separator'>
                    /
                </span>
                <span className='product-holders-catalog-dir-link'>
                    {holderModel}
                </span>
            </div>

            {/* header */}
            <div className="product-holders-details-header">
                <div className="product-holders-details-header-pic">
                    <img src={productImageUrl} alt={holderModel} />
                    <img src={blueprintUrl} alt={holderModel} />
                </div>
                <div className="product-holders-details-hearder-info">
                    <div className="product-holders-details-header-title page-title-1">
                        {holderModel}
                    </div>
                    <div className='product-holders-details-header-sub-title page-text-2'>
                        {material.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </div>
                    <div className="product-holders-details-header-bullet-item page-text-1">
                        ↳ Heat resistant hot-working steel
                    </div>
                    <div className="product-holders-details-header-bullet-item page-text-1">
                        ↳ For solid carbide tools
                    </div>
                    <div className="product-holders-details-header-bullet-item page-text-1">
                        ↳ Over 3000+ heating cycles
                    </div>
                </div>
            </div>

            {/* table */}
            <div className="product-holders-details-table">
                <ProductHoldersTable material={material} holderType={holderType} holderModel={holderModel} />  
            </div>

            {/* Note */}
            <div className="product-holders-details-note">
                <div className="product-holders-details-note-item">
                    NOTE: 
                </div>
                <div className="product-holders-details-note-item">
                    ● In Stock
                </div>
                <div className="product-holders-details-note-item">
                    ▲ 15 Business Days
                </div>
                <div className="product-holders-details-note-item">
                    ★ 20 Business Days
                </div>
            </div>

        </div>
    );
};

export default ProductHoldersDetails;