import React from 'react';

class TargetHeader extends React.Component{
    render(){
        return(
            <html>
            <div class="header-backdrop"></div>
<header class="header--top">
  <div class="header--topPromo">
    <a class="link link-white" href="http://www.target.com/c/target-shipping/-/N-551st?lnk=globalespot_shippinghub">free shipping on orders of $35+ &amp; free returns</a>
  </div>
  <nav class="header--topNav">
    <ul>
        <li><a class="link link-white" href="http://www.target.com/gift-registry/?lnk&#x3D;gnav_registries">registries &amp; lists</a></li>
        <li><a class="link link-white" href="http://weeklyad.target.com/?nav&#x3D;open">weekly ad</a></li>
        <li><a class="link link-white" href="http://www.target.com/c/redcard/-/N-4tfyn">REDcard</a></li>
        <li class="l-hidden-xs l-hidden-sm l-hidden-md"><a class="link link-white" href="http://www.target.com/c/gift-cards/-/N-5xsxu">gift cards</a></li>
        <li><a class="link link-white" href="http://www.target.com/store-locator/find-stores">find stores</a></li>

    </ul>
  </nav>



</header>


<nav id="header" class="header header--nav" data-behavior="header">
  
  <a href="http://www.target.com" class="icon" aria-label="home">
    <img class="a11y-focus" alt="" src='data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2221%22%20height%3D%2221%22%20viewBox%3D%220%200%2021%2021%22%3E%3Cpath%20d%3D%22M10.5%200C4.7%200%200%204.702%200%2010.5%200%2016.3%204.7%2021%2010.5%2021%2016.303%2021%2021%2016.3%2021%2010.5%2021%204.702%2016.302%200%2010.5%200m0%2017.55c-3.894%200-7.05-3.156-7.05-7.05%200-3.894%203.156-7.05%207.05-7.05%203.895%200%207.05%203.156%207.05%207.05%200%203.894-3.154%207.05-7.05%207.05%22%20fill%3D%22%23cb2026%22%2F%3E%3Cpath%20d%3D%22M10.5%206.9c-1.988%200-3.6%201.61-3.6%203.6%200%201.988%201.612%203.6%203.6%203.6s3.6-1.61%203.6-3.6-1.612-3.6-3.6-3.6%22%20fill%3D%22%23cb2026%22%2F%3E%3C%2Fsvg%3E'></img>
  </a>

  
  <a href="#" class="headerButton js-toggle-nav-a11y js-largeBtn l-hidden-xs l-hidden-sm l-hidden-md" data-header="navigation" id="js-toggleLeftNavLg" data-target="#modalLeftNav" data-text="categories" aria-label="categories - shows more content">
    categories
    <i class="icon icon-inlineArrow"></i>
  </a>


  <a href="#" class="icon js-toggle-nav-a11y js-standardBtn l-hidden-lg" data-header="navigation" id="js-toggleLeftNav" data-target="#modalLeftNav" data-text="menu" aria-label="menu - shows more content">
    <img class="a11y-focus" alt="" src='data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2215%22%20viewBox%3D%220%200%2020%2015%22%3E%3Cg%20fill%3D%22%23CB2026%22%3E%3Cpath%20d%3D%22M20%202c0%20.55-.45%201-1%201H1c-.55%200-1-.45-1-1V1c0-.55.45-1%201-1h18c.55%200%201%20.45%201%201v1zM20%208c0%20.55-.45%201-1%201H1c-.55%200-1-.45-1-1V7c0-.55.45-1%201-1h18c.55%200%201%20.45%201%201v1zM20%2014c0%20.55-.45%201-1%201H1c-.55%200-1-.45-1-1v-1c0-.55.45-1%201-1h18c.55%200%201%20.45%201%201v1z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'></img>
  </a>


  <a href="#" class="headerButton headerButton--arrow js-toggle-nav-a11y js-secondaryBtn  l-hidden-xs l-hidden-sm l-hidden-md" data-header="navigation" id="js-toggleSecondaryNav" data-text="for you" aria-label="for you - shows more content"  data-target="#js-modalSecondary" >
    deals
    <i class="icon icon-inlineArrow"></i>
  </a>




  <div id="searchForm" class="header--nav--searchArea" data-header="search">

    <form class="form form-inputSearch" action="http://www.target.com/s" method="get" data-behavior="">
    
      <label id="searchLabel" for="search" aria-hidden="true" data-text="search">
        <span aria-hidden="true" class="form-inputSearch--icon"></span>
        <span class="form-inputSearch--labelText">search</span>
      </label>
    

        <input id="search" name="searchTerm" class="form--control" type="search" autocorrect="off" autocapitalize="off" autocomplete="off" aria-labelledby="searchLabel" data-empty="true"/>

      <button data-search="reset" type="reset" class="btn-search-reset" aria-hidden="true">
        <span class="h-sr-only">reset</span>
      </button>
      <button data-search="submit" type="submit" class="btn btn-primary btn-search" aria-hidden="true">go</button>
    </form>

    <button data-search="cancel" type="cancel" class="btn btn-link btn-cancel" aria-hidden="true">cancel</button>
  </div>


  <a href="#" class="headerButton headerButton-wider headerButton--arrow l-hidden-xs l-hidden-sm l-hidden-md js-toggleRightNav js-largeBtn a11y-focus-afterSearch" data-header="navigation" id="js-toggleRightNavLg" data-target="#js-modalRightNav" data-text="my account" aria-label="my account - shows more content">
    my account
    <i class="icon icon-inlineArrow"></i>
  </a>


  <a href="#" class="icon l-hidden-lg a11y-focus-afterSearch    js-toggle-nav-a11y js-toggleRightNav js-standardBtn" data-header="navigation" id="js-toggleRightNav" data-target="#js-modalRightNav" data-text="my account" aria-label="my account - shows more content">
    <img class="a11y-focus" alt="" src='data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2217%22%20viewBox%3D%220%200%2020%2017%22%3E%3Cpath%20fill%3D%22%23CB2026%22%20d%3D%22M19.326%2014.36c-.712-.652-1.7-.993-2.603-1.312-1.67-.59-4.65-1.357-4.363-3.638.14-1.11.76-1.58%201.14-2.61.295-.797.425-1.44.42-2.268-.01-1.144-.138-2.893-1.107-3.665C12.04.25%2010.983%200%2010%200c-.953.01-1.95.226-2.72.794-.974.72-1.195%202.44-1.2%203.568-.004.855.14%201.61.42%202.438.348%201.03.924%201.4%201.118%202.485.415%202.306-2.532%203.13-4.22%203.72-.916.32-1.91.654-2.65%201.29-.86.734-.742%201.678-.743%202.705h19.988c0-.98.126-1.913-.667-2.64%22%2F%3E%3C%2Fsvg%3E'></img>
  </a>


  <a href="#" class="headerButton l-hidden-xs l-hidden-sm l-hidden-md" aria-label="Cart">
    <img class="a11y-focus h-tightSpacingLeft" alt="" src="data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2222.418%22%20viewBox%3D%220%200%2024%2022.417679%22%20width%3D%2224%22%3E%3Cg%20fill%3D%22%23c00%22%3E%3Cpath%20d%3D%22M19.678%2019.894a1.262%201.262%200%201%200%200%202.524%201.262%201.262%200%200%200%200-2.524%22%2F%3E%3Cpath%20d%3D%22M8.128%209.746a.934.934%200%201%201%200%201.869.934.934%200%200%201%200-1.869M6.293%204.552a.934.934%200%201%201%201.868%200%20.934.934%200%200%201-1.868%200M9.35%206.628a.94.94%200%201%201%200%201.879.94.94%200%200%201%200-1.879m2.11-2.582a.925.925%200%201%201%200%201.85.925.925%200%200%201%200-1.85m2%202.754a.923.923%200%201%201%200%201.846.923.923%200%200%201%200-1.846m2.235-2.325a.916.916%200%201%201%200%201.833.916.916%200%200%201%200-1.833m.034%206.816a.916.916%200%201%201%200-1.833.916.916%200%200%201%200%201.833m1.84-4.318a.907.907%200%201%201%200%201.814.907.907%200%200%201%200-1.814m1.961%202.342a.907.907%200%201%201%200%201.815.907.907%200%200%201%200-1.815m.4-4.411a.908.908%200%201%201-.002%201.815.908.908%200%200%201%20.001-1.815m-8%206.549a.925.925%200%201%201%200-1.85.925.925%200%200%201%200%201.85m-4.215%201.932l13.335-.675a1.301%201.301%200%200%200%201.203-.99l1.726-6.927a.758.758%200%200%200-.632-.933L4.293%201.243C3.607%201.138%202.884.974%202.22.708L.686.043a.49.49%200%200%200-.597.156.482.482%200%200%200%20.2.722l1.864.81c.429.196.718.608.885%201.26l3.601%2013.843a.825.825%200%200%201-.215.792l-1.56%201.56a.851.851%200%200%201-.75.224%201.516%201.516%200%200%200-1.744%201.253A1.516%201.516%200%200%200%204.106%2022.4a1.517%201.517%200%200%200%201.255-1.746.849.849%200%200%201%20.224-.748l1.518-1.517a.819.819%200%200%201%201.027-.114c.668.442%201.58.777%202.816.777h9.517c.617%200%201.241.19%201.684.62a.482.482%200%200%200%20.707-.036c.17-.203.129-.512-.07-.686a3.475%203.475%200%200%200-2.292-.861h-9.546c-2.814%200-3.505-2.035-3.552-2.185l-.4-1.536a.786.786%200%200%201%20.72-.983%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"></img>
  </a>


  <a href="https://www.target.com/co-cart" class="icon l-hidden-lg" aria-label="cart 0 items">
    <img class="a11y-focus" alt="" src='data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2221%22%20height%3D%2219.762%22%20viewBox%3D%220%200%2021%2019.762%22%3E%3Cg%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23CB2026%22%3E%3Cpath%20d%3D%22M20.928.494c.148-.143.08-.49-.31-.49-.266-.016-.54.04-.82.13-.846.27-1.748.865-2.625.93%200%200-17.077%201.328-17.146%201.424-.168.354.51.647.598%201.036.085.39-.018%204.822%201.757%206.27%201.415%201.11%209.537.583%2010.103.828.567.244%201.837.777%201.19%203.135-.438%201.682-5.69%201.464-5.69%201.464s-6.28-.36-7.49.375c-.35.262-.062%201.92.62%201.555.956-.55%204.716-.104%206.58-.104%201.862%200%204.453.26%206.627-.674.347.154%201.642.596%202.29%201.453-.04.13-.062.27-.062.412%200%20.785.64%201.425%201.422%201.425.79%200%201.432-.64%201.432-1.425%200-.787-.64-1.424-1.432-1.424-.068%200-.137.003-.21.014-.548-.62-1.91-2.165-1.9-2.795-.01-2.17%201.675-9.003%203.007-12.05.192-.51%201.14-.653%202.058-1.488m-8.325%202.3c.45.007.812.38.805.832-.007.45-.38.812-.832.805-.45-.008-.812-.38-.805-.832.006-.453.38-.812.833-.805m-2.264.164c.45.008.81.38.804.833-.005.45-.38.812-.833.805-.45-.01-.81-.382-.803-.835.01-.45.38-.81.832-.803m-2.262.165c.45.008.81.38.805.832-.01.453-.384.812-.834.805-.454-.01-.81-.383-.804-.835.01-.452.38-.812.832-.803m-2.262.164c.45.007.81.38.802.832-.008.45-.38.81-.83.802-.453-.005-.81-.378-.807-.83.01-.453.385-.813.836-.804m-3.095.967c.007-.45.38-.813.832-.803.45.007.81.38.802.832-.005.452-.377.81-.83.803-.452-.006-.81-.378-.803-.832M3.94%206.34c.01-.452.385-.812.836-.804.453.006.812.38.804.832-.01.454-.383.812-.834.805-.45-.008-.81-.38-.806-.833m1.906%202.926c-.45-.008-.813-.38-.803-.833.008-.453.38-.81.832-.803.453.007.812.38.804.83-.007.454-.38.814-.832.806m.36-3.04c.008-.452.38-.81.83-.806.453.008.81.38.804.833-.005.452-.38.81-.83.804-.452-.008-.813-.38-.803-.832m1.9%202.933c-.45-.007-.815-.38-.803-.83.005-.455.378-.814.83-.806.456.008.813.38.807.83-.01.453-.38.814-.836.806m.362-3.048c.007-.45.38-.812.83-.804.452.008.813.38.805.833-.007.45-.38.81-.832.803-.45-.007-.812-.38-.802-.833m1.9%202.99c-.452-.01-.813-.382-.805-.832.008-.452.383-.812.837-.805.45.007.808.38.802.832-.01.45-.384.812-.835.804m.36-3.104c.008-.453.38-.812.835-.804.45.007.81.38.804.832-.01.453-.38.812-.835.805-.452-.01-.81-.383-.804-.834m1.902%203.044c-.453-.008-.812-.38-.806-.832.007-.45.38-.81.833-.803.453.007.812.38.803.833-.007.45-.38.81-.83.802m1.164-2.33c-.453-.005-.812-.378-.803-.83.004-.452.378-.812.833-.803.45.006.81.38.8.83-.006.453-.38.813-.83.804m1.042-2.443c-.45-.01-.81-.382-.803-.834s.383-.81.834-.804c.45.008.812.38.805.83-.01.454-.382.814-.835.807%22%2F%3E%3Cpath%20d%3D%22M2.463%2017.43c-.63%200-1.14.523-1.14%201.166%200%20.645.51%201.166%201.14%201.166.63%200%201.14-.52%201.14-1.166%200-.642-.51-1.165-1.14-1.165%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'></img>
  </a>


  <div id="typeahead-contain">
    <ul></ul>
  </div>
</nav>

<div class="modal-nav modal-left" tabindex="-1" role="dialog" aria-labelledby="leftNav" aria-hidden="true" id="modalLeftNav">
  <div class="backdrop"></div>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-body modal-bottomSpacing">


          <nav class="navigation " id="leftNavigation" data-behavior="navigation">




            <ul class="navigation--list">


                <li class="navigation--link" id="5">
                  <a href="javascript:void(0);" class="navigation--url "  data-text = "main menu"  >
                    browse by category
                  </a>
                </li>


                <li class="navigation--link" id="">
                  <a href="http://www.target.com/target-crush/stlist" class="navigation--url "  >
                    recommendations
                  </a>
                </li>

                <li class="navigation--link" id="">
                  <a href="http://weeklyad.target.com/?nav&#x3D;open" class="navigation--url "  >
                    weekly ad
                  </a>
                </li>

                <li class="navigation--link" id="">
                  <a href="http://www.target.com/store-locator/find-stores?lnk=find_stores" class="navigation--url "  >
                    find stores
                  </a>
                </li>


                <li class="navigation--link" id="">
                  <a href="http://www.target.com/gift-registry/?lnk=registries" class="navigation--url "  >
                    registries &amp; lists

                  </a>
                </li>


                <li class="navigation--link" id="">
                  <a href="http://www.target.com/c/redcard/-/N-4tfyn" class="navigation--url "  >
                    REDcard

                  </a>
                </li>


                <li class="navigation--link" id="">
                  <a  href="http://coupons.target.com/" class="navigation--url "  >
                    deals &amp; coupons
                  </a>
                </li>


                <li class="navigation--link" id="">
                  <a href="http://www.target.com/c/target-subscriptions-ways-to-shop/-/N-55b84" class="navigation--url "  >
                    subscriptions
                  </a>
                </li>


                <li class="navigation--link" id="">
                  <a href="http://www.target.com/c/pharmacy-health/-/N-54y52?lnk=continue_at_Target" class="navigation--url "  >
                    pharmacy
                  </a>
                </li>
              <li class="navigation--close">
                <a href="#" class="navigation--close"><span class="navigation--text">close navigation</span></a>
              </li>
            </ul>
          </nav>
      </div>

    </div>
  </div>
</div>

<div class="modal-nav modal-secondary" tabindex="-1" role="dialog" aria-labelledby="modalSecondary" aria-hidden="true" id="js-modalSecondary">
  <div class="backdrop"></div>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-body">


          <nav class="navigation " id="secondaryNavigation" data-behavior="navigation">




            <ul class="navigation--list">


                <li class="navigation--link" id="">
                  <a href="http://www.target.com/c/clearance/-/N-5q0ga" class="navigation--url "  >
                    clearance
                  </a>
                </li>


                <li class="navigation--link" id="">
                  <a href="http://weeklyad.target.com" class="navigation--url "  >
                    weekly ad
                  </a>
                </li>

                <li class="navigation--link" id="">
                  <a href="http://www.target.com/c/weekly-deals/-/N-4xw74" class="navigation--url "  >
                    top deals
                  </a>
                </li>
                
                <li class="navigation--link" id="">
                  <a href="http://cartwheel.target.com" class="navigation--url "  >
                    cartwheel
                  </a>
                </li>


                <li class="navigation--link" id="">
                  <a href="http://coupons.target.com/" class="navigation--url "  >
                    printable coupons
                  </a>
                </li>
              <li class="navigation--close">
                <a href="#" class="navigation--close"><span class="navigation--text">close navigation</span></a>
              </li>
            </ul>
          </nav>
      </div>

    </div>
  </div>
</div>


<div class="modal-nav modal-right" tabindex="-1" role="dialog" aria-labelledby="rightNav" aria-hidden="true" id="js-modalRightNav">
  <div class="backdrop"></div>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-body">


          <nav class="navigation " id="rightNavigation" data-behavior="navigation">




            <ul class="navigation--list">


                <li class="navigation--link" id="">
                  <a href="http://www.target.com/gam-login" class="navigation--url "  >
                    sign in
                  </a>
                </li>


                <li class="navigation--link" id="">
                  <a href="http://www.target.com/gam-guestregistration" class="navigation--url "  >
                    create account
                  </a>
                </li>


                <li class="navigation--link" id="">
                  <a id="" href="http://www.target.com/gam-findorder?lnk=acct_nav_track_orders" data-text="" data-secure="true" class="navigation--url ">  orders  <span class="navigation--subtext">track + manage</span>  </a>


                </li>


                <li class="navigation--link" id="">
                  <a id="rightNav-giftCards" href="http://www.target.com/giftcard/check-balance?lnk=acct_nav_check_balance" data-text="" data-secure="true" class="navigation--url ">  gift cards  <span class="navigation--subtext">check balances</span>  </a>





                </li>


                <li class="navigation--link" id="">
                  <a id="rightNav-redCard" href="https://rcam.target.com/" data-text="" class="navigation--url " data-behavior="manage-redCard">  REDcard  <span class="navigation--subtext">make payments</span>  </a>



                </li>


                <li class="navigation--link" id="">
                  <a href="http://www.target.com/store-locator/find-stores" class="navigation--url "  >
                    my store
                  </a>
                </li>







              <li class="navigation--close">
                <a href="#" class="navigation--close"><span class="navigation--text">close navigation</span></a>
              </li>
            </ul>
          </nav>

      </div>

    </div>
  </div>
</div>
<script src="//tgtfiles.target.com/2016/exportableHeader/js/vendor/jquery/dist/jquery.js"></script>
<script src="//tgtfiles.target.com/2016/exportableHeader/js/vendor/requirejs/require.js"></script>
</html>   
        )
    }

}
export default TargetHeader;