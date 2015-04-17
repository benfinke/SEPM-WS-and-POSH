// Copyright (c) 2000-2001 Quadralay Corporation.  All rights reserved.
//

function  WWHCommonMessages_Object()
{
  // Set default messages
  //
  WWHCommonMessages_Set_en(this);

  this.fSetByLocale = WWHCommonMessages_SetByLocale;
}

function  WWHCommonMessages_SetByLocale(ParamLocale)
{
  var  LocaleFunction = null;


  // Match locale
  //
  if ((ParamLocale.length > 1) &&
      (eval("typeof WWHCommonMessages_Set_" + ParamLocale) == "function"))
  {
    LocaleFunction = eval("WWHCommonMessages_Set_" + ParamLocale);
  }
  else if ((ParamLocale.length > 1) &&
           (eval("typeof WWHCommonMessages_Set_" + ParamLocale.substring(0, 2)) == "function"))
  {
    LocaleFunction = eval("WWHCommonMessages_Set_" + ParamLocale.substring(0, 2));
  }

  // Default already set, only override if locale found
  //
  if (LocaleFunction != null)
  {
    LocaleFunction(this);
  }
}

function  WWHCommonMessages_Set_en(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Show Navigation";
  ParamMessages.mSyncIconLabel           = "Show in Contents";
  ParamMessages.mPrevIconLabel           = "Previous";
  ParamMessages.mNextIconLabel           = "Next";
  ParamMessages.mRelatedTopicsIconLabel  = "Related Topics";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "Print";
  ParamMessages.mBookmarkIconLabel       = "Bookmark";
  ParamMessages.mBookmarkLinkMessage     = "Right-click the link in the box and choose your browser's Add to Bookmarks command.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Your web browser does not support the necessary features\\nrequired to view this page properly.  Supported browsers are:\\n\\n  IE4 and later on Windows and UNIX\\n  IE5 and later on Mac\\n  Netscape 6.1 and later on Windows, Mac, and UNIX\\n  Netscape 4.x on Windows, Mac, and UNIX\n\n\n\n";
}

function  WWHCommonMessages_Set_zh(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "\u663e\u793a\u5bfc\u822a";
  ParamMessages.mSyncIconLabel           = "\u5728\u76ee\u5f55\u4e2d\u663e\u793a";
  ParamMessages.mPrevIconLabel           = "\u4e0a\u4e00\u9875";
  ParamMessages.mNextIconLabel           = "\u4e0b\u4e00\u9875";
  ParamMessages.mRelatedTopicsIconLabel  = "\u76f8\u5173\u4e3b\u9898";
  ParamMessages.mEmailIconLabel          = "\u7535\u5b50\u90ae\u4ef6";
  ParamMessages.mPrintIconLabel          = "\u6253\u5370";
  ParamMessages.mBookmarkIconLabel       = "\u4e66\u7b7e";
  ParamMessages.mBookmarkLinkMessage     = "\u53f3\u952e\u5355\u51fb\u94fe\u63a5\uff0c\u5c06\u5176\u6dfb\u52a0\u5230\u4e66\u7b7e\u4e2d\u3002";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "\u60a8\u7684 Web \u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6b63\u786e\u67e5\u770b\u672c\u9875\u8981\u6c42\u7684\\n\u5fc5\u9700\u529f\u80fd\u3002 \u652f\u6301\u7684\u6d4f\u89c8\u5668\u6709\uff1a\\n\\nIE4 \u53ca\u66f4\u9ad8\u7248\u672c\uff08Windows \u548c UNIX\uff09\\nIE5 \u53ca\u66f4\u9ad8\u7248\u672c\uff08Mac\uff09\\nNetscape 6.1 \u53ca\u66f4\u9ad8\u7248\u672c\uff08Windows\u3001Mac \u548c UNIX\uff09\\nNetscape 4.x\uff08Windows\u3001Mac \u548c UNIX\uff09\n\n\n\n";
}

function  WWHCommonMessages_Set_es(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Mostrar barra de navegaci\u00f3n";
  ParamMessages.mSyncIconLabel           = "Mostrar en Contenido";
  ParamMessages.mPrevIconLabel           = "Atr\u00e1s";
  ParamMessages.mNextIconLabel           = "Adelante";
  ParamMessages.mRelatedTopicsIconLabel  = "Temas relacionados";
  ParamMessages.mEmailIconLabel          = "E-mail";
  ParamMessages.mPrintIconLabel          = "Imprimir";
  ParamMessages.mBookmarkIconLabel       = "Marcador";
  ParamMessages.mBookmarkLinkMessage     = "Haga clic con el bot\u00f3n derecho del mouse en el v\u00ednculo para agregarlo a la lista de favoritos.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Su explorador de Internet no es compatible con las funciones\\nnecesarias para ver esta p\u00e1gina correctamente. Los exploradores compatibles son:\\n\\n IE4 y posteriores para Windows y UNIX\\n IE5 y posteriores para Mac\\n Netscape 6.1 y posteriores para Windows, Mac y UNIX\\n Netscape 4.x para Windows, Mac y UNIX\n\n\n\n";
}

function  WWHCommonMessages_Set_sv(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Visa navigering";
  ParamMessages.mSyncIconLabel           = "Visa i inneh\u00e5ll";
  ParamMessages.mPrevIconLabel           = "F\u00f6reg\u00e5ende";
  ParamMessages.mNextIconLabel           = "N\u00e4sta";
  ParamMessages.mRelatedTopicsIconLabel  = "N\u00e4rliggande information";
  ParamMessages.mEmailIconLabel          = "E-post";
  ParamMessages.mPrintIconLabel          = "Skriv ut";
  ParamMessages.mBookmarkIconLabel       = "Bokm\u00e4rke";
  ParamMessages.mBookmarkLinkMessage     = "H\u00f6gerklicka p\u00e5 l\u00e4nken och l\u00e4gg till den till dina bokm\u00e4rken.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Webbl\u00e4saren har inte de funktioner som kr\u00e4vs f\u00f6r\\natt sidan ska visas p\u00e5 r\u00e4tt s\u00e4tt. Webbl\u00e4sare som kan anv\u00e4ndas \u00e4r:\\n\\n IE4 och senare i Windows och UNIX\\n IE5 och senare i Mac\\n Netscape 6.1 och senare i Windows, Mac och UNIX\\n Netscape 4.x i Windows, Mac och UNIX\n\n\n\n";
}

function  WWHCommonMessages_Set_de(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Navigation anzeigen";
  ParamMessages.mSyncIconLabel           = "Im Inhalt anzeigen";
  ParamMessages.mPrevIconLabel           = "Zur\u00fcck";
  ParamMessages.mNextIconLabel           = "Weiter";
  ParamMessages.mRelatedTopicsIconLabel  = "Verwandte Themen";
  ParamMessages.mEmailIconLabel          = "E-Mail";
  ParamMessages.mPrintIconLabel          = "Drucken";
  ParamMessages.mBookmarkIconLabel       = "Lesezeichen";
  ParamMessages.mBookmarkLinkMessage     = "Klicken Sie mit der rechten Maustaste auf die Verkn\u00fcpfung, und f\u00fcgen Sie sie Ihren Lesezeichen hinzu.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Ihr Webbrowser unterst\u00fctzt die zum ordnungsgem\u00e4\u00dfen Anzeigen\\ndieser Seite erforderlichen Funktionen nicht. Folgende Browser werden unterst\u00fctzt:\\n\\n IE4 und h\u00f6her f\u00fcr Windows und UNIX\\n IE5 und h\u00f6her f\u00fcr Mac\\n Netscape 6.1 und h\u00f6her f\u00fcr Windows, Mac und UNIX\\n Netscape 4.x f\u00fcr Windows, Mac und UNIX\n\n\n\n";
}

function  WWHCommonMessages_Set_it(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Mostra navigazione";
  ParamMessages.mSyncIconLabel           = "Mostra in Contenuto";
  ParamMessages.mPrevIconLabel           = "Precedente";
  ParamMessages.mNextIconLabel           = "Avanti";
  ParamMessages.mRelatedTopicsIconLabel  = "Argomenti correlati";
  ParamMessages.mEmailIconLabel          = "E-mail";
  ParamMessages.mPrintIconLabel          = "Stampa";
  ParamMessages.mBookmarkIconLabel       = "Segnalibro";
  ParamMessages.mBookmarkLinkMessage     = "Fare clic con il tasto destro del mouse per aggiungere ai Segnalibri.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Il browser Web in uso non supporta le funzioni necessarie\\nper visualizzare correttamente questa pagina. I browser supportati sono:\\n\\n IE4 e versioni successive su Windows e UNIX\\n IE5 e versioni successive su Mac\\n Netscape 6.1 e versioni successive per Windows, Mac e UNIX\\n Netscape 4.x su Windows, Mac e UNIX\n\n\n\n";
}

function  WWHCommonMessages_Set_pt(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Mostrar navega\u00e7\u00e3o";
  ParamMessages.mSyncIconLabel           = "Mostrar em conte\u00fado";
  ParamMessages.mPrevIconLabel           = "Voltar";
  ParamMessages.mNextIconLabel           = "Avan\u00e7ar";
  ParamMessages.mRelatedTopicsIconLabel  = "T\u00f3picos relacionados";
  ParamMessages.mEmailIconLabel          = "E-mail";
  ParamMessages.mPrintIconLabel          = "Imprimir";
  ParamMessages.mBookmarkIconLabel       = "Favoritos";
  ParamMessages.mBookmarkLinkMessage     = "Clique com o bot\u00e3o direito no link para adicion\u00e1-lo aos seus Favoritos.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Seu navegador da web n\u00e3o suporta os recursos\\nnecess\u00e1rios \u00e0 visualiza\u00e7\u00e3o desta p\u00e1gina. Os navegadores suportados s\u00e3o:\\n\\n IE4 e vers\u00e3o posterior para Windows e UNIX\\n IE5 e vers\u00e3o posterior para Mac\\n Netscape 6.1 e vers\u00e3o posterior para Windows, Mac e UNIX\\n Netscape 4.x para Windows, Mac e UNIX\n\n\n\n";
}

function  WWHCommonMessages_Set_pt_pt(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Mostrar navega\u00e7\u00e3o";
  ParamMessages.mSyncIconLabel           = "Mostrar em conte\u00fado";
  ParamMessages.mPrevIconLabel           = "Voltar";
  ParamMessages.mNextIconLabel           = "Avan\u00e7ar";
  ParamMessages.mRelatedTopicsIconLabel  = "T\u00f3picos relacionados";
  ParamMessages.mEmailIconLabel          = "E-mail";
  ParamMessages.mPrintIconLabel          = "Imprimir";
  ParamMessages.mBookmarkIconLabel       = "Favoritos";
  ParamMessages.mBookmarkLinkMessage     = "Clique com o bot\u00e3o direito no link para adicion\u00e1-lo aos seus Favoritos.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Seu navegador da web n\u00e3o suporta os recursos\\nnecess\u00e1rios \u00e0 visualiza\u00e7\u00e3o desta p\u00e1gina. Os navegadores suportados s\u00e3o:\\n\\n IE4 e vers\u00e3o posterior para Windows e UNIX\\n IE5 e vers\u00e3o posterior para Mac\\n Netscape 6.1 e vers\u00e3o posterior para Windows, Mac e UNIX\\n Netscape 4.x para Windows, Mac e UNIX\n\n\n\n";
}

function  WWHCommonMessages_Set_zh_tw(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "\u986f\u793a\u5c0e\u89bd";
  ParamMessages.mSyncIconLabel           = "\u986f\u793a\u5728\u76ee\u9304\u4e2d";
  ParamMessages.mPrevIconLabel           = "\u4e0a\u4e00\u9801";
  ParamMessages.mNextIconLabel           = "\u4e0b\u4e00\u9801";
  ParamMessages.mRelatedTopicsIconLabel  = "\u76f8\u95dc\u4e3b\u984c";
  ParamMessages.mEmailIconLabel          = "\u9ede\u5b50\u90f5\u4ef6";
  ParamMessages.mPrintIconLabel          = "\u5217\u5370";
  ParamMessages.mBookmarkIconLabel       = "\u66f8\u7c64";
  ParamMessages.mBookmarkLinkMessage     = "\u53f3\u9375\u6309\u4e00\u4e0b\u9023\u7d50\uff0c\u5c07\u5b83\u52a0\u5165\u5230\u66f8\u7c64\u4e2d\u3002";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Web \u700f\u89bd\u5668\u4e0d\u652f\u63f4\u6b63\u78ba\u6aa2\u8996\u672c\u9801\u9700\u8981\u7684\u529f\u80fd\u3002 \u652f\u63f4\u7684\u700f\u89bd\u5668\u5305\u62ec\uff1a\\n\\n Windows \u8207 UNIX \u4e0a\u652f\u63f4 IE 4 \u6216\u66f4\u65b0\u7248\u672c\\n Mac \u4e0a\u652f\u63f4 IE5 \u6216\u66f4\u65b0\u7248\u672c\\n Windows\u3001Mac \u8207 UNIX \u4e0a\u652f\u63f4 Netscape 6.1\\n Windows\u3001Mac \u8207 UNIX \u4e0a\u652f\u63f4 Netscape 4.x\n\n\n\n";
}

function  WWHCommonMessages_Set_ko(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "\ub124\ube44\uac8c\uc774\uc158 \ud45c\uc2dc";
  ParamMessages.mSyncIconLabel           = "\ucee8\ud150\uce20\uc5d0\uc11c \ud45c\uc2dc";
  ParamMessages.mPrevIconLabel           = "\uc774\uc804";
  ParamMessages.mNextIconLabel           = "\ub2e4\uc74c";
  ParamMessages.mRelatedTopicsIconLabel  = "\uad00\ub828 \ud56d\ubaa9";
  ParamMessages.mEmailIconLabel          = "\uba54\uc77c";
  ParamMessages.mPrintIconLabel          = "\uc778\uc1c4";
  ParamMessages.mBookmarkIconLabel       = "\ubd81\ub9c8\ud06c";
  ParamMessages.mBookmarkLinkMessage     = "\ub9c1\ud06c\ub97c \ub9c8\uc6b0\uc2a4 \uc624\ub978\ucabd \ub2e8\ucd94\ub85c \ud074\ub9ad\ud558\uc5ec \ubd81\ub9c8\ud06c\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "\uc6f9 \ube0c\ub77c\uc6b0\uc800\uac00 \uc774 \ud398\uc774\uc9c0\ub97c \uc62c\ubc14\ub974\uac8c \ud45c\uc2dc\ud558\ub294 \ub370 \\n\ud544\uc694\ud55c \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc9c0\uc6d0\ub418\ub294 \ube0c\ub77c\uc6b0\uc800:\\n\\nInternet Explorer 4 \uc774\uc0c1(Windows, UNIX )\\n Internet Explorer 5 \uc774\uc0c1(Mac)\\n Netscape 6.1 \uc774\uc0c1(Windows, Mac, UNIX)\\n Netscape 4.x(Windows, Mac, UNIX)\n\n\n\n";
}

function  WWHCommonMessages_Set_fr(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Navigation";
  ParamMessages.mSyncIconLabel           = "Afficher dans la table des mati\u00e8res";
  ParamMessages.mPrevIconLabel           = "Pr\u00e9c\u00e9dent";
  ParamMessages.mNextIconLabel           = "Suivant";
  ParamMessages.mRelatedTopicsIconLabel  = "Rubriques associ\u00e9es";
  ParamMessages.mEmailIconLabel          = "E-mail";
  ParamMessages.mPrintIconLabel          = "Imprimer";
  ParamMessages.mBookmarkIconLabel       = "Ajouter aux Favoris";
  ParamMessages.mBookmarkLinkMessage     = "Cliquez sur ce lien avec le bouton droit de la souris et ajoutez-le \u00e0 vos Favoris.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Votre navigateur Web ne prend pas en charge les fonctions\\nrequises pour visualiser cette page de mani\u00e8re correcte. Les navigateurs pris en charge sont\u00a0:\\n\\n IE4 et version ult\u00e9rieure sous Windows et UNIX\\n IE5 et version ult\u00e9rieure sur Mac\\n Netscape 6.1 et version ult\u00e9rieure sous Windows, Mac et UNIX\\n Netscape 4.x sous Windows, Mac et UNIX\n\n\n\n";
}

function  WWHCommonMessages_Set_ja(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3 \u30d0\u30fc\u306e\u8868\u793a";
  ParamMessages.mSyncIconLabel           = "\u76ee\u6b21\u306e\u540c\u671f";
  ParamMessages.mPrevIconLabel           = "\u524d\u306e\u30c8\u30d4\u30c3\u30af";
  ParamMessages.mNextIconLabel           = "\u6b21\u306e\u30c8\u30d4\u30c3\u30af";
  ParamMessages.mRelatedTopicsIconLabel  = "\u95a2\u9023\u30c8\u30d4\u30c3\u30af";
  ParamMessages.mEmailIconLabel          = "\u3054\u610f\u898b";
  ParamMessages.mPrintIconLabel          = "\u5370\u5237";
  ParamMessages.mBookmarkIconLabel       = "\u30d6\u30c3\u30af\u30de\u30fc\u30af";
  ParamMessages.mBookmarkLinkMessage     = "\u30ea\u30f3\u30af\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "\u4f7f\u7528\u4e2d\u306e\u30d6\u30e9\u30a6\u30b6\u306f\u3001\u3053\u306e\u30da\u30fc\u30b8\u3092\u6b63\u3057\u304f\u8868\u793a\u3059\u308b\u305f\u3081\u306b\\n\u5fc5\u8981\u306a\u6a5f\u80fd\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002 \u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30d6\u30e9\u30a6\u30b6: \\n\\nWindows \u304a\u3088\u3073 UNIX \u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308b IE4 \u4ee5\u964d\\nMac \u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308b IE5 \u4ee5\u964d\\nWindows\u3001Mac\u3001UNIX \u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308b Netscape 6.1 \u4ee5\u964d\\nWindows\u3001Mac\u3001UNIX \u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308b Netscape 4.x\n\n\n\n";
}

function  WWHCommonMessages_Set_cs(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Zobrazit navigaci";
  ParamMessages.mSyncIconLabel           = "Zobrazit v obsahu";
  ParamMessages.mPrevIconLabel           = "P\u0159edchoz\u00ED";
  ParamMessages.mNextIconLabel           = "Dal\u0161\u00ED";
  ParamMessages.mRelatedTopicsIconLabel  = "P\u0159\u00EDbuzn\u00E1 t\u00E9mata";
  ParamMessages.mEmailIconLabel          = "E-mail";
  ParamMessages.mPrintIconLabel          = "Tisk";
  ParamMessages.mBookmarkIconLabel       = "Z\u00E1lo\u017Eka";
  ParamMessages.mBookmarkLinkMessage     = "Klepn\u011Bte prav\u00FDm tla\u010D\u00EDtkem a p\u0159idejte polo\u017Eku k z\u00E1lo\u017Ek\u00E1m.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Webov\u00FD prohl\u00ED\u017Ee\u010D nepodporuje po\u017Eadovan\u00E9 funkce\\nnutn\u00E9 ke spr\u00E1vn\u00E9mu zobrazen\u00ED str\u00E1nky. Podporovan\u00E9 prohl\u00ED\u017Ee\u010De jsou tyto:\\n\\n  IE4 a vy\u0161\u0161\u00ED v syst\u00E9mech Windows a UNIX\\n  IE5 a vy\u0161\u0161\u00ED v syst\u00E9mu Mac\\n  Netscape 6.1 a vy\u0161\u0161\u00ED v syst\u00E9mech Windows, Mac a UNIX\n\n\n\n";
}

function  WWHCommonMessages_Set_hu(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Navig\u00E1ci\u00F3s elemek megjelen\u00EDt\u00E9se";
  ParamMessages.mSyncIconLabel           = "Megjelen\u00EDt\u00E9s a tartalomban";
  ParamMessages.mPrevIconLabel           = "Vissza";
  ParamMessages.mNextIconLabel           = "Tov\u00E1bb";
  ParamMessages.mRelatedTopicsIconLabel  = "Kapcsol\u00F3d\u00F3 t\u00E9mak\u00F6r\u00F6k";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "Nyomtat\u00E1s";
  ParamMessages.mBookmarkIconLabel       = "K\u00F6nyvjelz\u0151";
  ParamMessages.mBookmarkLinkMessage     = "Kattintson jobb gombbal a hivatkoz\u00E1sra \u00E9s vegye fel a k\u00F6nyvjelz\u00F5k k\u00F6z\u00E9.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Az \u00D6n \u00E1ltal haszn\u00E1lt b\u00F6ng\u00E9sz\u0151 nem t\u00E1mogatja az oldal\\megtekint\u00E9s\u00E9hez sz\u00FCks\u00E9ges funkci\u00F3kat. A t\u00E1mogatott b\u00F6ng\u00E9sz\u0151k a k\u00F6vetkez\u0151k:\\n\\n  IE4 \u00E9s az \u00FAjabb verzi\u00F3k Windows \u00E9s UNIX eset\u00E9ben\\n  IE5 \u00E9s az \u00FAjabb verzi\u00F3k Mac eset\u00E9ben\\n  Netscape 6.1 \u00E9s az \u00FAjabbb\n\n\n\n";
}

function  WWHCommonMessages_Set_nl(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Navigatie tonen";
  ParamMessages.mSyncIconLabel           = "In inhoudsopgave weergeven";
  ParamMessages.mPrevIconLabel           = "Vorige";
  ParamMessages.mNextIconLabel           = "Volgende";
  ParamMessages.mRelatedTopicsIconLabel  = "Verwante onderwerpen";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "Afdrukken";
  ParamMessages.mBookmarkIconLabel       = "Bladwijzer";
  ParamMessages.mBookmarkLinkMessage     = "Rechtsklik op koppeling en voeg deze aan uw bladwijzers toe.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "De webbrowser biedt geen ondersteuning voor de kenmerken\\ndie nodig zijn voor een juiste weergave van deze pagina.  Ondersteunde browsers zijn:\\n\\n  IE4 en hoger voor Windows en UNIX\\n  IE5 en hoger voor Mac\\n  Netscape 6.1 en hoger voor Windows, Mac en UNIX\\n  Netscape 4.\n\n\n\n";
}

function  WWHCommonMessages_Set_pl(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Wy\u015Bwietl panel nawigacyjny";
  ParamMessages.mSyncIconLabel           = "Poka\u017C w spisie tre\u015Bci";
  ParamMessages.mPrevIconLabel           = "Poprzedni";
  ParamMessages.mNextIconLabel           = "Nast\u0119pny";
  ParamMessages.mRelatedTopicsIconLabel  = "Tematy pokrewne";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "Drukuj";
  ParamMessages.mBookmarkIconLabel       = "Zak\u0142adka";
  ParamMessages.mBookmarkLinkMessage     = "Kliknij \u0142\u0105cze prawym przyciskiem myszy i dodaj je do zak\u0142adek";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Ta przegl\u0105darka nie obs\u0142uguje funkcji\\n wymaganych do prawid\u0142owego wy\u015Bwietlenia tej strony.  Obs\u0142ugiwane przegl\u0105darki to:\\n\\n IE w wersji 4 lub nowszej w systemach Windows i UNIX\\n  IE w wersji 5 lub nowszej na komputerach Macintosh\\n  Netscape w wer\n\n\n\n";
}

function  WWHCommonMessages_Set_ru(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044E";
  ParamMessages.mSyncIconLabel           = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0438";
  ParamMessages.mPrevIconLabel           = "\u041D\u0430\u0437\u0430\u0434";
  ParamMessages.mNextIconLabel           = "\u0414\u0430\u043B\u0435\u0435";
  ParamMessages.mRelatedTopicsIconLabel  = "\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "\u041F\u0435\u0447\u0430\u0442\u044C";
  ParamMessages.mBookmarkIconLabel       = "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438";
  ParamMessages.mBookmarkLinkMessage     = "\u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u043D\u0430 \u0441\u0441\u044B\u043B\u043A\u0435 \u043F\u0440\u0430\u0432\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0435 \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u0438, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435\\n\u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044B:\\n\\n  IE4 \u0438 \u0431\u043E\u043B\u0435 \u043D\u043E\u0432\u044B\u0435 \u0432 Windows \u0438 UNIX\\n  IE5 \u0438 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u044B\u0435 \u0432 Mac\\n  Netscape 6.1 \u0438 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u044B\u0435 \u0432 Windows, Mac \u0438 UNIX\\n  Netscape 4.x \u0432 Windows.";
}

function  WWHCommonMessages_Set_da(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Vis navigation";
  ParamMessages.mSyncIconLabel           = "Vis i indholdsfortegnelsen";
  ParamMessages.mPrevIconLabel           = "Forrige";
  ParamMessages.mNextIconLabel           = "N\u00E6ste";
  ParamMessages.mRelatedTopicsIconLabel  = "Relaterede emner";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "Udskriv";
  ParamMessages.mBookmarkIconLabel       = "Bogm\u00E6rke";
  ParamMessages.mBookmarkLinkMessage     = "H\u00F8jreklik p\u00E5 linket og f\u00F8j det til dine bogm\u00E6rker.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Din internetbrowser underst\u00F8tter ikke de funktioner,\\nder kr\u00E6ves for, at denne side vises korrekt.  Disse browsere underst\u00F8ttes:\\n\\  IE4 og opefter p\u00E5 Windows og UNIX\\n  IE5 og opefter p\u00E5 Mac\\n  Netscape 6.1 og opefter p\u00E5 Windows, Mac og UNIX\\n  Netscape 4.";
}

function  WWHCommonMessages_Set_no(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Vis navigering";
  ParamMessages.mSyncIconLabel           = "Vis i innhold";
  ParamMessages.mPrevIconLabel           = "Forrige";
  ParamMessages.mNextIconLabel           = "Neste";
  ParamMessages.mRelatedTopicsIconLabel  = "Beslektede emner";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "Skriv ut";
  ParamMessages.mBookmarkIconLabel       = "Bokmerke";
  ParamMessages.mBookmarkLinkMessage     = "H\u00F8yreklikk p\u00E5 lenken for \u00E5 legge den til dine bokmerker.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Din web-leser st\u00F8tter ikke de n\u00F8dvendige funksjonene\\nrequired for \u00E5 se alt p\u00E5 denne siden.  Web-lesere som st\u00F8ttes er:\\n\\n  IE4 og senere for Windows og UNIX\\n  IE5 og senere for Mac\\n  Netscape 6.1 og senere for Windows, Mac og UNIX\\n  Netscape 4.";
}

function  WWHCommonMessages_Set_fi(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "N\u00E4yt\u00E4 suunnistusn";
  ParamMessages.mSyncIconLabel           = "N\u00E4yt\u00E4 sis\u00E4llysluettelossa";
  ParamMessages.mPrevIconLabel           = "Edellinen";
  ParamMessages.mNextIconLabel           = "Seuraava";
  ParamMessages.mRelatedTopicsIconLabel  = "Aiheeseen liittyv\u00E4\u00E4";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "Tulosta";
  ParamMessages.mBookmarkIconLabel       = "Lis\u00E4\u00E4 Suosikkeihin";
  ParamMessages.mBookmarkLinkMessage     = "Napsauta linkki\u00E4 hiiren ykk\u00F6spainikkeella ja lis\u00E4\u00E4 se Suosikkeihin.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Selaimesi ei tue kaikkia sivun asianmukaiseen katseluun vaadittavia\\nominaisuuksia.  Tuetut selaimet:\\n\\n  IE4 ja uudemmat (Windows ja UNIX)\\n  IE5 ja uudemmat (Mac)\\n  Netscape 6.1 ja uudemmat (Windows, Mac, ja UNIX)\\n  Netscape 4.";
}

function  WWHCommonMessages_Set_he(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "\u05D4\u05E6\u05D2 \u05E0\u05D9\u05D5\u05D5\u05D8";
  ParamMessages.mSyncIconLabel           = "\u05D4\u05E6\u05D2 \u05D1\u05EA\u05D5\u05DB\u05DF \u05E2\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD";
  ParamMessages.mPrevIconLabel           = "\u05D4\u05E7\u05D5\u05D3\u05DD";
  ParamMessages.mNextIconLabel           = "\u05D4\u05D1\u05D0";
  ParamMessages.mRelatedTopicsIconLabel  = "\u05E0\u05D5\u05E9\u05D0\u05D9\u05DD \u05E7\u05E9\u05D5\u05E8\u05D9\u05DD";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "\u05D4\u05D3\u05E4\u05E1";
  ParamMessages.mBookmarkIconLabel       = "\u05E1\u05D9\u05DE\u05E0\u05D9\u05D9\u05D4";
  ParamMessages.mBookmarkLinkMessage     = "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05D4\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D1\u05DC\u05D7\u05E6\u05DF \u05D9\u05DE\u05E0\u05D9 \u05D5\u05D4\u05D5\u05E1\u05E3 \u05D0\u05D5\u05EA\u05D5 \u05DC\u05E1\u05D9\u05DE\u05E0\u05D9\u05D5\u05EA \u05E9\u05DC\u05DA.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05DC\u05DA \u05D0\u05D9\u05E0\u05D5 \u05EA\u05D5\u05DE\u05DA \u05D1\u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD \u05D4\u05D3\u05E8\u05D5\u05E9\u05D9\u05DD\\n\u05DC\u05D4\u05E6\u05D2\u05EA \u05E2\u05DE\u05D5\u05D3 \u05D6\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05EA\u05E7\u05D9\u05DF.  \u05D4\u05D3\u05E4\u05D3\u05E4\u05E0\u05D9\u05DD \u05D4\u05E0\u05EA\u05DE\u05DB\u05D9\u05DD \u05D4\u05DD: \\n\\n IE4 \u05D5\u05D3\u05E4\u05D3\u05E4\u05E0\u05D9\u05DD \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05D9\u05D5\u05EA\u05E8 \u05D1\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4 Windows \u05D5-Unix \\n IE5 \u05D5\u05D3\u05E4\u05D3\u05E4\u05E0\u05D9\u05DD \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05D9\u05D5\u05EA\u05E8 \u05D1-Mac\\n Netscape 6.1 \u05D5\u05D3\u05E4\u05D3\u05E4\u05E0\u05D9\u05DD \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05D9\u05D5\u05EA\u05E8 \u05D1-Windows, Mac \u05D5-UNIX\\n  Netscape 4.";
}

function  WWHCommonMessages_Set_el(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03C0\u03BB\u03BF\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2";
  ParamMessages.mSyncIconLabel           = "\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03C0\u03B5\u03C1\u03B9\u03B5\u03C7\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD";
  ParamMessages.mPrevIconLabel           = "\u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF";
  ParamMessages.mNextIconLabel           = "\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF";
  ParamMessages.mRelatedTopicsIconLabel  = "\u03A3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC \u03B8\u03AD\u03BC\u03B1\u03C4\u03B1";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "\u0395\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7";
  ParamMessages.mBookmarkIconLabel       = "\u03A3\u03B5\u03BB\u03B9\u03B4\u03BF\u03B4\u03B5\u03AF\u03BA\u03C4\u03B7\u03C2";
  ParamMessages.mBookmarkLinkMessage     = "\u039A\u03AC\u03BD\u03C4\u03B5 \u03B4\u03B5\u03BE\u03AF \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03B7 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03C0\u03C1\u03BF\u03C3\u03B8\u03AD\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03C3\u03C4\u03BF\u03C5\u03C2 \u03C3\u03B5\u03BB\u03B9\u03B4\u03BF\u03B4\u03B5\u03AF\u03BA\u03C4\u03B5\u03C2 \u03C3\u03B1\u03C2.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "\u03A4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2 \u03C3\u03C4\u03BF Web \u03C0\u03BF\u03C5 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C4\u03B5\u03C4\u03B5 \u03B4\u03B5\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03B7\u03C1\u03AF\u03B6\u03B5\u03B9 \u03C4\u03B9\u03C2 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03B5\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B5\u03C2\\n\u03C0\u03BF\u03C5 \u03B1\u03C0\u03B1\u03B9\u03C4\u03BF\u03CD\u03BD\u03C4\u03B1\u03B9 \u03B3\u03B9\u03B1 \u03C4\u03B7 \u03C3\u03C9\u03C3\u03C4\u03AE \u03C0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u03B1\u03C5\u03C4\u03AE\u03C2 \u03C4\u03B7\u03C2 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1\u03C2.  \u03A4\u03B1 \u03C5\u03C0\u03BF\u03C3\u03C4\u03B7\u03C1\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9:\\n\\n  IE4 \u03BA\u03B1\u03B9 \u03BD\u03B5\u03CC\u03C4\u03B5\u03C1\u03B7 \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7 \u03C3\u03B5 Windows \u03BA\u03B1\u03B9 UNIX\\n  IE5 \u03BA\u03B1\u03B9 \u03BD\u03B5\u03CC\u03C4\u03B5\u03C1\u03B7 \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7 \u03C3\u03B5 Mac\\n  Netscape 6.1 \u03BA\u03B1\u03B9 \u03BD\u03B5\u03CC\u03C4\u03B5\u03C1\u03B7 \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7 \u03C3\u03B5 Windows, Mac \u03BA\u03B1\u03B9 UNIX\\n  Netscape 4.";
}

function  WWHCommonMessages_Set_ro(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Afi\u015Fare navigare";
  ParamMessages.mSyncIconLabel           = "Afi\u015Fare \u00EEn cuprins";
  ParamMessages.mPrevIconLabel           = "Anteriorul";
  ParamMessages.mNextIconLabel           = "Urm\u0103torul";
  ParamMessages.mRelatedTopicsIconLabel  = "Related Topics";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "Imprimare";
  ParamMessages.mBookmarkIconLabel       = "Marcaj";
  ParamMessages.mBookmarkLinkMessage     = "Face\u0163i clic pe leg\u0103tur\u0103 cu butonul din dreapta al mouse-ului \u015Fi ad\u0103uga\u0163i-o la marcaje.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Browserul dvs. nu accept\u0103 caracteristicile necesare\\npentru vizualizarea corect\u0103 a acestei pagini. Browserele acceptate sunt:\\n\\n  IE4 \u015Fi versiunile ulterioare pe Windows \u015Fi UNIX\\n  IE5 \u015Fi versiunile ulterioare pe Mac\\n  Netscape 6.1 \u015Fi versiunile ul";
}

function  WWHCommonMessages_Set_sk(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Zobrazi\u0165 navig\u00E1ciu";
  ParamMessages.mSyncIconLabel           = "Zobrazi\u0165 v obsahu";
  ParamMessages.mPrevIconLabel           = "Predchádzajúce";
  ParamMessages.mNextIconLabel           = "Nasleduj\u00FAce";
  ParamMessages.mRelatedTopicsIconLabel  = "Pr\u00EDbuzn\u00E9 t\u00E9my";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "Tla\u010Di\u0165";
  ParamMessages.mBookmarkIconLabel       = "Z\u00E1lo\u017Eka";
  ParamMessages.mBookmarkLinkMessage     = "Prav\u00FDm tla\u010Didlom my\u0161i kliknite na prepojenie a pridajte ho do v\u00E1\u0161ho zoznamu z\u00E1lo\u017Eiek.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "V\u00E1\u0161 webov\u00FD preh\u013Ead\u00E1va\u010D nepodporuje funkcie potrebn\u00E9 na\nspr\u00E1vne zobrazenie tejto str\u00E1nky.  Podporovan\u00E9 preh\u013Ead\u00E1va\u010De:\\n\\n  IE4 a nov\u0161\u00ED v syst\u00E9me Windows a UNIX,\\n  IE5 a nov\u0161\u00ED v syst\u00E9me Mac,\\n  Netscape 6.1 a nov\u0161\u00ED v syst\u00E9me Windows, Mac a UNIX,\\n  Ne";
}

function  WWHCommonMessages_Set_tr(ParamMessages)
{
  // Icon Labels
  //
  ParamMessages.mShowNavigationIconLabel = "Adres \u00C7ubu\u011Funu G\u00F6ster";
  ParamMessages.mSyncIconLabel           = "\u0130\u00E7indekilerde g\u00F6ster";
  ParamMessages.mPrevIconLabel           = "\u00D6nceki";
  ParamMessages.mNextIconLabel           = "Sonraki";
  ParamMessages.mRelatedTopicsIconLabel  = "\u0130lgili Konular";
  ParamMessages.mEmailIconLabel          = "Comment on the documentation";
  ParamMessages.mPrintIconLabel          = "Yazd\u0131r";
  ParamMessages.mBookmarkIconLabel       = "S\u0131k Kullan\u0131lanlara Ekle";
  ParamMessages.mBookmarkLinkMessage     = "Linke sa\u011F t\u0131klay\u0131n ve s\u0131k kullan\u0131lanlara ekleyin.";

  // Browser support messages
  //
  ParamMessages.mBrowserNotSupported = "Taray\u0131c\u0131n\u0131z bu sayfay\u0131 d\u00FCzg\u00FCn g\u00F6rebilmek i\u00E7in gerekli nitelikleri sa\u011Flam\u0131yor. Destekleyen taray\u0131c\u0131lar:\\n Windows ve UNIX i\u00E7in IE4 veya sonras\u0131\\Mac i\u00E7in IE5 ve sonras\u0131\\nWindows, Mac ve UNIX i\u00E7in Netscape 6.1 veya sonras\u0131\\nWindows, Mac ve UNIX i\u00E7in Nets";
}

