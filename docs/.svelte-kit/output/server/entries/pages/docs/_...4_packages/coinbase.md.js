import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-8615df27.js";
import { C as CodeFence } from "../../../../chunks/CodeFence-7825ab22.js";
import "clsx";
import { L as Link } from "../../../../chunks/Link-6f161fc2.js";
/* empty css                                                                 */import { T as Tabs, a as TabPanel } from "../../../../chunks/Tabs-dd4460a7.js";
import "../../../../chunks/contexts-8ef4e4d1.js";
import "../../../../chunks/ssr-eca022de.js";
const Coinbase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>@web3-onboard/coinbase</h1>
<p>Wallet module for connecting Coinbase Wallet SDK to web3-onboard. Check out the ${validate_component(Link, "Link").$$render($$result, {
    href: "https://docs.cloud.coinbase.com/wallet-sdk/docs",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {}, {
    default: () => {
      return `Coinbase Wallet Developer Docs`;
    }
  })} for more information.</p>
<h2 id="${"install"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#install",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Install</h2>
${validate_component(Tabs, "Tabs").$$render($$result, { values: ["yarn", "npm"] }, {}, {
    default: () => {
      return `${validate_component(TabPanel, "TabPanel").$$render($$result, { value: "yarn" }, {}, {
        default: () => {
          return `${validate_component(CodeFence, "CodeFence").$$render($$result, {
            lang: "bash",
            ext: "sh",
            linesCount: 2,
            rawCode: "yarn add @web3-onboard/coinbase\n",
            showCopyCode: true,
            code: '<pre><code><span class="line"><span style="color: #A6ACCD">yarn add @web3-onboard/coinbase</span></span>\n<span class="line"></span></code></pre>'
          }, {}, {})}`;
        }
      })}
  ${validate_component(TabPanel, "TabPanel").$$render($$result, { value: "npm" }, {}, {
        default: () => {
          return `${validate_component(CodeFence, "CodeFence").$$render($$result, {
            lang: "bash",
            ext: "sh",
            linesCount: 2,
            rawCode: "npm install @web3-onboard/coinbase\n",
            showCopyCode: true,
            code: '<pre><code><span class="line"><span style="color: #A6ACCD">npm install @web3-onboard/coinbase</span></span>\n<span class="line"></span></code></pre>'
          }, {}, {})}`;
        }
      })}`;
    }
  })}
<h2 id="${"options"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#options",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Options</h2>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    lang: "typescript",
    ext: "ts",
    linesCount: 4,
    code: '<pre><code><span class="line"><span style="color: #C792EA">type</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">CoinbaseWalletOptions</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">darkMode</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">boolean</span><span style="color: #A6ACCD"> </span><span style="color: #464B5D; font-style: italic">// default = false</span></span>\n<span class="line"><span style="color: #89DDFF">}</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}<h2 id="${"usage"}" tabindex="${"-1"}">${validate_component(Link, "Link").$$render($$result, {
    class: "header-anchor",
    href: "#usage",
    "aria-hidden": "true"
  }, {}, {
    default: () => {
      return `#`;
    }
  })} Usage</h2>
${validate_component(CodeFence, "CodeFence").$$render($$result, {
    lang: "typescript",
    ext: "ts",
    linesCount: 20,
    code: '<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> Onboard </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@web3-onboard/core</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> coinbaseWalletModule </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@web3-onboard/coinbase</span><span style="color: #89DDFF">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #464B5D; font-style: italic">// initialize the module with options</span></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> coinbaseWalletSdk </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">coinbaseWalletModule</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">{</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">darkMode</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">true</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #464B5D; font-style: italic">// can also initialize with no options...</span></span>\n<span class="line"><span style="color: #464B5D; font-style: italic">// const coinbaseWalletSdk = coinbaseWalletSdk()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> onboard </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">Onboard</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">{</span></span>\n<span class="line"><span style="color: #89DDFF">  </span><span style="color: #464B5D; font-style: italic">// ... other Onboard options</span></span>\n<span class="line"><span style="color: #A6ACCD">  </span><span style="color: #F07178">wallets</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> [</span></span>\n<span class="line"><span style="color: #A6ACCD">    coinbaseWalletSdk</span></span>\n<span class="line"><span style="color: #89DDFF">    </span><span style="color: #464B5D; font-style: italic">//... other wallets</span></span>\n<span class="line"><span style="color: #A6ACCD">  ]</span></span>\n<span class="line"><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> connectedWallets </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #A6ACCD"> onboard</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">connectWallet</span><span style="color: #A6ACCD">()</span></span>\n<span class="line"><span style="color: #A6ACCD">console</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">log</span><span style="color: #A6ACCD">(connectedWallets)</span></span>\n<span class="line"></span></code></pre>'
  }, {}, {})}`;
});
export { Coinbase as default };