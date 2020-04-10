<template>
  <div class="contact-page">
    <div class="container">
        <br>
        <br>
        <br>
      <div class="contact-font">
        Contact
        <span class="bot">.</span>
      </div>
      <span class="intro">Reach out for a project or just say hi,<br>feel free to contact me.</span>
      <br>
      <br>
      <form class="form-cls">
        <label class="text-field">Name</label>
        <div>
          <label for="inputsm"></label>
          <input class="field-color field-name" type="text" />
        </div>
        <br>
        <label class="text-field">Subject</label>
        <div>
          <label for="inputdefault"></label>
          <input class="field-color field-subject" type="text" />
        </div>
        <br>
        <label class="text-field">Description</label>
        <div>
          <label for="inputlg"></label>
          <input class="field-color field-desc" type="text" />
        </div>
      </form>
    </div>
    <button type="button" class="send-button">Send</button>
  </div>
</template>
<script>
export default {};
</script>