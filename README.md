# Next.js + MySQL Kullanıcı Yönetim Paneli

Bu proje, **Next.js 15 App Router** yapısı ve **MySQL** kullanılarak geliştirilmiş basit bir kullanıcı yönetim panelidir. Kullanıcı ekleme, güncelleme, silme ve listeleme (CRUD) işlemleri yapılabilir. Giriş işlemleri JWT ile gerçekleştirilir.

## 🚀 Kurulum

### 1. Bu repoyu klonlayın

```bash
git clone https://github.com/theebestzz/nextjs-mysql
cd nextjs-mysql
```

### 2. .env dosyasını oluşturun
Proje dizinine bir .env dosyası ekleyin ve aşağıdaki ortam değişkenlerini girin:

```bash
DB_HOST="localhost"
DB_USER="user"
DB_PASSWORD="password"
DB_DATABASE="database"

JWT_SECRET=93476a855887b01b277a295ca02680617c1989b80c0c135ae7b7cc26fe136646c
```

Gerçek veritabanı bilgilerinizi girmeniz gerekir.

### 3. Gerekli paketleri yükleyin ve projeyi başlatın

```bash
npm install

npm run dev
```

▫ Proje Yapısı

src/
├── app/
│   └── admin/
│       ├── login/
│       │   ├── page.tsx
│       │   └── layout.tsx
│       ├── users/
│       │   ├── page.tsx
│       │   └── layout.tsx
│       └── layout.tsx
├── components/
│   └── admin/
│       ├── forms/
│       │   ├── CreateForm.tsx
│       │   ├── UpdateForm.tsx
│       │   └── LoginForm.tsx
│       ├── Sidebar.tsx
│       └── LogoutButton.tsx
├── lib/
│   └── actions/
│       ├── user.ts
│       ├── auth.ts
│       ├── db.ts
│       └── types.ts

