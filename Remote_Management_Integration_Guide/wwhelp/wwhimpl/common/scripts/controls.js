// Copyright (c) 2000-2001 Quadralay Corporation.  All rights reserved.
//

function  WWHControls_Object()
{
  this.mSyncPrevNext  = new Array(null, null, null);

  this.fSansNavigation = WWHControls_SansNavigation;
  this.fLeftHTML       = WWHControls_LeftHTML;
  this.fRightHTML      = WWHControls_RightHTML;
  this.fCenterHTML     = WWHControls_CenterHTML;
  this.fUpdateHREF     = WWHControls_UpdateHREF;
  this.fSyncTOC        = WWHControls_SyncTOC;
  this.fPrevious       = WWHControls_Previous;
  this.fNext           = WWHControls_Next;
  this.fRelatedTopics  = WWHControls_RelatedTopics;
  this.fEmail          = WWHControls_Email;
  this.fPrint          = WWHControls_Print;
  this.fBookmark       = WWHControls_Bookmark;
  this.fBookmarkData   = WWHControls_BookmarkData;
  this.fBookmarkLink   = WWHControls_BookmarkLink;
}

function  WWHControls_SansNavigation()
{
  var  bSansNavigation = false;


  if (typeof WWHFrame.WWHNavigationFrame == "undefined")
  {
    bSansNavigation = true;
  }

  return bSansNavigation;
}

// Veritas: Added to display draft message
function  WWHControls_CenterHTML(DraftMsg)
{
  var  HTML = "";
  var  Settings = WWHFrame.WWHHelp.mSettings;

  // Only display if someone has defined a Draft Message (in User Macros: VxDraftMsg).
  if (DraftMsg)
  {
    HTML +='<div align="center">\n';
    HTML +='  <table border="0" cellpadding="0" cellspacing="0" height="29">\n';
    HTML +='    <tr valign="top">\n';
    HTML +='      <td valign="top">\n';
    HTML +='         <img src="../images/VxDraftLeft.gif" width="15" height="29">\n';
    HTML +='      </td>\n';
    HTML +='      <td align="center" NOWRAP valign="top" background="../images/VxDraftCenter.gif">\n';
    HTML +='         <span style="font-family: Verdana, Arial, Helvetica, sans-serif; \n';
    HTML +='            color: red; font-weight: bold; font-size: 11px; \n';
    HTML +='            vertical-align: top; background-color: #FFFFFF; "> ' + DraftMsg + ' </span>\n';
    HTML +='      </td>\n';
    HTML +='      <td valign="top">\n';
    HTML +='         <img src="../images/VxDraftRight.gif" width="15" height="29">\n';
    HTML +='      </td>\n';
    HTML +='    </tr>\n';
    HTML +='  </table>\n';
    HTML +='</div>\n';
  }
  return HTML;
}

function  WWHControls_LeftHTML()
{
  var  HTML = "";
  var  Settings = WWHFrame.WWHHelp.mSettings;

  var  ToolTip = "alt=\"";

  // Veritas addition: handle tool tips under Mozilla (Netscape and FireFox)
  if (WWHFrame.WWHBrowserInfo.mBrowser == 4) {  // Shorthand for Netscape 6.x (Mozilla)
      ToolTip = "title=\"";
  }
 

  HTML += "<table border=\"0\">\n";
  HTML += " <tr>\n";

  // Display controls
  //
  if (this.fSansNavigation())
  {
    HTML += "  <td width=\"23\">\n";
    HTML += "   <a href=\"javascript:WWHFrame.WWHControls.fSyncTOC();\">\n";
    HTML += "    <img name=\"WWHFrameSetIcon\" " + ToolTip  + WWHFrame.WWHHelp.mMessages.mShowNavigationIconLabel + "\" border=\"0\" src=\"../images/frameset.gif\" width=\"23\" height=\"21\">\n";
    HTML += "   </a>\n";
    HTML += "  </td>\n";
  }
  else if (!WWHJavaScript && Settings.mbSyncContentsEnabled)
  {
    HTML += "  <td width=\"23\">\n";
    HTML += "   <a href=\"javascript:WWHFrame.WWHControls.fSyncTOC();\">\n";
    HTML += "    <img name=\"WWHSyncIcon\" " + ToolTip  + WWHFrame.WWHHelp.mMessages.mSyncIconLabel + "\" border=\"0\" src=\"../images/syncx.gif\" width=\"23\" height=\"21\">\n";
    HTML += "   </a>\n";
    HTML += "  </td>\n";
  }

  if (Settings.mbPrevEnabled)
  {
    HTML += "  <td width=\"23\">\n";
    HTML += "   <a href=\"javascript:WWHFrame.WWHControls.fPrevious();\">\n";
    HTML += "    <img name=\"WWHPrevIcon\" " + ToolTip  + WWHFrame.WWHHelp.mMessages.mPrevIconLabel + "\" border=\"0\" src=\"../images/prevx.gif\" width=\"23\" height=\"21\">\n";
    HTML += "   </a>\n";
    HTML += "  </td>\n";
  }

  if (Settings.mbNextEnabled)
  {
    HTML += "  <td width=\"23\">\n";
    HTML += "   <a href=\"javascript:WWHFrame.WWHControls.fNext();\">\n";
    HTML += "    <img name=\"WWHNextIcon\" " + ToolTip  + WWHFrame.WWHHelp.mMessages.mNextIconLabel + "\" border=\"0\" src=\"../images/nextx.gif\" width=\"23\" height=\"21\">\n";
    HTML += "   </a>\n";
    HTML += "  </td>\n";
  }

  HTML += " </tr>\n";
  HTML += "</table>\n";

  return HTML;
}

function  WWHControls_RightHTML()
{
  var  HTML = "";
  var  Settings = WWHFrame.WWHHelp.mSettings;
  var  ToolTip = "alt=\"";

  // Veritas addition: handle tool tips under Mozilla (Netscape and FireFox)
  if (WWHFrame.WWHBrowserInfo.mBrowser == 4) {  // Shorthand for Netscape 6.x (Mozilla)
      ToolTip = "title=\"";
  }
 

  // Confirm controls can be displayed
  //
  if (Settings.mbEmailEnabled)
  {
    Settings.mbEmailEnabled = ((typeof Settings.mEmailAddress == "string") &&
                               (Settings.mEmailAddress.length > 0));
  }

  if (Settings.mbPrintEnabled)
  {
    Settings.mbPrintEnabled = ((typeof WWHFrame.WWHContentFrame.WWHDocumentFrame.focus != "undefined") &&
                               (typeof WWHFrame.WWHContentFrame.WWHDocumentFrame.print != "undefined"))
  }


  // Display controls
  //
  HTML += "<table border=\"0\">\n";
  HTML += " <tr>\n";

  if (Settings.mbRelatedTopicsEnabled)
  {
    HTML += "  <td width=\"23\">\n";
    HTML += "   <a href=\"javascript:WWHFrame.WWHControls.fRelatedTopics();\">\n";
    HTML += "    <img name=\"WWHRelatedTopicsIcon\" " + ToolTip  + WWHFrame.WWHHelp.mMessages.mRelatedTopicsIconLabel + "\" border=\"0\" src=\"../images/relatedx.gif\" width=\"23\" height=\"21\">\n";
    HTML += "   </a>\n";
    HTML += "  </td>\n";
  }

  if (Settings.mbEmailEnabled)
  {
    HTML += "  <td width=\"23\">\n";
    HTML += "   <a href=\"javascript:WWHFrame.WWHControls.fEmail();\">\n";
    HTML += "    <img name=\"WWHEmailIcon\" " + ToolTip  + WWHFrame.WWHHelp.mMessages.mEmailIconLabel + "\" border=\"0\" src=\"../images/emailx.gif\" width=\"23\" height=\"21\">\n";
    HTML += "   </a>\n";
    HTML += "  </td>\n";
  }

  if (Settings.mbPrintEnabled)
  {
    HTML += "  <td width=\"23\">\n";
    HTML += "   <a href=\"javascript:WWHFrame.WWHControls.fPrint();\">\n";
    HTML += "    <img name=\"WWHPrintIcon\" " + ToolTip  + WWHFrame.WWHHelp.mMessages.mPrintIconLabel + "\" border=\"0\" src=\"../images/printx.gif\" width=\"23\" height=\"21\">\n";
    HTML += "   </a>\n";
    HTML += "  </td>\n";
  }

  if (Settings.mbBookmarkEnabled)
  {
    HTML += "  <td width=\"23\">\n";
    HTML += "   <a href=\"javascript:WWHFrame.WWHControls.fBookmark();\">\n";
    HTML += "    <img name=\"WWHBookmarkIcon\" " + ToolTip  + WWHFrame.WWHHelp.mMessages.mBookmarkIconLabel + "\" border=\"0\" src=\"../images/bkmarkx.gif\" width=\"23\" height=\"21\">\n";
    HTML += "   </a>\n";
    HTML += "  </td>\n";
  }

  HTML += " </tr>\n";
  HTML += "</table>\n";

  return HTML;
}

function  WWHControls_UpdateHREF(ParamHREF)
{
  var  DocumentBookmark = "";
  var  ControlsDocument;
  var  Settings = WWHFrame.WWHHelp.mSettings;
  var  Prefix = WWHFrame.WWHHelp.mHelpURLPrefix;
  var  IconURL;


  // Update sync/prev/next array
  //
  this.mSyncPrevNext = WWHFrame.WWHHelp.fGetSyncPrevNext(ParamHREF);

  // Process left control frame
  //
  ControlsDocument = eval("WWHFrame.WWHContentFrame.WWHPageNavFrame.WWHControlsLeftFrame.document");

  // Set Sync Icon
  //
  if (this.fSansNavigation())
  {
    ;  // Nothing to do
  }
  else if (!WWHJavaScript && Settings.mbSyncContentsEnabled)
  {
    if (this.mSyncPrevNext[0] != null)
    {
      IconURL =  Prefix + "wwhelp/wwhimpl/common/images/sync.gif";
    }
    else
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/syncx.gif";
    }
    ControlsDocument.images["WWHSyncIcon"].src = IconURL;
  }

  // Set Previous Icon
  //
  if (Settings.mbPrevEnabled)
  {
    if (this.mSyncPrevNext[1] != null)
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/prev.gif";
    }
    else
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/prevx.gif";
    }
    ControlsDocument.images["WWHPrevIcon"].src = IconURL;
  }

  // Set Next Icon
  //
  if (Settings.mbNextEnabled)
  {
    if (this.mSyncPrevNext[2] != null)
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/next.gif";
    }
    else
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/nextx.gif";
    }
    ControlsDocument.images["WWHNextIcon"].src = IconURL;
  }

  // Process right control frame
  //
  ControlsDocument = eval("WWHFrame.WWHContentFrame.WWHPageNavFrame.WWHControlsRightFrame.document");

  // Set Related Topics Icon
  //
  if (Settings.mbRelatedTopicsEnabled)
  {
    if (typeof WWHFrame.WWHContentFrame.WWHDocumentFrame.WWHDefineRelatedTopics == "function")
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/related.gif";
    }
    else
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/relatedx.gif";
    }
    ControlsDocument.images["WWHRelatedTopicsIcon"].src = IconURL;
  }

  // Set E-Mail Icon
  //
  if (Settings.mbEmailEnabled)
  {
    if (this.mSyncPrevNext[0] != null)
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/email.gif";
    }
    else
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/emailx.gif";
    }
    ControlsDocument.images["WWHEmailIcon"].src = IconURL;
  }

  // Set Print Icon
  //
  if (Settings.mbPrintEnabled)
  {
    if (this.mSyncPrevNext[0] != null)
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/print.gif";
    }
    else
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/printx.gif";
    }
    ControlsDocument.images["WWHPrintIcon"].src = IconURL;
  }

  // Set Bookmark Icon
  //
  if (Settings.mbBookmarkEnabled)
  {
    if (this.mSyncPrevNext[0] != null)
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/bkmark.gif";
    }
    else
    {
      IconURL = Prefix + "wwhelp/wwhimpl/common/images/bkmarkx.gif";
    }
    ControlsDocument.images["WWHBookmarkIcon"].src = IconURL;
  }
}

function  WWHControls_SyncTOC()
{
  var  URL = WWHStringUtilities_NormalizeURL(WWHFrame.WWHContentFrame.WWHDocumentFrame.location.href);


  // Show navigation or reveal in TOC?
  //
  if (this.fSansNavigation())
  {
    WWHFrame.WWHHandler.fSyncTOC(URL);
  }
  else
  {
    if (this.mSyncPrevNext[0] != null)
    {
      WWHFrame.WWHHandler.fSyncTOC(URL);
    }
  }
}

function  WWHControls_Previous()
{
  if (this.mSyncPrevNext[1] != null)
  {
    WWHFrame.WWHHelp.fSetDocumentHREF(this.mSyncPrevNext[1], false);
  }
}

function  WWHControls_Next()
{
  if (this.mSyncPrevNext[2] != null)
  {
    WWHFrame.WWHHelp.fSetDocumentHREF(this.mSyncPrevNext[2], false);
  }
}

function  WWHControls_RelatedTopics()
{
  if (typeof WWHFrame.WWHContentFrame.WWHDocumentFrame.WWHDefineRelatedTopics == "function")
  {
    WWHFrame.WWHRelatedTopics.fShow();
  }
}

function  WWHControls_Email()
{
  if (this.mSyncPrevNext[0] != null)
  {
    WWHFrame.WWHContentFrame.WWHDocumentFrame.location = "mailto:" + WWHFrame.WWHHelp.mSettings.mEmailAddress + "?subject=Feedback: " + escape(this.mSyncPrevNext[0]);
  }
}

function  WWHControls_Print()
{
  if (this.mSyncPrevNext[0] != null)
  {
    WWHFrame.WWHContentFrame.WWHDocumentFrame.focus();
    WWHFrame.WWHContentFrame.WWHDocumentFrame.print();
  }
}

function  WWHControls_Bookmark()
{
  if (this.mSyncPrevNext[0] != null)
  {
    var  BookmarkData;


    BookmarkData = this.fBookmarkData();
    if ((BookmarkData[0] != null) &&
        (BookmarkData[1] != null))
    // {
      // if ((WWHFrame.WWHBrowserInfo.mBrowser == 2) &&  // Shorthand for IE
        //   ( ! WWHFrame.WWHBrowserInfo.mbMacIE45))
      // {
        // window.external.AddFavorite(BookmarkData[1], BookmarkData[0]);
      // }
      // else
      {
        var  Window;


        Window = window.open(WWHFrame.WWHHelp.mHelpURLPrefix + "wwhelp/wwhimpl/common/html/bookmark.htm", "WWHBookmarkLinkWindow", "width=400,height=100");
        Window.document.open();
        Window.document.writeln('<html><head>');
        Window.document.writeln('<title>' + WWHFrame.WWHHelp.mMessages.mBookmarkIconLabel + '</title>');
        Window.document.writeln('<link rel="StyleSheet" href="../../../../wghelp.css" type="text/css" />');
        Window.document.writeln('</head>');
        Window.document.writeln('<body class="bmbody">');

        Window.document.writeln('<p class="bmpara">' + WWHFrame.WWHHelp.mMessages.mBookmarkLinkMessage + '</p>');
        Window.document.writeln('<table class="bmtable"><tr><td class="bmpara">' + this.fBookmarkLink() + '</td></tr></table>');
        // Window.document.writeln('<p>' + this.fBookmarkLink() + '</p>'); 
        Window.document.writeln('</body></html>');
        Window.document.close();
      }
    // }
  }
}

function  WWHControls_BookmarkData()
{
  var  BookmarkData = new Array(null, null);


  if (this.mSyncPrevNext[0] != null)
  {
    var  DocumentURL;


    // Determine bookmark link
    //
    DocumentURL = WWHFrame.WWHHelp.fGetBookFileHREF(this.mSyncPrevNext[0]);
    if (DocumentURL != null)
    {
      var  DocumentTitle;
      var  ResetEverything;
      var  DocumentBookmarkURL;


      DocumentTitle = WWHFrame.WWHHelp.fHREFToTitle(this.mSyncPrevNext[0]);

      if ((WWHFrame.WWHBrowserInfo.mBrowser == 1) ||  // Shorthand for Netscape
          (WWHFrame.WWHBrowserInfo.mBrowser == 4))    // Shorthand for Netscape 6.0
      {
        ResetEverything = "y=eval(&quot;document.open();document.writeln('&lt;a href=\\&quot;&quot;+x+&quot;\\&quot;&gt;&quot;+x+&quot;&lt;/a&gt;');document.close();&quot;)";
      }
      else
      {
        ResetEverything = "location=x";
      }

      DocumentBookmarkURL = WWHFrame.WWHHelp.mHelpURLPrefix + "wwhelp/wwhimpl/common/html/wwhelp.htm?href=" + WWHStringUtilities_RestoreEscapedSpaces(DocumentURL);
      if (this.fSansNavigation())
      {
        DocumentBookmarkURL += "&single=true"
      }
      DocumentBookmarkURL = "javascript:x=unescape('" + escape(DocumentBookmarkURL) + "');if(typeof window.WWHFrame!='undefined'){window.WWHFrame.WWHHelp.fSetContextDocument(x);}else{" + ResetEverything + ";}";

      // Set bookmark data
      //
      BookmarkData[0] = DocumentTitle;
      BookmarkData[1] = DocumentBookmarkURL;
    }
  }

  return BookmarkData;
}

function  WWHControls_BookmarkLink()
{
  var  BookmarkLink = "";
  var  BookmarkData = this.fBookmarkData();


  if ((BookmarkData[0] != null) &&
      (BookmarkData[1] != null))
  {
    BookmarkLink = "<a href=\"" + BookmarkData[1] + "\">" + BookmarkData[0] + "</a>";
  }

  return BookmarkLink;
}
