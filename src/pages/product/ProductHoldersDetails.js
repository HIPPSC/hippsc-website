import React from 'react';
import { Link, useParams } from 'react-router-dom';

// css
import '../../css/product/ProductHoldersDetails.css';

const cloudfrontUrl = process.env.REACT_APP_CLOUDFRONT_URL;

const ProductHoldersDetails = () => {
    const {material, holderType, holderModel} = useParams();

    // get the image url from cloudfront
    const blueprintUrl = `${cloudfrontUrl}/holders/${material}/${holderType}/${holderModel}/blueprint.svg`;
    const productImageUrl = `${cloudfrontUrl}/holders/${material}/${holderType}/${holderModel}/product-image.svg`;



    return (
        <div className='product-holders-details'>
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
                        ↳ Handle 3000+ heating cycles
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductHoldersDetails;