<template>
  <section class="profile-page">
    <article>
      <img :src="require('@images/profile/img_profile.jpeg')"/>
      <h1>SmokerJS</h1>
    </article>
    <article>
      <h1>Mail</h1>
      <div>
        <strong>send user info</strong>
      </div>
      <div contenteditable="true">
        01234
      </div>
      <button>send</button>
    </article>
  </section>
</template>

<script>
export default {
  name: 'profile',
}
</script>

<style lang="scss" scope>
  .profile-page {
    background-color: $black;
  }
</style>
