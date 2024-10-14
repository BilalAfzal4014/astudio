
# Laravel Project Setup

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **PHP 8.0+**
- **Composer**
- **MySQL**

## Installation Instructions

Follow these steps to set up and run the project locally:

### Step 1: Create the Database

Create a MySQL database with the name `laravel`. You can do this through a MySQL client like phpMyAdmin or by running the following SQL command:

```sql
CREATE SCHEMA laravel;
```

### Step 2: Configure Database Credentials

Open the `.env` file in the root of your project and update the following lines to match your database credentials:

```plaintext
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

Ensure you provide your **MySQL username** and **password** in place of `root` and the blank password (`DB_PASSWORD=`), if required.

### Step 3: Run Migrations

To set up your database tables, run the following command:

```bash
php artisan migrate
```

### Step 4: Seed the Database

To populate your database with sample data, run the seeders:

```bash
php artisan db:seed
```

### Step 5: Start the Development Server

Once the migrations and seeders have successfully run, start the development server:

```bash
php artisan serve
```

By default, the application will be served at `http://127.0.0.1:8000`.

### Step 6: View Available Routes

To view all the routes in the application, run the following command:

```bash
php artisan route:list
```

This will display a list of all available routes along with their HTTP methods and URIs.

## Additional Notes

- If you encounter any issues during installation or while running commands, please ensure that your PHP, MySQL, and Composer configurations are correct.
- You can customize the database credentials in the `.env` file to match your local setup.

## License

This project is licensed under the MIT License.
