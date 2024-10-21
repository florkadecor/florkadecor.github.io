(function($) {
  // varibel global target hasil
  var metodeHasilInvestasi                 = $('#metodeInvest');
  var valMetodeHasilInvestasi              = metodeHasilInvestasi.val();
  // var valMetodeHasilInvestasi           = "InvOneTime";
  var resikoHasilInvestasi                 = $('#resiko');
  var valResikoHasilInvestasi              = resikoHasilInvestasi.val();
  var revenueReksaHasilInvestasi           = $('#revenueReksa');
  var textRevenueReksaHasilInvestasi       = $('#text-dana-invest');
  var sliderRevenueReksaHasilInvestasi     = $('#sliderRevenueReksa');
  var valRevenueReksaHasilInvestasi        = revenueReksaHasilInvestasi.val();
  var perideReksaDanaBulanan               = $('.perideReksaDanabulanan');
  var perideReksaDanaTahunan               = $('.perideReksaDanaTahunan');

  var perideReksaDanaInvestTahunan         = $('.perideReksaDanaInvestTahunan');
  var perideReksaDanaInvestbulanan         = $('.perideReksaDanaInvestbulanan');

  var periodReksaHasilInvestasi            = $('#periodReksaTahun');
  var sliderPeriodReksaHasilInvestasi      = $('#sliderPeriodReksaTahun');
  var periodReksaHasilInvestasiBulan       = $('#periodReksaBulan');
  var sliderPeriodReksaHasilInvestasiBulan = $('#sliderPeriodReksaBulan');

  var valPeriodReksaHasilInvestasi         = periodReksaHasilInvestasi.val();
  var valPeriodReksaHasilInvestasiBulan    = sliderPeriodReksaHasilInvestasiBulan.val();
  var estimateReturnHasilInvestasi1        = $('#estimateReturnHasilInvestasi1');
  var valueEstimateReturnHasilInvestasi1   = '0';
  var estimateReturnHasilInvestasi2        = $('#estimateReturnHasilInvestasi2');
  var valueEstimateReturnHasilInvestasi2   = '0';
  var valueEstimateReturnHasilInvestasi    = estimateReturnHasilInvestasi1.val()+'.'+estimateReturnHasilInvestasi2.val();
  var danaHasilInvestasi                   = $('#targetInvest');
  var textJangkaPeriode                    = $('#text-jangka-period'); //belom diitunggg

  // variabel global dana investasi
  var metodeDanaInvestasi                  = $('#metodeInvestDana');
  var valMetodeDanaInvestasi               = metodeDanaInvestasi.val();
  var resikoDanaInvestasi                  = $('#resikoDana');
  var valResikoDanaInvestasi               = resikoDanaInvestasi.val();
  var revenueDanaReksa                     = $('#revenueReksaDana');
  var textRevenueDanaReksa                 = $('.textRevenueDanaReksa');
  var sliderRevenueDanaReksa               = $('#sliderRevenueReksaDana');
  var valRevenueDanaReksa                  = revenueDanaReksa.val();
  var periodDanaReksa                      = $('#periodReksaDanaTahun');
  var valPeriodDanaReksa                   = periodDanaReksa.val();
  var sliderPeriodDanaReksa                = $('#sliderPeriodReksaDanaTahun');

  var periodDanaReksaBulan                 = $('#periodReksaDanaBulan');
  var sliderPeriodDanaReksaBulan           = $('#sliderPeriodReksaDanaBulan');
  var valPeriodDanaReksaBulan              = periodDanaReksaBulan.val();
  // var estimateReturnDana                = $('#estimateReturnDana');
  var estimateReturnDana1                  = $('#estimateReturnHasilInvestasiDana1');
  var valueEstimateReturnDana1             = '0';
  var estimateReturnDana2                  = $('#estimateReturnHasilInvestasiDana2');
  var valueEstimateReturnDana2             = '0';
  var valueEstimateReturnDana              = estimateReturnDana1.val()+'.'+estimateReturnDana2.val();
  // var valueEstimateReturnDana           = '0';
  var danaInvestasi                        = $('#targetInvestDana');
  var arryEstimasi                         = ['0.00','6.00','7.50','10.00','15.00'];

  //var popup
  var valueDanaInvestasi                   = $('.valueDanaInvestasi');
  var valueJangkaWaktu                     = $('.valueJangkaWaktu');
  var valueEstimasiReturnPerTahun          = $('.valueEstimasiReturnPerTahun');
  var valueTargetHasil                     = $('.valueTargetHasil');

  var btnUnduhReksadana                    = $('.btnUnduhReksadana');
  var modal                                = $('#modal-simulasi-reksa-dana');
  var modalTarget                          = $('#modalTarget');
  var modalDana                            = $('#modalDana');
  var closeModal                           = $('.close-modal');

  var btnnotunduhtarget                    = $('.btnnotunduhtarget');
  var btnunduhtarget                       = $('.btnunduhtarget');
  var btnnotunduhdana                      = $('.btnnotunduhdana');
  var btnunduhdana                         = $('.btnunduhdana');
  var mTabActive                           = $('.m-tabs-item');
  var textValueDanaInvestasi               = $('.textvalueDanaInvestasi');
  var textValueTargetHasil                 = $('.textvalueTargetHasil');
  var tabActive                            = $('.m-tabs-menu').find('.active').attr('data-target');
  var strDanaNew=0;
  var strTargetNew=0;
  var strTargetPeriodeNew=0;
  var strDanaPeriodeNew=0;
  // Start Calculator
  $(function () {

    valResikoHasilInvestasi = resikoHasilInvestasi.val();
    estimasiHasilInvestasi(valResikoHasilInvestasi);
    revenueReksaHasilInvestasi.val(thousandSeparator(valRevenueReksaHasilInvestasi));
    valResikoDanaInvestasi = resikoDanaInvestasi.val();
    estimasiHasilInvestasiDana(valResikoDanaInvestasi);
    revenueDanaReksa.val(thousandSeparator(valRevenueDanaReksa))
    btnUnduhReksadana.on(
      'click', 
      function(){
        modal.show();
      }
    )
    closeModal.on(
      'click', 
      function() {
        modal.hide();
      }
    )
    mTabActive.on(
      'click', 
      function() {
        var target = $(this).find('a').attr('data-target');
        if (target=='#targethasil') {
          modalTarget.show();
          modalDana.hide();
        } else {
          modalTarget.hide();
          modalDana.show();
        }

      }
    )

    window.onclick = function(event) {
      
      if (event.target == modal[0]) {
        modal.hide();
      }

    }
    
    // Rumus hasil target  
    //RUMUS 1 metode InvOneTime
    function HitungHasilTarget() {
        var DanaInvestasi                      = revenueReksaHasilInvestasi.val();
        var Tahun                              = periodReksaHasilInvestasi.val();
        var  valueEstimateReturnHasilInvestasi = estimateReturnHasilInvestasi1.val()+'.'+estimateReturnHasilInvestasi2.val();
        var Persen                             = valueEstimateReturnHasilInvestasi;
        var VarTetap                           = 1;
        var Hasil                              = 0;
      
        //Cek validasi form harus diisi dan dipilih ddl nya
        if (DanaInvestasi != "" && DanaInvestasi != "0") {
          
            if (Tahun != "" && Tahun != "0") {
              
                if (valResikoHasilInvestasi != "") {
                  
                    if (Persen >= 0) {
                      
                      DanaInvestasi = DanaInvestasi.replace(/\./g, '');
                      Hasil         = parseInt(DanaInvestasi) * (Math.pow((parseInt(VarTetap) + (parseFloat(Persen) / 100)), parseInt(Tahun)))
                    
                    
                      valueDanaInvestasi.text('Rp '+thousandSeparator(DanaInvestasi))
                      // valueTargetHasil.text('Rp '+thousandSeparator(Math.round(Hasil)));
                      valueJangkaWaktu.text(Tahun+' Tahun');
                      valueEstimasiReturnPerTahun.text(Persen+'%');
                      textValueTargetHasil.text('Rp '+thousandSeparator(Math.round(Hasil)))
                      btnnotunduhtarget.hide();
                      btnunduhtarget.removeClass('hide');
                      modalTarget.show();
                      modalDana.hide();

                    } 
                }
            } 
        }
    }
    //RUMUS 1 metode InvRegular
    function HitungRegularHasilTarget() {
    
        //alert("rumus belum fix, per tanggal 26 Jul dipake aja yang di excel");
        var DanaInvestasi  = revenueReksaHasilInvestasi.val();
        var Tahun          = periodReksaHasilInvestasiBulan.val();
        var Persen         = valueEstimateReturnHasilInvestasi;
        var VarTetap       = 1;
        var Hasil          = 0;
        var paramA         = 0;	// {1+(i/12)}
        var paramB         = 0;	// {1+(i/12)}^(nx12)
        var PersenPerBulan = 0;	// (i/100) / 12
        var nBulan         = 0;	// Tahun * 12
        var ParamC         = 0;	// Dana * PersenPerBulan

        //Cek validasi form harus diisi dan dipilih ddl nya
        if (DanaInvestasi != "" && DanaInvestasi != "0") {
            if (Tahun != "" && Tahun != "0") {
                
              if (valResikoHasilInvestasi != "") {
                    
                    if (Persen >= 0) {

                      DanaInvestasi  = DanaInvestasi.replace(/\./g, '');
                      PersenPerBulan = (parseFloat(Persen) / 100) / 12;
                      nBulan         = parseInt(Tahun);
                      paramA         = VarTetap + PersenPerBulan;
                      paramB         = Math.pow(paramA, nBulan);
                      Hasil          = paramA * parseInt(DanaInvestasi) * ((paramB - VarTetap) / PersenPerBulan)
    
                    
                      // danaInvestasi.text('Rp '+thousandSeparator(Math.round(Hasil)));
                      valueDanaInvestasi.text('Rp '+thousandSeparator(DanaInvestasi))
                      // valueTargetHasil.text('Rp '+thousandSeparator(Math.round(Hasil)));
                      valueJangkaWaktu.text(Tahun+' Bulan');
                      valueEstimasiReturnPerTahun.text(Persen+'%');
                      textValueTargetHasil.text('Rp '+thousandSeparator(Math.round(Hasil)))
    
                      btnnotunduhtarget.hide();
                      btnunduhtarget.removeClass('hide');
                      modalTarget.show();
                      modalDana.hide();

                    }
                    
                }
                
            }
          
        }
        
    }
    function forceNumeric(number){
        var $input = number;
        return $input.replace(/[^\d]+/g,'');
    }
    function thousandSeparator(xnumber){
      return xnumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
    }
    // Rumus hasil target 
  
    function HitungKalkulasi() {
      //cek radio button yang dipilih adalah yang invest 1x atau yang regular
          if (document.getElementById("InvOneTime").checked == true) {
              //alert("invest one time");
              if (document.getElementById("lblTitle").innerHTML == DanaAwal) {
                  //HitungDanaAwal();
                  HitungHasilTarget();
              }
              else {
                  
                  HitungDanaAwal();
              }
          }
          else {
              //alert("invest regular");
              if (document.getElementById("lblTitle").innerHTML == DanaAwal + " per-bulan") {
                  HitungRegularDanaAwal();
              }
              else {
                  HitungRegularHasilTarget();
              }
          }
      
  }
    // Rumus dana investasi  
    //RUMUS 1 metode InvOneTime

    function HitungRegularDanaAwal() {
      
        var DanaInvestasi            = revenueDanaReksa.val();
        var Tahun                    = periodDanaReksaBulan.val();
      
        var  valueEstimateReturnDana = estimateReturnDana1.val()+'.'+estimateReturnDana2.val();
        var Persen                   = valueEstimateReturnDana;
        var VarTetap                 = 1;
        var Hasil                    = 0;

        var paramA                   = 0;	//{1+(i/12)}
        var paramB                   = 0;	//{1+(i/12)}^(nx12)
        var PersenPerBulan           = 0;	//(i/100) / 12
        var nBulan                   = 0;	//Tahun * 12
        
        //Cek validasi form harus diisi dan dipilih ddl nya
        if (DanaInvestasi != "" && DanaInvestasi != "0") {
            
            if (Tahun != "" && Tahun != "0") {

                if (valResikoDanaInvestasi!= "") {

                    if (Persen >= 0) {

                        DanaInvestasi  = DanaInvestasi.replace(/\./g, '');
                        PersenPerBulan = (parseFloat(Persen) / 100) / 12;
                        nBulan         = parseInt(Tahun);
                        paramA         = VarTetap + PersenPerBulan;
                        paramB         = Math.pow(paramA, nBulan);
                        paramC         = parseFloat(DanaInvestasi) * PersenPerBulan;
      
                        Hasil          = (paramC / ((paramB - VarTetap) * paramA));
      
                        // danaHasilInvestasi.text('Rp '+thousandSeparator(Math.round(Hasil)));
                        textValueDanaInvestasi.text('Rp '+thousandSeparator(Math.round(Hasil)));
                        valueTargetHasil.text('Rp '+thousandSeparator(DanaInvestasi));
                        valueJangkaWaktu.text(Tahun+' Bulan');
                        valueEstimasiReturnPerTahun.text(Persen+'%');
                        btnnotunduhdana.hide();
                        btnunduhdana.removeClass('hide');
                        modalTarget.hide();
                        modalDana.show();

                    }
                    
                }
                
            }
          
        }
      
    }
    
    //RUMUS 2 metode InvRegular
    function HitungDanaAwal() {
    
        var DanaInvestasi            = revenueDanaReksa.val();
        var Tahun                    = periodDanaReksa.val();
      
        var  valueEstimateReturnDana = estimateReturnDana1.val()+'.'+estimateReturnDana2.val();
        var Persen                   = valueEstimateReturnDana;
        var VarTetap                 = 1;
        var Hasil                    = 0;
      
        if (DanaInvestasi != "" && DanaInvestasi != "0") {

          if (Tahun != "" && Tahun != "0") {

              if (valResikoDanaInvestasi != "") {

                    if (Persen >= 0) {

                        DanaInvestasi = DanaInvestasi.replace(/\./g, '');
                      
                        Hasil = parseInt(DanaInvestasi) / (Math.pow((parseInt(VarTetap) + (parseFloat(Persen) / 100)), parseInt(Tahun)))
                        textValueDanaInvestasi.text('Rp '+thousandSeparator(Math.round(Hasil)));
                        valueTargetHasil.text('Rp '+thousandSeparator(DanaInvestasi));
                        valueJangkaWaktu.text(Tahun+' Tahun');
                        valueEstimasiReturnPerTahun.text(Persen+'%');
                        btnnotunduhdana.hide();
                        btnunduhdana.removeClass('hide');
                        modalTarget.hide();
                        modalDana.show();

                      }
                  
                }
                
            }
            
        }
      
    }
    //Setting Parameter Persen berdasarkan profile resiko
    function estimasiHasilInvestasi(data) {
      valResikoHasilInvestasi = data;

      if(valResikoHasilInvestasi=='SangatKonservatif') {

        valueEstimateReturnHasilInvestasi = arryEstimasi[1];
        var splitEstimasi                 = valueEstimateReturnHasilInvestasi.split('.');
        estimateReturnHasilInvestasi1.val(splitEstimasi[0]);
        estimateReturnHasilInvestasi2.val(splitEstimasi[1]);
        // estimateReturnHasilInvestasi.text(valueEstimateReturnHasilInvestasi+'%');

      } else if (valResikoHasilInvestasi=='Konservatif') {
        
        valueEstimateReturnHasilInvestasi = arryEstimasi[2];
        var splitEstimasi                 = valueEstimateReturnHasilInvestasi.split('.');
        estimateReturnHasilInvestasi1.val(splitEstimasi[0]);
        estimateReturnHasilInvestasi2.val(splitEstimasi[1]);
        // estimateReturnHasilInvestasi.text(valueEstimateReturnHasilInvestasi+'%');

      } else if (valResikoHasilInvestasi=='Moderat') {

        valueEstimateReturnHasilInvestasi = arryEstimasi[3];
        var splitEstimasi                 = valueEstimateReturnHasilInvestasi.split('.');
        estimateReturnHasilInvestasi1.val(splitEstimasi[0]);
        estimateReturnHasilInvestasi2.val(splitEstimasi[1]);
        // estimateReturnHasilInvestasi.text(valueEstimateReturnHasilInvestasi+'%');

      } else if (valResikoHasilInvestasi=='Agresif') {

        valueEstimateReturnHasilInvestasi = arryEstimasi[4];
        var splitEstimasi                 = valueEstimateReturnHasilInvestasi.split('.');
        estimateReturnHasilInvestasi1.val(splitEstimasi[0]);
        estimateReturnHasilInvestasi2.val(splitEstimasi[1]);
        // estimateReturnHasilInvestasi.text(valueEstimateReturnHasilInvestasi+'%');
        
      } else {

        valueEstimateReturnHasilInvestasi = arryEstimasi[0];
        var splitEstimasi                 = valueEstimateReturnHasilInvestasi.split('.');
        estimateReturnHasilInvestasi1.val(splitEstimasi[0]);
        estimateReturnHasilInvestasi2.val(splitEstimasi[1]);
        // estimateReturnHasilInvestasi.text(valueEstimateReturnHasilInvestasi+'%');

      }
    }
    function estimasiHasilInvestasiDana(data) {
      valResikoDanaInvestasi = data;
    
      if (valResikoDanaInvestasi=='SangatKonservatif') {

        valueEstimateReturnDana = arryEstimasi[1];
        var splitEstimasi       = valueEstimateReturnDana.split('.');
        estimateReturnDana1.val(splitEstimasi[0]);
        estimateReturnDana2.val(splitEstimasi[1]);
        // estimateReturnDana.text(valueEstimateReturnDana+'%');

      } else if(valResikoDanaInvestasi=='Konservatif') {

        valueEstimateReturnDana = arryEstimasi[2];
        var splitEstimasi       = valueEstimateReturnDana.split('.');
        estimateReturnDana1.val(splitEstimasi[0]);
        estimateReturnDana2.val(splitEstimasi[1]);
        // estimateReturnDana.text(valueEstimateReturnDana+'%');

      } else if(valResikoDanaInvestasi=='Moderat') {

        valueEstimateReturnDana = arryEstimasi[3];
        var splitEstimasi       = valueEstimateReturnDana.split('.');
        estimateReturnDana1.val(splitEstimasi[0]);
        estimateReturnDana2.val(splitEstimasi[1]);
        // estimateReturnDana.text(valueEstimateReturnDana+'%');

      } else if(valResikoDanaInvestasi=='Agresif') {

        valueEstimateReturnDana = arryEstimasi[4];
        var splitEstimasi       = valueEstimateReturnDana.split('.');
        estimateReturnDana1.val(splitEstimasi[0]);
        estimateReturnDana2.val(splitEstimasi[1]);
        // estimateReturnDana.text(valueEstimateReturnDana+'%');

      } else {

        valueEstimateReturnDana = arryEstimasi[0];
        var splitEstimasi       = valueEstimateReturnDana.split('.');
        estimateReturnDana1.val(splitEstimasi[0]);
        estimateReturnDana2.val(splitEstimasi[1]);
        // estimateReturnDana.text(valueEstimateReturnDana+'%');

      }
      
    }
    //target hasil
    
    metodeHasilInvestasi.select2(
      {
        minimumResultsForSearch: Infinity
      }
    ).on(
      'select2:select', 
      function(){
    
        valMetodeHasilInvestasi = $(this).val();
        valResikoHasilInvestasi = resikoHasilInvestasi.val();
        estimasiHasilInvestasi(valResikoHasilInvestasi);

        if(valMetodeHasilInvestasi=='InvRegular') {
        
          sliderPeriodReksaHasilInvestasi.val();
          percent = (sliderPeriodReksaHasilInvestasiBulan.val() - sliderPeriodReksaHasilInvestasiBulan.attr('min')) / (sliderPeriodReksaHasilInvestasiBulan.attr('max') - sliderPeriodReksaHasilInvestasiBulan.attr('min')) * 100;
          sliderPeriodReksaHasilInvestasiBulan.parent().find('.slide-active').css('width',percent+'%');
          
        
          perideReksaDanaBulanan.show();
          perideReksaDanaTahunan.hide();
          textRevenueReksaHasilInvestasi.text('Dana Investasi  per-bulan');
          HitungRegularHasilTarget();

        } else{

          percent = (sliderPeriodReksaHasilInvestasi.val() - sliderPeriodReksaHasilInvestasi.attr('min')) / (sliderPeriodReksaHasilInvestasi.attr('max') - sliderPeriodReksaHasilInvestasi.attr('min')) * 100;
          
          sliderPeriodReksaHasilInvestasi.parent().find('.slide-active').css('width',percent+'%');
          perideReksaDanaBulanan.show();
          perideReksaDanaBulanan.hide();
          perideReksaDanaTahunan.show();
          textRevenueReksaHasilInvestasi.text('Dana Investasi');
          HitungHasilTarget();

        }
      
      }
    );
    resikoHasilInvestasi.select2(
      {
        minimumResultsForSearch: Infinity
      }
    ).on(
      'change', 
      function() {
        valResikoHasilInvestasi = $(this).val();
        estimasiHasilInvestasi(valResikoHasilInvestasi);
        if (valMetodeHasilInvestasi=='InvRegular') {
          HitungRegularHasilTarget();
        } else {
          HitungHasilTarget();
        }
    
      }
    );
    revenueReksaHasilInvestasi.on(
      'focusout', 
      function() {
        valRevenueReksaHasilInvestasi = $(this).val();
        if($(this).val()< 10000000){
          valRevenueReksaHasilInvestasi=10000000;
         
        }
        revenueReksaHasilInvestasi.val(valRevenueReksaHasilInvestasi);
       
        if (valMetodeHasilInvestasi=='InvRegular') {
          HitungRegularHasilTarget();
        } else {
          HitungHasilTarget();
        }
      }
    )
    sliderRevenueReksaHasilInvestasi.on(
      'change', 
      function(){
    
        if(valMetodeHasilInvestasi=='InvRegular') {
          HitungRegularHasilTarget();
        }else{
          HitungHasilTarget();
        }

      }
    )

    periodReksaHasilInvestasi.bind(
      'change input', 
      function(){
        valPeriodReksaHasilInvestasi =$(this).val();
        if(valPeriodReksaHasilInvestasi < 0){
          valPeriodReksaHasilInvestasi=1;

        }
        periodReksaHasilInvestasi.val(valPeriodReksaHasilInvestasi);
        HitungHasilTarget();
      
      }
    )
    sliderPeriodReksaHasilInvestasi.bind(
      'change input', 
      function(){
      
        HitungHasilTarget();
      
      }
    )

    periodReksaHasilInvestasiBulan.bind(
      'change input', 
      function(){
        valPeriodReksaHasilInvestasiBulan = $(this).val();
        if(valPeriodReksaHasilInvestasiBulan < 0){
          valPeriodReksaHasilInvestasiBulan = 1;

        }
        periodReksaHasilInvestasiBulan.val(valPeriodReksaHasilInvestasiBulan);
        HitungRegularHasilTarget();
      
      }
    )
    sliderPeriodReksaHasilInvestasiBulan.bind(
      'change input', 
      function(){
      HitungRegularHasilTarget();
      }
    )
    estimateReturnHasilInvestasi1.bind(
      'change input', 
      function(){
        // valueEstimateReturnHasilInvestasi1 = $(this).val();
        values =  forceNumeric($(this).val());
        estimateReturnHasilInvestasi1.val(values);
        if(valMetodeHasilInvestasi=='InvRegular') {
          HitungRegularHasilTarget();
        }else{
          HitungHasilTarget();
        }
      }
    )
    estimateReturnHasilInvestasi2.bind(
      'change input', 
      function() {
        // valueEstimateReturnHasilInvestasi2 = $(this).val();
        values =  forceNumeric($(this).val());
        estimateReturnHasilInvestasi2.val(values);
        if(valMetodeHasilInvestasi=='InvRegular') {
          HitungRegularHasilTarget();
        }else{
          HitungHasilTarget();
        }
      }
    )

    //dana
    metodeDanaInvestasi.select2(
      {
        minimumResultsForSearch: Infinity
      }
    ).on(
      'select2:select', 
      function() {
        valMetodeDanaInvestasi = $(this).val();
      
        estimasiHasilInvestasiDana(valResikoDanaInvestasi);
        
        if(valMetodeDanaInvestasi=='InvRegular') {
          
          percent = (sliderPeriodDanaReksaBulan.val() - sliderPeriodDanaReksaBulan.attr('min')) / (sliderPeriodDanaReksaBulan.attr('max') - sliderPeriodDanaReksaBulan.attr('min')) * 100;
          sliderPeriodDanaReksaBulan.parent().find('.slide-active').css('width',percent+'%');
          perideReksaDanaInvestbulanan.show();
          perideReksaDanaInvestTahunan.hide();
          textRevenueDanaReksa.text('Dana Investasi  per-bulan');
          textJangkaPeriode.text('Bulan');

        } else{

          percent = (sliderPeriodDanaReksa.val() - sliderPeriodDanaReksa.attr('min')) / (sliderPeriodDanaReksa.attr('max') - sliderPeriodDanaReksa.attr('min')) * 100;
          sliderPeriodDanaReksa.parent().find('.slide-active').css('width',percent+'%');
          perideReksaDanaInvestbulanan.hide();
          perideReksaDanaInvestTahunan.show();
          textRevenueDanaReksa.text('Dana Investasi');
          textJangkaPeriode.text('Tahun')

        }

        if(valMetodeDanaInvestasi=='InvRegular') {
          HitungRegularDanaAwal();
        }else{
          HitungDanaAwal();
        }

      }
    );
    resikoDanaInvestasi.select2(
      {
        minimumResultsForSearch: Infinity
      }
    ).on(
      'select2:select', 
      function(){
        valResikoDanaInvestasi = $(this).val();
        estimasiHasilInvestasiDana(valResikoDanaInvestasi);
        
        if(valMetodeDanaInvestasi=='InvRegular') {
          HitungRegularDanaAwal();
        }else{
          HitungDanaAwal();
        }
      
      }
    );
    //revenue
    revenueDanaReksa.bind(
      'focusout', 
      function(){
        valRevenueDanaReksa = $(this).val();
        if(valRevenueDanaReksa < 10000000){
          valRevenueDanaReksa =10000000;
        }
        revenueDanaReksa.val(valRevenueDanaReksa);
        if(valMetodeDanaInvestasi=='InvRegular') {
          HitungRegularDanaAwal();
        }else{
          HitungDanaAwal();
        }
      }
    )
    sliderRevenueDanaReksa.bind(
      'change', 
      function(){
    
        if(valMetodeDanaInvestasi=='InvRegular') {
          HitungRegularDanaAwal();
        }else{
          HitungDanaAwal();
        }
      }
    )
    periodDanaReksa.bind(
      'change',
      function(){
        
        valPeriodDanaReksa = $(this).val();
        if(valPeriodDanaReksa < 0){
          valPeriodDanaReksa =1;
        }
        periodDanaReksa.val(valPeriodDanaReksa);
        HitungDanaAwal();
      }
    )
    sliderPeriodDanaReksa.bind(
      'change input',
      function(){
        HitungDanaAwal();
    
      }
    )


    periodDanaReksaBulan.bind(
      'change input', 
      function(){
        valPeriodDanaReksaBulan = $(this).val();
        if(valPeriodDanaReksaBulan < 0){
          valPeriodDanaReksaBulan =1;
        }
        periodDanaReksaBulan.val(valPeriodDanaReksaBulan);
        HitungRegularDanaAwal();
      }
    )
    sliderPeriodDanaReksaBulan.bind(
      'change input', 
      function() {
        HitungRegularDanaAwal();
      }
    )


    estimateReturnDana1.bind(
      'change input', 
      function(){
        // valueEstimateReturnHasilInvestasi1 = $(this).val();
        if(valMetodeDanaInvestasi=='InvRegular') {
          HitungRegularDanaAwal();
        }else{
          HitungDanaAwal();
        }
      }
    )
    estimateReturnDana2.bind(
      'change input', 
      function(){
        // valueEstimateReturnHasilInvestasi2 = $(this).val();
        if(valMetodeDanaInvestasi=='InvRegular') {
          HitungRegularDanaAwal();
        }else{
          HitungDanaAwal();
        }
      }
    )
  });
}(jQuery))
