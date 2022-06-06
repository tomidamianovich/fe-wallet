import React from 'react';

type Props = {
  icon: string;
  height?: number;
  width?: number;
};

const icons: any = {
  'panel': 'M0.471477 7.5952H1.88308V13.7121C1.88308 13.972 2.09374 14.1827 2.35361 14.1827H5.1768C5.43667 14.1827 5.64734 13.972 5.64734 13.7121V9.7126C5.64734 9.06293 6.174 8.53627 6.82367 8.53627C7.47334 8.53627 8 9.06293 8 9.7126V13.7121C8 13.972 8.21066 14.1827 8.47053 14.1827H13.6464C13.9063 14.1827 14.1169 13.972 14.1169 13.7121V7.5952H15.5285C15.963 7.5952 16.1653 7.05666 15.8384 6.77056L8.30985 0.183102C8.13245 0.027874 7.86756 0.027874 7.69015 0.183102L0.161629 6.77056C-0.165345 7.05666 0.0370036 7.5952 0.471477 7.5952ZM8.00007 1.16244L14.2763 6.65413H13.6465C13.3866 6.65413 13.1759 6.8648 13.1759 7.12467V13.2416H8.94113V9.7126C8.94113 8.54319 7.99314 7.5952 6.82374 7.5952C5.65433 7.5952 4.70634 8.54319 4.70634 9.7126V13.2416H2.82421V7.12467C2.82421 6.8648 2.61354 6.65413 2.35368 6.65413H1.72384L8.00007 1.16244Z',
  'wallet': 'M13.8666 7.56801V5.43468L3.25504 5.43468C2.85698 5.43597 2.4698 5.32841 2.13331 5.12839V12.7503C2.13531 13.3674 2.63616 13.8667 3.25332 13.8667H13.8666V11.7387H7.71198C7.57335 11.7387 7.44016 11.6847 7.34065 11.5882L5.74065 10.0362C5.52465 9.82666 5.52465 9.48004 5.74065 9.27053L7.34065 7.71853C7.44016 7.622 7.57335 7.56801 7.71198 7.56801H13.8666ZM14.3985 4.36801H12.8566C12.8369 4.33479 12.818 4.301 12.8 4.26668H14.4619C14.7971 4.26668 14.9537 4.5703 14.9312 4.85356C14.9326 4.8693 14.9333 4.88524 14.9333 4.90135V14.4C14.9333 14.6946 14.6945 14.9333 14.4 14.9333H3.25332C2.04841 14.9333 1.07054 13.9586 1.06665 12.752V3.25335C1.06665 3.24682 1.06665 3.24034 1.06692 3.23393C1.06064 2.8415 1.16449 2.44774 1.37845 2.09911C1.79419 1.42172 2.55739 1.02595 3.33124 1.07001H14.4V2.11048C13.7857 2.11048 13.2878 2.59961 13.2878 3.20297C13.2878 3.49195 13.4049 3.76905 13.6133 3.97305C13.8216 4.17706 14.1041 4.2912 14.3983 4.29027L14.3985 4.36801ZM12.4863 3.2029C12.4863 2.81287 12.6007 2.44787 12.8 2.13576L3.33774 2.13508C2.91578 2.11261 2.51519 2.3106 2.29698 2.64946C2.07876 2.98832 2.07876 3.41241 2.29698 3.75127C2.51519 4.09013 2.91578 4.28812 3.36855 4.26483H12.7979C12.5956 3.94623 12.4863 3.57985 12.4863 3.2029ZM14.4615 1.06668C15.0906 1.06668 15.0906 2.13335 14.4615 2.13335L12.8 2.1332C13.1377 1.49442 13.7554 1.06668 14.4615 1.06668ZM6.87798 9.65335L7.92816 10.672H13.8667V8.63468H7.92816L6.87798 9.65335Z',
  'market-rates': 'M8 7.91794C5.96079 7.91794 4.30769 6.26484 4.30769 4.22563C4.30769 2.18643 5.96079 0.533325 8 0.533325C10.0392 0.533325 11.6923 2.18643 11.6923 4.22563C11.6923 6.26484 10.0392 7.91794 8 7.91794ZM8 6.68717C9.35947 6.68717 10.4615 5.5851 10.4615 4.22563C10.4615 2.86616 9.35947 1.76409 8 1.76409C6.64053 1.76409 5.53846 2.86616 5.53846 4.22563C5.53846 5.5851 6.64053 6.68717 8 6.68717ZM3.69231 15.3026C1.6531 15.3026 0 13.6495 0 11.6102C0 9.57104 1.6531 7.91794 3.69231 7.91794C5.73151 7.91794 7.38462 9.57104 7.38462 11.6102C7.38462 13.6495 5.73151 15.3026 3.69231 15.3026ZM3.69231 14.0718C5.05178 14.0718 6.15385 12.9697 6.15385 11.6102C6.15385 10.2508 5.05178 9.14871 3.69231 9.14871C2.33284 9.14871 1.23077 10.2508 1.23077 11.6102C1.23077 12.9697 2.33284 14.0718 3.69231 14.0718ZM12.3077 15.3026C10.2685 15.3026 8.61539 13.6495 8.61539 11.6102C8.61539 9.57104 10.2685 7.91794 12.3077 7.91794C14.3469 7.91794 16 9.57104 16 11.6102C16 13.6495 14.3469 15.3026 12.3077 15.3026ZM12.3077 14.0718C13.6672 14.0718 14.7692 12.9697 14.7692 11.6102C14.7692 10.2508 13.6672 9.14871 12.3077 9.14871C10.9482 9.14871 9.84615 10.2508 9.84615 11.6102C9.84615 12.9697 10.9482 14.0718 12.3077 14.0718Z',
  'credit': 'M14.2136 4.20637C14.4889 4.21062 14.7472 4.06868 14.8907 3.83161C15.0406 3.58405 15.0406 3.27372 14.8907 3.02615C14.7408 2.77858 14.4658 2.63475 14.177 2.65283C13.9022 2.67002 13.6656 2.46124 13.6484 2.1865C13.6312 1.91175 13.8399 1.67508 14.1147 1.65789C14.7738 1.61663 15.4014 1.94487 15.7434 2.50983C16.0855 3.07479 16.0855 3.78298 15.7434 4.34794C15.4934 4.76088 15.0909 5.04735 14.635 5.15551C14.7365 5.4773 14.8036 5.81355 14.8319 6.16087C14.9178 7.14835 14.6942 8.13649 14.1945 8.98903C14.1794 9.05589 14.1494 9.1217 14.1029 9.18249L11.5537 12.5099C11.2978 12.8391 10.9042 13.0316 10.4873 13.0316C10.0703 13.0316 9.67675 12.8391 9.41904 12.5076L8.61167 11.4563H7.87264L7.06767 12.5099C6.81176 12.8391 6.41819 13.0316 6.00126 13.0316C5.60389 13.0316 5.22774 12.8567 4.97177 12.5553C4.94335 12.5311 4.90651 12.4991 4.86204 12.4595C4.74897 12.359 4.62359 12.2426 4.48894 12.1113C4.10534 11.7374 3.72203 11.3176 3.36335 10.8602C2.73658 10.0608 2.25351 9.23506 1.96851 8.39584L1.34986 8.39579C0.996836 8.4022 0.655842 8.26753 0.402458 8.02164C0.149074 7.77575 0.00423104 7.43896 0 7.07998V6.30146C0.00423718 5.94849 0.148497 5.61165 0.401073 5.36505C0.653649 5.11845 0.993849 4.9823 1.34081 4.98652H1.85839C2.15103 4.07283 2.64514 3.18595 3.28531 2.33861C3.65487 1.84946 4.05003 1.40446 4.44558 1.0111C4.65923 0.798642 4.83228 0.640694 4.94678 0.54302C5.20275 0.241591 5.57893 0.0666656 5.97634 0.0666656C6.39327 0.0666656 6.78684 0.259202 7.04532 0.591693L7.84772 1.64196H9.61996C11.5651 1.64196 13.3159 2.6683 14.2136 4.20637ZM13.2574 8.61075C13.7068 7.90827 13.9112 7.07684 13.8387 6.24607L13.8384 6.24306C13.6741 4.21889 11.8058 2.63885 9.61996 2.63885H7.60126C7.44594 2.63885 7.29949 2.56644 7.20519 2.44301L6.25573 1.20023C6.18868 1.114 6.08557 1.06355 5.97634 1.06355C5.86711 1.06355 5.76399 1.114 5.69695 1.20023L5.62175 1.27786C5.60147 1.29469 5.55906 1.33128 5.49771 1.38653C5.3929 1.48089 5.27545 1.59175 5.14853 1.71797C4.7845 2.07997 4.42008 2.49035 4.08071 2.93955C3.42684 3.80501 2.94811 4.70572 2.71576 5.60912C2.6591 5.82941 2.46049 5.9834 2.23303 5.9834L1.33481 5.98337C1.24624 5.9823 1.16087 6.01647 1.09749 6.07835C1.03411 6.14023 0.997906 6.22475 0.996852 6.30739V7.07406C0.997893 7.16166 1.03383 7.24522 1.0967 7.30623C1.15957 7.36724 1.24418 7.40066 1.34081 7.39899H2.3377C2.5633 7.39899 2.76078 7.55051 2.81916 7.76843C3.03863 8.58755 3.50552 9.42583 4.14786 10.2451C4.47726 10.6652 4.83118 11.0528 5.18481 11.3975C5.30819 11.5178 5.42241 11.6238 5.52436 11.7145C5.58413 11.7676 5.62553 11.803 5.64545 11.8194L5.72187 11.898C5.78892 11.9843 5.89203 12.0347 6.00126 12.0347C6.11049 12.0347 6.21361 11.9843 6.27808 11.9014L7.23011 10.6553C7.32441 10.5318 7.47086 10.4594 7.62619 10.4594H8.85734C9.01223 10.4594 9.15832 10.5314 9.25266 10.6543L10.2079 11.898C10.2749 11.9843 10.378 12.0347 10.4873 12.0347C10.5965 12.0347 10.6996 11.9843 10.7645 11.9008L13.2071 8.71259C13.2196 8.67797 13.2362 8.64384 13.2574 8.61075ZM10.0038 3.28184C10.279 3.28184 10.5022 3.505 10.5022 3.78028C10.5022 4.05557 10.279 4.27873 10.0038 4.27873H7.60126C7.32598 4.27873 7.10282 4.05557 7.10282 3.78028C7.10282 3.505 7.32598 3.28184 7.60126 3.28184H10.0038ZM4.94954 6.00833C4.4624 6.00833 4.06232 5.6185 4.06232 5.13107C4.06232 4.64363 4.4624 4.25381 4.94954 4.25381C5.43669 4.25381 5.83677 4.64363 5.83677 5.13107C5.83677 5.6185 5.43669 6.00833 4.94954 6.00833Z',
  'exchange': 'M7.32318 3.01615H15.3835C15.7233 3.01615 15.9988 3.29163 15.9988 3.63144V6.70789C15.9988 7.04771 15.7233 7.32318 15.3835 7.32318H0.616523C0.0683586 7.32318 -0.206163 6.66043 0.181448 6.27282L6.27282 0.181448C6.66043 -0.206163 7.32318 0.0683586 7.32318 0.616523V3.01615ZM6.70789 4.24673C6.36808 4.24673 6.0926 3.97126 6.0926 3.63144V2.10196L2.10196 6.0926H14.7682V4.24673H6.70789ZM0.616523 12.9223C0.276708 12.9223 0.00123351 12.6468 0.00123351 12.307V9.23058C0.00123351 8.89077 0.276708 8.61529 0.616523 8.61529H15.3835C15.9316 8.61529 16.2062 9.27804 15.8186 9.66566L9.72718 15.757C9.33957 16.1446 8.67682 15.8701 8.67682 15.3219V12.9223H0.616523ZM1.23181 11.6917H9.29211C9.63192 11.6917 9.9074 11.9672 9.9074 12.307V13.8365L13.898 9.84587H1.23181V11.6917Z',
  'launchpad': 'M4.9227 12.3067H3.07669C1.37748 12.3067 0 10.9293 0 9.23006V3.07669C0 1.37748 1.37748 0 3.07669 0H12.9221C14.6213 0 15.9988 1.37748 15.9988 3.07669V9.23006C15.9988 10.9293 14.6213 12.3067 12.9221 12.3067H9.48494L5.97314 15.8185C5.5855 16.2062 4.9227 15.9316 4.9227 15.3834V12.3067ZM8.79495 11.2563C8.91035 11.1409 9.06686 11.0761 9.23006 11.0761H12.9221C13.9416 11.0761 14.7681 10.2496 14.7681 9.23006V3.07669C14.7681 2.05716 13.9416 1.23067 12.9221 1.23067H3.07669C2.05716 1.23067 1.23067 2.05716 1.23067 3.07669V9.23006C1.23067 10.2496 2.05716 11.0761 3.07669 11.0761H5.53803C5.87788 11.0761 6.15337 11.3516 6.15337 11.6914V13.8979L8.79495 11.2563ZM8.64086 4.09115C8.34227 3.92887 8.23177 3.55526 8.39404 3.25666C8.55632 2.95807 8.92993 2.84757 9.22853 3.00985C9.44752 3.12886 9.73148 3.36499 10.0024 3.74639C10.4302 4.34857 10.6823 5.13884 10.6823 6.12261C10.6823 7.10637 10.4302 7.89665 10.0024 8.49882C9.73148 8.88022 9.44752 9.11635 9.22853 9.23536C8.92993 9.39764 8.55632 9.28714 8.39404 8.98855C8.23177 8.68995 8.34227 8.31634 8.64086 8.15406C8.70493 8.11925 8.84554 8.00232 8.99917 7.78608C9.27901 7.39218 9.45158 6.85101 9.45158 6.12261C9.45158 5.3942 9.27901 4.85303 8.99917 4.45913C8.84554 4.24289 8.70493 4.12597 8.64086 4.09115ZM6.86716 5.53803C6.52732 5.53803 6.25182 5.26254 6.25182 4.9227C6.25182 4.58286 6.52732 4.30736 6.86716 4.30736C7.207 4.30736 7.4825 4.58286 7.4825 4.9227C7.4825 5.26254 7.207 5.53803 6.86716 5.53803ZM6.86716 7.99938C6.52732 7.99938 6.25182 7.72389 6.25182 7.38405C6.25182 7.04421 6.52732 6.76871 6.86716 6.76871C7.207 6.76871 7.4825 7.04421 7.4825 7.38405C7.4825 7.72389 7.207 7.99938 6.86716 7.99938Z',
  'logout': 'M2.39378 14.1768H7.9752C8.31814 14.1768 8.59534 14.454 8.59534 14.7969C8.59534 15.1398 8.31814 15.417 7.9752 15.417H2.39378C1.36805 15.417 0.533325 14.5823 0.533325 13.5566V2.39381C0.533325 1.36808 1.36805 0.533325 2.39378 0.533325H7.9752C8.31814 0.533325 8.59534 0.810584 8.59534 1.15353C8.59534 1.49647 8.31814 1.77367 7.9752 1.77367H2.39378C2.05148 1.77367 1.77364 2.05148 1.77364 2.39381V13.5566C1.77364 13.8989 2.05145 14.1768 2.39378 14.1768ZM11.5113 3.81271L15.2819 7.53365C15.4003 7.65087 15.4667 7.80901 15.4667 7.97514C15.4667 8.14133 15.3997 8.30012 15.2819 8.4167L11.5113 12.1376C11.391 12.2567 11.2335 12.3162 11.076 12.3162C10.916 12.3162 10.7559 12.2542 10.6344 12.1314C10.3944 11.8877 10.3963 11.4952 10.6406 11.2546L13.3352 8.59534H6.11472C5.77177 8.59534 5.49458 8.31811 5.49458 7.97517C5.49458 7.63223 5.77177 7.35503 6.11472 7.35503H13.3352L10.6406 4.69582C10.3963 4.45519 10.3938 4.06264 10.6344 3.81892C10.875 3.5752 11.2682 3.57208 11.5113 3.81271Z',
  'more': 'M8.2 2C8.86274 2 9.4 2.53726 9.4 3.2C9.4 3.86274 8.86274 4.4 8.2 4.4C7.53726 4.4 7 3.86274 7 3.2C7 2.53726 7.53726 2 8.2 2ZM9.4 8C9.4 7.33726 8.86274 6.8 8.2 6.8C7.53726 6.8 7 7.33726 7 8C7 8.66274 7.53726 9.2 8.2 9.2C8.86274 9.2 9.4 8.66274 9.4 8ZM9.4 12.8C9.4 12.1373 8.86274 11.6 8.2 11.6C7.53726 11.6 7 12.1373 7 12.8C7 13.4627 7.53726 14 8.2 14C8.86274 14 9.4 13.4627 9.4 12.8Z',
  'arrow-right': 'M14.501 2.52607C14.2545 2.26833 14.2546 1.86225 14.501 1.60453L15.8387 0.205879C16.1013 -0.068637 16.5398 -0.0686247 16.8023 0.205906L23.8151 7.53914C24.0616 7.79687 24.0616 8.20292 23.8152 8.46066L16.8023 15.7941C16.5398 16.0686 16.1012 16.0686 15.8387 15.7941L14.501 14.3952C14.2546 14.1375 14.2546 13.7315 14.501 13.4737L18.1522 9.6558L0.666666 9.6558C0.298476 9.6558 0 9.35732 0 8.98913V7.01087C0 6.64268 0.298476 6.3442 0.666666 6.3442L18.1522 6.3442L14.501 2.52607Z',
  'help': 'M13 24.2C19.1856 24.2 24.2 19.1856 24.2 13C24.2 6.81442 19.1856 1.80001 13 1.80001C6.81442 1.80001 1.80001 6.81442 1.80001 13C1.80001 19.1856 6.81442 24.2 13 24.2ZM13 25.8C5.93077 25.8 0.200012 20.0693 0.200012 13C0.200012 5.93077 5.93077 0.200012 13 0.200012C20.0693 0.200012 25.8 5.93077 25.8 13C25.8 20.0693 20.0693 25.8 13 25.8ZM9.80001 7.87481C9.99658 7.70137 10.2119 7.5366 10.4461 7.3805C10.6802 7.2244 10.9332 7.08854 11.2049 6.97291C11.4766 6.85728 11.7715 6.76623 12.0894 6.69974C12.4074 6.63325 12.7514 6.60001 13.1214 6.60001C13.6244 6.60001 14.0826 6.66939 14.4959 6.80814C14.9093 6.9469 15.2634 7.14491 15.5583 7.40218C15.8531 7.65945 16.0815 7.9702 16.2434 8.33443C16.4053 8.69866 16.4862 9.10624 16.4862 9.55719C16.4862 9.99658 16.4226 10.3767 16.2954 10.6976C16.1682 11.0184 16.0078 11.2974 15.8141 11.5344C15.6204 11.7715 15.4109 11.9767 15.1854 12.1501C14.9599 12.3236 14.746 12.4869 14.5436 12.6401C14.3413 12.7933 14.1664 12.9436 14.019 13.0911C13.8716 13.2385 13.7834 13.4047 13.7545 13.5897L13.555 14.8558H12.0894L11.942 13.4423C11.9362 13.4134 11.9333 13.3888 11.9333 13.3686V13.2949C11.9333 13.0405 11.9969 12.8193 12.1241 12.6314C12.2513 12.4436 12.4103 12.2672 12.6011 12.1024C12.7919 11.9377 12.9971 11.7772 13.2168 11.6211C13.4365 11.4651 13.6417 11.2959 13.8325 11.1138C14.0233 10.9317 14.1823 10.725 14.3095 10.4938C14.4367 10.2625 14.5003 9.9908 14.5003 9.6786C14.5003 9.47047 14.4613 9.28402 14.3832 9.11925C14.3052 8.95448 14.1968 8.81284 14.058 8.69432C13.9193 8.5758 13.753 8.48475 13.5594 8.42115C13.3657 8.35755 13.1561 8.32576 12.9306 8.32576C12.6011 8.32576 12.3221 8.36189 12.0938 8.43416C11.8654 8.50643 11.6717 8.58736 11.5127 8.67698C11.3538 8.76659 11.2193 8.84753 11.1095 8.91979C10.9996 8.99206 10.9014 9.0282 10.8146 9.0282C10.6065 9.0282 10.4562 8.94148 10.3637 8.76803L9.80001 7.87481ZM11.439 18.0992C11.439 17.92 11.4723 17.7494 11.5388 17.5875C11.6053 17.4257 11.6978 17.2869 11.8163 17.1713C11.9348 17.0557 12.075 16.9632 12.2369 16.8938C12.3987 16.8244 12.5722 16.7897 12.7572 16.7897C12.9364 16.7897 13.107 16.8244 13.2688 16.8938C13.4307 16.9632 13.5695 17.0557 13.6851 17.1713C13.8007 17.2869 13.8932 17.4257 13.9626 17.5875C14.032 17.7494 14.0667 17.92 14.0667 18.0992C14.0667 18.2842 14.032 18.4562 13.9626 18.6152C13.8932 18.7742 13.8007 18.9115 13.6851 19.0271C13.5695 19.1427 13.4307 19.2338 13.2688 19.3003C13.107 19.3668 12.9364 19.4 12.7572 19.4C12.5722 19.4 12.3987 19.3668 12.2369 19.3003C12.075 19.2338 11.9348 19.1427 11.8163 19.0271C11.6978 18.9115 11.6053 18.7742 11.5388 18.6152C11.4723 18.4562 11.439 18.2842 11.439 18.0992Z',
  'bell': 'M15.6314 4.80001C15.1724 4.80001 14.7299 5.20463 14.7299 5.79294V8.6631L14.1021 8.80149C10.7365 9.54346 8.16024 12.7082 8.16024 16.553V16.5969L7.47757 22.8079L7.09162 23.0037C6.69426 23.2053 6.39999 23.6421 6.39999 24.1728V24.3721C6.39999 24.5615 6.43638 24.6317 6.44456 24.6456L6.44503 24.6464C6.44874 24.6528 6.4584 24.6696 6.51315 24.6945C6.58316 24.7264 6.70219 24.7591 6.89731 24.7798C7.09015 24.8002 7.31567 24.8053 7.58617 24.8053H23.6748C23.9452 24.8053 24.1706 24.8002 24.3635 24.7798C24.5587 24.7591 24.6779 24.7264 24.7481 24.6944C24.8032 24.6694 24.813 24.6524 24.8168 24.6459L24.8172 24.6451C24.8255 24.6312 24.8619 24.5609 24.862 24.3717V24.1729C24.862 23.6427 24.5684 23.2068 24.1703 23.0045L23.7847 22.8086L23.1021 16.597V16.5532C23.1021 12.7079 20.5258 9.54348 17.1602 8.80166L16.5324 8.66328V5.79294C16.5324 5.20449 16.0898 4.80001 15.6314 4.80001ZM13.1299 5.79294C13.1299 4.40105 14.2108 3.20001 15.6314 3.20001C17.0517 3.20001 18.1324 4.4012 18.1324 5.79294V7.40232C21.9349 8.54355 24.6831 12.2055 24.702 16.5085L25.2856 21.8188C26.0011 22.3452 26.462 23.2054 26.462 24.1729V24.3722C26.4618 24.7614 26.3867 25.1351 26.1937 25.4608C25.9959 25.7946 25.713 26.0132 25.4108 26.1507C24.8669 26.3983 24.1909 26.4053 23.6748 26.4053H19.6105C19.4205 27.0314 19.0047 27.5613 18.4845 27.9514C17.7658 28.4902 16.8098 28.7997 15.7881 28.7997C14.7664 28.7997 13.8103 28.4902 13.0917 27.9514C12.5713 27.5613 12.1554 27.0314 11.9654 26.4053H7.58617C7.06995 26.4053 6.39383 26.3983 5.84997 26.1506C5.54784 26.013 5.26501 25.7941 5.06746 25.4602C4.8747 25.1343 4.79999 24.7612 4.79999 24.3721V24.1728C4.79999 23.2057 5.2608 22.3443 5.97678 21.8177L6.56034 16.5083C6.57926 12.2058 9.32747 8.54357 13.1299 7.40219V5.79294ZM13.8016 26.4487C13.873 26.5252 13.9561 26.5998 14.0514 26.6713C14.4675 26.9832 15.0789 27.1997 15.7881 27.1997C16.4973 27.1997 17.1086 26.9832 17.5246 26.6713C17.62 26.5998 17.703 26.5253 17.7744 26.4487H13.8016Z',
  'profile': 'M5.53858 28.1065C2.14635 25.1726 0 20.837 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 20.837 29.8537 25.1726 26.4614 28.1065C25.2648 23.4451 21.0347 20 16 20C10.9653 20 6.73524 23.4451 5.53858 28.1065ZM16 18.4C19.0928 18.4 21.6 15.8928 21.6 12.8C21.6 9.7072 19.0928 7.2 16 7.2C12.9072 7.2 10.4 9.7072 10.4 12.8C10.4 15.8928 12.9072 18.4 16 18.4Z'
};

const Icon: React.FC<Props> = ({ icon, height = 16 , width = 15}) => 
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" className='icon' >
    <path fillRule="evenodd" clipRule="evenodd" d={icons[icon]} />
  </svg>


export default Icon;