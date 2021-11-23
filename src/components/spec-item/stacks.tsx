import React from "react"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGraphql,
  SiTailwindcss,
  SiNextdotjs,
  SiGatsby,
} from "react-icons/si"
import { BiServer } from "react-icons/bi"

const StacksItem: React.FC = () => (
  <div>
    <ul className="-my-6">
      <li className="py-6">
        <div className="p-4 border-indigo-500 border-2 rounded-xl">
          <div className="text-center text-sm text-indigo-400 uppercase font-bold">
            <span>Back End / CMS</span>
          </div>
          <ul className="flex mt-2 justify-center flex-wrap -mx-3 -my-3">
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiJavascript size={60} color="#f7cc1f" />
                <span className="text-sm uppercase mt-4">Javascript</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiTypescript size={60} color="#4674e4" />
                <span className="text-sm uppercase mt-4">Typescript</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiGraphql size={60} color="#ff2dd8" />
                <span className="text-sm uppercase mt-4">GraphQL</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 106 128"
                  height="60"
                >
                  <path
                    fill="#d1d5db"
                    fillRule="evenodd"
                    d="M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm uppercase mt-4">Prisma</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={60}
                  width={60}
                  fill="none"
                  viewBox="0 0 37 24"
                >
                  <path
                    fill="#d1d5db"
                    d="M25.416 13.046l-1.822 2.763a4.256 4.256 0 00-1.861-.135l-4.34-8.663a4.186 4.186 0 10-6.531-.437l-5.97 9.113a4.182 4.182 0 102.442 1.365l5.8-8.846a4.2 4.2 0 001.801.12l4.331 8.644a4.154 4.154 0 00-1.121 2.844 4.221 4.221 0 008.441 0 4.146 4.146 0 00-.73-2.357l1.895-2.875-2.335-1.536zM32.477 0a4.2 4.2 0 00-4.221 4.186 4.15 4.15 0 001.109 2.83l-1.791 2.759 2.34 1.52 1.928-2.97A4.186 4.186 0 1032.477 0zm0 5.86a1.674 1.674 0 11.028-3.348 1.674 1.674 0 01-.028 3.348z"
                  ></path>
                </svg>
                <span className="text-sm uppercase mt-4">Nexus</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div
                className="border-r border-blueGray-600"
                style={{ height: 60, width: 1 }}
              ></div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <img
                  style={{ height: 60 }}
                  src="https://seeklogo.com/images/C/contentful-logo-C395C545BF-seeklogo.com.png"
                  alt=""
                />
                <span className="text-sm uppercase mt-4">Contentful</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <img
                  style={{ height: 60 }}
                  src="https://seeklogo.com/images/P/prismic-logo-F6A173E6D0-seeklogo.com.png"
                  alt=""
                />
                <span className="text-sm uppercase mt-4">Prismic</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  height={60}
                  viewBox="0 0 24 24"
                >
                  <title>Directus icon</title>
                  <path
                    fill="#d1d5db"
                    d="M19.187 13.909a1.74 1.74 0 0 1-.286-.092.657.657 0 0 1-.203-.139c.056-.488 0-.912.047-1.392.184-1.862 1.355-1.272 2.406-1.577.655-.184 1.31-.562 1.475-1.336a13.528 13.528 0 0 0-2.397-2.204c-2.85-2.028-6.574-2.84-9.958-2.277a5.113 5.113 0 0 0 2.238 2.074s-.917 0-1.703-.587c-.23.092-.692.274-.913.384a5.094 5.094 0 0 0 6.63.37c-.01.017-.185.285-.397 1.4-.47 2.38-1.826 2.195-3.504 1.596-3.485-1.264-5.403-.093-7.145-2.49-.507.286-.82.82-.82 1.402 0 .599.331 1.106.81 1.383.262-.348.38-.446.836-.446-.706.4-.79.75-1.094 1.718-.368 1.171-.212 2.37-1.936 2.683-.913.046-.894.664-1.226 1.586-.415 1.199-.968 1.678-2.047 2.812.443.535.904.6 1.374.406.968-.406 1.715-1.66 2.415-2.471.784-.904 2.665-.517 4.085-1.402.977-.599 1.457-1.41.811-2.784a2.72 2.72 0 0 1 .701 1.66c1.641-.213 3.836 1.788 5.836 2.12a3.574 3.574 0 0 1-.488-.82c-.23-.554-.304-1.06-.258-1.503.184 1.097 1.29 2.507 3.07 2.637.452.036.95-.019 1.466-.176.618-.184 1.19-.424 1.872-.295.507.093.977.35 1.272.784.443.645 1.41.784 1.844-.009-.977-2.554-3.67-2.72-4.813-3.015z"
                  />
                </svg>
                <span className="text-sm uppercase mt-4">Directus</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  height={60}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WordPress icon</title>
                  <path
                    fill="#d1d5db"
                    d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"
                  />
                </svg>
                <span className="text-sm uppercase mt-4">Wordpress</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <img
                  style={{ height: 60 }}
                  src="https://ps.w.org/wp-graphql/assets/icon-256x256.png"
                  alt=""
                />
                <span className="text-sm uppercase mt-4">WPGraphQL</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li className="py-6">
        <div className="p-4 border-yellow-500 border-2 rounded-xl">
          <div className="text-center text-sm text-yellow-400 uppercase font-bold">
            <span>Front End</span>
          </div>
          <ul className="flex mt-2 justify-center flex-wrap -mx-3">
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiHtml5 size={60} color="#ff3f3f" />
                <span className="text-sm uppercase mt-4">HTML</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiCss3 size={60} color="#1f99f7" />
                <span className="text-sm uppercase mt-4">CSS</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiJavascript size={60} color="#f7cc1f" />
                <span className="text-sm uppercase mt-4">Javascript</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiTypescript size={60} color="#4674e4" />
                <span className="text-sm uppercase mt-4">Typescript</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiReact size={60} color="#2dfff9" />
                <span className="text-sm uppercase mt-4">React</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <div className="h-[60px] flex items-center">
                  <svg
                    width={100}
                    viewBox="0 0 979 293"
                    className="eetev6l1 css-5i1btw"
                  >
                    <g fill="currentColor" fillRule="nonzero">
                      <path d="M159.4 83.1H130L87.5 195.4h26.6l6.9-19h40.1l-7.3-21h-26.4l17.2-48.3 30.6 88.4h26.6zM606.3 195.3V83.1H630v91.2h46.6v21zM742.6 195.3V83.1h23.6v91.2h46.6v21zM475.4 103.2c19.5 0 35.5 16.2 35.5 36.1 0 19.9-15.9 36.1-35.5 36.1-19.5 0-35.4-16.2-35.4-36.1 0-19.9 15.9-36.1 35.4-36.1zm0-22c-31.5 0-57 26-57 58.1s25.5 58.1 57 58.1 57-26 57-58.1-25.5-58.1-57-58.1zM921.5 103.2c19.6 0 35.5 16.2 35.5 36.1 0 19.9-15.9 36.1-35.5 36.1-19.5 0-35.4-16.2-35.4-36.1-.1-19.9 15.8-36.1 35.4-36.1zm0-22c-31.5 0-57 26-57 58.1s25.5 58.1 57 58.1 57-26 57-58.1-25.5-58.1-57-58.1zM322 83.1h-51.4v112.3h23.5v-38.6H322c19.6 0 35.5-16.9 35.5-36.8 0-20.1-15.9-36.9-35.5-36.9zm0 51.6h-27.9V105H322c7.7 0 13.9 7 13.9 14.8 0 7.9-6.2 14.9-13.9 14.9z"></path>
                      <path d="M250.4 229.4c-2 0-3.8 1-4.9 2.6 0 0-5.3 6.2-8.2 9.1-12.1 12.3-26.1 21.9-41.8 28.7-16.2 7-33.4 10.5-51.2 10.5-17.8 0-35-3.5-51.2-10.5-15.6-6.8-29.7-16.5-41.8-28.8-12.1-12.3-21.6-26.6-28.2-42.6-6.9-16.5-10.3-34-10.3-52.1s3.5-35.6 10.3-52.1c6.6-15.9 16.1-30.3 28.2-42.6 12.1-12.3 26.1-22 41.8-28.7 16.2-7 33.4-10.5 51.2-10.5 17.8 0 35 3.5 51.2 10.5 11.4 4.9 22 11.4 31.5 19.3-.5 1.5-.8 3.2-.8 4.9 0 8.3 6.6 15.1 14.8 15.1 8.2 0 14.8-6.8 14.8-15.1S249.2 32 241 32c-2 0-4 .4-5.7 1.2C210.5 12.5 178.8.1 144.3.1 65 .2.7 65.6.7 146.4c0 80.8 64.3 146.2 143.6 146.2 44.4 0 84-20.5 110.4-52.7 1.1-1.1 1.8-2.7 1.8-4.4-.1-3.4-2.8-6.1-6.1-6.1z"></path>
                    </g>
                  </svg>
                </div>
                <span className="text-sm uppercase mt-4">Apollo GraphQL</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiGraphql size={60} color="#ff2dd8" />
                <span className="text-sm uppercase mt-4">GraphQL</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiTailwindcss size={60} color="#2dffe2" />
                <span className="text-sm uppercase mt-4">Tailwindcss</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiNextdotjs size={60} color="#d1d5db" />
                <span className="text-sm uppercase mt-4">Next.js</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={60}
                  viewBox="0 0 400 400"
                >
                  <g fillRule="nonzero" transform="translate(0 50)" fill="none">
                    <path
                      d="M227.92099 83.45116l-13.6889 24.10141-46.8148-82.44693L23.7037 278.17052h97.3037c0 13.31084 10.61252 24.10142 23.70371 24.10142H23.70371c-8.46771 0-16.29145-4.59601-20.5246-12.05272-4.23315-7.4567-4.23272-16.64312.00114-24.0994L146.89383 13.05492c4.23415-7.45738 12.0596-12.05138 20.5284-12.05138 8.46878 0 16.29423 4.594 20.52839 12.05138l39.97037 70.39623z"
                      fill="#00C58E"
                    />
                    <path
                      d="M331.6642 266.11981l-90.05432-158.56724-13.6889-24.10141-13.68888 24.10141-90.04445 158.56724c-4.23385 7.45629-4.23428 16.64271-.00113 24.09941 4.23314 7.4567 12.05689 12.05272 20.5246 12.05272h166.4c8.46946 0 16.29644-4.591 20.532-12.04837 4.23555-7.45736 4.23606-16.64592.00132-24.10376h.01976zM144.7111 278.17052L227.921 131.65399l83.19012 146.51653h-166.4z"
                      fill="#2F495E"
                    />
                    <path
                      d="M396.04938 290.22123c-4.23344 7.45557-12.05656 12.0507-20.52345 12.0507H311.1111c13.0912 0 23.7037-10.79057 23.7037-24.10141h40.66173L260.09877 74.98553l-18.4889 32.56704L227.921 83.45116l11.65432-20.51634c4.23416-7.45738 12.0596-12.05138 20.5284-12.05138 8.46879 0 16.29423 4.594 20.52839 12.05138l115.41728 203.185c4.23426 7.457 4.23426 16.6444 0 24.1014z"
                      fill="#108775"
                    />
                  </g>
                </svg>
                <span className="text-sm uppercase mt-4">Nuxt.js</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <div className="h-[60px] flex items-center">
                  <svg
                    x-comp="Wordmark"
                    aria-label="Remix Logo"
                    height="24"
                    viewBox="0 0 659 165"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
                      fill="url(#paint0_linear)"
                    ></path>
                    <path
                      d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
                      fill="url(#paint1_linear)"
                    ></path>
                    <path
                      d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
                      fill="url(#paint2_linear)"
                    ></path>
                    <path
                      d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
                      fill="url(#paint3_linear)"
                    ></path>
                    <path
                      d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
                      fill="currentColor"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="591.052"
                        y1="47.1035"
                        x2="591.052"
                        y2="161.28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="currentColor"></stop>
                        <stop
                          offset="1"
                          stopColor="currentColor"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="203.19"
                        y1="44.0317"
                        x2="203.19"
                        y2="164.352"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="currentColor"></stop>
                        <stop
                          offset="1"
                          stopColor="currentColor"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear"
                        x1="368.744"
                        y1="44.0317"
                        x2="368.744"
                        y2="161.28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="currentColor"></stop>
                        <stop
                          offset="1"
                          stopColor="currentColor"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear"
                        x1="499.172"
                        y1="0"
                        x2="499.172"
                        y2="161.28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="currentColor"></stop>
                        <stop
                          offset="1"
                          stopColor="currentColor"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="text-sm uppercase mt-4">Remix.run</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <SiGatsby size={60} color="#660bb3" />
                <span className="text-sm uppercase mt-4">Gatsby.js</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  height={60}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>RedwoodJS icon</title>
                  <path
                    fill="#962f2f"
                    d="M6.989 3.47l4.66 3.181c.105.07.228.108.354.111a.634.634 0 0 0 .354-.111l4.664-3.192a.637.637 0 0 0-.089-1.087L12.272.065a.64.64 0 0 0-.56 0L7.067 2.372a.636.636 0 0 0-.078 1.098zm6.597 4.179c0 .211.104.408.276.528l3.736 2.553a.628.628 0 0 0 .776-.05l3.134-2.803a.637.637 0 0 0-.028-.973l-2.992-2.393a.635.635 0 0 0-.751-.029l-3.874 2.65a.644.644 0 0 0-.277.517zm-9.291 3.474a.64.64 0 0 1 .209.538.625.625 0 0 1-.315.485l-2.231 1.337a.63.63 0 0 1-.718-.049.64.64 0 0 1-.21-.693l.825-2.596a.63.63 0 0 1 1.023-.281l1.417 1.259zm12.1.271l-4.033-2.76a.634.634 0 0 0-.708 0l-4.033 2.76a.646.646 0 0 0-.276.485.664.664 0 0 0 .212.521l4.03 3.605a.635.635 0 0 0 .842 0l4.03-3.605a.647.647 0 0 0-.064-1.006zm-10.758-.713l-3.13-2.803a.648.648 0 0 1-.213-.503.626.626 0 0 1 .237-.481l2.992-2.407a.641.641 0 0 1 .754-.029l3.87 2.65a.639.639 0 0 1 0 1.07l-3.732 2.553a.633.633 0 0 1-.778-.05zm16.073 4.026l-3.187-1.908a.627.627 0 0 0-.744.071l-3.895 3.477a.644.644 0 0 0-.204.587.636.636 0 0 0 .388.483l5.404 2.19a.634.634 0 0 0 .815-.332l1.675-3.752a.64.64 0 0 0-.252-.816zm.442-4.561l.825 2.596h-.007a.635.635 0 0 1-.927.742l-2.234-1.337a.623.623 0 0 1-.305-.485.631.631 0 0 1 .209-.538l1.416-1.262a.63.63 0 0 1 1.023.284zm-11.82 6.786a.637.637 0 0 0-.202-.585L6.235 12.87a.627.627 0 0 0-.744-.071l-3.187 1.908a.648.648 0 0 0-.255.813l1.678 3.752a.632.632 0 0 0 .814.332l5.4-2.19a.637.637 0 0 0 .391-.482zm1.912 1.07l4.334 1.755c.212.091.358.29.382.521a.635.635 0 0 1-.269.596l-4.338 3.013A.625.625 0 0 1 12 24a.64.64 0 0 1-.354-.114l-4.334-3.013a.635.635 0 0 1 .124-1.117l4.334-1.755a.642.642 0 0 1 .474.001z"
                  />
                </svg>
                <span className="text-sm uppercase mt-4">Redwood.js</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={60}
                  viewBox="0 0 324 285.096"
                >
                  <path
                    fill="#8080F2"
                    d="M98.764 104.305l60.777-35.09a4.916 4.916 0 014.917 0l60.778 35.09a4.92 4.92 0 012.458 4.258v70.179c0 1.755-.938 3.38-2.458 4.259l-60.778 35.089a4.916 4.916 0 01-4.917 0L98.764 183a4.919 4.919 0 01-2.458-4.258v-70.179a4.922 4.922 0 012.458-4.258"
                  ></path>
                  <path
                    fill="#4b32c3"
                    d="M320.02 136.27L247.405 9.937C244.766 5.37 239.894 2 234.619 2H89.383c-5.276 0-10.15 3.37-12.788 7.937L3.978 135.991c-2.637 4.57-2.637 10.335 0 14.905l72.617 125.297c2.638 4.568 7.512 6.903 12.788 6.903h145.235c5.274 0 10.148-2.265 12.785-6.834l72.616-125.502c2.64-4.566 2.64-9.922.002-14.49m-60.131 60.749c0 1.857-1.118 3.575-2.728 4.505l-92.498 53.367a5.263 5.263 0 01-5.233 0l-92.57-53.367c-1.609-.93-2.734-2.646-2.734-4.505V90.284c0-1.858 1.109-3.575 2.719-4.505l92.494-53.367a5.252 5.252 0 015.23 0l92.577 53.367c1.61.93 2.743 2.647 2.743 4.505z"
                  ></path>
                </svg>
                <span className="text-sm uppercase mt-4">Eslint</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <img
                  src="https://styled-components.com/logo.png"
                  style={{ height: 60 }}
                  alt=""
                />
                <span className="text-sm uppercase mt-4">
                  Styled Components
                </span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <img
                  src="https://testing-library.com/img/octopus-64x64.png"
                  style={{ height: 60 }}
                  alt=""
                />
                <span className="text-sm uppercase mt-4">React Testing</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li className="py-6">
        <div className="p-4 border-green-400 border-2 rounded-xl">
          <div className="text-center text-sm text-green-400 uppercase font-bold">
            <span>Deployment</span>
          </div>
          <ul className="flex mt-2 justify-center flex-wrap -mx-3 -my-3">
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  height={60}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Vercel icon</title>
                  <path fill="#d1d5db" d="M24 22.525H0l12-21.05 12 21.05z" />
                </svg>
                <span className="text-sm uppercase mt-4">Vercel</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <img
                  style={{ height: 60 }}
                  src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png"
                  alt=""
                />
                <span className="text-sm uppercase mt-4">Netlify</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <img
                  style={{ height: 60, width: 90, objectFit: "contain" }}
                  src="https://seeklogo.com/images/C/cloudflare-logo-6B7D159387-seeklogo.com.png"
                  alt=""
                />
                <span className="text-sm uppercase mt-4">Cloudflare Pages</span>
              </div>
            </li>
            <li className="mt-4 px-3 py-3">
              <div className="flex flex-col items-center">
                <BiServer size={60} color="#d1d5db" />
                <span className="text-sm uppercase mt-4">Shared Hosting</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
)

export default StacksItem
