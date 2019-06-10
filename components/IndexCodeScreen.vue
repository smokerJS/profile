<template>
  <article class="index-code-screen">
    <ul>
      <li :class="code1">
        <span>
          <strong class="tag">SmokerJS</strong>
        </span>
      </li>
      <li :class="code2">
        <span>
          &ensp;&ensp;I am a frontend developer
        </span>
      </li>
      <li :class="code3">
        <span>
          &ensp;&ensp;<strong class="tag">SkillSet</strong>
        </span>
      </li>
      <li :class="code4">
        <span>
          &ensp;&ensp;&ensp;&ensp;<strong class="tag">Javascript</strong>ES6<strong class="tag end">Javascript</strong>
        </span>
      </li>
      <li :class="code5">
        <span>
          &ensp;&ensp;&ensp;&ensp;<strong class="tag">Vue</strong>Vue, Nuxt<strong class="tag end">Vue</strong>
        </span>
      </li>
      <li :class="code6">
        <span>
          &ensp;&ensp;&ensp;&ensp;<strong class="tag">React</strong>React, Redux, Next, Hooks<strong class="tag end">React</strong>
        </span>
      </li>
      <li :class="code7">
        <span>
          &ensp;&ensp;&ensp;&ensp;<strong class="tag">Other</strong>Webpak4, HTML5, Sass, Jquery<strong class="tag end">Other</strong>
        </span>
      </li>
      <li :class="code8">
        <span>
          &ensp;&ensp;&ensp;&ensp;<strong class="tag">ServerSide</strong>Node, Express, Java, Spring<strong class="tag end">ServerSide</strong>
        </span>
      </li>
      <li :class="code9">
        <span>
          &ensp;&ensp;&ensp;&ensp;<strong class="tag">Database</strong>Oracle, Mysql<strong class="tag end">Database</strong>
        </span>
      </li>
      <li :class="code10">
        <span>
          &ensp;&ensp;<strong class="tag end">SkillSet</strong>
        </span>
      </li>
      <li :class="code11">
        <span>
          &ensp;&ensp;Thank you
        </span>
      </li>
      <li :class="code12">
        <span>
          <strong class="tag end">SmokerJS</strong>
        </span>
      </li>
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
    setTimeout(()=>{
      this.$set(this.$data,'code1','typing');
    },2000);    //1
    setTimeout(()=>{
      this.$set(this.$data,'code2','typing');
      this.$set(this.$data,'code12','');
    },5600);    //3
    setTimeout(()=>{
      this.$set(this.$data,'code3','typing');
      this.$set(this.$data,'code2','');
    },9000);    //4
    setTimeout(()=>{
      this.$set(this.$data,'code4','typing');
      this.$set(this.$data,'code10','');
    },12900);   //6
    setTimeout(()=>{
      this.$set(this.$data,'code5','typing');
      this.$set(this.$data,'code4','');
    },16500);   //7
    setTimeout(()=>{
      this.$set(this.$data,'code6','typing');
      this.$set(this.$data,'code5','');
    },20500);   //8
    setTimeout(()=>{
      this.$set(this.$data,'code7','typing');
      this.$set(this.$data,'code6','');
    },25000);   //9
    setTimeout(()=>{
      this.$set(this.$data,'code8','typing');
      this.$set(this.$data,'code7','');
    },31000);   //10
    setTimeout(()=>{
      this.$set(this.$data,'code9','typing');
      this.$set(this.$data,'code8','');
    },38000);   //11
    setTimeout(()=>{
      this.$set(this.$data,'code10','typing');
      this.$set(this.$data,'code9','');
    },43500);   //12
    setTimeout(()=>{
      this.$set(this.$data,'code10','typing');
      this.$set(this.$data,'code3','');
    },10800);  //5
    setTimeout(()=>{
      this.$set(this.$data,'code11','typing');
      this.$set(this.$data,'code10','');
    },44700);  //13
    setTimeout(()=>{
      this.$set(this.$data,'code12','typing');
      this.$set(this.$data,'code1','');
    },4100);   //2
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
        animation: typing-ani 5s steps(60, end) forwards;
        &.typing {
          & > span {
            padding-right: 1px;
            border-right: 1.2px solid rgb(230,230,230);
            animation: typing-bar-ani .75s step-end infinite;
          }
        }
        & > span {
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
        }
        &.hidden {
          display: none;
        }
      }
    }
  }


  @keyframes typing-ani {
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


  @keyframes typing-bar-ani {
    from, to {
      border-color: transparent;
    }
    50% {
      border-right: 1.2px solid rgb(230,230,230);
    }
  }
</style>
