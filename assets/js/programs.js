/* Auto-generated from src/programs.html by build/build.mjs — do not edit directly. */
(function () {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef
} = React;
const BOOKING_URL = 'https://calendly.com/nataliefreediverbruce';
function openBooking(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: BOOKING_URL
    });
  } else {
    window.open(BOOKING_URL, '_blank');
  }
  return false;
}
const P = 'assets/photos';
const ENSO_D = "M361 26L362 25L364 27L368 25L379 32L383 50L387 54L389 60L394 67L396 67L400 71L405 72L401 76L401 78L402 79L404 77L405 80L400 83L398 81L395 84L401 88L398 89L398 91L402 93L403 90L411 84L411 82L410 81L408 83L407 80L410 79L412 75L415 80L413 82L419 82L417 84L418 87L420 85L424 87L430 83L431 84L427 90L428 97L430 91L434 95L440 95L441 96L439 98L444 101L448 99L452 107L454 103L457 106L453 108L456 111L458 109L460 115L464 111L467 114L466 115L464 113L463 116L466 119L468 117L472 119L475 124L473 126L478 131L480 131L492 145L498 147L505 154L503 156L508 161L510 159L513 162L509 164L515 170L509 170L514 175L518 173L521 176L531 196L539 206L541 214L545 218L545 224L549 228L551 238L557 246L557 252L561 258L561 264L567 276L567 308L569 310L569 324L567 326L567 332L571 332L569 334L569 338L565 340L568 343L570 341L571 342L569 346L571 348L567 350L567 356L565 358L567 366L565 368L565 378L563 380L561 390L557 394L559 396L557 398L559 402L553 406L551 412L547 416L549 418L541 422L543 424L541 426L541 430L543 432L538 439L538 425L535 428L535 432L529 436L531 438L518 449L517 448L537 424L535 422L541 418L539 416L543 416L541 412L549 402L546 399L545 402L537 408L539 412L531 418L533 420L531 422L533 424L527 428L523 438L514 447L511 448L513 450L512 451L510 449L504 455L503 454L517 440L516 437L506 447L505 446L509 442L508 441L500 445L499 448L496 449L486 461L482 461L480 463L478 461L476 463L473 462L478 459L480 461L481 456L491 446L489 444L491 442L489 440L491 438L491 434L490 433L484 439L483 438L490 431L492 433L493 432L491 428L492 427L497 426L491 422L494 421L498 423L502 421L503 418L511 410L510 407L498 419L495 418L509 404L509 402L517 394L517 392L525 382L527 376L531 372L537 360L537 356L541 350L541 346L545 338L545 300L543 298L543 284L541 282L541 274L539 272L537 258L527 240L527 236L525 232L519 228L519 226L519 224L516 223L513 218L503 210L503 206L498 205L495 202L497 200L491 196L491 194L487 190L489 188L482 185L479 182L481 180L476 175L474 175L470 169L468 169L464 165L460 165L460 159L454 157L454 161L451 158L453 156L446 151L444 153L442 153L438 149L434 151L434 145L432 147L426 143L424 145L420 141L412 139L406 135L394 133L386 129L380 129L376 125L370 125L368 123L362 123L354 119L348 119L320 107L312 107L310 105L306 105L292 97L286 97L285 96L287 94L282 91L278 93L268 93L264 97L262 95L258 95L256 97L250 97L248 99L240 99L238 103L232 101L232 105L228 103L226 103L222 107L218 105L216 109L212 107L210 111L208 109L202 113L198 111L194 113L191 110L197 110L197 108L193 106L192 99L189 100L191 102L190 103L182 107L181 106L183 104L181 100L185 98L178 93L173 100L176 101L179 104L178 105L176 103L174 105L173 104L171 100L173 98L172 97L170 97L166 101L162 101L158 109L156 105L147 112L149 118L143 122L149 122L146 127L142 127L140 125L133 132L135 134L132 137L130 135L128 137L125 136L128 135L145 118L143 116L151 106L146 105L140 113L139 110L142 109L143 106L142 105L140 107L139 104L144 101L146 103L150 101L154 97L162 93L164 89L166 91L169 88L167 84L171 80L170 79L164 81L161 78L163 76L162 75L160 75L156 79L155 78L159 74L159 72L163 70L161 68L162 67L172 63L175 60L171 56L174 51L175 52L173 56L176 59L180 59L181 58L177 56L182 51L184 53L187 52L187 50L183 48L184 47L186 47L192 53L198 53L204 49L209 50L202 55L197 56L204 57L206 55L207 56L204 59L198 59L196 57L188 59L187 60L189 62L190 69L192 67L198 67L202 65L203 64L200 63L200 61L202 61L206 65L210 61L212 63L218 59L220 61L222 59L228 59L230 57L236 57L238 55L244 55L246 53L247 54L245 56L249 58L248 61L242 61L236 65L233 62L237 60L230 59L230 65L217 68L220 73L222 71L226 73L232 69L234 69L235 70L233 72L236 73L238 71L246 71L247 70L242 69L242 67L256 69L257 68L252 67L252 65L258 65L260 67L270 67L271 66L266 65L266 63L276 63L280 59L282 59L284 55L290 55L296 51L310 49L317 44L314 43L314 41L316 41L320 45L324 45L330 41L340 41L340 39L328 39L328 35L332 37L344 37L346 39L358 39L360 37L361 40L364 41L364 37L368 39L371 36L365 32L366 31L368 33L368 29L362 29L362 33L353 32L354 29L358 31ZM191 32L193 32L193 36L189 40L197 44L193 46L190 47L189 46L193 44L187 40ZM183 40L185 40L178 47L177 46L179 44L177 42L178 41L180 43ZM301 42L302 41L304 43L306 41L310 41L311 42L308 45L292 45L280 45L280 43ZM351 42L352 41L357 44L352 45ZM257 46L271 46L260 47L256 51L252 51L250 49L248 51L245 48L250 47L252 49L256 49ZM279 50L286 49L286 51L282 53L270 53L270 57L268 55L262 55L258 55L256 57L251 56L262 53L264 51ZM225 52L228 51L231 54L226 55ZM181 54L182 53L185 56L182 57ZM161 58L162 57L164 59L168 57L171 60L166 63ZM157 60L158 59L163 64L162 65ZM153 62L154 61L159 66L156 69L150 69L148 71L146 69L145 68L147 66L145 64L146 63L150 67L152 67L153 66L151 64ZM223 62L225 62L224 65L221 64ZM185 64L187 64L187 68L185 68ZM179 66L182 65L185 70L182 71ZM171 68L173 68L173 72L175 74L172 75L170 73L168 75L164 75L163 72L164 71L166 73L170 71ZM205 72L208 71L209 74L206 75ZM153 74L155 74L153 76L153 80L155 82L152 85L151 84L153 82L150 79L148 81L147 80L149 78L147 76ZM193 74L200 73L201 76L196 77ZM189 76L192 75L193 78L192 79ZM215 76L216 75L219 78L211 80L208 81L207 78ZM185 78L189 78L186 81L181 80ZM257 80L266 79L266 81L262 81L260 83ZM187 82L190 81L190 85L198 81L206 81L206 83L200 83L192 87L188 87ZM247 82L256 81L257 82L254 83L246 85L245 84ZM183 84L184 83L187 88L184 89ZM209 84L210 83L213 86L212 87L210 89ZM239 84L243 84L240 87L235 86ZM203 86L206 85L207 88L206 89ZM257 86L270 85L270 87L260 89ZM407 88L408 87L412 91L418 91L420 93L421 92L419 90L424 89L425 92L423 94L425 98L430 101L432 99L433 102L435 104L434 105L428 105L424 101L418 99L416 95L414 97L410 95L408 91L406 93L405 90ZM195 92L198 91L199 96L198 97ZM225 94L234 93L236 95L240 95L240 97L232 99L232 95L220 97L220 95ZM153 102L156 101L157 102L155 104L152 105L151 104ZM167 104L171 104L168 107L163 106ZM435 106L438 105L450 115L452 115L452 117L450 119L438 109L436 109ZM187 108L189 108L184 115L181 112ZM199 108L202 107L203 110L202 111ZM133 110L136 109L137 110L134 111L132 113L131 112ZM133 116L134 115L137 118L134 123L132 121L128 123L127 122ZM171 118L173 118L171 122L175 124L170 125L166 127L165 124L168 123ZM179 118L180 117L181 120L178 123L177 122L175 120L176 119L178 121ZM159 122L160 121L161 124L147 136L149 138L145 142L143 148L135 154L131 164L119 178L120 181L134 167L135 168L127 176L128 179L138 169L139 170L131 178L131 180L125 186L125 188L119 194L117 200L113 204L111 214L105 224L105 228L101 232L101 236L97 242L97 248L91 262L91 270L89 272L89 280L87 282L87 292L81 306L81 342L83 344L83 368L85 370L85 374L89 378L87 382L90 383L91 380L93 380L93 384L97 390L99 400L103 406L103 410L107 418L111 422L113 428L114 429L116 427L125 436L124 437L118 431L117 434L131 450L129 452L139 462L137 464L142 465L152 473L164 479L165 480L162 481L158 477L157 478L157 480L162 485L170 487L171 484L174 483L175 484L171 488L175 490L173 494L174 495L182 499L185 498L181 494L182 493L184 495L188 495L191 498L189 500L191 502L189 504L192 507L198 507L202 509L203 506L206 505L207 508L205 510L212 513L216 517L220 517L228 521L234 521L236 523L250 523L252 525L265 526L262 529L252 529L250 527L236 525L236 533L244 533L248 535L256 531L258 535L260 533L268 533L270 535L278 535L280 537L304 537L304 533L315 532L300 531L300 529L328 529L330 527L334 527L336 529L338 527L340 529L341 526L338 523L336 525L333 524L334 521L338 521L340 519L342 521L356 521L358 517L360 517L362 521L366 519L376 519L378 515L382 515L384 513L388 513L390 511L394 511L396 509L400 509L406 505L414 503L419 498L417 496L418 495L422 497L434 491L437 496L445 502L442 505L436 507L435 510L438 513L442 511L446 513L448 511L449 512L449 516L451 518L450 519L448 517L441 520L445 522L441 524L445 526L442 527L441 530L447 530L444 533L440 533L439 534L441 536L438 539L437 538L439 536L437 532L436 531L432 533L429 538L431 540L430 541L428 539L426 545L422 543L420 549L416 549L412 553L402 557L398 561L396 559L393 562L396 563L396 565L390 565L388 569L386 565L384 567L378 567L378 569L384 569L384 571L378 571L376 573L366 573L364 575L352 577L346 577L338 581L336 579L334 581L330 579L326 581L324 579L306 579L304 577L290 577L288 575L278 575L276 573L270 573L268 571L260 571L258 569L252 569L248 565L244 565L242 561L238 561L236 559L234 561L232 559L230 561L228 557L214 553L212 551L206 551L202 547L198 547L196 545L194 547L190 547L178 541L177 540L180 539L180 537L176 535L172 537L168 535L154 523L152 523L142 513L132 507L122 497L120 497L107 484L107 482L87 456L88 455L92 459L93 456L91 452L88 449L86 453L85 450L81 448L87 448L87 444L83 440L81 428L73 422L65 406L63 398L59 394L59 392L55 390L57 386L53 382L51 372L47 366L47 356L45 354L45 350L46 349L48 351L49 346L43 334L43 316L45 316L45 324L47 324L47 310L49 308L49 302L47 300L49 298L49 294L43 294L45 290L43 286L43 266L41 266L40 275L39 268L35 262L35 256L37 256L38 261L41 254L41 246L39 244L41 242L38 237L35 240L37 242L36 245L35 242L31 240L35 234L35 228L38 225L40 227L41 226L40 217L36 217L35 220L33 220L33 208L35 206L33 204L33 198L37 196L35 194L39 190L40 183L43 186L43 194L41 196L42 199L45 198L48 187L51 192L47 196L49 198L49 202L52 203L53 198L55 198L55 202L53 204L54 209L59 202L59 198L61 198L61 204L57 212L60 215L64 213L64 219L67 216L67 208L68 207L70 211L73 210L73 208L67 202L69 194L75 188L75 184L78 183L80 179L81 182L77 186L78 191L85 182L85 178L87 176L85 174L93 170L89 168L93 166L87 158L88 157L92 161L101 150L101 148L110 141L112 141L115 146L113 148L115 150L114 151L112 149L99 166L101 168L99 170L101 172L91 180L92 183L94 181L95 182L89 186L91 188L89 192L90 197L99 180L107 172L107 170L113 166L111 164L116 159L118 159L120 163L125 160L123 158L125 156L121 152L124 151L126 155L135 144L133 142L136 139L138 141L147 132L145 130L146 129L150 131ZM457 122L460 121L463 124L458 125ZM123 126L125 126L119 132L121 134L120 135L118 133L115 136L116 137L116 139L111 136L114 135L117 130ZM465 128L468 127L475 134L472 135ZM475 136L478 135L483 140L480 141ZM91 138L93 138L91 144L85 150L85 152L82 155L81 154L79 152L83 152L83 148L89 144ZM143 138L147 138L141 144L137 144ZM483 142L486 141L489 146L495 150L495 152L494 153L490 151ZM119 146L120 145L123 148L121 148L120 147L118 149L117 148ZM495 154L496 153L501 156L496 157ZM99 158L100 157L101 160L96 167L93 164ZM117 164L118 163L119 166L116 169L113 168ZM109 174L113 174L108 181L106 183L105 180ZM35 182L37 182L37 186L35 186ZM115 184L117 184L115 188L113 188ZM71 200L73 200L73 204L71 204ZM43 202L45 202L44 205L41 204ZM39 210L43 210L43 216L41 216L41 212ZM57 216L58 215L61 218L62 223L64 221L65 222L63 226L65 230L61 238L63 242L62 243L60 241L56 245L55 244L55 232L57 230L57 222L59 220ZM59 226L61 226L61 230L59 230ZM31 248L34 247L34 249L32 251ZM53 276L55 276L55 280L53 280ZM45 282L50 281L51 282L49 284L51 286L50 289ZM51 294L53 294L53 300L51 300ZM553 378L555 378L554 381L551 380ZM549 384L553 384L551 388L553 390L553 394L548 399L546 397L542 401L541 398L547 390ZM497 436L500 435L500 437L498 439ZM479 440L481 440L477 444L475 444ZM533 446L535 446L533 448L533 452L529 454L525 462L520 465L512 475L506 477L506 471L496 481L495 478L499 476L495 474L500 473L500 471L493 468L493 466L497 464L495 462L497 458L493 458L500 451L501 452L497 456L506 457L508 459L514 453L516 455L518 451L522 453L526 449ZM123 448L124 447L127 452L126 453ZM483 448L485 448L479 454L477 454ZM157 458L160 457L163 460L162 461ZM143 460L144 459L148 463L155 466L152 467ZM489 462L491 462L489 464L491 466L489 468L491 470L490 471L488 469L486 473L485 470L489 466L486 465L484 467L483 464ZM501 480L504 479L505 480L503 482L500 483L499 482ZM423 484L425 484L422 487L419 486ZM445 496L446 495L449 500L448 501ZM183 502L186 501L187 504L186 505ZM409 516L410 515L411 518L408 519L405 518ZM197 518L200 517L202 519L216 521L218 523L232 527L233 530L230 531L228 529L214 527L212 525L202 523ZM163 520L166 519L169 522L166 523ZM417 520L418 519L419 522L414 525L402 527L401 526L404 523L406 525L412 521ZM237 528L240 527L240 529L238 531ZM287 530L292 529L295 532L294 533ZM325 532L340 531L341 532L338 533L334 535L330 533L328 535ZM189 536L190 535L192 537L196 537L200 539L201 542L198 543L190 539Z";
const NAV_LINKS = [{
  label: 'Programs',
  href: 'programs.html'
}, {
  label: 'About',
  href: 'about.html'
}, {
  label: 'Competition',
  href: 'competition.html'
}];
function Enso({
  size = 64,
  color = 'var(--ffd-ink)'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 592 606",
    width: size,
    height: size,
    style: {
      display: 'block',
      flexShrink: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    fill: color,
    d: ENSO_D
  }));
}
function Eyebrow({
  children,
  dark = false,
  style: s
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem',
      fontFamily: 'var(--ffd-font-body)',
      fontWeight: 500,
      fontSize: '0.72rem',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: dark ? 'var(--ffd-tide-light)' : 'var(--ffd-tide-deep)',
      ...s
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 1.5,
      background: dark ? 'var(--ffd-clay-glow)' : 'var(--ffd-clay)',
      display: 'block',
      flexShrink: 0
    }
  }), children);
}
function Waterline({
  dark = false,
  style: s
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 6,
      ...s
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: dark ? 'var(--ffd-line-dark)' : 'var(--ffd-line)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: dark ? 'var(--ffd-clay-glow)' : 'var(--ffd-clay)',
      margin: '0 -3px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: dark ? 'var(--ffd-line-dark)' : 'var(--ffd-line)'
    }
  }));
}
function Btn({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  style: s
}) {
  const [hov, setHov] = useState(false);
  const sz = {
    sm: {
      padding: '0.38rem 0.9rem',
      fontSize: '0.875rem'
    },
    md: {
      padding: '0.62rem 1.35rem',
      fontSize: '1rem'
    },
    lg: {
      padding: '0.82rem 1.9rem',
      fontSize: '1.125rem'
    }
  }[size];
  const v = {
    primary: {
      background: hov ? 'var(--ffd-slate)' : 'var(--ffd-deep-tide)',
      color: 'var(--ffd-foam)',
      border: 'none'
    },
    secondary: {
      background: hov ? 'rgba(89,174,195,0.14)' : 'transparent',
      color: 'var(--ffd-tide-light)',
      border: '1.5px solid rgba(89,174,195,0.6)'
    },
    ghost: {
      background: hov ? 'rgba(242,235,220,0.1)' : 'transparent',
      color: 'var(--ffd-foam)',
      border: '1.5px solid rgba(242,235,220,0.35)'
    },
    outline: {
      background: hov ? 'rgba(51,50,44,0.06)' : 'transparent',
      color: 'var(--ffd-ink)',
      border: '1.5px solid var(--ffd-line)'
    }
  }[variant] || {};
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--ffd-font-body)',
    fontWeight: 500,
    borderRadius: 'var(--ffd-radius)',
    cursor: 'pointer',
    transition: 'all 0.22s',
    textDecoration: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    ...sz,
    ...v,
    ...s
  };
  const h = {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false)
  };
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: base,
    onClick: onClick
  }, h), children) : /*#__PURE__*/React.createElement("button", _extends({
    style: base,
    onClick: onClick
  }, h), children);
}
function EnsoMark({
  size = 38,
  color = 'var(--ffd-deep-tide)'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 592 606",
    width: size,
    height: size,
    style: {
      display: 'block',
      flexShrink: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    fill: color,
    d: ENSO_D
  }));
}
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dd, setDd] = useState(null);
  const [phov, setPhov] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener('scroll', f, {
      passive: true
    });
    return () => window.removeEventListener('scroll', f);
  }, []);
  const cur = window.location.pathname.split('/').pop() || 'index.html';
  const lightHero = cur === 'contact.html';
  const onLight = scrolled || lightHero;
  const pActive = cur === 'partners.html';
  const ddItems = {
    Programs: [{
      l: 'Pool Only Trainings',
      sub: '$175 / month',
      h: 'programs.html'
    }, {
      l: 'Full Performance Package',
      sub: '$275 / month',
      h: 'programs.html'
    }, {
      l: 'Private Coaching',
      sub: '1:1 · Custom',
      h: 'programs.html'
    }],
    About: [{
      l: 'About Natalie',
      sub: 'The person & the practice',
      h: 'about.html'
    }, {
      l: 'Competition Records',
      sub: 'AIDA · World No. 7',
      h: 'competition.html'
    }]
  };
  const txt = onLight ? 'var(--ffd-stone)' : 'rgba(242,235,220,0.85)';
  const txtActive = onLight ? 'var(--ffd-ink)' : 'var(--ffd-foam)';
  const logoColor = onLight ? 'var(--ffd-deep-tide)' : 'var(--ffd-foam)';
  const flowColor = onLight ? 'var(--ffd-tide-deep)' : 'var(--ffd-tide-light)';
  const caret = onLight ? 'var(--ffd-clay)' : 'var(--ffd-clay-glow)';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(242,235,220,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--ffd-line)' : '1px solid transparent',
      transition: 'background 0.35s ease, border-color 0.35s ease'
    }
  }, !scrolled && !lightHero && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '180%',
      background: 'linear-gradient(to bottom, rgba(20,33,32,0.55), rgba(20,33,32,0))',
      pointerEvents: 'none',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      padding: '1.2rem clamp(1.25rem,5vw,4rem)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      textDecoration: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(EnsoMark, {
    color: logoColor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ffd-font-display)',
      fontWeight: 500,
      fontSize: '1.2rem',
      letterSpacing: '0.02em',
      color: logoColor,
      whiteSpace: 'nowrap',
      lineHeight: 1,
      transition: 'color 0.3s ease'
    }
  }, "FREE", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 400,
      color: flowColor
    }
  }, "FLOW"), ' ', "DYNAMICS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.4rem',
      flexShrink: 0
    }
  }, [{
    l: 'Programs',
    h: 'programs.html'
  }, {
    l: 'About',
    h: 'about.html'
  }, {
    l: 'Events',
    h: 'events.html'
  }, {
    l: 'Media',
    h: 'media.html'
  }].map(({
    l,
    h
  }) => {
    const hasDd = l in ddItems;
    const active = cur === h;
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        position: 'relative'
      },
      onMouseEnter: () => setDd(l),
      onMouseLeave: () => setDd(null)
    }, /*#__PURE__*/React.createElement("a", {
      href: h,
      style: {
        fontFamily: 'var(--ffd-font-body)',
        fontWeight: active ? 500 : 400,
        fontSize: '0.9rem',
        color: active ? txtActive : txt,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
        borderBottom: active ? '1.5px solid var(--ffd-clay)' : 'none',
        paddingBottom: '1px',
        transition: 'color 0.3s ease'
      }
    }, l, hasDd && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '0.5rem',
        color: caret,
        lineHeight: 1
      }
    }, "\u25BE")), hasDd && dd === l && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '100%',
        left: '-1rem',
        paddingTop: '0.7rem',
        zIndex: 200
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ffd-foam)',
        border: '1px solid var(--ffd-line)',
        borderRadius: 'var(--ffd-radius-lg)',
        boxShadow: '0 20px 44px -16px rgba(35,60,58,0.26)',
        minWidth: 230,
        padding: '0.4rem'
      }
    }, ddItems[l].map((item, i) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: item.h,
      onMouseEnter: e => e.currentTarget.style.background = 'var(--ffd-shell)',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent',
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.15rem',
        padding: '0.7rem 0.9rem',
        borderRadius: 'var(--ffd-radius)',
        textDecoration: 'none',
        background: 'transparent',
        transition: 'background 0.18s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--ffd-font-body)',
        fontWeight: 500,
        fontSize: '0.88rem',
        color: 'var(--ffd-ink)'
      }
    }, item.l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--ffd-font-body)',
        fontSize: '0.72rem',
        color: 'var(--ffd-stone-soft)'
      }
    }, item.sub))))));
  }), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    variant: onLight ? 'primary' : 'ghost',
    href: BOOKING_URL,
    onClick: openBooking
  }, "Book a session"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 22,
      background: onLight ? 'var(--ffd-line)' : 'rgba(242,235,220,0.3)'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "partners.html",
    onMouseEnter: () => setPhov(true),
    onMouseLeave: () => setPhov(false),
    style: {
      fontFamily: 'var(--ffd-font-body)',
      fontWeight: 500,
      fontSize: '0.82rem',
      letterSpacing: '0.04em',
      color: pActive || phov ? onLight ? 'var(--ffd-foam)' : 'var(--ffd-deep-tide)' : onLight ? 'var(--ffd-cocoa)' : 'var(--ffd-foam)',
      background: pActive || phov ? onLight ? 'var(--ffd-cocoa)' : 'var(--ffd-foam)' : 'transparent',
      border: '1.5px solid ' + (onLight ? 'var(--ffd-cocoa)' : 'rgba(242,235,220,0.6)'),
      borderRadius: 'var(--ffd-radius-sm)',
      padding: '0.4rem 0.85rem',
      textDecoration: 'none',
      transition: 'all 0.2s',
      whiteSpace: 'nowrap'
    }
  }, "Partners"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${P}/natalie-bruce-atmosphere-sunset-coast.jpg`,
    alt: "Sunset over volcanic rock and Atlantic, Tenerife",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 40%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(33,27,20,0.84)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1280,
      margin: '0 auto',
      padding: 'clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,4rem) 3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: '2rem',
      alignItems: 'end',
      borderBottom: '1px solid rgba(242,235,220,0.12)',
      paddingBottom: '2.5rem',
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '0.8rem'
    }
  }, /*#__PURE__*/React.createElement(Enso, {
    size: 44,
    color: "rgba(242,235,220,0.22)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ffd-font-display)',
      fontWeight: 500,
      fontSize: '1.8rem',
      letterSpacing: '0.02em',
      color: 'var(--ffd-foam)',
      lineHeight: 1
    }
  }, "FREE", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 400,
      color: 'var(--ffd-tide-light)'
    }
  }, "FLOW"), '\u00A0', "DYNAMICS")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ffd-font-display)',
      fontStyle: 'italic',
      color: 'var(--ffd-clay-glow)',
      fontSize: '0.95rem'
    }
  }, "by Natalie Bruce")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ffd-font-metric)',
      fontSize: '0.85rem',
      lineHeight: 2.1,
      color: 'var(--ffd-sand)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "@freeflowdynamics"), /*#__PURE__*/React.createElement("div", null, "@natalie.freediver"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@freeflowdynamics.com",
    style: {
      color: 'var(--ffd-tide-light)',
      textDecoration: 'none',
      display: 'block'
    }
  }, "info@freeflowdynamics.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(215,230,226,0.45)'
    }
  }, "Tenerife \xB7 Canary Islands"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
      fontSize: '0.7rem',
      color: 'rgba(148,143,129,0.65)',
      fontFamily: 'var(--ffd-font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Natalie Bruce / Freeflow Dynamics"), /*#__PURE__*/React.createElement("span", null, "Partners: Orca \xB7 USANA \xB7 CETMA"))));
}

/* ── PROGRAMS PAGE ── */

function ProgramsHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '65vh',
      minHeight: 440,
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${P}/natalie-bruce-coaching-pool-dynamic-orca.jpg`,
    alt: "Natalie Bruce in dynamic freediving training in the pool, Orca wetsuit",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 35%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(35,60,58,0.92) 0%, rgba(35,60,58,0.4) 60%, rgba(35,60,58,0.1) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1280,
      margin: '0 auto',
      width: '100%',
      padding: '0 clamp(1.25rem,5vw,4rem) clamp(3rem,6vw,5rem)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true,
    style: {
      marginBottom: '1rem'
    }
  }, "Programs"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--ffd-font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2.8rem,6vw,5rem)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: 'var(--ffd-foam)',
      maxWidth: '18ch'
    }
  }, "Calm is a trained", /*#__PURE__*/React.createElement("br", null), "capacity."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'rgba(215,230,226,0.8)',
      fontWeight: 300,
      maxWidth: '42ch',
      marginTop: '1rem',
      lineHeight: 1.65
    }
  }, "Flow isn't found. It's trained. All programs run online with Natalie from Tenerife.")));
}
function ProgramDetail({
  num,
  tag,
  tagColor,
  title,
  duration,
  price,
  priceUnit,
  who,
  desc,
  items,
  img,
  imgAlt,
  dark,
  cta
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: `program-${num}`,
    style: {
      background: dark ? 'var(--ffd-deep-tide)' : 'var(--ffd-foam)',
      padding: 'clamp(4.5rem,9vw,7.5rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 clamp(1.25rem,5vw,4rem)',
      display: 'grid',
      gridTemplateColumns: num % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
      gap: 'clamp(3rem,7vw,7rem)',
      alignItems: 'center',
      direction: num % 2 === 0 ? 'rtl' : 'ltr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr',
      position: 'relative',
      borderRadius: 'var(--ffd-radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: imgAlt,
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      objectPosition: 'center 20%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '1.2rem',
      left: '1.2rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: tagColor,
      fontFamily: 'var(--ffd-font-body)',
      fontWeight: 500,
      fontSize: '0.76rem',
      borderRadius: 'var(--ffd-radius-sm)',
      padding: '0.25rem 0.7rem',
      backdropFilter: 'blur(8px)'
    }
  }, tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '1rem',
      marginBottom: '1.2rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ffd-font-metric)',
      fontSize: '3rem',
      color: dark ? 'rgba(142,205,217,0.2)' : 'rgba(47,79,77,0.12)',
      letterSpacing: '-0.04em',
      lineHeight: 1
    }
  }, "0", num), /*#__PURE__*/React.createElement(Eyebrow, {
    dark: dark
  }, tag)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--ffd-font-display)',
      fontWeight: 500,
      fontSize: 'clamp(1.9rem,3.8vw,2.8rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: dark ? 'var(--ffd-foam)' : 'var(--ffd-ink)',
      marginBottom: '0.5rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ffd-font-metric)',
      fontSize: '0.82rem',
      color: dark ? 'var(--ffd-mist)' : 'var(--ffd-stone-soft)',
      marginBottom: '1.1rem'
    }
  }, duration), price && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.45rem',
      marginBottom: '1.4rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ffd-font-metric)',
      fontSize: '2.1rem',
      color: dark ? 'var(--ffd-foam)' : 'var(--ffd-deep-tide)',
      letterSpacing: '-0.03em',
      lineHeight: 1
    }
  }, price), priceUnit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ffd-font-body)',
      fontSize: '0.9rem',
      fontWeight: 300,
      color: dark ? 'var(--ffd-mist)' : 'var(--ffd-stone)'
    }
  }, priceUnit)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      color: dark ? 'rgba(215,230,226,0.7)' : 'var(--ffd-stone-soft)',
      fontWeight: 400,
      lineHeight: 1.5,
      marginBottom: '1rem',
      fontStyle: 'italic',
      fontFamily: 'var(--ffd-font-display)'
    }
  }, who), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      color: dark ? 'rgba(183,205,203,0.82)' : 'var(--ffd-stone)',
      lineHeight: 1.68,
      fontWeight: 300,
      marginBottom: '1.6rem'
    }
  }, desc), /*#__PURE__*/React.createElement(Waterline, {
    dark: dark,
    style: {
      marginBottom: '1.6rem'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      marginBottom: '2rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.5rem 1rem'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: '0.85rem',
      color: dark ? 'var(--ffd-tide-light)' : 'var(--ffd-tide-deep)',
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: '0.1rem'
    }
  }, "\u2014"), item))), /*#__PURE__*/React.createElement(Btn, {
    variant: dark ? 'secondary' : 'primary',
    size: "lg",
    href: BOOKING_URL,
    onClick: openBooking
  }, cta))));
}
function HowItWorks() {
  const steps = [{
    n: '01',
    title: 'Enquire',
    desc: 'Fill in the contact form or drop me an email. Tell me where you are in your practice and what you\'re hoping to work toward.'
  }, {
    n: '02',
    title: 'Assessment',
    desc: 'We\'ll have a short call together — to talk through your goals, experience, any physical considerations, and which program fits best.'
  }, {
    n: '03',
    title: 'Your plan',
    desc: 'I put together a structured training plan tailored to you — week by week, with video resources, breathwork guides, and check-in points.'
  }, {
    n: '04',
    title: 'Train',
    desc: 'We work through it together. Weekly sessions, feedback on video analysis, and direct access to me throughout the program.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ffd-deep-tide-2)',
      padding: 'clamp(5rem,11vw,9rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 clamp(1.25rem,5vw,4rem)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true,
    style: {
      marginBottom: '1.2rem'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--ffd-font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2rem,4.5vw,3.2rem)',
      letterSpacing: '-0.02em',
      lineHeight: 1.06,
      color: 'var(--ffd-foam)',
      marginBottom: '3.5rem',
      maxWidth: '22ch'
    }
  }, "From first message to first breath on the line."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '0',
      borderLeft: '1px solid var(--ffd-line-dark)'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderRight: '1px solid var(--ffd-line-dark)',
      padding: '0 2rem 0 1.8rem',
      paddingTop: i === 0 ? 0 : '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ffd-font-metric)',
      fontSize: '2.4rem',
      color: 'rgba(89,174,195,0.2)',
      letterSpacing: '-0.04em',
      marginBottom: '1rem'
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--ffd-font-display)',
      fontWeight: 500,
      fontSize: '1.3rem',
      color: 'var(--ffd-foam)',
      marginBottom: '0.8rem'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.88rem',
      color: 'rgba(183,205,203,0.75)',
      lineHeight: 1.65,
      fontWeight: 300
    }
  }, s.desc))))));
}
function FAQ() {
  const [open, setOpen] = useState(null);
  const qs = [{
    q: 'Do I need to be an experienced freediver to join?',
    a: 'No. Coaching is tailored from complete beginners through to competitive athletes. The Pool Only trainings suit anyone comfortable in the water; the Full Performance package adds dry and gym programming for divers chasing a measurable next level.'
  }, {
    q: 'Are the programs online only, or can I train with you in person?',
    a: 'All programs run online, which means you can train wherever you are in the world. If you\'re based in or visiting Tenerife, in-water sessions are available as an add-on — just mention it in your enquiry.'
  }, {
    q: 'What equipment do I need?',
    a: 'For the online programs, you need access to a pool or open water, a mask, snorkel, and fins. For depth work, a wetsuit is recommended. I\'ll give you a full kit list at the start.'
  }, {
    q: 'How much time commitment is involved each week?',
    a: 'Pool Only trainings run 2–3 pool sessions a week plus breathwork. The Full Performance package adds dry and gym work, typically 5–8 hours total depending on your access. We build the plan around your schedule.'
  }, {
    q: 'I\'m not sure which program is right for me.',
    a: 'That\'s what the initial call is for. Send me a message with a bit about where you are in your practice and we\'ll work it out together. There\'s no pressure to commit before we\'ve spoken.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ffd-shell)',
      padding: 'clamp(5rem,11vw,9rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '0 clamp(1.25rem,5vw,4rem)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '1.2rem'
    }
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--ffd-font-display)',
      fontWeight: 500,
      fontSize: 'clamp(1.9rem,3.8vw,2.8rem)',
      letterSpacing: '-0.02em',
      lineHeight: 1.06,
      color: 'var(--ffd-ink)',
      marginBottom: '3rem'
    }
  }, "Before you dive in."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0'
    }
  }, qs.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '1px solid var(--ffd-line)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? null : i),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '1.4rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ffd-font-body)',
      fontWeight: 500,
      fontSize: '1.02rem',
      color: 'var(--ffd-ink)'
    }
  }, item.q), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ffd-font-metric)',
      fontSize: '1.2rem',
      color: 'var(--ffd-clay)',
      flexShrink: 0,
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform 0.2s',
      display: 'block',
      lineHeight: 1
    }
  }, open === i ? '×' : '+')), open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: '1.5rem',
      fontSize: '0.98rem',
      color: 'var(--ffd-stone)',
      lineHeight: 1.7,
      fontWeight: 300
    }
  }, item.a))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ffd-line)'
    }
  }))));
}
function ProgramsCTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ffd-deep-tide)',
      padding: 'clamp(4rem,9vw,7rem) 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600,
      margin: '0 auto',
      padding: '0 clamp(1.25rem,5vw,4rem)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--ffd-font-display)',
      fontWeight: 400,
      fontSize: 'clamp(1.5rem,3.5vw,2.3rem)',
      lineHeight: 1.3,
      letterSpacing: '-0.015em',
      color: 'var(--ffd-foam)',
      marginBottom: '1rem'
    }
  }, "Not sure which program fits?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      color: 'rgba(183,205,203,0.75)',
      fontWeight: 300,
      lineHeight: 1.65,
      marginBottom: '2rem'
    }
  }, "Send a message. We\\'ll have a short call and work it out together \u2014 no commitment until it feels right."), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    size: "lg",
    href: BOOKING_URL,
    onClick: openBooking
  }, "Get in touch")));
}
const PROGRAMS_DATA = [{
  num: 1,
  tag: 'Pool training',
  tagColor: 'rgba(89,174,195,0.22)',
  title: 'Pool Only Trainings',
  duration: 'Monthly · Online',
  price: '$175',
  priceUnit: '/ month',
  who: 'For divers who want consistent, structured pool work to build breath-hold, technique, and confidence.',
  desc: 'Personalised virtual coaching with a structured, performance-based approach — drawn from a background in Kinesiology and Molchanovs and NASM certification. Two to three guided pool sessions a week, programmed to keep moving you forward.',
  items: ['2–3 pool training sessions per week', 'Static, dynamic & swimming workouts', 'Structured weekly programming', 'WhatsApp support anytime'],
  img: `${P}/natalie-bruce-coaching-pool-dynamic-orca.jpg`,
  imgAlt: 'Natalie Bruce in dynamic pool freediving training, Orca wetsuit',
  dark: false,
  cta: 'Book Pool Only'
}, {
  num: 2,
  tag: 'Full performance',
  tagColor: 'rgba(229,176,80,0.25)',
  title: 'Full Performance Package',
  duration: 'Monthly · Online',
  price: '$275',
  priceUnit: '/ month',
  who: 'For divers ready to train like an athlete — water, dryland, and gym, with direct coaching contact.',
  desc: 'Everything in the pool trainings, plus dry and gym programming and a monthly video call to review progress and refine technique. A complete performance system built around your goals.',
  items: ['Everything in Pool Only trainings', 'Dry & gym programming', '1 video call per month', 'WhatsApp support anytime'],
  img: `${P}/natalie-bruce-competition-descent-safety-divers.jpg`,
  imgAlt: 'Natalie Bruce ascending the line between two safety divers in open water',
  dark: true,
  cta: 'Book Full Performance'
}, {
  num: 3,
  tag: 'Private 1:1',
  tagColor: 'rgba(136,153,109,0.22)',
  title: 'Private Coaching',
  duration: 'Flexible · Online + in-water',
  price: 'Custom',
  priceUnit: '',
  who: 'For athletes with specific goals or timelines who want fully bespoke, one-to-one attention.',
  desc: 'No fixed template — we build entirely around you, your schedule, and your level. If you are in Tenerife or passing through, we can combine online work with in-water sessions.',
  items: ['Tailored plan from day one', 'Direct 1:1 access to Natalie', 'In-water option in Tenerife', 'Ongoing feedback & adjustments'],
  img: `${P}/natalie-bruce-competition-surface-recovery.jpg`,
  imgAlt: 'Natalie Bruce surfacing at the line smiling after a dive',
  dark: false,
  cta: 'Enquire about Private'
}];
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(ProgramsHero, null), PROGRAMS_DATA.map(p => /*#__PURE__*/React.createElement(ProgramDetail, _extends({
    key: p.num
  }, p))), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(ProgramsCTA, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.hydrateRoot(document.getElementById('root'), React.createElement(App));
})();
