import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./SearchResultPage.css";


function SearchResultsPage() {
  const location = useLocation();
  const filteredData = location.state?.filteredData || [];

  return (
    <div className='BoxBox'>
      <h1 className='Heading11'>Search Results</h1>
      <div className="search-results">
      {filteredData.map((product) => (
      <div className="card" key={product.id}>
          <Link to={`/products/${product.id}`}>
     <      img src={product.image} alt={product.location} />
     
        <div className="card-content">
          <div className="location">{product.location}</div>
          <div className="price">{product.price}</div>
        </div>
        </Link>
          <hr className="line" />
            <p>
              <div className="dsp">{product.description}</div>
            </p>
     
      </div>

      ))}
    </div>
    <Link to = {'/'}>
     <div className='b2h'>Back To Home</div>
     </Link>
    </div>
  );
}

export default SearchResultsPage;
