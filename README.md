Rename the .env.example file to .env and add the following


NODE_ENV = development

PORT = 5000

MONGO_URI = your mongodb uri

JWT_SECRET = 'abc123'

PAYPAL_CLIENT_ID = your paypal client id

PAGINATION_LIMIT = 8

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

Install Dependencies in root 

npm install
npm run server


 backend (:5000)
 
npm run dev

backend diployed link

https://new-backend-1-8hml.onrender.com/



export const BASE_URL = 'https://new-backend-1-8hml.onrender.com/'
export const PRODUCTS_URL = '/api/products';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';
export const UPLOAD_URL ='/api/upload';


