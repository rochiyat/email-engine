# NestJS Email Simple

Aplikasi **NestJS Email Simple** adalah sebuah email engine yang dibuat dengan **NestJS**. Aplikasi ini memungkinkan pengiriman email dengan dukungan templating dan fitur batch email. Cocok digunakan oleh **UMKM** atau bisnis yang memerlukan solusi email sederhana namun handal.

## 🎯 Fitur
- 📧 **Pengiriman Email**: Menggunakan SMTP (support Gmail).
- 🖥️ **Templating HTML**: Mendukung template email berbasis **Handlebars**.
- 📨 **Pengiriman Batch Email**: Mengirim email ke beberapa penerima sekaligus.

## 🚀 Teknologi yang Digunakan
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/) untuk integrasi dengan PostgreSQL
- [@nestjs-modules/mailer](https://github.com/nest-modules/mailer) untuk pengiriman email
- [Handlebars](https://handlebarsjs.com/) sebagai template engine

## 📦 Instalasi
Pastikan kamu telah menginstal **Node.js** dan **PostgreSQL** di sistem kamu.

### 1. Clone Repository
```bash
git clone https://github.com/rochiyat/nestjs-email-simple.git
cd nestjs-email-simple
```

### 2. Instal Dependencies
```bash
npm install
```

### 3. Konfigurasi Environment
Buat file `.env` di root project dan tambahkan konfigurasi berikut:

```
# Email Configuration (Gmail SMTP)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_specific_password
MAIL_FROM=your_email@gmail.com
```

> **Catatan**: Untuk akun Gmail, kamu mungkin perlu membuat **App Password** jika menggunakan **2FA**. Lihat panduan [di sini](https://support.google.com/accounts/answer/185833).

### 4. Menjalankan Aplikasi
Untuk menjalankan aplikasi dalam mode development:

```bash
npm run start:dev
```

## 📬 Cara Mengirim Email
Aplikasi ini menyediakan endpoint sederhana untuk mengirim email.

### Contoh Request (via Postman atau cURL)
- **Endpoint**: `POST /mail/send`
- **Body (JSON)**:
  ```json
  {
    "to": "recipient@example.com",
    "subject": "Test Email",
    "context": {
      "name": "John Doe",
      "message": "Hello, this is a test email!"
    }
  }
  ```

- **Endpoint untuk Batch Email**: `POST /mail/send-batch`
- **Body (JSON)**:
  ```json
  {
    "emails": [
        {
            "to": "example@gmail.com",
            "subject": "Test Email",
            "context": {
                "name": "Example",
                "message": "This is a test email."
            }
        },
        {
            "to": "example2@gmail.com",
            "subject": "Test Email 2",
            "context": {
                "name": "Example 2",
                "message": "This is a test email 2."
            }
        }
    ]
  }
  ```

## 📄 Struktur Folder
```
nestjs-email-simple/
├── src/
│   ├── mailer/
│   │   ├── mailer.module.ts
│   │   ├── mailer.service.ts
│   │   ├── mailer.controller.ts
│   │   └── templates/
│   │       └── email-template.hbs
│   └── app.controller.ts
│   └── app.module.ts
│   └── app.service.ts
│   └── main.ts
├── .env
├── nest-cli.json
├── package.json
└── tsconfig.json
└── README.md
```

## 🛠️ Pengembangan dan Testing
Untuk menjalankan aplikasi dengan mode debugging:

```bash
npm run start:debug
```

## 🔧 Troubleshooting
- **Error**: `Invalid login: 535-5.7.8 Username and Password not accepted`
  - Pastikan `MAIL_USER` dan `MAIL_PASS` sudah benar dan gunakan **App Password** untuk Gmail.
- **Error**: `Error: "name" not defined`
  - Pastikan template Handlebars (`email-template.hbs`) memiliki placeholder yang sesuai.

## 📜 Lisensi
Aplikasi ini menggunakan lisensi [MIT](https://opensource.org/licenses/MIT).

## ✨ Kontribusi
Jika kamu ingin berkontribusi pada proyek ini, silakan buat **pull request** atau laporkan masalah pada bagian **Issues**.

## 📞 Kontak
Jika ada pertanyaan, hubungi saya di [LinkedIn](https://www.linkedin.com/in/rochiyat-rochiyat-70b67021/) atau email ke `rochiyat@gmail.com`.
