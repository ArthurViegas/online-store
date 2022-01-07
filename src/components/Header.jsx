import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

export default class Header extends Component {
  render() {
    const { actualQuantity } = this.props;
    return (
      <div className="header-div">
        <Link to="/" id="header-title">
          <svg width="180" height="60" viewBox="0 0 158 54" fill="none" xmlns="https://www.w3.org/2000/svg" role="img" aria-label="KaBuM! Tecnologia e Games">
            <title>KaBuM! Tecnologia e Games</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M26.5863 41.4307C23.4586 41.9794 19.8674 39.3234 19.3188 36.2321C18.8268 33.4567 18.2074 30.6934 17.4219 27.9827C15.8591 30.0658 14.942 31.8776 14.025 34.4547C12.8771 37.6796 10.8669 40.3497 7.3121 40.953C5.97397 41.1797 4.66015 41.0684 3.33012 40.87L0 40.372L0.947414 37.1411C4.21276 25.9887 8.18461 14.0833 13.7841 3.87832C15.0291 1.60897 17.6021 -0.31622 20.2864 0.760756C22.8412 1.78712 23.3149 4.61114 22.8493 7.02017C22.7784 7.38658 22.7015 7.753 22.6185 8.11536C26.1005 5.10104 29.8699 2.46327 34.113 0.552244C36.1799 -0.378975 38.5849 -0.208928 40.0829 1.65149C41.7794 3.7609 41.2976 6.90275 39.2448 8.58907C38.3136 9.35429 37.4229 10.1053 36.5908 10.8584C35.4754 11.907 37.0929 12.3403 38.3055 11.5771C40.0505 10.6114 41.9352 9.93934 43.4272 9.59519C46.9861 8.77126 50.9397 8.96561 53.8731 11.2289C54.0877 10.579 54.3022 9.93326 54.5168 9.29153C55.3084 6.91895 56.1201 4.55244 56.9299 2.1839L57.6182 0.171658L59.7438 0.197976C63.5577 0.244537 67.3737 0.430777 71.1897 0.384216C75.7689 0.329558 82.3259 0.969264 83.2955 6.56468C83.4777 7.61534 83.5506 8.61336 83.5223 9.56685C84.6701 9.34619 85.8766 9.50612 87.0164 10.2147C88.8727 11.3686 89.5266 13.476 89.229 15.5469C88.8403 17.5389 90.3971 17.4235 90.9639 15.5894C91.6401 14.0165 92.4559 12.5751 93.456 11.6277C95.2354 9.94136 97.8732 8.8401 100.134 10.3584C100.226 10.4191 100.315 10.4839 100.398 10.5507C101.197 8.8988 102.035 7.26714 102.916 5.65573C104.586 2.60497 107.866 -0.249416 111.576 1.08871C114.67 2.20212 115.74 5.50997 115.538 8.52834C115.427 10.1924 115.323 11.8564 115.226 13.5225C117.046 10.577 118.83 7.60724 120.631 4.64961C121.225 3.67588 122.036 2.83373 122.951 2.15961C126.502 -0.461975 130.792 -0.166413 132.533 2.64749C134.585 0.276928 138.529 -0.257511 140.926 1.94503C142.533 3.42081 142.825 5.5707 142.185 7.58295C140.861 11.7491 139.422 16.134 137.642 20.3245C138.94 20.618 140.519 21.3549 142.055 22.2598C142.995 21.2698 144.418 20.948 145.827 20.9844C148.706 21.0593 153.989 24.6728 155.977 26.764C156.965 27.8026 157.534 29.1144 157.402 30.5618C157.064 34.2543 152.785 35.9629 149.928 37.4022C147.434 38.6614 144.857 40.1372 142.256 41.1291C141.614 41.3741 140.972 41.453 140.371 41.3903C141.066 42.3903 141.474 43.6009 141.474 44.9026C141.474 49.7571 137.503 53.7309 132.646 53.7309H30.2808C26.8819 53.7309 24.1024 50.9494 24.1024 47.5525C24.1004 45.1819 25.0498 43.0219 26.5863 41.4307Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M125.201 31.975C127.073 30.1955 130.162 31.8818 129.413 33.6127C129.274 35.6735 127.915 36.8902 126.136 37.6392C124.919 37.9672 123.654 38.5279 122.812 37.453C122.3 35.5784 123.798 33.4244 125.201 31.975ZM92.8064 38.621C96.3653 27.6671 99.8756 16.7111 105.493 7.06889C108.208 1.77916 112.983 3.04238 112.609 8.33211C112.374 12.0307 112.188 15.7758 111.953 19.4744C111.86 21.5817 113.733 21.3004 114.714 19.8489C117.524 15.2616 120.332 10.7209 123.14 6.18018C125.106 2.90269 131.8 1.4512 130.209 7.11545C128.476 16.8993 125.294 26.169 121.081 35.2039C120.146 37.9651 116.54 38.9955 117.101 35.7646C118.364 30.896 119.676 25.9807 120.986 21.1586C121.688 18.2091 119.769 19.7537 117.99 23.1709C115.743 27.1974 114.058 30.896 111.295 35.0621C107.971 40.0239 104.74 39.8377 104.835 34.4062C105.07 30.9891 105.35 27.5719 105.631 24.1547C105.959 20.4096 105.068 19.8003 103.524 23.8268C99.0334 37.2181 95.8025 39.1372 92.8064 38.621ZM62.3778 23.0798C61.4425 23.9685 60.7401 26.4504 60.2238 30.3818C60.2238 31.6936 60.6915 32.2543 61.5822 32.394C63.0337 32.4406 64.9062 32.5337 66.3112 32.4406C72.9127 32.2057 76.0485 23.6871 69.6818 23.1709C67.0582 23.1263 64.9994 23.1264 62.3778 23.0798ZM67.5278 9.2694C66.4509 9.2694 65.3739 13.0611 65.2808 15.4013C65.0459 17.2738 66.9185 17.039 68.2769 17.0856C72.8641 17.2253 74.925 15.6806 76.3279 13.1056C77.4514 10.484 76.7955 9.22082 73.7994 9.22082C71.694 9.22284 69.6332 9.2694 67.5278 9.2694ZM59.7096 3.13752C56.1528 13.5307 52.5939 24.7195 51.2355 33.801C50.861 38.2485 52.266 38.7162 55.0738 38.7162C57.8351 38.6696 60.6449 38.6231 63.4527 38.6231C67.1979 38.3417 70.7081 36.7971 73.7994 33.2402C74.3136 32.6794 74.7832 32.9123 74.7347 33.3333C74.7347 37.4064 78.2915 41.6657 85.3141 36.5643C86.8587 35.7687 87.2798 35.8618 87.3264 36.7505C87.3729 37.3133 87.1401 37.9672 86.9519 38.4834C90.8367 38.8113 94.8166 30.7583 99.0759 14.9822C99.3108 12.5955 97.7176 11.6116 95.4705 13.7656C92.5675 16.4803 91.3509 27.0618 88.4944 30.6186C84.5611 36.4225 80.7694 33.1005 81.5184 30.4324C83.1561 23.1284 85.0752 21.8652 86.2939 15.2656C86.8567 11.9882 83.4375 11.3808 81.3787 14.5632C80.1155 16.8568 79.1316 19.3387 78.4292 21.8672C77.4939 24.2539 76.1355 24.0211 75.761 22.6628C75.5728 21.4461 74.7772 20.5088 73.7953 19.6667C78.0547 16.6706 81.1925 13.0186 80.3969 7.07294C79.7875 4.21652 76.4169 3.14157 71.2223 3.32782C67.3861 3.27721 63.5479 3.18408 59.7096 3.13752ZM45.1037 26.8249C44.1684 26.497 41.8262 27.4343 40.2816 28.4626C37.5669 30.5214 37.7531 31.5984 38.1276 33.0033C38.737 34.5014 41.7796 34.1269 44.0267 31.7401C46.1786 29.2117 46.3669 27.3857 45.1037 26.8249ZM40.8423 19.8023C40.233 21.1607 35.6923 19.8489 36.1619 17.9763C36.3968 14.4174 47.4904 9.45565 52.687 14.0915C56.2925 18.1646 48.0066 29.3068 48.0998 37.123C48.1463 37.9186 47.5856 38.2931 46.6483 38.3396C45.6644 38.3396 44.6826 38.3396 43.6987 38.3396C42.7635 38.3862 42.061 37.7303 41.4517 36.795C38.8766 39.1352 31.2467 40.1656 30.356 36.046C29.6535 32.5357 29.5604 29.6793 34.3825 25.9807C37.1923 24.0616 40.6561 23.4523 45.1968 22.6101C47.1159 21.8145 48.0532 18.865 46.1806 18.0694C43.9801 17.041 42.3404 18.118 40.8423 19.8023ZM3.76562 37.9672C7.27592 25.9828 11.1627 14.2332 16.3594 5.29148C17.8108 2.48162 20.7138 2.71645 19.9648 6.46157C19.5437 8.70865 18.9344 10.8626 18.1854 12.968C17.7177 14.5591 18.9344 15.6361 21.0883 13.5307C26.2384 8.47381 30.8256 5.5263 35.3198 3.23267C38.1762 2.10913 38.9252 4.96555 37.3806 6.32189C30.9208 11.2837 25.3497 16.8548 27.5502 27.0597C28.0178 30.0093 28.3458 32.9122 28.0178 35.8618C26.9408 40.777 22.5398 37.874 22.2139 35.7221C21.558 32.4912 20.9021 29.2157 19.9203 26.0779C19.1712 23.596 17.4384 23.0818 15.4727 25.7034C13.8349 27.7156 12.3835 29.4951 11.2599 33.475C9.1505 38.3417 6.57548 38.3882 3.76562 37.9672ZM127.355 27.9019C127.262 29.5396 128.666 30.0558 130.49 27.6671C133.861 21.7214 136.764 14.6057 139.386 6.69438C140.509 2.99582 135.64 2.52818 134.424 5.05665C131.942 9.45565 129.648 17.7901 127.355 27.9019Z" fill="#175FAD" />
            <path d="M132.7 50.6253L133.52 47.5968C133.63 47.198 133.771 46.8276 133.943 46.4875C134.113 46.1453 134.308 45.8477 134.526 45.5927C134.747 45.3376 134.976 45.1372 135.221 44.9955C135.464 44.8538 135.713 44.7809 135.966 44.7789C136.037 44.7789 136.097 44.7809 136.15 44.789C136.201 44.793 136.247 44.8011 136.29 44.8072L136.614 43.6472C136.565 43.6412 136.508 43.6331 136.45 43.629C136.391 43.6209 136.332 43.6189 136.275 43.6189C135.968 43.6209 135.676 43.6938 135.407 43.8355C135.136 43.9792 134.883 44.1736 134.654 44.4185C134.423 44.6655 134.221 44.9469 134.043 45.2607H134C134.065 44.9995 134.122 44.7465 134.172 44.5015C134.227 44.2566 134.275 44.0157 134.322 43.7748H133.289C133.243 43.9894 133.192 44.2282 133.138 44.4914C133.083 44.7526 133.022 45.0319 132.955 45.3214C132.889 45.6149 132.814 45.9085 132.733 46.2081L131.526 50.6233H132.7V50.6253ZM126.793 47.2567C126.915 46.8519 127.071 46.4854 127.261 46.1595C127.453 45.8336 127.668 45.5542 127.905 45.3194C128.141 45.0886 128.39 44.9084 128.65 44.7829C128.909 44.6574 129.166 44.5947 129.423 44.5947C129.656 44.5967 129.85 44.6412 130.008 44.7283C130.168 44.8153 130.291 44.9368 130.382 45.0886C130.474 45.2404 130.534 45.4145 130.567 45.6068C130.597 45.8032 130.603 46.0056 130.585 46.2202C130.559 46.53 130.49 46.8498 130.378 47.1859C130.265 47.5199 130.117 47.8458 129.931 48.1616C129.745 48.4774 129.524 48.7629 129.271 49.0179C129.018 49.273 128.737 49.4755 128.427 49.6273C128.119 49.7771 127.787 49.856 127.433 49.8581C127.073 49.8581 126.803 49.771 126.631 49.601C126.459 49.4289 126.386 49.1819 126.413 48.854C126.421 48.6718 126.441 48.5098 126.469 48.3681C126.498 48.2264 126.532 48.0948 126.571 47.9774L126.793 47.2567ZM127.51 40.5762L125.419 47.9491C125.37 48.1151 125.324 48.2932 125.285 48.4815C125.245 48.6698 125.216 48.8519 125.202 49.024C125.172 49.441 125.234 49.7811 125.394 50.0382C125.556 50.2974 125.791 50.4856 126.097 50.6051C126.403 50.7225 126.757 50.7812 127.164 50.7792C127.621 50.7771 128.05 50.7083 128.449 50.5767C128.85 50.4451 129.216 50.2629 129.552 50.0301C129.886 49.7973 130.186 49.5281 130.455 49.2204C130.723 48.9127 130.949 48.5847 131.142 48.2365C131.336 47.8843 131.49 47.526 131.603 47.1616C131.717 46.7952 131.789 46.4348 131.82 46.0805C131.846 45.7708 131.836 45.4753 131.785 45.1817C131.735 44.8922 131.636 44.627 131.494 44.3922C131.348 44.1594 131.152 43.9691 130.899 43.8335C130.648 43.6938 130.336 43.6209 129.961 43.6189C129.652 43.6189 129.35 43.6736 129.052 43.7768C128.753 43.8841 128.467 44.0379 128.192 44.2485C127.921 44.455 127.67 44.7121 127.439 45.0198H127.411L128.69 40.5762H127.51ZM123.224 50.767C123.402 50.765 123.558 50.7225 123.7 50.6415C123.84 50.5585 123.951 50.4472 124.04 50.3075C124.127 50.1678 124.178 50.0099 124.196 49.8338C124.21 49.6718 124.188 49.5261 124.133 49.4006C124.081 49.273 123.998 49.1718 123.884 49.0989C123.773 49.026 123.633 48.9876 123.473 48.9856C123.295 48.9876 123.139 49.0301 122.997 49.1151C122.858 49.2001 122.744 49.3135 122.657 49.4552C122.57 49.5989 122.52 49.7568 122.502 49.933C122.487 50.0909 122.51 50.2326 122.564 50.3581C122.617 50.4836 122.698 50.5828 122.807 50.6557C122.919 50.7286 123.052 50.767 123.208 50.769H123.224V50.767ZM112.969 50.6253L113.894 47.1859C113.995 46.8174 114.135 46.4773 114.315 46.1676C114.495 45.8538 114.698 45.5805 114.924 45.3437C115.149 45.1109 115.382 44.9267 115.619 44.7971C115.857 44.6655 116.088 44.5987 116.305 44.5967C116.59 44.5987 116.801 44.6574 116.938 44.7708C117.076 44.8841 117.165 45.0299 117.2 45.208C117.236 45.3882 117.246 45.5745 117.226 45.7729C117.216 45.9044 117.196 46.0401 117.171 46.1737C117.147 46.3073 117.113 46.4551 117.072 46.6089L115.971 50.6273H117.102L118.048 47.117C118.153 46.7324 118.295 46.3883 118.473 46.0785C118.649 45.7688 118.848 45.5036 119.066 45.283C119.285 45.0603 119.511 44.8943 119.744 44.7748C119.975 44.6574 120.198 44.5947 120.412 44.5947C120.667 44.5947 120.864 44.6432 121.01 44.7424C121.151 44.8396 121.248 44.9752 121.303 45.1534C121.354 45.3295 121.37 45.54 121.348 45.783C121.335 45.9267 121.313 46.0785 121.281 46.2324C121.248 46.3903 121.212 46.536 121.174 46.6737L120.107 50.6233H121.252L122.356 46.5765C122.39 46.447 122.423 46.3154 122.451 46.1757C122.479 46.036 122.502 45.9024 122.524 45.7708C122.544 45.6413 122.558 45.5238 122.568 45.4166C122.593 45.0967 122.566 44.8194 122.489 44.5906C122.412 44.3639 122.297 44.1776 122.147 44.0339C121.999 43.8902 121.827 43.7869 121.639 43.7181C121.447 43.6513 121.25 43.6189 121.05 43.6189C120.538 43.625 120.056 43.7606 119.611 44.0177C119.161 44.2748 118.764 44.6513 118.416 45.1473C118.422 44.8578 118.376 44.5947 118.275 44.3659C118.173 44.1371 118.013 43.9549 117.797 43.8234C117.576 43.6898 117.295 43.6209 116.947 43.6189C116.491 43.6189 116.046 43.7383 115.613 43.9792C115.181 44.2201 114.785 44.5805 114.42 45.0623H114.378L114.669 43.7748H113.637C113.578 44.0582 113.509 44.3639 113.43 44.6979C113.353 45.0299 113.26 45.3882 113.159 45.7708L111.831 50.6253H112.969ZM108.132 49.8479C107.804 49.8459 107.529 49.7609 107.304 49.5969C107.08 49.4309 106.916 49.2062 106.808 48.9167C106.703 48.6293 106.665 48.2952 106.693 47.9207C106.719 47.6049 106.784 47.2871 106.887 46.9672C106.989 46.6494 107.124 46.3437 107.288 46.0563C107.454 45.7668 107.647 45.5097 107.865 45.285C108.084 45.0582 108.327 44.8821 108.588 44.7485C108.851 44.6189 109.13 44.5521 109.426 44.5501C109.732 44.5521 109.985 44.6169 110.179 44.7364C110.377 44.8578 110.525 45.0157 110.633 45.208C110.736 45.4024 110.807 45.6068 110.843 45.8275C110.877 46.0461 110.886 46.2567 110.865 46.4591C110.839 46.783 110.77 47.1029 110.665 47.4247C110.56 47.7486 110.422 48.0523 110.25 48.3418C110.08 48.6293 109.886 48.8864 109.663 49.1131C109.444 49.3378 109.205 49.5139 108.948 49.6435C108.691 49.773 108.424 49.8398 108.147 49.8419H108.132V49.8479ZM107.926 50.7812C108.385 50.7792 108.819 50.6962 109.224 50.5362C109.626 50.3763 109.997 50.1536 110.329 49.8743C110.661 49.5929 110.952 49.269 111.203 48.9025C111.454 48.5361 111.651 48.1454 111.803 47.7304C111.952 47.3154 112.048 46.8923 112.084 46.4652C112.114 46.0988 112.092 45.7506 112.011 45.4105C111.934 45.0724 111.797 44.7687 111.6 44.4995C111.404 44.2303 111.141 44.0177 110.817 43.8598C110.491 43.7039 110.096 43.6209 109.634 43.6189C109.189 43.6209 108.766 43.6999 108.367 43.8517C107.968 44.0076 107.6 44.2201 107.266 44.4955C106.932 44.7688 106.636 45.0906 106.383 45.455C106.128 45.8214 105.926 46.2142 105.77 46.6413C105.614 47.0664 105.517 47.5078 105.476 47.9632C105.444 48.3519 105.472 48.7163 105.561 49.0524C105.651 49.3925 105.798 49.6921 106.005 49.9492C106.209 50.2083 106.474 50.4087 106.794 50.5545C107.112 50.7002 107.485 50.7771 107.914 50.7792H107.926V50.7812ZM104.709 49.4228C104.586 49.4815 104.444 49.5382 104.284 49.5969C104.124 49.6556 103.942 49.7022 103.744 49.7427C103.545 49.7832 103.329 49.8014 103.092 49.8034C102.719 49.8014 102.411 49.7265 102.175 49.5746C101.936 49.4248 101.762 49.2123 101.656 48.937C101.553 48.6617 101.517 48.3378 101.547 47.9632C101.573 47.6373 101.646 47.3154 101.758 46.9936C101.871 46.6717 102.023 46.368 102.211 46.0805C102.401 45.7931 102.622 45.538 102.877 45.3153C103.134 45.0906 103.416 44.9165 103.727 44.789C104.037 44.6615 104.373 44.5967 104.729 44.5926C104.984 44.5947 105.205 44.621 105.393 44.6736C105.582 44.7222 105.74 44.7829 105.869 44.8477L106.286 43.9286C106.217 43.8841 106.112 43.8396 105.974 43.793C105.835 43.7464 105.673 43.7039 105.484 43.6695C105.296 43.6371 105.098 43.6209 104.883 43.6169C104.389 43.6189 103.922 43.7019 103.48 43.8598C103.039 44.0197 102.636 44.2444 102.268 44.5278C101.899 44.8133 101.577 45.1453 101.3 45.5259C101.021 45.9024 100.798 46.3134 100.632 46.7526C100.462 47.194 100.359 47.6495 100.316 48.1191C100.286 48.4876 100.31 48.8297 100.393 49.1475C100.474 49.4653 100.614 49.7467 100.812 49.9897C101.009 50.2306 101.266 50.4209 101.586 50.5585C101.905 50.6941 102.286 50.763 102.727 50.767C103.035 50.765 103.318 50.7407 103.578 50.6982C103.837 50.6537 104.065 50.599 104.262 50.5322C104.46 50.4694 104.622 50.4047 104.746 50.3419L104.709 49.4228ZM98.4194 50.767C98.5975 50.765 98.7534 50.7225 98.8951 50.6415C99.0348 50.5585 99.1482 50.4472 99.2352 50.3075C99.3223 50.1678 99.3729 50.0099 99.3911 49.8338C99.4053 49.6718 99.383 49.5261 99.3283 49.4006C99.2757 49.273 99.1927 49.1718 99.0793 49.0989C98.968 49.026 98.8283 48.9876 98.6684 48.9856C98.4902 48.9876 98.3344 49.0301 98.1926 49.1151C98.053 49.2001 97.9396 49.3135 97.8525 49.4552C97.7655 49.5989 97.7149 49.7568 97.6967 49.933C97.6825 50.0909 97.7048 50.2326 97.7594 50.3581C97.8121 50.4836 97.893 50.5828 98.0044 50.6557C98.1157 50.7286 98.2493 50.767 98.4052 50.769H98.4194V50.767ZM88.4553 50.6253L89.2975 47.5118C89.4189 47.0543 89.5789 46.6535 89.7813 46.3073C89.9817 45.9611 90.2004 45.6858 90.4392 45.4915C90.6781 45.2951 90.915 45.1939 91.1478 45.1919C91.3138 45.1939 91.4393 45.2323 91.5284 45.3052C91.6174 45.3781 91.6761 45.4793 91.7065 45.6068C91.7348 45.7344 91.745 45.8781 91.7288 46.0401C91.7186 46.1595 91.6984 46.287 91.6721 46.4166C91.6437 46.5482 91.6114 46.6838 91.579 46.8174L90.5384 50.6253H92.5061L93.3483 47.4976C93.4799 47.028 93.6438 46.619 93.8422 46.2749C94.0386 45.9307 94.2512 45.6635 94.4819 45.4753C94.7107 45.287 94.9395 45.1918 95.1682 45.1898C95.3241 45.1898 95.4476 45.2242 95.5447 45.2951C95.6379 45.3639 95.7047 45.4611 95.7452 45.5826C95.7816 45.706 95.7937 45.8457 95.7796 46.0097C95.7674 46.1433 95.7472 46.283 95.7168 46.4267C95.6865 46.5684 95.65 46.7081 95.6115 46.8437L94.6014 50.6233H96.5833L97.6703 46.6049C97.6987 46.4834 97.7291 46.3498 97.7574 46.202C97.7858 46.0563 97.8121 45.9125 97.8363 45.7729C97.8606 45.6311 97.8748 45.5137 97.8829 45.4166C97.9153 45.0218 97.8748 44.6878 97.7675 44.4104C97.6582 44.1311 97.4841 43.9205 97.2452 43.7728C97.0084 43.625 96.7128 43.5501 96.3565 43.548C96.0549 43.548 95.7553 43.5946 95.4597 43.6918C95.1662 43.7869 94.8828 43.9327 94.6115 44.125C94.3402 44.3214 94.0892 44.5663 93.8544 44.8639C93.8524 44.71 93.826 44.5542 93.7673 44.4023C93.7086 44.2485 93.6216 44.1068 93.5001 43.9772C93.3786 43.8497 93.2207 43.7464 93.0264 43.6675C92.8321 43.5885 92.5972 43.5501 92.3219 43.546C91.8745 43.544 91.4393 43.6472 91.0202 43.8557C90.5992 44.0663 90.2084 44.3902 89.8501 44.8356H89.8218L90.0445 43.7039H88.2893C88.2225 44.0157 88.1456 44.3578 88.0586 44.7323C87.9695 45.1068 87.8683 45.5158 87.7468 45.953L86.4917 50.6233H88.4553V50.6253ZM85.3459 43.7039L84.4673 46.9166C84.3418 47.3762 84.1758 47.7709 83.9774 48.0989C83.7749 48.4288 83.5563 48.6819 83.3195 48.858C83.0826 49.0321 82.8457 49.1232 82.6129 49.1252C82.4429 49.1232 82.3113 49.0868 82.2162 49.0159C82.121 48.9451 82.0542 48.8499 82.0178 48.7325C81.9834 48.6131 81.9732 48.4795 81.9854 48.3317C81.9955 48.2021 82.0178 48.0584 82.0502 47.8985C82.0826 47.7406 82.119 47.5766 82.1615 47.4126L83.1798 43.7039H81.1412L80.0804 47.5685C80.0116 47.8094 79.9569 48.0361 79.9144 48.2487C79.876 48.4612 79.8476 48.6596 79.8314 48.8438C79.797 49.2831 79.8375 49.6455 79.9549 49.9309C80.0723 50.2184 80.2566 50.431 80.5096 50.5727C80.7647 50.7124 81.0764 50.7832 81.4509 50.7832C81.87 50.7852 82.2911 50.684 82.7121 50.4796C83.1352 50.2751 83.5421 49.9471 83.9369 49.4957L83.9632 49.5099L83.7425 50.6273H85.5402C85.6151 50.3156 85.7001 49.9714 85.7912 49.5989C85.8844 49.2244 85.9896 48.8155 86.1111 48.3762L87.3804 43.7059H85.3459V43.7039ZM75.0093 47.1434C75.1267 46.7405 75.2826 46.3964 75.481 46.1049C75.6774 45.8174 75.896 45.5927 76.1349 45.4388C76.3778 45.2829 76.6208 45.206 76.8697 45.204C77.0762 45.206 77.2422 45.2586 77.3678 45.3619C77.4933 45.4631 77.5803 45.6048 77.6289 45.7809C77.6795 45.9611 77.6937 46.1636 77.6734 46.3923C77.6532 46.6352 77.5985 46.8883 77.5135 47.1494C77.4285 47.4106 77.3171 47.6657 77.1754 47.9147C77.0378 48.1616 76.8738 48.3843 76.6916 48.5827C76.5074 48.7831 76.307 48.941 76.0924 49.0584C75.8758 49.1738 75.647 49.2346 75.4102 49.2386C75.1672 49.2386 74.9871 49.1718 74.8636 49.0422C74.7401 48.9127 74.6854 48.7224 74.6976 48.4734C74.7016 48.3317 74.7178 48.1981 74.7462 48.0705C74.7705 47.943 74.8008 47.8236 74.8332 47.7102L75.0093 47.1434ZM74.8109 40.5762L72.823 47.5827C72.7623 47.7871 72.7076 47.9956 72.661 48.2082C72.6125 48.4187 72.5801 48.6313 72.5618 48.8418C72.5092 49.4613 72.6752 49.939 73.0578 50.2731C73.4404 50.6091 74.0417 50.7751 74.8616 50.7812C75.4851 50.7771 76.0499 50.682 76.558 50.4958C77.0661 50.3095 77.5176 50.0544 77.9103 49.7305C78.301 49.4066 78.635 49.0402 78.9103 48.6293C79.1857 48.2163 79.4023 47.7831 79.5602 47.3276C79.716 46.8721 79.8132 46.4186 79.8517 45.9692C79.878 45.6575 79.8638 45.3578 79.8011 45.0704C79.7424 44.7829 79.6371 44.5258 79.4873 44.2971C79.3334 44.0683 79.133 43.8881 78.88 43.7545C78.6269 43.6209 78.3212 43.5521 77.9609 43.548C77.6775 43.548 77.4001 43.5906 77.1329 43.6715C76.8637 43.7485 76.6147 43.8659 76.3778 44.0116C76.141 44.1594 75.9304 44.3376 75.7422 44.54H75.7138L76.8677 40.5762H74.8109ZM70.0921 46.7466C69.9382 47.3114 69.754 47.7689 69.5394 48.1211C69.3269 48.4734 69.1062 48.7325 68.8754 48.8945C68.6447 49.0605 68.428 49.1394 68.2216 49.1374C68.0333 49.1354 67.8815 49.0888 67.7661 48.9916C67.6487 48.8945 67.5677 48.7629 67.5211 48.5908C67.4766 48.4187 67.4624 48.2203 67.4827 47.9916C67.5049 47.7325 67.5636 47.4652 67.6608 47.194C67.7559 46.9247 67.8815 46.6636 68.0373 46.4126C68.1932 46.1615 68.3714 45.9388 68.5779 45.7405C68.7803 45.54 69.0009 45.3842 69.2398 45.2668C69.4787 45.1514 69.7297 45.0927 69.9909 45.0906C70.0961 45.0906 70.1974 45.0987 70.2945 45.1068C70.3897 45.119 70.4767 45.1331 70.5537 45.1473L70.0921 46.7466ZM71.3654 50.6253C71.3776 50.4067 71.3998 50.1658 71.4363 49.8986C71.4707 49.6354 71.5132 49.3601 71.5638 49.0787C71.6124 48.7973 71.6671 48.522 71.7278 48.2527C71.7885 47.9835 71.8493 47.7385 71.91 47.5118L72.9364 43.8881C72.7461 43.8274 72.5295 43.7707 72.2865 43.7181C72.0416 43.6655 71.7825 43.625 71.5092 43.5946C71.2379 43.5642 70.9626 43.548 70.6873 43.548C70.0071 43.5501 69.3937 43.6452 68.8451 43.8274C68.2944 44.0096 67.8106 44.2566 67.3916 44.5744C66.9725 44.8922 66.6142 45.2566 66.3227 45.6676C66.0291 46.0785 65.8004 46.5138 65.6344 46.9774C65.4704 47.4389 65.3672 47.9045 65.3287 48.3762C65.2902 48.86 65.3449 49.2811 65.4886 49.6394C65.6324 49.9998 65.853 50.2791 66.1486 50.4796C66.4462 50.6779 66.8025 50.7792 67.2195 50.7812C67.4908 50.7832 67.7681 50.7366 68.0495 50.6395C68.3329 50.5423 68.6102 50.3824 68.8876 50.1577C69.1629 49.933 69.422 49.6313 69.669 49.2528H69.6973C69.6629 49.4998 69.6265 49.7407 69.59 49.9694C69.5536 50.2002 69.5212 50.4208 69.4969 50.6253H71.3654ZM60.5977 50.6253L61.2091 48.4025L62.035 47.6656L63.0047 50.6233H65.2842L63.7011 46.5603L66.8855 43.7019H64.3651L62.4197 45.8113C62.3103 45.9308 62.199 46.0583 62.0816 46.1878C61.9662 46.3194 61.8488 46.4551 61.7314 46.5887H61.703L63.3549 40.5742H61.3305L58.5774 50.6233H60.5977V50.6253ZM57.1988 50.767C57.3769 50.765 57.5328 50.7225 57.6745 50.6415C57.8142 50.5585 57.9275 50.4472 58.0146 50.3075C58.1016 50.1678 58.1522 50.0099 58.1705 49.8338C58.1846 49.6718 58.1624 49.5261 58.1077 49.4006C58.0551 49.273 57.9721 49.1718 57.8587 49.0989C57.7474 49.026 57.6077 48.9876 57.4478 48.9856C57.2696 48.9876 57.1137 49.0301 56.972 49.1151C56.8323 49.2001 56.719 49.3135 56.6319 49.4552C56.5449 49.5989 56.4943 49.7568 56.476 49.933C56.4639 50.0909 56.4841 50.2326 56.5388 50.3581C56.5914 50.4836 56.6724 50.5828 56.7817 50.6557C56.8931 50.7286 57.0267 50.767 57.1826 50.769H57.1988V50.767ZM48.834 43.7748L48.8967 50.6253H49.9859L52.2694 46.8599C52.3908 46.6595 52.4981 46.4632 52.5993 46.2749C52.7006 46.0866 52.7977 45.8943 52.8969 45.7C52.9961 45.5036 53.1014 45.2971 53.2107 45.0765H53.2391C53.2127 45.3781 53.1945 45.6797 53.1864 45.9773C53.1763 46.2769 53.1763 46.5867 53.1844 46.9025L53.3241 50.6253H54.4132L58.3709 43.7748H57.1826L54.9962 47.7244C54.8302 48.0523 54.6845 48.36 54.5569 48.6374C54.4314 48.9187 54.312 49.1941 54.2006 49.4653H54.1723C54.1905 49.2386 54.2047 48.9795 54.2067 48.6839C54.2128 48.3884 54.2128 48.0564 54.2087 47.6818L54.1116 43.7748H53.0791L50.7207 47.7527C50.5223 48.0948 50.3462 48.4086 50.1984 48.6981C50.0466 48.9876 49.9231 49.2427 49.828 49.4653H49.7854C49.8057 49.2831 49.8259 49.107 49.8421 48.9329C49.8583 48.7588 49.8725 48.5645 49.8867 48.358C49.8988 48.1495 49.9069 47.9086 49.913 47.6272L49.996 43.7768H48.834V43.7748ZM39.3457 43.7748L39.4084 50.6253H40.4975L42.7811 46.8599C42.9025 46.6595 43.0098 46.4632 43.111 46.2749C43.2122 46.0866 43.3094 45.8943 43.4086 45.7C43.5078 45.5036 43.6131 45.2971 43.7224 45.0765H43.7507C43.7264 45.3781 43.7062 45.6797 43.6981 45.9773C43.688 46.2769 43.688 46.5867 43.6961 46.9025L43.8358 50.6253H44.9249L48.8826 43.7748H47.6942L45.5099 47.7244C45.3439 48.0523 45.1982 48.36 45.0706 48.6374C44.9451 48.9187 44.8257 49.1941 44.7143 49.4653H44.686C44.7042 49.2386 44.7164 48.9795 44.7204 48.6839C44.7265 48.3884 44.7265 48.0564 44.7224 47.6818L44.6253 43.7748H43.5928L41.2344 47.7527C41.036 48.0948 40.8599 48.4086 40.7121 48.6981C40.5603 48.9876 40.4368 49.2427 40.3417 49.4653H40.2992C40.3194 49.2831 40.3396 49.107 40.3558 48.9329C40.372 48.7588 40.3862 48.5645 40.4004 48.358C40.4125 48.1495 40.4206 47.9086 40.4267 47.6272L40.5097 43.7768H39.3457V43.7748ZM29.8594 43.7748L29.9221 50.6253H31.0113L33.2948 46.8599C33.4162 46.6595 33.5235 46.4632 33.6247 46.2749C33.726 46.0866 33.8252 45.8943 33.9223 45.7C34.0215 45.5036 34.1268 45.2971 34.2361 45.0765H34.2644C34.2381 45.3781 34.2199 45.6797 34.2118 45.9773C34.1997 46.2769 34.2017 46.5867 34.2098 46.9025L34.3495 50.6253H35.4386L39.3963 43.7748H38.208L36.0236 47.7244C35.8576 48.0523 35.7119 48.36 35.5843 48.6374C35.4588 48.9187 35.3394 49.1941 35.2281 49.4653H35.1997C35.2179 49.2386 35.2301 48.9795 35.2341 48.6839C35.2402 48.3884 35.2402 48.0564 35.2362 47.6818L35.139 43.7748H34.1065L31.7481 47.7527C31.5497 48.0948 31.3736 48.4086 31.2258 48.6981C31.074 48.9876 30.9505 49.2427 30.8554 49.4653H30.8129C30.8331 49.2831 30.8533 49.107 30.8695 48.9329C30.8857 48.7588 30.8999 48.5645 30.9121 48.358C30.9242 48.1495 30.9343 47.9086 30.9384 47.6272L31.0214 43.7768H29.8594V43.7748Z" fill="#175FAD" />
            <path fillRule="evenodd" clipRule="evenodd" d="M101.513 26.4963C101.888 25.5125 102.262 24.5306 102.59 23.5468V23.5002C102.871 22.7046 103.246 21.8159 103.667 21.1135C104.088 20.5041 104.697 19.8968 105.493 20.083C106.289 20.2693 106.57 21.1135 106.663 21.8159C106.756 22.6115 106.71 23.4537 106.617 24.2492L106.477 26.308C109.613 26.1218 112.704 25.7473 115.7 25.2776C116.168 24.4355 116.635 23.5448 117.105 22.7026C117.619 21.6722 118.229 20.6438 118.978 19.7996C119.212 19.4717 119.538 19.1437 119.866 18.9109C120.334 18.583 120.85 18.4433 121.364 18.6761C122.395 19.1437 122.16 20.5021 121.974 21.3442V21.3908L121.225 24.2007C122.488 23.8727 123.707 23.5448 124.923 23.1702C126.796 17.8805 128.247 12.4977 129.229 6.92654V6.87998L129.276 6.83342C129.415 6.27266 129.697 5.00742 129.089 4.53978C128.715 4.25839 128.106 4.30496 127.684 4.35354C126.889 4.49322 126.093 4.82117 125.484 5.24225C124.923 5.61676 124.36 6.13095 124.032 6.69374V6.7403C121.176 11.281 118.368 15.8217 115.558 20.3624C114.856 21.4394 113.451 22.4212 112.188 21.8605C111.204 21.4394 110.925 20.409 110.925 19.4251C111.159 15.68 111.392 11.9814 111.627 8.28288C111.674 7.11279 111.487 5.24022 110.175 4.81915C109.613 4.58432 109.005 4.77259 108.489 5.05398C107.554 5.61473 106.851 6.59859 106.382 7.53588H106.335C102.871 13.5281 100.203 19.9879 97.9077 26.5429C99.1264 26.5429 100.343 26.5429 101.513 26.4963ZM64.2502 15.3075C64.2967 14.4654 64.4384 13.5746 64.6247 12.7791C64.9061 11.4207 65.7482 8.2849 67.5277 8.2849C69.6351 8.23834 71.6939 8.23834 73.7547 8.19178H73.8012C77.4532 8.19178 78.7165 10.1575 77.265 13.4815L77.2184 13.5281V13.5746C76.7973 14.3702 76.2346 15.1192 75.5807 15.7751C73.615 17.7408 70.9469 18.2105 68.2301 18.1153C67.9487 18.0688 67.6694 18.0688 67.388 18.0688C66.4993 18.0688 65.6085 17.9757 64.9061 17.3663C64.3433 16.8056 64.2036 16.0565 64.2502 15.3075ZM94.4905 26.4498C94.6302 25.9821 94.8185 25.5145 95.0047 25.0448C96.1748 21.6742 97.1587 18.257 98.0939 14.8399C98.0939 14.5119 98.0939 13.7629 97.8125 13.6232C97.7194 13.5301 97.5311 13.6232 97.438 13.6232C96.9704 13.8115 96.5028 14.184 96.1748 14.5119H96.1282C95.3792 15.2144 94.7699 16.7124 94.3954 17.6477C93.7395 19.334 93.2718 21.0649 92.7576 22.7978C92.3831 23.9679 92.0552 25.1845 91.6341 26.3566C92.5714 26.4032 93.5087 26.4498 94.4905 26.4498ZM81.7571 25.7007C81.8502 25.561 81.8968 25.4193 81.9454 25.2797C82.3664 24.063 82.8806 22.8929 83.3503 21.6742C83.7248 20.739 84.0993 19.7551 84.4273 18.7712C84.8018 17.5546 85.0832 16.3379 85.316 15.0727C85.3625 14.6516 85.4091 13.856 84.9415 13.5746C84.6601 13.3884 84.1924 13.4815 83.8645 13.6212C83.2086 13.856 82.6478 14.4633 82.2268 15.0727C81.0101 17.2732 80.0262 19.6599 79.4169 22.0953V22.1884L79.3703 22.235C78.9027 23.4051 77.8723 24.9962 76.3742 24.6217C75.5321 24.4335 75.0159 23.733 74.8296 22.9354L74.7831 22.8889V22.8423C74.5968 21.8119 73.9409 21.0629 73.1453 20.409L72.1149 19.5668L73.2385 18.8178C77.4047 15.9148 80.1194 12.5908 79.4169 7.20793C78.7144 4.2584 73.5178 4.25839 71.2242 4.35151H71.1776C67.6208 4.30495 64.0153 4.2584 60.4565 4.16527C59.7074 6.41235 58.9584 8.61286 58.2094 10.8134C56.9462 14.7468 55.7275 18.7247 54.6991 22.7046C56.7113 22.9395 58.8187 23.2188 60.8775 23.4537C61.1124 23.0326 61.3917 22.6115 61.6731 22.3301L61.9545 22.0487H62.3756C64.8109 22.0953 67.2442 22.1419 69.6796 22.1884H69.7727C71.4104 22.3281 73.0502 22.984 73.7992 24.6238C73.8458 24.7169 73.8923 24.8586 73.9389 24.9983C76.5625 25.2797 79.1841 25.5125 81.7571 25.7007ZM51.3285 22.3301C51.6099 21.5345 51.8427 20.7855 52.0775 19.9899C52.452 18.6316 52.9662 16.3845 52.1706 15.0747C52.1241 14.9816 52.031 14.8885 51.9824 14.7933C51.6079 14.5119 51.2333 14.2326 50.8588 14.0443C48.9863 13.0604 46.6926 13.0604 44.6804 13.435C42.8544 13.8095 40.8887 14.5585 39.3441 15.5889C38.6416 16.0565 37.2367 17.1335 37.1901 18.0708V18.1639L37.1436 18.257C37.1901 18.6316 38.1274 19.0526 38.4068 19.1458C38.7348 19.2389 39.6235 19.4271 39.9514 19.2854L39.998 19.2389L40.0911 19.0992C41.8705 17.1335 43.9293 15.9148 46.5975 17.1335C47.1582 17.3683 47.6279 17.7894 47.9073 18.3967C48.4701 19.5203 48.1887 20.8786 47.4862 21.907C48.7535 22.0487 50.0187 22.1884 51.3285 22.3301ZM26.1431 21.0649C26.3293 18.6316 27.0783 16.2428 28.4832 13.9957C30.4955 10.5785 33.6333 7.91039 36.7691 5.52161C37.0505 5.24022 37.3319 4.58635 37.0505 4.20981C36.7691 3.78874 36.0666 4.02357 35.7387 4.16325C33.3985 5.37991 31.1514 6.69171 29.044 8.18976C26.4224 9.96919 24.0357 12.028 21.7886 14.2751C21.2258 14.8358 20.5254 15.352 19.7763 15.5869C19.0739 15.8217 18.3249 15.7266 17.7641 15.2589C17.0151 14.6496 16.922 13.5726 17.2013 12.6839V12.5908C17.9503 10.53 18.5597 8.42459 18.9808 6.27064C19.0739 5.803 19.167 5.19366 19.0273 4.72603C18.9808 4.63291 18.8876 4.4912 18.7925 4.44463C18.6528 4.39807 18.418 4.4912 18.2783 4.58432C17.8572 4.81915 17.4827 5.28678 17.2479 5.75442C14.4866 10.53 12.2861 15.68 10.367 20.828C9.80622 22.4192 9.24344 24.0124 8.68066 25.6036C13.27 22.7512 19.2621 21.4394 26.1431 21.0649ZM133.254 19.9413C135.219 15.4938 136.906 10.9065 138.404 6.36579C138.59 5.89815 138.638 5.24225 138.217 4.86774C137.843 4.49323 137.187 4.44666 136.719 4.53978C136.159 4.6329 135.596 4.96086 135.314 5.52364V5.5702C134.612 6.78685 134.051 8.14522 133.535 9.455C132.879 11.1413 132.318 12.8722 131.802 14.6516C131.146 16.8987 130.539 19.1458 129.929 21.3928C131.053 20.9718 132.177 20.4576 133.254 19.9413Z" fill="#175FAD" />
            <path fillRule="evenodd" clipRule="evenodd" d="M145.331 28.3705C143.833 26.7793 138.683 23.2204 136.578 23.1273C131.1 22.9876 139.246 29.2592 139.902 30.243C141.774 32.1622 130.446 33.895 130.632 38.2009C130.632 38.8568 131.007 39.0431 131.663 38.8102C133.956 37.9215 138.122 35.6745 139.667 34.9254C141.774 33.8485 148.095 31.2734 145.331 28.3705ZM153.852 28.7915C152.447 27.2935 147.671 23.9694 145.752 23.9229C140.697 23.7832 148.234 29.5871 148.842 30.4779C150.528 32.2573 140.088 33.895 140.228 37.875C140.274 38.4378 140.602 38.624 141.212 38.3892C143.319 37.5936 147.204 35.5328 148.609 34.7837C150.574 33.8485 156.427 31.4597 153.852 28.7915Z" fill="#F05223" />
            <path fillRule="evenodd" clipRule="evenodd" d="M135.454 24.0616C135.454 24.2964 135.829 24.8571 135.968 24.9968C136.389 25.6527 136.999 26.26 137.513 26.8228C138.122 27.4322 138.73 27.9929 139.385 28.6023C139.713 28.8837 140.228 29.3513 140.509 29.7724C140.744 30.0072 140.884 30.3331 140.884 30.6611C140.884 30.7076 140.884 30.7076 140.884 30.7542C141.165 30.6611 141.398 30.6145 141.679 30.5679C142.896 30.2866 144.066 30.0537 145.238 29.8655C145.238 29.491 145.003 29.163 144.77 28.9302C143.459 27.5253 138.404 23.9684 136.578 23.9219C136.389 23.9219 135.687 23.9219 135.454 24.0616Z" fill="#F26B21" />
            <path fillRule="evenodd" clipRule="evenodd" d="M144.817 24.8106C144.864 25.3714 146.315 26.918 146.69 27.2925C147.253 27.8533 147.813 28.3695 148.376 28.9302C148.516 29.0699 148.704 29.2116 148.939 29.3979C150.437 29.3048 151.889 29.2582 153.245 29.2582C151.982 27.995 147.441 24.764 145.755 24.7175C145.566 24.6709 145.004 24.7175 144.817 24.8106Z" fill="#F26B21" />

          </svg>
        </Link>
        <div className="cart-header">
          <Link
            to="/Cart"
            data-testid="shopping-cart-button"
            className="cart-button"
          >
            <svg width="25" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
              <g opacity="0.8">
                <path d="M7.19975 19.2C5.8798 19.2 4.81184 20.28 4.81184 21.6C4.81184 22.92 5.8798 24 7.19975 24C8.51971 24 9.59967 22.92 9.59967 21.6C9.59967 20.28 8.51971 19.2 7.19975 19.2ZM0 0V2.4H2.39992L6.71977 11.508L5.09982 14.448C4.90783 14.784 4.79984 15.18 4.79984 15.6C4.79984 16.92 5.8798 18 7.19975 18H21.5993V15.6H7.70374C7.53574 15.6 7.40375 15.468 7.40375 15.3L7.43974 15.156L8.51971 13.2H17.4594C18.3594 13.2 19.1513 12.708 19.5593 11.964L23.8552 4.176C23.9542 3.99286 24.004 3.78718 23.9997 3.57904C23.9955 3.37089 23.9373 3.16741 23.8309 2.98847C23.7245 2.80952 23.5736 2.66124 23.3927 2.55809C23.2119 2.45495 23.0074 2.40048 22.7992 2.4H5.05183L3.92387 0H0ZM19.1993 19.2C17.8794 19.2 16.8114 20.28 16.8114 21.6C16.8114 22.92 17.8794 24 19.1993 24C20.5193 24 21.5993 22.92 21.5993 21.6C21.5993 20.28 20.5193 19.2 19.1993 19.2Z" fill="white" />
              </g>
            </svg>
          </Link>
          <p data-testid="shopping-cart-size">{ actualQuantity }</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  actualQuantity: PropTypes.number.isRequired,
};