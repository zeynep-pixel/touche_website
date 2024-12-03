<template>
  <div class="form-container">
    <form>
      <h2 class="form-title">GİRİŞ YAP</h2>
      
      <div class="form-group">
        <label for="exampleInputEmail1">E-posta</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      
      <div class="form-group">
        <label for="exampleInputPassword1">Şifre</label>
        <div class="password-container">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Şifreni mi unuttun" />
        </div>
      </div>
      
      <div class="button-container">
        <button type="submit" class="btn btn-submit">GİRİŞ YAP</button>
        <button type="button" class="btn btn-register">ÜYE OL</button>
      </div>
    </form>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  padding: 20px;
  flex-direction: column;
}



.form-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.password-container {
  position: relative;
}

.password-container input {
  padding-left: 220px; 
}

.password-container input::placeholder {
  text-align: left; 
  font-size: 13px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn-submit {
  background-color: black; 
  color: white;
  width: 100px;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #333; /* Hover efekti */
}

.btn-register {
  background-color: white; 
  color: black;
  width: 100px; 
  padding: 10px;

  
}


</style>
