<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4" style="font-size: 20px; font-weight: 700;">İLETİŞİM</h2>
        <table class="table table-borderless">
            <tbody>
                <tr class="divider"></tr>
                <tr>
                    <th scope="row">Touché Genel Merkez:</th>
                    <td>Çobançeşme Mahallesi, Bilge Sk. No:13, 34197 Bahçelievler/İSTANBUL</td>
                </tr>
                <tr class="divider"></tr>
                <tr>
                    <th scope="row">Whatsapp İletişim Hattı:</th>
                    <td><a href="tel:08502550325">0850 255 0 325</a></td>
                </tr>
                <tr class="divider"></tr>
                <tr>
                    <th scope="row">E-mail:</th>
                    <td><a href="mailto:hey@toucheprive.com">hey@toucheprive.com</a></td>
                </tr>
                <tr class="divider"></tr>
                <tr>
                    <th scope="row">Mersis:</th>
                    <td>0858089309800001</td>
                </tr>
                <tr class="divider"></tr>
                <tr>
                    <th scope="row">Kep:</th>
                    <td><a href="mailto:touchetekstil@hs03.kep.tr">touchetekstil@hs03.kep.tr</a></td>
                </tr>
            </tbody>
        </table>

        <p class="text-center mt-5" style="font-size: 20px; font-weight: 700;">BİZİ TAKİP EDİN</p>
        <div class="d-flex justify-content-center mt-3">
            <a href="#" class="mx-2"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-tiktok fa-2x"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-pinterest fa-2x"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-whatsapp fa-2x"></i></a>
            <a href="#" class="mx-2"><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
/* Başlık ve genel stil */
table th {
  font-weight: bold;
  width: 200px;
}

table td a {
  color: #000;
  text-decoration: none;
}

table td a:hover {
  text-decoration: underline;
}

h2, h3 {
  font-weight: bold;
}

/* Divider (çizgi) için stil */
tr.divider {
  border-bottom: 1px solid #ccc;
  height: 0; /* Görünmez satırın boşluğu */
}
a i {
  color: rgb(92, 92, 92);/* Instagram pink */
}


</style>

