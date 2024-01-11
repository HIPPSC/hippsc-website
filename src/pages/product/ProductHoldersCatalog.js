import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

// css
import '../../css/product/ProductHoldersCatalog.css';

// svg - alloy steel
import BBT30SR from '../../assets/holders/alloySteel/BBT30-SR.svg';
import BBT40SR from '../../assets/holders/alloySteel/BBT40-SR.svg';
import BBT40SRC from '../../assets/holders/alloySteel/BBT40-SRC.svg';
import BBT40SRV from '../../assets/holders/alloySteel/BBT40-SRV.svg';
import BBT50SR from '../../assets/holders/alloySteel/BBT50-SR.svg';
import HSK40ESR from '../../assets/holders/alloySteel/HSK40E-SR.svg';
import HSK50ASR from '../../assets/holders/alloySteel/HSK50A-SR.svg';
import HSK50ESR from '../../assets/holders/alloySteel/HSK50E-SR.svg';
import HSK63ASR from '../../assets/holders/alloySteel/HSK63A-SR.svg';
import HSK63ASRC from '../../assets/holders/alloySteel/HSK63A-SRC.svg';
import HSK63ASRV from '../../assets/holders/alloySteel/HSK63A-SRV.svg';
import HSK63FSR from '../../assets/holders/alloySteel/HSK63F-SR.svg';
import HSK100ASR from '../../assets/holders/alloySteel/HSK100A-SR.svg';
import SK40SR from '../../assets/holders/alloySteel/SK40-SR.svg';


// svg - stainless steel
import BBT30MRA from '../../assets/holders/stainlessSteel/BBT30-MRA.svg';
import BBT40MRAMSB from '../../assets/holders/stainlessSteel/BBT40-MRAMSB.svg';
import BT15MRA from '../../assets/holders/stainlessSteel/BT15-MRA.svg';
import HSK25EMRA from '../../assets/holders/stainlessSteel/HSK25E-MRA.svg';
import HSK32EMRA from '../../assets/holders/stainlessSteel/HSK32E-MRA.svg';
import HSK40EMRA from '../../assets/holders/stainlessSteel/HSK40E-MRA.svg';
import HSK50AMRAMSB from '../../assets/holders/stainlessSteel/HSK50A-MRAMSB.svg';
import HSK50EMRAMSB from '../../assets/holders/stainlessSteel/HSK50E-MRAMSB.svg';
import HSK63AMRAMSB from '../../assets/holders/stainlessSteel/HSK63A-MRAMSB.svg';
import HSK63FMRAMSB from '../../assets/holders/stainlessSteel/HSK63F-MRAMSB.svg';
import ISO20MRA from '../../assets/holders/stainlessSteel/ISO20-MRA.svg';
import ISO25MRA from '../../assets/holders/stainlessSteel/ISO25-MRA.svg';
import SK40MRAMSB from '../../assets/holders/stainlessSteel/SK40-MRAMSB.svg';
import SP25MCS from '../../assets/holders/stainlessSteel/SP25-MCS.svg';
import SP25MCR from '../../assets/holders/stainlessSteel/SP25-MCR.svg';
import ONEMICRON from '../../assets/holders/stainlessSteel/ONE-MICRON.svg';
import SUBMICRON from '../../assets/holders/stainlessSteel/SUB-MICRON.svg';


const holdersCatalog = {
    'alloy-steel': {
        BBT: [
            {img: BBT30SR, name: 'BBT30-SR'}, 
            {img: BBT40SR, name: 'BBT40-SR'},
            {img: BBT40SRC, name: 'BBT40-SRC'},
            {img: BBT40SRV, name: 'BBT40-SRV'},
            {img: BBT50SR, name: 'BBT50-SR'}
        ],
        HSK: [
            {img: HSK40ESR, name: 'HSK40E-SR'},
            {img: HSK50ASR, name: 'HSK50A-SR'},
            {img: HSK50ESR, name: 'HSK50E-SR'},
            {img: HSK63ASR, name: 'HSK63A-SR'},
            {img: HSK63ASRC, name: 'HSK63A-SRC'},
            {img: HSK63ASRV, name: 'HSK63A-SRV'},
            {img: HSK63FSR, name: 'HSK63F-SR'},
            {img: HSK100ASR, name: 'HSK100A-SR'}
        ],
        SK: [
            {img: SK40SR, name: 'SK40-SR'}
        ],
    },
    'stainless-steel': {
        BBT: [
            {img: BBT30MRA, name: 'BBT30-MRA'},
            {img: BBT40MRAMSB, name: 'BBT40-MRAMSB'}
        ],
        BT: [
            {img: BT15MRA, name: 'BT15-MRA'}
        ],
        HSK: [
            {img: HSK25EMRA, name: 'HSK25E-MRA'},
            {img: HSK32EMRA, name: 'HSK32E-MRA'},
            {img: HSK40EMRA, name: 'HSK40E-MRA'},
            {img: HSK50AMRAMSB, name: 'HSK50A-MRAMSB'},
            {img: HSK50EMRAMSB, name: 'HSK50E-MRAMSB'},
            {img: HSK63AMRAMSB, name: 'HSK63A-MRAMSB'},
            {img: HSK63FMRAMSB, name: 'HSK63F-MRAMSB'}
        ],
        SK: [
            {img: SK40MRAMSB, name: 'SK40-MRAMSB'}
        ],
        ISO: [
            {img: ISO20MRA, name: 'ISO20-MRA'},
            {img: ISO25MRA, name: 'ISO25-MRA'}
        ],
        SP: [
            {img: SP25MCR, name: 'SP25-MCR'},
            {img: SP25MCS, name: 'SP25-MCS'}
        ],
        Micron : [
            {img: ONEMICRON, name: 'One-Micron'},
            {img: SUBMICRON, name: 'Sub-Micron'}
        ]
    }
}


const ProductHoldersCatalog = () => {
    const { material, holderType } = useParams(); // e.g., 'alloy-steel' or 'stainless-steel'
    
    const renderHolders = (materialType, holderType) => {
        return (
            <div key={holderType}>
                <div className="product-holders-catalog-selection-title page-title-1">
                    {holderType} ({material.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}) →
                </div>
                <div className="product-holders-catalog-selection">
                {holdersCatalog[materialType][holderType].map((holder, index) => (
                    <Link to={`/product/holders/${material}/${holderType}/${holder.name}`}
                         key={index} className="product-holders-catalog-selection-item">
                        <div className="product-holders-catalog-selection-pic">
                            <img src={holder.img} alt={holder.name} />
                        </div>
                        <div className="product-holders-catalog-selection-item-title page-title-3">
                            {holder.name}
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        );
    }
  
    return (
      <div className='product-holders-catalog'>
        {/* metadata */}
        <Helmet>
            <title>{"Shrink Fit Holders - " + material.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + " " + holderType}</title>
            <meta 
                name="description" 
                content="Engineered with a high-temperature resistant surface, 
                our tooling combats carbon accumulation, ensuring a perennially pristine 
                appearance and extending the tool holder's lifespan.." 
            />
            <meta name="keywords" content="shrink fit holders, tool holders, cnc machining, precision" />
        </Helmet>

        {/* directory */}
        <div className="product-holders-catalog-dir">
          <Link to="/product/holders"
                className='product-holders-catalog-dir-link'>
            Shrink Fit Holders
          </Link> 
          <span className='product-holders-catalog-dir-separator'>
            /
          </span>
          <span className='product-holders-catalog-dir-link'>
            {material.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + "-" + holderType}
          </span> 
        </div>
  
        {renderHolders(material, holderType)}
      </div>
    );
  };

export default ProductHoldersCatalog;