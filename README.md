# StockIT

## Open Source Inventory Management System

Using Laravel & Angular

#### Installation

### **1 - API**

**(you must have PHP >=7.4 version in your machine) - will be later upgraded**

`1- Edit .env file with a working Database connection`

`2- in the Command Line `

```
cd api
composer install
npm install
php artisan migrate --seed
php artisan passport:install

```

`3- Create passport oauth Client ID & secret (using password grant type)`

`*click Enter on Each Message*`

```
php artisan passport:client --password
```

`4-run the API server `

```
php artisan serve
```

`5- for oauth2 Token send post request with (username,password,grant_type,client_id,client_secret) to:`

```
http://127.0.0.1:8000/oauth/token
```


### 2  - Client

`1- install the client app`

```
cd client
npm install
ng serve
```

`2- Edit Enviroment file in client/src/enviroments/`

```
apiUrl: '{your_api_url}',
  client_id: {your_client_id},
  client_secret: '{your_client_secret}',
  grant_type: 'password'
```

**Voila!**
