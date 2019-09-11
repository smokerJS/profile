<template>
  <section class="profile-page">
    <article>
      <img :src="require('@images/profile/img_profile.jpeg')"/>
      <h1>SmokerJS</h1>
      <ul>
        <li>FrontEnd Devloper<li>
        <li>Jung, Jinsol</li>
        <li>smokerjs.dev@gmail.com</li>
        <li>React, Redux, Next, Hooks</li>
        <li>Vue, Nuxt</li>
        <li>Webpak4, HTML5, Sass, Jquery</li>
      </ul>
    </article>
    <article>
      <h1>Mail</h1>
      <div>
        <strong>send user info</strong>
      </div>
      <div contenteditable="true">

      </div>
      <button>send</button>
    </article>
  </section>
</template>

<script>
export default {
  name: 'profile',
  components: {

  },
  methods: {

  },
}
</script>

<style lang="scss" scope>
  .profile-page {
    background-color: #000;
  }
</style>
