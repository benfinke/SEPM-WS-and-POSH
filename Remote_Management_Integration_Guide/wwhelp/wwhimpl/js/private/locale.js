// Copyright (c) 2000-2001 Quadralay Corporation.  All rights reserved.
//

function  WWHJavaScriptMessages_Object()
{
  // Set default messages
  //
  WWHJavaScriptMessages_Set_en(this);

  this.fSetByLocale = WWHJavaScriptMessages_SetByLocale;
}

function  WWHJavaScriptMessages_SetByLocale(ParamLocale)
{
  var  LocaleFunction = null;


  // Match locale
  //
  if ((ParamLocale.length > 1) &&
      (eval("typeof WWHJavaScriptMessages_Set_" + ParamLocale) == "function"))
  {
    LocaleFunction = eval("WWHJavaScriptMessages_Set_" + ParamLocale);
  }
  else if ((ParamLocale.length > 1) &&
           (eval("typeof WWHJavaScriptMessages_Set_" + ParamLocale.substring(0, 2)) == "function"))
  {
    LocaleFunction = eval("WWHJavaScriptMessages_Set_" + ParamLocale.substring(0, 2));
  }

  // Default already set, only override if locale found
  //
  if (LocaleFunction != null)
  {
    LocaleFunction(this);
  }
}

function  WWHJavaScriptMessages_Set_en(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Loading data...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Contents";
  ParamMessages.mTabsIndexLabel  = "Index";
  ParamMessages.mTabsSearchLabel = "Search";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "The current page could not be found in the table of contents.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "The index word or phrase you chose occurs in multiple documents.";
  ParamMessages.mIndexSelectMessage2 = "Please choose one.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Go!";
  ParamMessages.mSearchScopeAllLabel       = "All Available Books";
  ParamMessages.mSearchDefaultMessage      = "Type in the word(s) to search for:";
  ParamMessages.mSearchSearchingMessage    = "(searching)";
  ParamMessages.mSearchNothingFoundMessage = "(no results)";
  ParamMessages.mSearchRankLabel           = "Rank";
  ParamMessages.mSearchTitleLabel          = "Title";
  ParamMessages.mSearchBookLabel           = "Book";
}

function  WWHJavaScriptMessages_Set_zh(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "\u6b63\u5728\u52a0\u8f7d\u6570\u636e...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "\u76ee\u5f55";
  ParamMessages.mTabsIndexLabel  = "\u7d22\u5f15";
  ParamMessages.mTabsSearchLabel = "\u641c\u7d22";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "\u76ee\u5f55\u4e2d\u627e\u4e0d\u5230\u5f53\u524d\u9875\u3002";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "\u6240\u9009\u7684\u7d22\u5f15\u5b57\u8bcd\u51fa\u73b0\u5728\u591a\u4e2a\u6587\u6863\u4e2d\u3002";
  ParamMessages.mIndexSelectMessage2 = "\u8bf7\u9009\u62e9\u4e00\u4e2a\u3002";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "\u5f00\u59cb\uff01";
  ParamMessages.mSearchScopeAllLabel       = "\u6240\u6709\u4e66\u7c4d";
  ParamMessages.mSearchDefaultMessage      = "\u952e\u5165\u8981\u641c\u7d22\u7684\u5355\u8bcd\uff1a";
  ParamMessages.mSearchSearchingMessage    = "\uff08\u641c\u7d22\uff09";
  ParamMessages.mSearchNothingFoundMessage = "\uff08\u65e0\u7ed3\u679c\uff09";
  ParamMessages.mSearchRankLabel           = "\u7ea7\u522b";
  ParamMessages.mSearchTitleLabel          = "\u6807\u9898";
  ParamMessages.mSearchBookLabel           = "\u4e66\u7c4d";
}

function  WWHJavaScriptMessages_Set_es(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Cargando datos...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Contenido";
  ParamMessages.mTabsIndexLabel  = "\u00cdndice";
  ParamMessages.mTabsSearchLabel = "Buscar";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Esta p\u00e1gina no se encontr\u00f3 en el \u00edndice de contenidos.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "La frase o palabra del \u00edndice elegida aparece en varios documentos.";
  ParamMessages.mIndexSelectMessage2 = "Elija uno.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Ir";
  ParamMessages.mSearchScopeAllLabel       = "Todos los libros disponibles";
  ParamMessages.mSearchDefaultMessage      = "Escriba las palabras que desee buscar:";
  ParamMessages.mSearchSearchingMessage    = "(buscando)";
  ParamMessages.mSearchNothingFoundMessage = "(ning\u00fan resultado)";
  ParamMessages.mSearchRankLabel           = "Clase";
  ParamMessages.mSearchTitleLabel          = "T\u00edtulo";
  ParamMessages.mSearchBookLabel           = "Libro";
}

function  WWHJavaScriptMessages_Set_sv(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "L\u00e4ser in data...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Inneh\u00e5ll";
  ParamMessages.mTabsIndexLabel  = "Index";
  ParamMessages.mTabsSearchLabel = "S\u00f6k";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Det gick inte att hitta den aktuella sidan i inneh\u00e5llsf\u00f6rteckningen.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Indexordet eller frasen du valde f\u00f6rekommer i flera dokument.";
  ParamMessages.mIndexSelectMessage2 = "V\u00e4lj ett dokument.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Visa!";
  ParamMessages.mSearchScopeAllLabel       = "Alla tillg\u00e4ngliga b\u00f6cker";
  ParamMessages.mSearchDefaultMessage      = "Ange ord du vill s\u00f6ka:";
  ParamMessages.mSearchSearchingMessage    = "(s\u00f6ker)";
  ParamMessages.mSearchNothingFoundMessage = "(inga resultat)";
  ParamMessages.mSearchRankLabel           = "Relevans";
  ParamMessages.mSearchTitleLabel          = "Rubrik";
  ParamMessages.mSearchBookLabel           = "Bok";
}

function  WWHJavaScriptMessages_Set_de(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Daten werden geladen...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Inhalt";
  ParamMessages.mTabsIndexLabel  = "Index";
  ParamMessages.mTabsSearchLabel = "Suchen";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Die aktuelle Seite wurde nicht im Inhalt gefunden.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Das von Ihnen gew\u00e4hlte Indexwort bzw. der gew\u00e4hlte Indexbegriff tritt in mehreren Dokumenten auf.";
  ParamMessages.mIndexSelectMessage2 = "W\u00e4hlen Sie ein Dokument aus.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Suchen";
  ParamMessages.mSearchScopeAllLabel       = "Alle verf\u00fcgbaren B\u00fccher";
  ParamMessages.mSearchDefaultMessage      = "Geben Sie das Wort bzw. die Worte ein, nach denen gesucht werden soll:";
  ParamMessages.mSearchSearchingMessage    = "(Suchen)";
  ParamMessages.mSearchNothingFoundMessage = "(keine Ergebnisse)";
  ParamMessages.mSearchRankLabel           = "Rang";
  ParamMessages.mSearchTitleLabel          = "Titel";
  ParamMessages.mSearchBookLabel           = "Buch";
}

function  WWHJavaScriptMessages_Set_it(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Caricamento dati in corso...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Sommario";
  ParamMessages.mTabsIndexLabel  = "Indice";
  ParamMessages.mTabsSearchLabel = "Cerca";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "La pagina corrente non \u00e8 stata trovata nel Sommario.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "La parola o la frase cercata nell'indice \u00e8 presente in pi\u00f9 documenti.";
  ParamMessages.mIndexSelectMessage2 = "Sceglierne uno.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Vai!";
  ParamMessages.mSearchScopeAllLabel       = "Tutti i libri disponibili";
  ParamMessages.mSearchDefaultMessage      = "Digitare le parole da cercare:";
  ParamMessages.mSearchSearchingMessage    = "(ricerca in corso)";
  ParamMessages.mSearchNothingFoundMessage = "(nessun risultato)";
  ParamMessages.mSearchRankLabel           = "Classe";
  ParamMessages.mSearchTitleLabel          = "Titolo";
  ParamMessages.mSearchBookLabel           = "Libro";
}

function  WWHJavaScriptMessages_Set_pt(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Carregando dados...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Sum\u00E1rio";
  ParamMessages.mTabsIndexLabel  = "\u00CDndice";
  ParamMessages.mTabsSearchLabel = "Procurar";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "A p\u00e1gina atual n\u00e3o p\u00f4de ser encontrada no Sum\u00e1rio.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "A palavra ou frase escolhida no \u00edndice remissivo consta de mais de um documento.";
  ParamMessages.mIndexSelectMessage2 = "Escolha um.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Prosseguir";
  ParamMessages.mSearchScopeAllLabel       = "Todos os livros dispon\u00edveis";
  ParamMessages.mSearchDefaultMessage      = "Digite a(s) palavra(s) a ser(em) procurada(s):";
  ParamMessages.mSearchSearchingMessage    = "(procurando)";
  ParamMessages.mSearchNothingFoundMessage = "(nenhum resultado)";
  ParamMessages.mSearchRankLabel           = "Escopo";
  ParamMessages.mSearchTitleLabel          = "T\u00edtulo";
  ParamMessages.mSearchBookLabel           = "Livro";
}

function  WWHJavaScriptMessages_Set_pt_pt(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Carregando dados...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Conte\u00FAdo";
  ParamMessages.mTabsIndexLabel  = "\u00CDndice";
  ParamMessages.mTabsSearchLabel = "Procurar";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "A p\u00e1gina atual n\u00e3o p\u00f4de ser encontrada no Sum\u00e1rio.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "A palavra ou frase escolhida no \u00edndice remissivo consta de mais de um documento.";
  ParamMessages.mIndexSelectMessage2 = "Escolha um.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Prosseguir";
  ParamMessages.mSearchScopeAllLabel       = "Todos os livros dispon\u00edveis";
  ParamMessages.mSearchDefaultMessage      = "Digite a(s) palavra(s) a ser(em) procurada(s):";
  ParamMessages.mSearchSearchingMessage    = "(procurando)";
  ParamMessages.mSearchNothingFoundMessage = "(nenhum resultado)";
  ParamMessages.mSearchRankLabel           = "Escopo";
  ParamMessages.mSearchTitleLabel          = "T\u00edtulo";
  ParamMessages.mSearchBookLabel           = "Livro";
}

function  WWHJavaScriptMessages_Set_zh_tw(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "\u8f09\u5165\u8cc7\u6599...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "\u76ee\u9304";
  ParamMessages.mTabsIndexLabel  = "\u7d22\u5f15";
  ParamMessages.mTabsSearchLabel = "\u641c\u5c0b";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "\u76ee\u9304\u4e2d\u627e\u4e0d\u5230\u76ee\u524d\u7db2\u9801\u3002";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "\u60a8\u9078\u64c7\u7684\u6587\u5b57\u6216\u8a5e\u5f59\u51fa\u73fe\u5728\u591a\u500b\u6587\u4ef6\u4e2d\u3002";
  ParamMessages.mIndexSelectMessage2 = "\u8acb\u9078\u64c7\u5176\u4e2d\u4e00\u9805\u3002";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "\u958b\u59cb\uff01";
  ParamMessages.mSearchScopeAllLabel       = "\u6240\u6709\u53ef\u7528\u66f8\u7c4d";
  ParamMessages.mSearchDefaultMessage      = "\u8f38\u5165\u8981\u641c\u5c0b\u6587\u5b57\uff1a";
  ParamMessages.mSearchSearchingMessage    = "(\u641c\u5c0b\u4e2d)";
  ParamMessages.mSearchNothingFoundMessage = "(\u6c92\u6709\u7d50\u679c)";
  ParamMessages.mSearchRankLabel           = "\u95dc\u806f\u6027";
  ParamMessages.mSearchTitleLabel          = "\u6a19\u984c";
  ParamMessages.mSearchBookLabel           = "\u66f8\u540d";
}

function  WWHJavaScriptMessages_Set_ko(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "\ub370\uc774\ud130 \ub85c\ub4dc \uc911...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "\uBAA9\uCC28";
  ParamMessages.mTabsIndexLabel  = "\uc0c9\uc778";
  ParamMessages.mTabsSearchLabel = "\uac80\uc0c9";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "\ubaa9\ucc28\uc5d0\uc11c \ud604\uc7ac \ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "\uc120\ud0dd\ud55c \uc0c9\uc778 \ub2e8\uc5b4 \ub610\ub294 \uad6c\ubb38\uc774 \uc5ec\ub7ec \ubb38\uc11c\uc5d0 \uc874\uc7ac\ud569\ub2c8\ub2e4.";
  ParamMessages.mIndexSelectMessage2 = "\ud558\ub098\ub97c \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "\uac80\uc0c9";
  ParamMessages.mSearchScopeAllLabel       = "\ubaa8\ub4e0 \ucc45";
  ParamMessages.mSearchDefaultMessage      = "\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc2ed\uc2dc\uc624.";
  ParamMessages.mSearchSearchingMessage    = "(\uac80\uc0c9 \uc911)";
  ParamMessages.mSearchNothingFoundMessage = "(\uacb0\uacfc \uc5c6\uc74c)";
  ParamMessages.mSearchRankLabel           = "\ub4f1\uae09";
  ParamMessages.mSearchTitleLabel          = "\uc81c\ubaa9";
  ParamMessages.mSearchBookLabel           = "\ucc45";
}

function  WWHJavaScriptMessages_Set_fr(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Chargement des donn\u00e9es...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Table des mati\u00e8res";
  ParamMessages.mTabsIndexLabel  = "Index";
  ParamMessages.mTabsSearchLabel = "Rechercher";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Page introuvable dans la table des mati\u00e8res.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Le terme ou l'expression d'index que vous avez choisis apparaissent dans plusieurs documents.";
  ParamMessages.mIndexSelectMessage2 = "S\u00e9lectionnez-en un.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Lancer";
  ParamMessages.mSearchScopeAllLabel       = "Tous les livres disponibles";
  ParamMessages.mSearchDefaultMessage      = "Saisissez un ou plusieurs mots cl\u00e9s\u00a0:";
  ParamMessages.mSearchSearchingMessage    = "(recherche en cours)";
  ParamMessages.mSearchNothingFoundMessage = "(aucun r\u00e9sultat)";
  ParamMessages.mSearchRankLabel           = "Pertinence";
  ParamMessages.mSearchTitleLabel          = "Titre";
  ParamMessages.mSearchBookLabel           = "Livre";
}

function  WWHJavaScriptMessages_Set_ja(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u3002";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "\u76ee\u6b21";
  ParamMessages.mTabsIndexLabel  = "\u7d22\u5f15";
  ParamMessages.mTabsSearchLabel = "\u691c\u7d22";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "\u73fe\u5728\u306e\u30da\u30fc\u30b8\u306f\u76ee\u6b21\u5185\u3067\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "\u9078\u629e\u3057\u305f\u7d22\u5f15\u306e\u5358\u8a9e\u307e\u305f\u306f\u53e5\u306f\u3001\u8907\u6570\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002";
  ParamMessages.mIndexSelectMessage2 = "1 \u3064\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "\u691c\u7d22\u958b\u59cb";
  ParamMessages.mSearchScopeAllLabel       = "\u5229\u7528\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u30d6\u30c3\u30af";
  ParamMessages.mSearchDefaultMessage      = "\u691c\u7d22\u5bfe\u8c61\u8a9e:";
  ParamMessages.mSearchSearchingMessage    = "(\u691c\u7d22\u4e2d)";
  ParamMessages.mSearchNothingFoundMessage = "(\u7d50\u679c\u306a\u3057)";
  ParamMessages.mSearchRankLabel           = "\u30e9\u30f3\u30af";
  ParamMessages.mSearchTitleLabel          = "\u30bf\u30a4\u30c8\u30eb";
  ParamMessages.mSearchBookLabel           = "\u30d6\u30c3\u30af";
}


function  WWHJavaScriptMessages_Set_cs(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Na\u010d\u00edt\u00e1n\u00ed dat...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Obsah";
  ParamMessages.mTabsIndexLabel  = "Rejst\u0159\u00edk";
  ParamMessages.mTabsSearchLabel = "Hledat";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Aktu\u00e1ln\u00ed str\u00e1nka nebyla v obsahu nalezena.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Zvolen\u00e9 slovo nebo fr\u00e1ze se vyskytuje v n\u011bkolika dokumentech.";
  ParamMessages.mIndexSelectMessage2 = "Vyberte jednu z mo\u017enost\u00ed.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Odeslat";
  ParamMessages.mSearchScopeAllLabel       = "V\u0161echny dostupn\u00e9 knihy";
  ParamMessages.mSearchDefaultMessage      = "Zadejte slova, kter\u00e1 chcete vyhledat:";
  ParamMessages.mSearchSearchingMessage    = "(vyhled\u00e1v\u00e1n\u00ed)";
  ParamMessages.mSearchNothingFoundMessage = "(\u017e\u00e1dn\u00e9 v\u00fdsledky)";
  ParamMessages.mSearchRankLabel           = "Za\u0159azen\u00ed";
  ParamMessages.mSearchTitleLabel          = "N\u00e1zev";
  ParamMessages.mSearchBookLabel           = "Kniha";
}

function  WWHJavaScriptMessages_Set_hu(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Adatbet\u00F6lt\u00E9s...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Tartalom";
  ParamMessages.mTabsIndexLabel  = "T\u00E1rgymutat\u00F3";
  ParamMessages.mTabsSearchLabel = "Keres\u00E9s";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Az aktu\u00E1lis oldal nem tal\u00E1lhat\u00F3 meg a tartalomjegyz\u00E9kben.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "A kiv\u00E1lasztott c\u00EDmsz\u00F3 vagy kifejez\u00E9s t\u00F6bb dokumentumban is el\u00F5fordul.";
  ParamMessages.mIndexSelectMessage2 = "V\u00E1lasszon ki ezek k\u00F6z\u00FCl egyet.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Keres\u00E9s";
  ParamMessages.mSearchScopeAllLabel       = "Az \u00F6sszes el\u00E9rhet\u00F5 k\u00F6nyvben";
  ParamMessages.mSearchDefaultMessage      = "\u00CDrja be a keresett szavakat:";
  ParamMessages.mSearchSearchingMessage    = "(keres\u00E9s)";
  ParamMessages.mSearchNothingFoundMessage = "(nincs tal\u00E1lat)";
  ParamMessages.mSearchRankLabel           = "Rangsor";
  ParamMessages.mSearchTitleLabel          = "C\u00EDm";
  ParamMessages.mSearchBookLabel           = "K\u00F6nyv";
}

function  WWHJavaScriptMessages_Set_nl(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Gegevens worden geladen...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Inhoud";
  ParamMessages.mTabsIndexLabel  = "Index";
  ParamMessages.mTabsSearchLabel = "Zoeken";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "De huidige pagina is niet in de inhoudsopgave gevonden.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Het woord/de woordgroep komt in meerdere documenten voor.";
  ParamMessages.mIndexSelectMessage2 = "Kies \u00E9\u00E9n.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Ga!";
  ParamMessages.mSearchScopeAllLabel       = "Alle beschikbare boeken";
  ParamMessages.mSearchDefaultMessage      = "Typ de woorden waarnaar u wilt zoeken:";
  ParamMessages.mSearchSearchingMessage    = "(bezig met zoeken)";
  ParamMessages.mSearchNothingFoundMessage = "(geen resultaten)";
  ParamMessages.mSearchRankLabel           = "Rang";
  ParamMessages.mSearchTitleLabel          = "Titel";
  ParamMessages.mSearchBookLabel           = "Boek";
}


function  WWHJavaScriptMessages_Set_pl(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Trwa \u0142adowanie danych\u2026";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Spis tre\u015Bci";
  ParamMessages.mTabsIndexLabel  = "Indeks";
  ParamMessages.mTabsSearchLabel = "Wyszukaj";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "W spisie tre\u015Bci nie mo\u017Cna znale\u017A\u0107 bie\u017C\u0105cej strony";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Wybrane has\u0142o indeksu lub fraza wyst\u0119puje w wielu dokumentach. ";
  ParamMessages.mIndexSelectMessage2 = "Wybierz jedn\u0105 z opcji.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Szukaj!";
  ParamMessages.mSearchScopeAllLabel       = "Wszystkie dost\u0119pne ksi\u0105\u017Cki";
  ParamMessages.mSearchDefaultMessage      = "Wpisz wyszukiwane s\u0142owa:";
  ParamMessages.mSearchSearchingMessage    = "(wyszukiwanie)";
  ParamMessages.mSearchNothingFoundMessage = "(brak wynik\u00F3w)";
  ParamMessages.mSearchRankLabel           = "Pozycja";
  ParamMessages.mSearchTitleLabel          = "Tytu\u0142";
  ParamMessages.mSearchBookLabel           = "Ksi\u0105\u017Cka";
}

function  WWHJavaScriptMessages_Set_ru(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445\u2026...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435";
  ParamMessages.mTabsIndexLabel  = "\u0410\u043B\u0444\u0430\u0432\u0438\u0442\u043D\u044B\u0439 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C";
  ParamMessages.mTabsSearchLabel = "\u041F\u043E\u0438\u0441\u043A";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u0432 \u043E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0438.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0432\u0430\u043C\u0438 \u0438\u043D\u0434\u0435\u043A\u0441\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0445.";
  ParamMessages.mIndexSelectMessage2 = "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "\u041D\u0430\u0439\u0442\u0438!";
  ParamMessages.mSearchScopeAllLabel       = "\u0412\u0441\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u043D\u0438\u0433\u0438";
  ParamMessages.mSearchDefaultMessage      = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u0430 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430:";
  ParamMessages.mSearchSearchingMessage    = "(\u043F\u043E\u0438\u0441\u043A)";
  ParamMessages.mSearchNothingFoundMessage = "(\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E)";
  ParamMessages.mSearchRankLabel           = "\u0421\u043E\u0432\u043F";
  ParamMessages.mSearchTitleLabel          = "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435";
  ParamMessages.mSearchBookLabel           = "\u041A\u043D\u0438\u0433\u0430";
}

function  WWHJavaScriptMessages_Set_da(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Indl\u00E6ser data...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Indhold";
  ParamMessages.mTabsIndexLabel  = "Indeks";
  ParamMessages.mTabsSearchLabel = "S\u00F8g";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Den aktuelle side kunne ikke findes i indholdsfortegnelsen.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Det eller de indeksord, du valgte, forekommer i flere dokumenter.";
  ParamMessages.mIndexSelectMessage2 = "V\u00E6lg et af dem.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Videre!";
  ParamMessages.mSearchScopeAllLabel       = "Alle tilg\u00E6ngelige b\u00F8ger";
  ParamMessages.mSearchDefaultMessage      = "Indtast et eller flere ord, du vil s\u00F8ge efter:";
  ParamMessages.mSearchSearchingMessage    = "(s\u00F8ger)";
  ParamMessages.mSearchNothingFoundMessage = "(ingen resultater)";
  ParamMessages.mSearchRankLabel           = "Relevans";
  ParamMessages.mSearchTitleLabel          = "Titel";
  ParamMessages.mSearchBookLabel           = "Bog";
}

function  WWHJavaScriptMessages_Set_no(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Laster data...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Innhold";
  ParamMessages.mTabsIndexLabel  = "Stikkordregister";
  ParamMessages.mTabsSearchLabel = "S\u00F8k";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Den aktuelle siden ble ikke funnet i innholdsfortegnelsen.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "S\u00F8keordet eller -frasen er funnet i flere dokumenter.";
  ParamMessages.mIndexSelectMessage2 = "Vennligst velg ett.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "G\u00E5!";
  ParamMessages.mSearchScopeAllLabel       = "Alle tilgjengelige b\u00F8ker";
  ParamMessages.mSearchDefaultMessage      = "Skriv inn s\u00F8keord:";
  ParamMessages.mSearchSearchingMessage    = "(s\u00F8ker)";
  ParamMessages.mSearchNothingFoundMessage = "(ingen resultater)";
  ParamMessages.mSearchRankLabel           = "Rangering";
  ParamMessages.mSearchTitleLabel          = "Tittel";
  ParamMessages.mSearchBookLabel           = "Bok";
}

function  WWHJavaScriptMessages_Set_fi(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Tietoja ladataan...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Sis\u00E4llys";
  ParamMessages.mTabsIndexLabel  = "Hakemisto";
  ParamMessages.mTabsSearchLabel = "Haku";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Nykyist\u00E4 sivua ei l\u00F6ydy sis\u00E4llysluettelosta.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Hakusana tai -lause esiintyy useissa tiedostoissa.";
  ParamMessages.mIndexSelectMessage2 = "Valitse yksi.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Hae";
  ParamMessages.mSearchScopeAllLabel       = "Kaikki saatavat kirjat";
  ParamMessages.mSearchDefaultMessage      = "Kirjoita hakusana(t):";
  ParamMessages.mSearchSearchingMessage    = "(haetaan)";
  ParamMessages.mSearchNothingFoundMessage = "(ei tuloksia)";
  ParamMessages.mSearchRankLabel           = "Sija";
  ParamMessages.mSearchTitleLabel          = "Nimike";
  ParamMessages.mSearchBookLabel           = "Kirja";
}

function  WWHJavaScriptMessages_Set_he(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "\u05D8\u05D5\u05E2\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "\u05EA\u05D5\u05DB\u05DF \u05E2\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD";
  ParamMessages.mTabsIndexLabel  = "\u05D0\u05D9\u05E0\u05D3\u05E7\u05E1";
  ParamMessages.mTabsSearchLabel = "\u05D7\u05D9\u05E4\u05D5\u05E9";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "\u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05D1\u05EA\u05D5\u05DB\u05DF \u05D4\u05E2\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "\u05D4\u05DE\u05D9\u05DC\u05D4 \u05D0\u05D5 \u05D4\u05D1\u05D9\u05D8\u05D5\u05D9 \u05E9\u05D1\u05D7\u05E8\u05EA \u05DE\u05D5\u05E4\u05D9\u05E2 \u05D1\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05DE\u05E8\u05D5\u05D1\u05D9\u05DD.";
  ParamMessages.mIndexSelectMessage2 = "\u05D0\u05E0\u05D0 \u05D1\u05D7\u05E8 \u05D0\u05D7\u05D3.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "\u05D4\u05EA\u05D7\u05DC!";
  ParamMessages.mSearchScopeAllLabel       = "\u05DB\u05DC \u05D4\u05E1\u05E4\u05E8\u05D9\u05DD \u05D4\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD";
  ParamMessages.mSearchDefaultMessage      = "\u05D4\u05E7\u05DC\u05D3 \u05D0\u05EA \u05D4\u05DE\u05D9\u05DC\u05D4(\u05D9\u05DD) \u05DC\u05D7\u05D9\u05E4\u05D5\u05E9:";
  ParamMessages.mSearchSearchingMessage    = "(\u05DE\u05D7\u05E4\u05E9)";
  ParamMessages.mSearchNothingFoundMessage = "(\u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA)";
  ParamMessages.mSearchRankLabel           = "\u05D3\u05D9\u05E8\u05D5\u05D2";
  ParamMessages.mSearchTitleLabel          = "\u05DB\u05D5\u05EA\u05E8";
  ParamMessages.mSearchBookLabel           = "\u05E1\u05E4\u05E8";
}

function  WWHJavaScriptMessages_Set_el(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "\u0393\u03AF\u03BD\u03B5\u03C4\u03B1\u03B9 \u03C6\u03CC\u03C1\u03C4\u03C9\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "\u03A0\u03B5\u03C1\u03B9\u03B5\u03C7\u03CC\u03BC\u03B5\u03BD\u03B1";
  ParamMessages.mTabsIndexLabel  = "\u0395\u03C5\u03C1\u03B5\u03C4\u03AE\u03C1\u03B9\u03BF";
  ParamMessages.mTabsSearchLabel = "\u0391\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "\u0397 \u03C4\u03C1\u03AD\u03C7\u03BF\u03C5\u03C3\u03B1 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1 \u03B4\u03B5\u03BD \u03AE\u03C4\u03B1\u03BD \u03B4\u03C5\u03BD\u03B1\u03C4\u03CC \u03BD\u03B1 \u03B5\u03BD\u03C4\u03BF\u03C0\u03B9\u03C3\u03C4\u03B5\u03AF \u03C3\u03C4\u03BF\u03BD \u03C0\u03AF\u03BD\u03B1\u03BA\u03B1 \u03C0\u03B5\u03C1\u03B9\u03B5\u03C7\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "\u0397 \u03BB\u03AD\u03BE\u03B7 \u03AE \u03B7 \u03C6\u03C1\u03AC\u03C3\u03B7 \u03B5\u03C5\u03C1\u03B5\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5 \u03C0\u03BF\u03C5 \u03B5\u03C0\u03B9\u03BB\u03AD\u03BE\u03B1\u03C4\u03B5 \u03B5\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03C3\u03B5 \u03C0\u03BF\u03BB\u03BB\u03AC \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03B1.";
  ParamMessages.mIndexSelectMessage2 = "\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03AD\u03BD\u03B1.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "\u039C\u03B5\u03C4\u03AC\u03B2\u03B1\u03C3\u03B7!";
  ParamMessages.mSearchScopeAllLabel       = "\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B1 \u03B2\u03B9\u03B2\u03BB\u03AF\u03B1";
  ParamMessages.mSearchDefaultMessage      = "\u03A0\u03BB\u03B7\u03BA\u03C4\u03C1\u03BF\u03BB\u03BF\u03B3\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7(\u03B9\u03C2) \u03BB\u03AD\u03BE\u03B7(\u03B5\u03B9\u03C2) \u03B3\u03B9\u03B1 \u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7:";
  ParamMessages.mSearchSearchingMessage    = "(\u03B3\u03AF\u03BD\u03B5\u03C4\u03B1\u03B9 \u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7)";
  ParamMessages.mSearchNothingFoundMessage = "(\u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B1\u03BD \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1)";
  ParamMessages.mSearchRankLabel           = "\u03A3\u03B5\u03B9\u03C1\u03AC";
  ParamMessages.mSearchTitleLabel          = "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2";
  ParamMessages.mSearchBookLabel           = "\u0392\u03B9\u03B2\u03BB\u03AF\u03BF";
}

function  WWHJavaScriptMessages_Set_ro(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Se \u00EEncarc\u0103 date\u2026";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Cuprins";
  ParamMessages.mTabsIndexLabel  = "Index";
  ParamMessages.mTabsSearchLabel = "C\u0103utare";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Pagina curent\u0103 nu a fost g\u0103sit\u0103 \u00EEn cuprins.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Cuv\u00E2ntul sau expresia de index aleas\u0103 apare \u00EEn mai multe documente.";
  ParamMessages.mIndexSelectMessage2 = "Selecta\u0163i unul.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Salt!";
  ParamMessages.mSearchScopeAllLabel       = "Toate c\u0103r\u0163ile disponibile";
  ParamMessages.mSearchDefaultMessage      = "Introduce\u0163i cuv\u00E2ntul/cuvintele de c\u0103utat:";
  ParamMessages.mSearchSearchingMessage    = "(se caut\u0103)";
  ParamMessages.mSearchNothingFoundMessage = "(nici un rezultat)";
  ParamMessages.mSearchRankLabel           = "Categorie";
  ParamMessages.mSearchTitleLabel          = "Titlu";
  ParamMessages.mSearchBookLabel           = "Carte";
}

function  WWHJavaScriptMessages_Set_sk(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Na\u010D\u00EDtavaj\u00FA sa \u00FAdaje...";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "Obsah";
  ParamMessages.mTabsIndexLabel  = "Register";
  ParamMessages.mTabsSearchLabel = "H\u013Eada\u0165";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "Aktu\u00E1lnu str\u00E1nku sa nepodarilo n\u00E1js\u0165 v obsahu.";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Zvolen\u00E9 indexov\u00E9 slovo alebo zvolen\u00E1 indexov\u00E1 fr\u00E1za sa nach\u00E1dza vo viacer\u00FDch dokumentoch.";
  ParamMessages.mIndexSelectMessage2 = "Zvo\u013Ete jeden z nich.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Vykona\u0165";
  ParamMessages.mSearchScopeAllLabel       = "V\u0161etky dostupn\u00E9 knihy";
  ParamMessages.mSearchDefaultMessage      = "Zadajte h\u013Eadan\u00E9 slov\u00E1:";
  ParamMessages.mSearchSearchingMessage    = "(h\u013Eadanie)";
  ParamMessages.mSearchNothingFoundMessage = "(\u017Eiadne v\u00FDsledky)";
  ParamMessages.mSearchRankLabel           = "Hodnotenie";
  ParamMessages.mSearchTitleLabel          = "N\u00E1zov";
  ParamMessages.mSearchBookLabel           = "Kniha";
}

function  WWHJavaScriptMessages_Set_tr(ParamMessages)
{
  // Initialization Messages
  //
  ParamMessages.mInitializingMessage = "Veriler y\u00FCkleniyor";

  // Tab Labels
  //
  ParamMessages.mTabsTOCLabel    = "\u0130\u00E7indekiler";
  ParamMessages.mTabsIndexLabel  = "Dizin";
  ParamMessages.mTabsSearchLabel = "Ara";

  // TOC Messages
  //
  ParamMessages.mTOCFileNotFoundMessage = "\u015Eimdiki sayfa \u0130\u00E7indekilerde bulunamad\u0131";

  // Index Messages
  //
  ParamMessages.mIndexSelectMessage1 = "Se\u00E7ti\u011Finiz dizin kelime ya da kelime grubu birden fazla d\u00F6k\u00FCmanda yer al\u0131yor";
  ParamMessages.mIndexSelectMessage2 = "L\u00FCtfen birini se\u00E7in.";

  // Search Messages
  //
  ParamMessages.mSearchButtonLabel         = "Git!";
  ParamMessages.mSearchScopeAllLabel       = "T\u00FCm Mevcut Kitaplar";
  ParamMessages.mSearchDefaultMessage      = "Aramak i\u00E7in bir(ka\u00E7) kelime yaz\u0131n:";
  ParamMessages.mSearchSearchingMessage    = "(ar\u0131yor)";
  ParamMessages.mSearchNothingFoundMessage = "(sonu\u00E7 yok)";
  ParamMessages.mSearchRankLabel           = "Derece";
  ParamMessages.mSearchTitleLabel          = "Ba\u015Fl\u0131k";
  ParamMessages.mSearchBookLabel           = "Kitap";
}

