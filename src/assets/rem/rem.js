      (function () {
        // 参数：设计稿宽度、rem转换为px的倍数
        var setBaseFontSize = function (designWidth, rem2px) {
          var d = window.document.createElement("div");
          d.style.width = "1rem";
          d.style.display = "none";

          var head = window.document.getElementsByTagName("head")[0];
          head.appendChild(d);

          var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue("width"));

          d.remove();
          document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + "%";

          var st = document.createElement("style");
          var portrait = "@media screen and (min-width: " + window.innerWidth + "px) {html{font-size:" + ((window.innerWidth / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}";
          var landscape = "@media screen and (min-width: " + window.innerHeight + "px) {html{font-size:" + ((window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}"

          st.innerHTML = portrait + landscape;
          head.appendChild(st);

          return defaultFontSize
        };

        // 720px的设计稿，以 100px=1rem 的比例调整
        setBaseFontSize(720, 100);
      })();
