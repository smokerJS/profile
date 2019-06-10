<template>
  <article class="index-code-screen">
    <ul>
      <li :class="code1"><strong class="tag">SmokerJS</strong></li>
      <li :class="code2">&ensp;&ensp;I am a frontend developer</li>
      <li :class="code3">&ensp;&ensp;<strong class="tag">SkillSet</strong></li>
      <li :class="code4">&ensp;&ensp;&ensp;&ensp;<strong class="tag">Javascript</strong>ES6<strong class="tag end">Javascript</strong></li>
      <li :class="code5">&ensp;&ensp;&ensp;&ensp;<strong class="tag">Vue</strong>Vue, Nuxt<strong class="tag end">Vue</strong></li>
      <li :class="code6">&ensp;&ensp;&ensp;&ensp;<strong class="tag">React</strong>React, Redux, Next, Hooks<strong class="tag end">React</strong></li>
      <li :class="code7">&ensp;&ensp;&ensp;&ensp;<strong class="tag">Other</strong>Webpak4, HTML5, Sass, Jquery<strong class="tag end">Other</strong></li>
      <li :class="code8">&ensp;&ensp;&ensp;&ensp;<strong class="tag">ServerSide</strong>Node, Express, Java, Spring<strong class="tag end">ServerSide</strong></li>
      <li :class="code9">&ensp;&ensp;&ensp;&ensp;<strong class="tag">Database</strong>Oracle, Mysql<strong class="tag end">Database</strong></li>
      <li :class="code10">&ensp;&ensp;<strong class="tag end">SkillSet</strong></li>
      <li :class="code11">&ensp;&ensp;Thank you</li>
      <li :class="code12"><strong class="tag end">SmokerJS</strong></li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "index-conde-screen",
  data: function() {
    return {
      code1 : 'hidden',
      code2 : 'hidden',
      code3 : 'hidden',
      code4 : 'hidden',
      code5 : 'hidden',
      code6 : 'hidden',
      code7 : 'hidden',
      code8 : 'hidden',
      code9 : 'hidden',
      code10 : 'hidden',
      code11 : 'hidden',
      code12 : 'hidden',
    };
  },
  created() {
    setTimeout(()=>{this.$set(this.$data,'code1','')},2000);    //1
    setTimeout(()=>{this.$set(this.$data,'code2','')},5300);    //3
    setTimeout(()=>{this.$set(this.$data,'code3','')},8000);    //4
    setTimeout(()=>{this.$set(this.$data,'code4','')},11500);   //6
    setTimeout(()=>{this.$set(this.$data,'code5','')},15000);   //7
    setTimeout(()=>{this.$set(this.$data,'code6','')},18000);   //8
    setTimeout(()=>{this.$set(this.$data,'code7','')},22500);   //9
    setTimeout(()=>{this.$set(this.$data,'code8','')},27500);   //10
    setTimeout(()=>{this.$set(this.$data,'code9','')},33000);   //11
    setTimeout(()=>{this.$set(this.$data,'code10','')},9500);  //5
    setTimeout(()=>{this.$set(this.$data,'code11','')},38000);  //12
    setTimeout(()=>{this.$set(this.$data,'code12','')},3500);   //2
  },
};
</script>

<style lang="scss" scope>
  .index-code-screen {
    position: absolute;
    bottom: 15%;
    right: 10%;
    z-index: 1;
    font-size: 14px;
    letter-spacing: 1.2px;
    font-weight: bold;
    & > ul {
      display: block;
      width: 480px;
      height: 218px;
      & > li {
        height: 18px;
        clear: both;
        float: left;
        color: rgb(230,230,230);
        overflow: hidden;
        white-space: nowrap;
        letter-spacing: 1.2px;
        animation: typing 5s steps(60, end) forwards;
        & > strong.tag {
          color: rgb(37,102,202);
          &::before {
            content: "<";
            color: rgb(200,200,200);
            margin-right: 1px;
          }
          &.end::before {
            content: "</";
            color: rgb(200,200,200);
            margin: 0 1px 0 2px;
          }
          &::after {
            content: ">";
            color: rgb(200,200,200);
            margin: 0 2px 0 1px;
          }
          &.end::after {
            content: ">";
            color: rgb(200,200,200);
            margin-left: 1px;
          }
        }
        &.hidden {
          display: none;
        }
      }
    }
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
      visibility: hidden;
    }
    1% {
      visibility: visible;
    }
    to {
      visibility: visible;
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to {
      border-color: transparent;
    }
    50% {
      border-right: 1.2px solid orange;
    }
  }
</style>
