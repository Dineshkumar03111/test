// import React from 'react';

// const ServiceCard=({title,price,unit,feature})=>(
//     <div className='col-md-4'>
//         <div className='card text-center mb-4'>
//             <div className='card-body'>
//                 <h5 className='card-title text-primary'>{title}</h5> 
//                 <h6 className='card-subtitle mb-2 text-muted'>Starting from</h6>
//                 <h2>${price}<small className='className=text-muted'>/{unit}</small></h2>
//                 <ul className='list-unstyled mt-3 mb-4'>
//                     {feature.map((features,index)=>(
//                         <li key={index} className={features.isAvailable ? "" : 'text-left'}>{features.isAvailable ? "✔️" : "✔️"}{features}</li>
//                     ))}
//                 </ul>
//                 <button variant="primary" className="hel" > Get Quote</button>
//             </div>
//         </div>
//     </div>
// );

// export default ServiceCard;

import React from 'react';
import './css/style.css';

const ServiceCard = ({ title, price, unit, feature, onQuoteClick }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-subtitle mb-2 text-muted">
            Starting from ${price}/{unit}
          </p>
          <ul className="list-unstyled mt-3 mb-4">
            {feature.map((item, index) => (
              <li key={index}>✔️ {item}</li>
            ))}
          </ul>
          <button className="btn btn-primary mt-3" onClick={() => onQuoteClick({ title, price, unit, features: feature })}>
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

