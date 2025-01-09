# Pouzz | Anonymous confessions

Pouzz App - Get ananymous confessions from friends, family, online random people

![image](https://github.com/user-attachments/assets/cfabed1f-2fce-48e2-aec7-b67f4c136efd)


## Installation

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/hellofaizan/secretmsg.git
cd secretmsg
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Set up environment variables
   Create a `.env` file in the root directory: These are env examples

```env
# Your environment variables here
DATABASE_URL="postgresql://postgres:figscreen@localhost:5432/figscreen"

NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_Website_URL="http://localhost:3000"
NEXTAUTH_SECRET="testing"
NODE_ENV="development"
# development || production

# Next Auth Google Provider
GOOGLE_CLIENT_ID="google client id"
GOOGLE_CLIENT_SECRET="google secret"

# LemonSqueezy
LEMONSQUEEZY_API_KEY="Paste apikey here"
LEMONSQUEEZY_STORE_ID="Store id here settings/stores"
NEXT_PUBLIC_LS_1_VARRIENT_ID="Veriant id of 1st product"
NEXT_PUBLIC_LS_2_VARRIENT_ID="Veriant id of 2nd product"
LEMONSQUEEZY_WEBHOOK_SECRET="secret"
WEBHOOK_URL="http://localhost:3000/api/webhooks"

# Resend
RESEND_API_KEY="resend api key"
EMAIL_FROM="onboarding@resend.dev"
```

4. Create table in database

```bash
yarn db:sync
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## API Documentation

### Authentication

> [!NOTE]  
> API under high priority development

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
