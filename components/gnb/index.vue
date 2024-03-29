<template>
  <nav class="global-nav">
    <button class="btn-toggle" @click="toggleNavHandler">
      <i v-if="!this.toggleNav">MENU</i>
      <i v-else>CLOSE</i>
    </button>
    <GnbCanvas v-if="this.toggleNav" :loadHandler="this.loadHandler"/>
    <div class="nav-screen" v-if="this.toggleNav&&this.load">
      <ul>
        <li>
          <a class="glitch1" href="https://github.com/smokerJS" data-text="Github" target="_blank">Github</a>
        </li>
        <li>
          <a class="glitch2" href="https://www.linkedin.com/in/jin-sol-jung-83221b189/" data-text="Blog" target="_blank">Linkedin</a>
        </li>
        <li>
          <a class="glitch3" href="https://drive.google.com/file/d/15Z2HACPziJpSH0CcxmpI-1XxV3mQhtUV/view" data-text="Portfolio" target="_blank">Portfolio</a>
        </li>
      </ul>
      <!-- 임시주석처리
      <nuxt-link to="/profile">profile</nuxt-link>
      <nuxt-link to="/">home</nuxt-link>
      -->
    </div>
  </nav>
</template>

<script>
import GnbCanvas from '@/gnb/Canvas'
export default {
  components: {
    GnbCanvas
  },
  name: 'gnb-index',
  data() {
    return {
      toggleNav : false,
      load: false
    }
  },
  methods: {
    toggleNavHandler() {
      this.$store.commit('gnbSwitchHandler');
      this.$set(this.$data, 'toggleNav', !this.toggleNav);
      this.$set(this.$data, 'load', false);
    },
    loadHandler() {
      this.$set(this.$data, 'load', true);
    }
  },
}
</script>

<style lang="scss" scope>
  .global-nav {
    position: absolute;
    z-index: 101;
    & > .btn-toggle {
      position: fixed;
      z-index: 100;
      right: 4.3%;
      top: 10.5%;
      text-align: right;
      width: 90px;
      height: 28px;
      padding-right: 14px;
      border: none;
      background-color: $white;
      overflow: hidden;
      cursor: pointer;
      & > i {
        font-family: "FightThis";
        font-style: normal;
        font-size: 18px;
        color : $blue;
      }
    }
    & > .nav-screen {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: rgba(0,0,255,.45);
      z-index: 99;
      & > ul {
        position: absolute;
        top: 8.5%;
        left: 5%;
        font-family: "FightThis";
        font-size: 100px;
        @media (max-width: 1024px) {
          font-size: 70px;
        }
        @media (max-width: 500px) {
          font-size: 50px;
        }
        & > li {
          margin-bottom: -30px;
          height: 140px;
          @media (max-width: 1024px) {
            margin-bottom: -50px;
          }
          @media (max-width: 500px) {
            margin-bottom: -80px;
          }
          & > a {
            color: #daf6ff;
            // text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
            text-shadow: 0 0 20px rgb(230, 10, 10),  0 0 20px rgba(10, 175, 230, 0);
            text-decoration: none;
          }
        }
      }
    }
  }

  @mixin glitchCopy { 
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
  }

  .glitch1 {
    position: relative;
    animation: glitch-skew 1s infinite linear alternate-reverse;
    
    &::before{
      @include glitchCopy;
      left: 2px;
      text-shadow: -2px 0 #ff00c1;
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch1-anim 5s infinite linear alternate-reverse;
    }
    
    &::after {
      @include glitchCopy;
      left: -2px;
      text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
      animation: glitch1-anim2 1s infinite linear alternate-reverse;
    }
  }

  .glitch2 {
    position: relative;

    &::before{
      @include glitchCopy;
      z-index: -1;
      opacity: .5;
      color: #ff00c1;
      animation: glitch2-anim .3s cubic-bezier(.25, .46, .45, .94) both infinite;
    }
    
    &::after {
      @include glitchCopy;
      opacity: .8;
      color: #4400ff;
      animation: glitch2-anim2 .3s cubic-bezier(.25, .46, .45, .94) reverse both infinite;
    }
  }

  .glitch3 {
    position: relative;

    &::before{
      @include glitchCopy;
      left: 2px;
      text-shadow: -2px 0 #ff00c1;
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch3-anim 5s infinite linear alternate-reverse;
    }
    
    &::after {
      @include glitchCopy;
      left: -2px;
      text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
      animation: glitch3-anim2 1s infinite linear alternate-reverse;
    }
  }

  @keyframes glitch1-anim {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(100)+px, 9999px, random(100)+px, 0);
        transform: skew((random(100) / 100) + deg);
      }
    }
  }

  @keyframes glitch1-anim2 {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(100)+px, 9999px, random(100)+px, 0);
        transform: skew((random(100) / 100) + deg);
      }
    }
  }

  @keyframes glitch2-anim {
    0% {
      transform: translate(0)
    }
    20% {
      transform: translate(-5px, 5px)
    }
    40% {
      transform: translate(-5px, -5px)
    }
    60% {
      transform: translate(5px, 5px)
    }
    80% {
      transform: translate(5px, -5px)
    }
    to {
      transform: translate(0)
    }
  }

  @keyframes glitch2-anim2 {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(150)+px, 350px, random(150)+px, 30px)
      }
    }
  }

  @keyframes glitch3-anim {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))}  {
        clip: rect(random(150)+px, 350px, random(150)+px, 30px)
      }
    }
  }

  @keyframes glitch3-anim2 {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(150)+px, 350px, random(150)+px, 30px)
      }
    }
  }

  @keyframes glitch-skew {
    $steps: 10;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        transform: skew((random(10) - 5) + deg);
      }
    }
  }
</style>
