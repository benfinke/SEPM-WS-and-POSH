// Copyright (c) 2000-2001 Quadralay Corporation.  All rights reserved.
//

function  WWHTabs_Object()
{
  this.mWidth = null;

  this.fInit       = WWHTabs_Init;
  this.fDisplayTab = WWHTabs_DisplayTab;
  this.fHeadHTML   = WWHTabs_HeadHTML;
  this.fBodyHTML   = WWHTabs_BodyHTML;
}

function  WWHTabs_Init()
{
  var  InitialTab = -1;


  // Select first visible tab
  //
  if (WWHFrame.WWHJavaScript.mPanels.mPanelEntries.length > 0)
  {
    InitialTab = 0;

    // Calculate width based on number of displayed tabs
    //
    this.mWidth = "" + 100/WWHFrame.WWHJavaScript.mPanels.mPanelEntries.length + "%";
  }

  return InitialTab;
}

function  WWHTabs_DisplayTab()
{
  WWHFrame.WWHNavigationFrame.WWHTabsFrame.location.replace(WWHFrame.WWHHelp.mHelpURLPrefix + "wwhelp/wwhimpl/js/html/tabs.htm");
}

function  WWHTabs_HeadHTML()
{
  var  StylesHTML = "";


  // Generate style section
  //
  StylesHTML += "<style type=\"text/css\">\n";
  StylesHTML += " <!--\n";
  StylesHTML += "  a  { text-decoration: none ;\n";
  StylesHTML += "       color: " + WWHFrame.WWHJavaScript.mSettings.mTabs.mDefaultTabTextColor + " }\n";
  StylesHTML += "  th { color: " + WWHFrame.WWHJavaScript.mSettings.mTabs.mSelectedTabTextColor + " ;\n";
  StylesHTML += "       " + WWHFrame.WWHJavaScript.mSettings.mTabs.mFontStyle + " }\n";
  StylesHTML += "  td { color: " + WWHFrame.WWHJavaScript.mSettings.mTabs.mDefaultTabTextColor + " ;\n";
  StylesHTML += "       " + WWHFrame.WWHJavaScript.mSettings.mTabs.mFontStyle + " }\n";
  StylesHTML += " -->\n";
  StylesHTML += "</style>\n";

  return StylesHTML;
}

function  WWHTabs_BodyHTML()
{
  var  TabsHTML = "";
  // sfb 1/30/06 new height.
  //var  Height = 21;
  var  Height = 29;
  var  TabHeight = 25;
  var  MaxIndex;
  var  Index;
  var  CellType;
  var  BorderColor;
  var  BackgoundColor;
  var  WrapPrefix;
  var  WrapSuffix;
  var  OnClick;
// Veritas additions
  var  TabBarImage = "..\\images\\VxTabBar.gif";
  var  TabBackgroundImage;
  var  BackgroundImage = "..\\images\\VxTabsBg.gif";

  // Setup table for tab display
  //
  TabsHTML += "<table border=0 cellspacing=0 cellpadding=0 height=\""+Height+"\" width=\"100%\" >\n";
  TabsHTML += "<tr height=\""+TabHeight+"\">\n";

  for (MaxIndex = WWHFrame.WWHJavaScript.mPanels.mPanelEntries.length, Index = 0 ; Index < MaxIndex ; Index++)
  {
    // Display anchor only if not selected
    //
    if (Index == WWHFrame.WWHJavaScript.mCurrentTab)
    {
      CellType = "th";
      BorderColor = WWHFrame.WWHJavaScript.mSettings.mTabs.mSelectedTabBorderColor;
      BackgroundColor = WWHFrame.WWHJavaScript.mSettings.mTabs.mSelectedTabColor;
      TabBackgroundImage = "..\\images\\VxTabSel.gif";
      TabDivImage = "..\\images\\VxDivSel.gif";
      WrapPrefix = "<b>";
      WrapSuffix = "</b>";
      OnClick = "";
    }
    else
    {
      CellType = "td";
      BorderColor = WWHFrame.WWHJavaScript.mSettings.mTabs.mDefaultTabBorderColor;
      BackgroundColor = WWHFrame.WWHJavaScript.mSettings.mTabs.mDefaultTabColor;
      TabBackgroundImage = "..\\images\\VxTabIdle.gif";
      TabDivImage = "..\\images\\VxDivIdle.gif";
      WrapPrefix = "<b><a href=\"javascript:WWHFrame.WWHJavaScript.fStartChangeTab(" + Index + ");\">";
      WrapSuffix = "</a></b>";
      OnClick = " onClick=\"WWHFrame.WWHJavaScript.fStartChangeTabWithDelay(" + Index + ");\"";
    }
    
    if (Index == 0) { TabDivImage = TabBackgroundImage; }

    TabsHTML += "<td width=\"" + this.mWidth + "\" bgcolor=\"" + BorderColor + "\" >";
    TabsHTML += "<table border=0 cellspacing=0 cellpadding=0 height="+TabHeight+" width=\"100%\">";
    TabsHTML += "<tr>";
    TabsHTML += "<td width=2 background=\""+TabDivImage+"\" ></td>";

    TabsHTML += "<" + CellType + " nowrap align=center height=" + TabHeight + " width=\"" + (this.mWidth-2) + "\" background=\"" + TabBackgroundImage + "\" " + OnClick + "  >";
    TabsHTML += WrapPrefix;
    TabsHTML += WWHFrame.WWHJavaScript.mPanels.mPanelEntries[Index].mPanelObject.mPanelTabTitle;
    TabsHTML += WrapSuffix;
    TabsHTML += "</" + CellType + ">";

    TabsHTML += "</tr>";
    TabsHTML += "</table>";
    TabsHTML += "</td>\n";
  }

  TabsHTML += "</tr>\n";
  TabsHTML += "<tr height=\"4\">\n";
  TabsHTML += "<td colspan=\"3\" background=\"" + TabBarImage + "\" height=\"4\">\n";
  TabsHTML += "&nbsp;</td>\n";
  TabsHTML += "</tr>\n";
  TabsHTML += "</table>\n";

  return TabsHTML;
}
