import React, { useState, useEffect } from 'react';

// css
import '../css/product/ProductHoldersTable.css';

// cloudfront url
const cloudfrontUrl = process.env.REACT_APP_CLOUDFRONT_URL;


const ProductHoldersTable = ({material, holderType, holderModel}) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
      // The URL to your CloudFront distribution that serves the JSON file
      const dataUrl = `${cloudfrontUrl}/holders/${material}/${holderType}/${holderModel}/product-info.json`;
    
      fetch(dataUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setTableData(data))
        .catch(error => console.error('Error fetching data: ', error));
    }, [material, holderType, holderModel]);

    return (
        <div className='product-holders-table'>
            <table>
                <thead>
                    <tr>
                        <th>Cat. No</th>
                        <th>D1</th>
                        <th>D2</th>
                        <th>t</th>
                        <th>D3</th>
                        <th>L1</th>
                        <th>L2</th>
                        <th>L3</th>
                        <th>N</th>
                        <th>M</th>
                        <th>KG</th>
                        <th>Inventory</th>
                        {/* Add all other header cells here */}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.CatNo}</td>
                            <td>{item.D1}</td>
                            <td>{item.D2}</td>
                            <td>{item.t}</td>
                            <td>{item.D3}</td>
                            <td>{item.L1}</td>
                            <td>{item.L2}</td>
                            <td>{item.L3}</td>
                            <td>{item.N}</td>
                            <td>{item.M}</td>
                            <td>{item.KG}</td>
                            <td>
                                {item.Inventory.Circle}
                                {item.Inventory.Triangle}
                                {item.Inventory.Star}
                            </td>
                        {/* Render other data cells here */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductHoldersTable;