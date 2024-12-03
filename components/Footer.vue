<template>
  <footer class="footer">
    <!-- Row 1: Newsletter -->
    

    <!-- Row 2: Links Section -->
     
    <div class="links-section"><div class="column">
      <div class="newsletter-section">
      <p class="section-title">BÜLTEN</p>
      <div class="newsletter-content">
        <div class="newsletter-input-group">
          <input
            type="email"
            placeholder="E-posta giriniz"
            class="email-input"
          />
          <button class="subscribe-button">KAYIT OL</button>
        </div>
        <p style="padding-top: 25px;">
          Lütfen önce Aydınlatma Metni'ni okuyunuz. Aydınlatma Metni'ne her zaman ana
          sayfadaki
          <a href="#" class="link">"Kişisel Verilerin Korunması Aydınlatma Metni"</a>
          ibaresine tıklayarak da ulaşabilirsiniz.
        </p>
        
        <label class="checkbox-container">
          <input type="checkbox" />
          <span class="checkmark"></span>
          Touche kampanya ve ürünlerinden haberdar olmak istiyorum. Touche Tekstil
          A.Ş.’nin tarafıma ticari elektronik ileti göndermesine
          <a href="#" class="link">burada</a> belirtilen izni veriyorum.
        </label>
        <div class="d-flex justify-content-center mt-3">
            <a href="#" class="mx-2"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-tiktok fa-2x"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-pinterest fa-2x"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-whatsapp fa-2x"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
      </div>
    </div>
  </div>
      <div class="column">
        <h4 class="section-title">YARDIM</h4>
        <ul class="links-list">
          <li><a href="#">Üye Girişi / Üye Ol</a></li>
          <li><a href="#">Sipariş & İade</a></li>
          <li><a href="#">İade Talebi Oluştur</a></li>
          <li><a href="#">Kargo Takibi</a></li>
          <li><a href="#">Mağazalarımız</a></li>
          <li><a href="#">Sıkça Sorulan Sorular</a></li>
          <li><a href="#">Bize Ulaşın</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div class="column">
        <h4 class="section-title">KURUMSAL</h4>
        <ul class="links-list">
          <li><a href="#">Üyelik Sözleşmesi</a></li>
          <li><a href="#">Aydınlatma Metni</a></li>
          <li><a href="#">Mesafeli Satış Sözleşmesi</a></li>
          <li><a href="#">Ticari Elektronik İleti İzni</a></li>
          <li><a href="#">Çerez Politikası</a></li>
          <li><a href="#">Ön Bilgilendirme Formu</a></li>
          <li><a href="#">Kullanım Koşulları</a></li>
          <li><a href="#">İşlem Rehberi</a></li>
          <li><a href="#">Franchise Başvurusu</a></li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <hr class="divider" />

    <!-- Row 4: Footer Text -->
    <div class="footer-text">
      <p>© 2024 Touche.</p>
    </div>
  </footer>
</template>

<style scoped>
/* General Footer Styling */
.footer {
  background-color: #f8f9fa;
  color: #6c757d;
  padding: 20px 40px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}

/* Newsletter Section */
.newsletter-section {
  margin-bottom: 20px;
  width: 300px;
}
.section-title {
  font-size: 15px;
  font-weight: bold;
  color: black;
  padding-bottom: 20px;
}
.newsletter-input-group {
  display: flex;
  align-items: center;
  gap: 10px; /* Space between input and button */
}
.email-input {
  flex: 1;
  padding: 10px;
  border: 1px solid white; /* Tüm kenarlarda beyaz border */
  border-bottom: 1px solid black; /* Alt kısımda siyah border */
  border-radius: 4px; /* Köşeleri yuvarlak yapar */
  height: 40px;
}
.subscribe-button {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 10px;
  border-radius: 4px;
  height: 40px;
}

/* Links Section */
.links-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.column {
  flex: 1;
  margin-right: 20px;
}
.column-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.links-list {
  list-style: none;
  padding: 0;
}
.links-list li {
  margin-bottom: 5px;
}
.links-list a {
  color: #6c757d;
  text-decoration: none;
}

/* Divider */
.divider {
  border: 0;
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
}

/* Footer Text */
.footer-text {
  text-align: left;
  font-size: 12px;
  color: #6c757d;
}
a i {
  color: rgb(92, 92, 92);/* Instagram pink */
}
</style>
