import React, { useState } from 'react';

const ProductForm = () => {
  const [form, setForm] = useState({
    productId: '',
    productName: '',
    productCost: '',
    productOnline: '',
    productCategory: '',
    availableInStore: {
      bigBazaar: false,
      dMart: false,
      reliance: false,
      megaStore: false
    }

  });

  const [products,setProducts]= useState([]);
  const [showProducts, setShowproducts] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm({
        ...form,
        availableInStore: {
          ...form.availableInStore,
          [name]: checked
        }
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.productId &&
      form.productName &&
      form.productCost &&
      form.productOnline &&
      form.productCategory &&
      (form.availableInStore.bigBazaar ||
        form.availableInStore.dMart ||
        form.availableInStore.reliance ||
        form.availableInStore.megaStore)
    ) {
      console.log('Product Added:', form);
      setProducts([...products, form]);
      setForm({
        productId: '',
        productName: '',
        productCost: '',
        productOnline: '',
        productCategory: '',
        availableInStore: {
          bigBazaar: false,
          dMart: false,
          reliance: false,
          megaStore: false
        }
      });

      setMessage('Product added!!!');
      setTimeout(() => setMessage(''), 3000);

    } else {
      alert('Please fill all fields');
    }
  };

  const handleshowProducts = () => {
    setShowproducts(!showProducts);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Product ID:
            <input type="text" name="productId" value={form.productId} onChange={handleChange} required />
            </label>
        </div>
        <div>
            <label>
            Product Name:
            <input type="text" name="productName" value={form.productName} onChange={handleChange} required />
            </label>
        </div>
        <div>
            <label>
            Product Cost:
            <input type="number" name="productCost" value={form.productCost} onChange={handleChange} required />
            </label>
        </div>
        <div>
            <label>
            Product Online:
            <input type="radio" name="productOnline" value="Yes" checked={form.productOnline === 'Yes'} onChange={handleChange} required /> Yes
            <input type="radio" name="productOnline" value="No" checked={form.productOnline === 'No'} onChange={handleChange} required /> No
            </label>
        </div>
        <div>
            <label>
            Product Category:
            <select name="productCategory" value={form.productCategory} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Grocery">Grocery</option>
                <option value="Mobile">Mobile</option>
                <option value="Electronics">Electronics</option>
                <option value="Cloths">Cloths</option>
            </select>
            </label>
        </div>
        <div>
            <label>
            Available in Store:
            <label>
                <input type="checkbox" name="bigBazaar" checked={form.availableInStore.bigBazaar} onChange={handleChange} /> Big Bazaar
            </label>
            <label>
                <input type="checkbox" name="dMart" checked={form.availableInStore.dMart} onChange={handleChange} /> DMart
            </label>
            <label>
                <input type="checkbox" name="reliance" checked={form.availableInStore.reliance} onChange={handleChange} /> Reliance
            </label>
            <label>
                <input type="checkbox" name="megaStore" checked={form.availableInStore.megaStore} onChange={handleChange} /> Mega Store
            </label>
            </label>
        </div>
        <div>
            <button type="submit">Add Product</button>
        </div>
        </form>
        {message && <div className="text-center text-primary" >{message}</div>}
        <div>
            <button onClick={handleshowProducts}>{showProducts ? 'Hide Products' : 'Show Products'}</button>
        </div>
        {showProducts && (
            <div>
                <h2>Product List</h2>
                <ul>
                    {products.map((product, index)=>(
                        <li key={index}>
                            <strong>Id:</strong> {product.productId},
                            <strong>NAME:</strong> {product.productName},
                            <strong>COST:</strong> {product.productCost},
                            <strong>ProductOnline:</strong> {product.productOnline},
                            <strong>CATEGORY:</strong> {product.productCategory},
                            <strong>Available IN Store:</strong> {Object.keys(product.availableInStore).filter(store => product.availableInStore[store]).join(', ')},
                        </li>
                    ))}
                </ul>
            </div>
        )}
       

        
    </div>
  );
};

export default ProductForm;
