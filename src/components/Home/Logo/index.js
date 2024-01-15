import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s-copy.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />
      <svg 
          xmlns="http://www.w3.org/2000/svg" 
          version="1.0" 
          width="300pt" 
          height="284pt" 
          viewBox="0 0 300 284" 
          >
        <g
                  className="svg-container"
                  transform="translate(0 284) scale(.1 -.1)"
                  fill="none"
                >
        <path ref={outlineLogoRef} d="M180 2150 l0 -580 80 0 80 0 0 506 0 506 500 -5 500 -5 0 79 0 79 -580 0 -580 0 0 -580z m1103 548 c-2 -5 3 -8 11 -8 22 0 22 -66 1 -74 -9 -3 -219 -6 -467 -6 -362 -1 -458 -4 -485 -15 l-33 -14 -2 -273 c-2 -150 -1 -364 1 -475 4 -217 1 -233 -44 -233 -59 0 -55 -36 -55 549 0 326 4 541 10 547 11 11 1070 13 1063 2z M1720 2653 l0 -78 500 3 500 3 0 -506 0 -505 80 0 80 0 0 580 0 580 -580 0 -580 0 0 -77z m1118 35 c9 -9 12 -141 12 -534 0 -287 -3 -529 -6 -538 -7 -20 -79 -22 -87 -3 -2 6 -5 223 -5 480 l0 468 -23 25 -22 24 -476 2 -476 3 -3 28 c-7 59 -28 57 547 57 397 0 530 -3 539 -12z M1431 1888 c-12 -31 -401 -1000 -407 -1014 -4 -8 15 -11 58 -10 l62 2 70 177 69 177 236 -2 235 -3 77 -174 77 -174 66 -2 c36 -1 66 0 66 2 0 2 -8 20 -19 41 -10 20 -76 168 -146 327 -70 160 -165 376 -211 480 l-83 190 -71 3 c-65 3 -71 1 -79 -20z m142 -45 c12 -21 22 -41 22 -45 0 -3 3 -10 8 -14 4 -4 7 -16 7 -26 0 -10 5 -18 10 -18 6 0 10 -9 10 -19 0 -11 4 -22 9 -26 5 -3 17 -29 27 -58 9 -28 21 -55 26 -58 5 -3 9 -8 8 -10 -3 -7 56 -143 139 -322 18 -37 29 -72 26 -77 -4 -6 1 -13 9 -16 9 -3 16 -17 16 -29 0 -13 4 -25 8 -27 13 -5 63 -119 56 -129 -3 -5 -1 -9 3 -9 5 0 14 -14 20 -31 10 -25 9 -31 -4 -36 -23 -9 -45 8 -69 55 -30 58 -58 126 -56 135 1 4 -4 15 -13 23 -8 9 -15 22 -15 30 0 17 -44 89 -61 100 -7 4 -116 7 -242 7 -271 -1 -249 8 -307 -128 -8 -16 -14 -34 -15 -40 -2 -5 -11 -28 -20 -50 -10 -22 -19 -43 -20 -47 -2 -5 -4 -10 -5 -13 -1 -3 -3 -8 -4 -12 -8 -34 -20 -52 -39 -57 -12 -3 -25 -2 -29 2 -8 8 14 82 24 82 5 0 8 8 8 18 0 9 14 44 30 77 16 33 30 65 30 71 0 14 62 177 91 241 10 23 19 46 19 50 0 4 12 31 25 58 14 28 25 57 25 65 0 8 14 42 30 75 17 33 30 65 30 72 0 7 4 21 9 31 19 34 51 112 51 121 0 9 28 16 78 20 16 1 29 -9 45 -36z M1474 1763 c-4 -12 -10 -23 -15 -23 -5 0 -9 -5 -9 -12 0 -23 -33 -98 -40 -93 -5 3 -6 -4 -3 -15 3 -11 0 -20 -6 -20 -6 0 -10 -3 -9 -7 3 -8 -13 -54 -33 -98 -5 -11 -20 -51 -33 -90 l-25 -70 21 -22 c21 -22 28 -23 191 -23 229 0 239 9 177 145 -13 28 -24 55 -24 60 -1 6 -18 43 -39 84 -20 41 -37 83 -37 93 0 11 -4 16 -10 13 -6 -3 -7 1 -4 9 4 10 1 16 -7 16 -7 0 -10 3 -6 6 3 3 1 11 -4 18 -5 6 -17 20 -27 32 -23 28 -51 27 -58 -3z m59 -38 c8 -22 52 -122 96 -222 l80 -183 -190 0 c-104 0 -189 3 -189 7 0 19 176 451 181 445 3 -4 13 -25 22 -47z 
         M180 613 l0 -583 580 0 580 0 0 80 0 80 -500 0 -500 0 0 503 0 502 -80 0 -80 0 0 -582z m130 72 c5 -436 7 -482 23 -505 9 -13 17 -21 17 -17 0 4 9 3 20 -3 11 -6 20 -7 20 -3 0 10 890 6 914 -3 14 -5 15 -9 4 -15 -7 -5 -8 -9 -3 -9 7 0 9 -15 7 -35 l-4 -35 -549 0 -549 0 0 549 c0 610 -6 561 65 558 l30 -2 5 -480z M2720 693 l0 -503 -500 0 -500 0 0 -80 0 -80 580 0 580 0 0 583 0 582 -80 0 -80 0 0 -502z m131 -10 c0 -269 1 -517 1 -552 1 -43 -4 -66 -13 -72 -8 -5 -251 -9 -540 -9 -409 0 -529 3 -543 13 -12 9 -16 22 -13 50 2 21 7 40 10 44 3 3 220 6 480 7 452 1 476 2 496 20 21 19 21 24 21 496 0 262 3 480 7 483 3 4 26 7 50 7 l43 0 1 -487z"/>
        </g>
      </svg>

    </div>
  )
}

export default Logo


/*
<svg
width="559pt"
height="897pt"
version="1.0"
viewBox="0 0 559 897"
xmlns="http://www.w3.org/2000/svg"
>
<g
  className="svg-container"
  transform="translate(0 457) scale(.1 -.1)"
  fill="none"
>
  <path
    ref={outlineLogoRef}
    d="m2930 4560c-344-16-623-85-915-228-231-114-406-241-600-436-61-60-145-137-188-169-432-325-715-757-806-1230-109-564 21-1117 384-1641 250-360 780-877 1547-1511 451-373 600-505 803-708 215-216 275-293 350-448 55-114 75-188 82-298 6-96-6-173-39-257-21-53-27-59-73-76-136-51-374-73-521-46-401 71-763 376-1088 916-21 35-43 63-50 63s-32-13-57-29c-74-48-229-141-233-141-3 0-54-31-113-68s-135-84-168-102c-33-19-67-39-77-45-9-5-56-34-105-63-48-29-153-94-233-143s-152-92-160-96c-26-12-144-86-180-114-19-15-137-88-262-164-130-78-228-143-228-151s30-70 66-137c207-379 396-640 644-887 219-218 401-350 665-480 247-122 484-196 775-241 172-27 628-38 819-19 636 61 1161 302 1561 716 47 48 128 120 181 160 402 304 684 722 804 1189 61 240 70 318 70 640 0 259-3 304-23 418-84 467-268 823-647 1257-192 218-401 409-1095 995-637 539-1034 894-1208 1081-152 163-223 311-223 465 0 43 2 83 5 88 20 32 266 41 394 15 322-65 649-312 972-731 39-51 70-83 82-83 10 0 283 234 615 528 328 290 684 605 792 700s197 181 199 191-38 62-100 131c-399 446-754 740-1106 918-314 159-659 255-962 268-63 2-135 6-160 7-25 2-110 0-190-4zm570-58c671-123 1188-450 1813-1144 53-60 97-112 96-115-1-12-411-367-423-367-6 0-20-13-31-28-11-16-164-156-340-312l-320-283-18 24c-239 311-459 523-675 651-99 59-246 117-344 137-112 23-311 21-416-4-200-48-373-182-450-349-32-70-34-82-34-176 0-179 64-318 229-494 182-195 573-545 1213-1086 693-585 897-771 1085-985 379-434 563-790 647-1257 20-113 23-161 23-398 0-300-10-384-70-620-97-379-302-729-586-1e3 -105-100-185-166-191-159-9 8-63-29-92-63-48-57-291-191-482-266-202-79-481-143-735-167-188-18-606-8-779 19-290 45-528 119-775 241-385 190-680 444-972 836-118 159-345 527-332 538 46 36 763 456 773 453 16-7 36 11 30 27-3 9 131 99 212 142 28 15 203 122 231 141 21 14 23 13 45-23 225-384 515-687 794-829 164-84 300-115 503-115 125 0 235 15 340 46 17 5 22 4 17-4-13-22 24-13 47 11 12 13 53 40 91 61 193 105 351 279 418 462 18 49 21 82 22 199 1 165-11 222-79 363-75 156-135 232-355 453-208 208-355 338-808 713-766 633-1288 1142-1537 1501-305 440-449 908-415 1355 24 318 109 596 262 848 74 123 192 277 231 301 18 11 43 38 56 61 24 42 155 164 277 255 293 221 660 367 1050 419 167 23 601 15 754-13zm-2357-938c-321-485-398-1123-203-1693 70-208 178-417 315-615 250-360 780-877 1547-1511 451-373 600-505 803-708 215-216 275-292 350-448 65-136 80-200 79-343-1-134-15-186-80-302-60-108-201-244-326-317-53-31-55-28-31 35 12 33 17 79 17 184 1 165-12 222-79 363-75 156-135 232-355 453-208 208-355 338-808 713-766 633-1288 1142-1537 1501-305 440-449 908-415 1355 34 454 190 817 504 1174 58 66 264 256 277 256 4 0-23-44-58-97zm2095-529c212-43 445-176 659-378 129-121 368-406 360-429-2-6-95-93-208-193l-204-182-18 24c-105 137-202 250-307 355-191 192-351 304-540 380-145 58-234 72-415 67l-153-4 24 47c28 57 121 159 181 200 71 49 158 88 240 108 99 25 274 27 381 5zm-2672-5486c233-416 511-757 812-997 275-219 616-385 967-472 225-55 364-71 669-76 307-6 445 3 666 43 255 46 474 119 698 233l117 60-75-71c-377-356-881-572-1471-628-188-18-606-8-779 19-465 72-868 244-1222 521-180 141-402 382-575 625-130 183-342 550-326 566 11 11 446 277 454 278 4 1 33-45 65-101z"
  />
</g>
</svg>

*/
