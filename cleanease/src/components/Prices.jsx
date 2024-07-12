import React from 'react';
import './css/style.css';
import ServiceCard from './ServicCard';


const Prices = () => {
  const prices=[
    {
      ttitle: 'ORGANIZING',
      price:40,
      unit:'hour',
      features:[
        'School & Learning Spaces',
        'Basement & Garapges',
        'Moving & Relocation',
        'Home Office'
      ]
    },
    {
      ttitle: 'CLEANING',
      price:40,
      unit:'hour',
      features:[
        'Disinfect against COVID-19 transmission',
        'Events & Parties',
        'Senior living'
      ]
    },
    {
      ttitle: 'HOUSE SITTING',
      price:50,
      unit:'day',
      features:[
        'Home Maintenance & Cleaning',
        'In_Home Plant Care',
        'Feed & Walk Pets'
      ]
    }

  ]
  return (
    <div className="container">
    <div className="row align-items-center">
      <div className="col-md-12">
        <div className="why-content">
        <h6 className='pp'>PRICING</h6>
        <h1 className='kp'>Affordable Pricing with our Finest<br/>Services</h1>       <br/><br/>
        </div>
      <div className='row'>
        {prices.map((p,index)=>(
          <ServiceCard key={index} title={p.ttitle} price={p.price} unit={p.unit} feature={p.features}/>
        ))}
        </div>
      </div>
    </div>
    </div>

  );
}

export default Prices;
