const FormTicketSmall = ({ quantity, price }) => {
  return (
    <div
      className="_small_ticket_ grid [&>*]:col-start-1
           place-items-center [&>*]:row-start-1  "
    >
      <svg
        className="_svg_border_ mob:ticket-small ticket-small-rotate rotate-90 mob:rotate-0 transition-transform reltive"
        viewBox="0 0 240 318"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2H98.2148C98.6049 13.5097 108.058 22.7205 119.663 22.7205C131.267 22.7205 140.721 13.5097 141.111 2H237.326L237.326 15.0738C231.604 15.0738 226.965 19.7122 226.965 25.434C226.965 31.1558 231.604 35.7943 237.326 35.7943V44.4259C231.604 44.4259 226.965 49.0643 226.965 54.7861C226.965 60.5079 231.604 65.1464 237.326 65.1464V73.7809C231.604 73.7809 226.965 78.4193 226.965 84.1411C226.965 89.8629 231.604 94.5014 237.326 94.5014V104.862C231.604 104.862 226.965 109.5 226.965 115.222C226.965 120.944 231.604 125.582 237.326 125.582V134.217C231.604 134.217 226.965 138.855 226.965 144.577C226.965 150.299 231.604 154.937 237.326 154.937V163.569C231.604 163.569 226.965 168.207 226.965 173.929C226.965 179.651 231.604 184.289 237.326 184.289V192.924C231.604 192.924 226.965 197.562 226.965 203.284C226.965 209.006 231.604 213.644 237.326 213.644V224.004C231.604 224.004 226.965 228.643 226.965 234.365C226.965 240.087 231.604 244.725 237.326 244.725V253.359C231.604 253.359 226.965 257.998 226.965 263.72C226.965 269.441 231.604 274.08 237.326 274.08V282.712C231.604 282.712 226.965 287.35 226.965 293.072C226.965 298.794 231.604 303.432 237.326 303.432L237.326 315.768H141.111C141.119 315.522 141.123 315.275 141.123 315.027C141.123 303.175 131.515 293.567 119.663 293.567C107.811 293.567 98.2023 303.175 98.2023 315.027C98.2023 315.275 98.2065 315.522 98.2148 315.768H2V303.677C7.49107 303.553 11.9052 298.963 11.9052 293.319C11.9052 287.675 7.49107 283.085 2 282.961V274.325C7.49107 274.201 11.9052 269.611 11.9052 263.967C11.9052 258.323 7.49107 253.733 2 253.609V244.97C7.49107 244.846 11.9052 240.256 11.9052 234.612C11.9052 228.968 7.49107 224.378 2 224.254V213.889C7.49107 213.765 11.9052 209.175 11.9052 203.531C11.9052 197.887 7.49107 193.297 2 193.174V184.534C7.49107 184.41 11.9052 179.82 11.9052 174.176C11.9052 168.532 7.49107 163.942 2 163.819V155.182C7.49107 155.058 11.9052 150.468 11.9052 144.824C11.9052 139.18 7.49107 134.59 2 134.466V125.827C7.49107 125.703 11.9052 121.113 11.9052 115.469C11.9052 109.825 7.49107 105.235 2 105.111V94.7461C7.49107 94.6223 11.9052 90.0324 11.9052 84.3884C11.9052 78.7444 7.49107 74.1545 2 74.0307V65.3911C7.49107 65.2673 11.9052 60.6774 11.9052 55.0334C11.9052 49.3894 7.49107 44.7995 2 44.6757V36.039C7.49107 35.9152 11.9052 31.3253 11.9052 25.6813C11.9052 20.0373 7.49107 15.4474 2 15.3236V2Z"
          fill="#FFFDF2"
        />
        <path
          d="M98.2148 2L100.214 1.93227L100.148 0H98.2148V2ZM2 2V0H0V2H2ZM141.111 2V0H139.177L139.112 1.93227L141.111 2ZM237.326 2L239.326 1.99998L239.326 0H237.326V2ZM237.326 15.0738V17.0738H239.326L239.326 15.0737L237.326 15.0738ZM237.326 35.7943H239.326V33.7943H237.326V35.7943ZM237.326 44.4259V46.4259H239.326V44.4259H237.326ZM237.326 65.1464H239.326V63.1464H237.326V65.1464ZM237.326 73.7809V75.7809H239.326V73.7809H237.326ZM237.326 94.5014H239.326V92.5014H237.326V94.5014ZM237.326 104.862V106.862H239.326V104.862H237.326ZM237.326 125.582H239.326V123.582H237.326V125.582ZM237.326 134.217V136.217H239.326V134.217H237.326ZM237.326 154.937H239.326V152.937H237.326V154.937ZM237.326 163.569V165.569H239.326V163.569H237.326ZM237.326 184.289H239.326V182.289H237.326V184.289ZM237.326 192.924V194.924H239.326V192.924H237.326ZM237.326 213.644H239.326V211.644H237.326V213.644ZM237.326 224.004V226.004H239.326V224.004H237.326ZM237.326 244.725H239.326V242.725H237.326V244.725ZM237.326 253.359V255.359H239.326V253.359H237.326ZM237.326 274.08H239.326V272.08H237.326V274.08ZM237.326 282.712V284.712H239.326V282.712H237.326ZM237.326 303.432L239.326 303.432L239.326 301.432H237.326V303.432ZM237.326 315.768V317.768H239.326L239.326 315.768L237.326 315.768ZM141.111 315.768L139.112 315.7L139.042 317.768H141.111V315.768ZM98.2148 315.768V317.768H100.284L100.214 315.7L98.2148 315.768ZM2 315.768H0V317.768H2V315.768ZM2 303.677L1.95493 301.677L0 301.721V303.677H2ZM2 282.961H0V284.917L1.95493 284.961L2 282.961ZM2 274.325L1.95493 272.325L0 272.369V274.325H2ZM2 253.609H0V255.565L1.95493 255.609L2 253.609ZM2 244.97L1.95493 242.97L0 243.014V244.97H2ZM2 224.254H0V226.21L1.95493 226.254L2 224.254ZM2 213.889L1.95493 211.889L0 211.934V213.889H2ZM2 193.174H0V195.129L1.95493 195.173L2 193.174ZM2 184.534L1.95493 182.534L0 182.579V184.534H2ZM2 163.819H0V165.774L1.95493 165.818L2 163.819ZM2 155.182L1.95493 153.182L0 153.226V155.182H2ZM2 134.466H0V136.422L1.95493 136.466L2 134.466ZM2 125.827L1.95493 123.827L0 123.871V125.827H2ZM2 105.111H0V107.067L1.95493 107.111L2 105.111ZM2 94.7461L1.95493 92.7466L0 92.7906V94.7461H2ZM2 74.0307H0V75.9861L1.95493 76.0302L2 74.0307ZM2 65.3911L1.95493 63.3916L0 63.4356V65.3911H2ZM2 44.6757H0V46.6311L1.95493 46.6752L2 44.6757ZM2 36.039L1.95493 34.0395L0 34.0835V36.039H2ZM2 15.3236H0V17.279L1.95493 17.3231L2 15.3236ZM98.2148 0H2V4H98.2148V0ZM119.663 20.7205C109.14 20.7205 100.567 12.368 100.214 1.93227L96.216 2.06773C96.6424 14.6513 106.976 24.7205 119.663 24.7205V20.7205ZM139.112 1.93227C138.758 12.368 130.186 20.7205 119.663 20.7205V24.7205C132.349 24.7205 142.683 14.6513 143.11 2.06773L139.112 1.93227ZM237.326 0H141.111V4H237.326V0ZM239.326 15.0737L239.326 1.99998L235.326 2.00002L235.326 15.0738L239.326 15.0737ZM228.965 25.434C228.965 20.8168 232.709 17.0738 237.326 17.0738V13.0738C230.499 13.0738 224.965 18.6076 224.965 25.434H228.965ZM237.326 33.7943C232.709 33.7943 228.965 30.0512 228.965 25.434H224.965C224.965 32.2604 230.499 37.7943 237.326 37.7943V33.7943ZM239.326 44.4259V35.7943H235.326V44.4259H239.326ZM228.965 54.7861C228.965 50.1689 232.709 46.4259 237.326 46.4259V42.4259C230.499 42.4259 224.965 47.9597 224.965 54.7861H228.965ZM237.326 63.1464C232.709 63.1464 228.965 59.4033 228.965 54.7861H224.965C224.965 61.6125 230.499 67.1464 237.326 67.1464V63.1464ZM239.326 73.7809V65.1464H235.326V73.7809H239.326ZM228.965 84.1411C228.965 79.5239 232.709 75.7809 237.326 75.7809V71.7809C230.499 71.7809 224.965 77.3147 224.965 84.1411H228.965ZM237.326 92.5014C232.709 92.5014 228.965 88.7583 228.965 84.1411H224.965C224.965 90.9675 230.499 96.5014 237.326 96.5014V92.5014ZM239.326 104.862V94.5014H235.326V104.862H239.326ZM228.965 115.222C228.965 110.605 232.709 106.862 237.326 106.862V102.862C230.499 102.862 224.965 108.395 224.965 115.222H228.965ZM237.326 123.582C232.709 123.582 228.965 119.839 228.965 115.222H224.965C224.965 122.048 230.499 127.582 237.326 127.582V123.582ZM239.326 134.217V125.582H235.326V134.217H239.326ZM228.965 144.577C228.965 139.96 232.709 136.217 237.326 136.217V132.217C230.499 132.217 224.965 137.75 224.965 144.577H228.965ZM237.326 152.937C232.709 152.937 228.965 149.194 228.965 144.577H224.965C224.965 151.403 230.499 156.937 237.326 156.937V152.937ZM239.326 163.569V154.937H235.326V163.569H239.326ZM228.965 173.929C228.965 169.312 232.709 165.569 237.326 165.569V161.569C230.499 161.569 224.965 167.103 224.965 173.929H228.965ZM237.326 182.289C232.709 182.289 228.965 178.546 228.965 173.929H224.965C224.965 180.755 230.499 186.289 237.326 186.289V182.289ZM239.326 192.924V184.289H235.326V192.924H239.326ZM228.965 203.284C228.965 198.667 232.709 194.924 237.326 194.924V190.924C230.499 190.924 224.965 196.458 224.965 203.284H228.965ZM237.326 211.644C232.709 211.644 228.965 207.901 228.965 203.284H224.965C224.965 210.11 230.499 215.644 237.326 215.644V211.644ZM239.326 224.004V213.644H235.326V224.004H239.326ZM228.965 234.365C228.965 229.747 232.709 226.004 237.326 226.004V222.004C230.499 222.004 224.965 227.538 224.965 234.365H228.965ZM237.326 242.725C232.709 242.725 228.965 238.982 228.965 234.365H224.965C224.965 241.191 230.499 246.725 237.326 246.725V242.725ZM239.326 253.359V244.725H235.326V253.359H239.326ZM228.965 263.72C228.965 259.102 232.709 255.359 237.326 255.359V251.359C230.499 251.359 224.965 256.893 224.965 263.72H228.965ZM237.326 272.08C232.709 272.08 228.965 268.337 228.965 263.72H224.965C224.965 270.546 230.499 276.08 237.326 276.08V272.08ZM239.326 282.712V274.08H235.326V282.712H239.326ZM228.965 293.072C228.965 288.455 232.709 284.712 237.326 284.712V280.712C230.499 280.712 224.965 286.245 224.965 293.072H228.965ZM237.326 301.432C232.709 301.432 228.965 297.689 228.965 293.072H224.965C224.965 299.898 230.499 305.432 237.326 305.432V301.432ZM239.326 315.768L239.326 303.432L235.326 303.432L235.326 315.767L239.326 315.768ZM141.111 317.768H237.326V313.768H141.111V317.768ZM139.123 315.027C139.123 315.253 139.12 315.477 139.112 315.7L143.11 315.835C143.119 315.567 143.123 315.298 143.123 315.027H139.123ZM119.663 295.567C130.411 295.567 139.123 304.28 139.123 315.027H143.123C143.123 302.071 132.62 291.567 119.663 291.567V295.567ZM100.202 315.027C100.202 304.28 108.915 295.567 119.663 295.567V291.567C106.706 291.567 96.2023 302.071 96.2023 315.027H100.202ZM100.214 315.7C100.206 315.477 100.202 315.253 100.202 315.027H96.2023C96.2023 315.298 96.2069 315.567 96.216 315.835L100.214 315.7ZM2 317.768H98.2148V313.768H2V317.768ZM0 303.677V315.768H4V303.677H0ZM9.90517 293.319C9.90517 297.914 6.32145 301.579 1.95493 301.677L2.04507 305.676C8.66069 305.527 13.9052 300.012 13.9052 293.319H9.90517ZM1.95493 284.961C6.32145 285.059 9.90517 288.724 9.90517 293.319H13.9052C13.9052 286.626 8.66068 281.111 2.04507 280.962L1.95493 284.961ZM0 274.325V282.961H4V274.325H0ZM9.90517 263.967C9.90517 268.562 6.32145 272.227 1.95493 272.325L2.04507 276.324C8.66069 276.175 13.9052 270.66 13.9052 263.967H9.90517ZM1.95493 255.609C6.32144 255.707 9.90517 259.372 9.90517 263.967H13.9052C13.9052 257.274 8.66069 251.759 2.04507 251.61L1.95493 255.609ZM0 244.97V253.609H4V244.97H0ZM9.90517 234.612C9.90517 239.207 6.32144 242.872 1.95493 242.97L2.04507 246.969C8.66069 246.82 13.9052 241.305 13.9052 234.612H9.90517ZM1.95493 226.254C6.32144 226.352 9.90517 230.017 9.90517 234.612H13.9052C13.9052 227.919 8.66069 222.404 2.04507 222.255L1.95493 226.254ZM0 213.889V224.254H4V213.889H0ZM9.90517 203.531C9.90517 208.126 6.32144 211.791 1.95493 211.889L2.04507 215.888C8.66069 215.739 13.9052 210.224 13.9052 203.531H9.90517ZM1.95493 195.173C6.32144 195.271 9.90517 198.936 9.90517 203.531H13.9052C13.9052 196.838 8.66069 191.323 2.04507 191.174L1.95493 195.173ZM0 184.534V193.174H4V184.534H0ZM9.90517 174.176C9.90517 178.771 6.32144 182.436 1.95493 182.534L2.04507 186.533C8.66069 186.384 13.9052 180.869 13.9052 174.176H9.90517ZM1.95493 165.818C6.32144 165.916 9.90517 169.581 9.90517 174.176H13.9052C13.9052 167.483 8.66069 161.968 2.04507 161.819L1.95493 165.818ZM0 155.182V163.819H4V155.182H0ZM9.90517 144.824C9.90517 149.419 6.32144 153.084 1.95493 153.182L2.04507 157.181C8.66069 157.032 13.9052 151.517 13.9052 144.824H9.90517ZM1.95493 136.466C6.32144 136.564 9.90517 140.229 9.90517 144.824H13.9052C13.9052 138.131 8.66069 132.616 2.04507 132.467L1.95493 136.466ZM0 125.827V134.466H4V125.827H0ZM9.90517 115.469C9.90517 120.064 6.32144 123.729 1.95493 123.827L2.04507 127.826C8.66069 127.677 13.9052 122.162 13.9052 115.469H9.90517ZM1.95493 107.111C6.32144 107.209 9.90517 110.874 9.90517 115.469H13.9052C13.9052 108.776 8.66069 103.261 2.04507 103.112L1.95493 107.111ZM0 94.7461V105.111H4V94.7461H0ZM9.90517 84.3884C9.90517 88.9836 6.32144 92.6482 1.95493 92.7466L2.04507 96.7456C8.66069 96.5965 13.9052 91.0812 13.9052 84.3884H9.90517ZM1.95493 76.0302C6.32144 76.1286 9.90517 79.7932 9.90517 84.3884H13.9052C13.9052 77.6956 8.66069 72.1803 2.04507 72.0312L1.95493 76.0302ZM0 65.3911V74.0307H4V65.3911H0ZM9.90517 55.0334C9.90517 59.6286 6.32144 63.2932 1.95493 63.3916L2.04507 67.3906C8.66069 67.2415 13.9052 61.7262 13.9052 55.0334H9.90517ZM1.95493 46.6752C6.32144 46.7736 9.90517 50.4382 9.90517 55.0334H13.9052C13.9052 48.3406 8.66069 42.8253 2.04507 42.6762L1.95493 46.6752ZM0 36.039V44.6757H4V36.039H0ZM9.90517 25.6813C9.90517 30.2765 6.32144 33.9411 1.95493 34.0395L2.04507 38.0385C8.66069 37.8894 13.9052 32.3741 13.9052 25.6813H9.90517ZM1.95493 17.3231C6.32144 17.4215 9.90517 21.0861 9.90517 25.6813H13.9052C13.9052 18.9885 8.66069 13.4732 2.04507 13.3241L1.95493 17.3231ZM0 2V15.3236H4V2H0Z"
          fill="black"
        />
        <path
          d="M96.5606 37.5215L97.0025 37.2876L96.8617 37.0215H96.5606V37.5215ZM27.1606 37.5215V37.0215H26.6606V37.5215H27.1606ZM139.386 37.5215V37.0215H139.085L138.944 37.2876L139.386 37.5215ZM209.205 37.5215H209.705V37.0215H209.205V37.5215ZM209.205 280.247V280.747H209.705V280.247H209.205ZM141.416 280.247L140.972 280.476L141.111 280.747H141.416V280.247ZM98.3288 280.247V280.747H98.6339L98.7734 280.476L98.3288 280.247ZM27.1606 280.247H26.6606V280.747H27.1606V280.247ZM96.5606 37.0215H27.1606V38.0215H96.5606V37.0215ZM117.973 49.923C108.88 49.923 100.981 44.8038 97.0025 37.2876L96.1187 37.7554C100.263 45.586 108.495 50.923 117.973 50.923V49.923ZM138.944 37.2876C134.966 44.8038 127.067 49.923 117.973 49.923V50.923C127.452 50.923 135.684 45.586 139.828 37.7554L138.944 37.2876ZM209.205 37.0215H139.386V38.0215H209.205V37.0215ZM209.705 280.247V37.5215H208.705V280.247H209.705ZM141.416 280.747H209.205V279.747H141.416V280.747ZM119.873 267.595C129.065 267.595 137.037 272.826 140.972 280.476L141.861 280.019C137.762 272.048 129.454 266.595 119.873 266.595V267.595ZM98.7734 280.476C102.708 272.826 110.68 267.595 119.873 267.595V266.595C110.291 266.595 101.984 272.048 97.8842 280.019L98.7734 280.476ZM27.1606 280.747H98.3288V279.747H27.1606V280.747ZM26.6606 37.5215V280.247H27.6606V37.5215H26.6606Z"
          fill="black"
        />
      </svg>
      <div
        className="grid place-items-center py-m relative w-[80dvw] mob:w-auto
    "
      >
        <p className=" text-step-2 font-germania-one">{quantity}</p>
        <button className=" bg-black hover:bg-transparent hover:text-black active:bg-lightblue active:text-white border border-black  mob:border-l-0 mob:border-r-0 text-white text-normal py-xs  px-l rounded-full mob:rounded-none mob:px-0 mob:ticket-buy-button text-nowrap  relative -left-[1.2px]  ">
          BUY TICKET
        </button>
        <p className="text-normal p-2xs border-t-[1px] text-lightblue font-bold  ">
          {price} kr
          <em className=" text-black font-light"> + fees </em>
        </p>
      </div>
    </div>
  );
};

export default FormTicketSmall;
