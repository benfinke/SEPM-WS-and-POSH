// Copyright (c) 2000-2001 Quadralay Corporation.  All rights reserved.
//

function  WWHBookGroups_Books(ParamTop)
{
//For mutli-volume help sets, add a "paramtop" line for each help directory.
//Replace the dot with the name of the help directory.

  ParamTop.fAddDirectory(".", null, null, null, null);
}

function  WWHBookGroups_ShowBooks()
{
  return false;
}

function  WWHBookGroups_ExpandAllAtTop()
{
  return false;
}
