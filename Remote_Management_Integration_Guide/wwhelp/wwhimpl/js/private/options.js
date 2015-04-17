// Copyright (c) 2000-2001 Quadralay Corporation.  All rights reserved.
//

function  WWHJavaScriptSettings_Object()
{
  this.mHoverText = new WWHJavaScriptSettings_HoverText_Object();

  this.mTabs   = new WWHJavaScriptSettings_Tabs_Object();
  this.mTOC    = new WWHJavaScriptSettings_TOC_Object();
  this.mIndex  = new WWHJavaScriptSettings_Index_Object();
  this.mSearch = new WWHJavaScriptSettings_Search_Object();
}

function  WWHJavaScriptSettings_HoverText_Object()
{
  this.mbEnabled = true;

  this.mFontStyle = "font-family: Verdana, Arial, Helvetica, sans-serif ; font-size: 8pt";

  this.mWidth = 150;

  this.mForegroundColor = "#003399";
  this.mBackgroundColor = "#E6F7FF";
  this.mBorderColor     = "#006699";
}

function  WWHJavaScriptSettings_Tabs_Object()
{
  this.mFontStyle = "font-family: Verdana, Arial, Helvetica, sans-serif ; font-size: 8pt";

  this.mSelectedTabColor       = "#D7E5F3";
  this.mSelectedTabBorderColor = "#FFFFFF";
  this.mSelectedTabTextColor   = "#000000";

  this.mDefaultTabColor       = "#6595D6";
  this.mDefaultTabBorderColor = "#8EB8EC";
  this.mDefaultTabTextColor   = "#FFFFFF";
}

function  WWHJavaScriptSettings_TOC_Object()
{
  this.mbShow = true;

  this.mFontStyle = "font-family: Verdana, Arial, Helvetica, sans-serif ; font-size: 8pt";

  this.mEnabledColor  = "#003399";
  this.mDisabledColor = "black";

  this.mIndent = 17;
}

function  WWHJavaScriptSettings_Index_Object()
{
  this.mbShow = true;

  this.mFontStyle = "font-family: Verdana, Arial, Helvetica, sans-serif ; font-size: 8pt";

  this.mEnabledColor  = "#003399";
  this.mDisabledColor = "black";

  this.mIndent = 17;

  this.mNavigationFontStyle     = "font-family: Verdana, Arial, Helvetica, sans-serif ; font-size: 7pt ; font-weight: bold";
  this.mNavigationCurrentColor  = "black";
  this.mNavigationEnabledColor  = "#003399";
  this.mNavigationDisabledColor = "#999999";
}

function  WWHJavaScriptSettings_Index_DisplayOptions(ParamIndexOptions)
{

//Setting limit to zero so that heading/groupings are never used. 
//Index will always be ‘flat’ to simplify localization.
  
  ParamIndexOptions.fSetThreshold(0);

  ParamIndexOptions.fSetSeperator(" - ");

  ParamIndexOptions.fGroup("", true, false, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  ParamIndexOptions.fGroup("", false, false, "1234567890");
  ParamIndexOptions.fGroup("", false, false, "!@#$%^&*(){}[]<>\"|\\.,;-?+");
}

function  WWHJavaScriptSettings_Search_Object()
{
  this.mbShow = true;

  this.mFontStyle = "font-family: Verdana, Arial, Helvetica, sans-serif ; font-size: 8pt";

  this.mEnabledColor  = "#003399";
  this.mDisabledColor = "black";

  this.mIndent = 17;

  this.mbShowBook = true;
  this.mbShowRank = true;
}
