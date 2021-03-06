#
# http://github.com/ydewit/tos/blob/master/studies/PersonsPivots2STUDY.ts
#
#hint:<b> Persons Pivots Dynamic (PersonsPivots2)</b> \n This study expands on then Persons Pivots study by making the timeframe dynamic based on the the current chart aggregation period. The actual timeframe chosen for each aggregation period can be individually selected. It is also possible to disable the study for individual periods.
#hint hourly: the timeframe for 1-hour charts or less<b>(Default is DAY)</b>
#hint daily: the timeframe for 1-day charts or less<b>(Default is MONTH)</b>
#hint weekly: the timeframe for 1-week charts or less<b>(Default is DISABLED)</b>
 
input marketThreshold = 0.0025;
input showOnlyToday = no;
input applyPersonsLevelsFilter = yes;
input hourly = {default DAY, "2 DAYS", "3 DAYS", "4 DAYS", WEEK, MONTH, "OPT EXP", DISABLED};
input daily = {DAY, "2 DAYS", "3 DAYS", "4 DAYS", WEEK, default MONTH, "OPT EXP", DISABLED};
input weekly = {WEEK, MONTH, "OPT EXP", default DISABLED};

def disabled;
rec timeFrame = {default DAY, "2 DAYS", "3 DAYS", "4 DAYS", WEEK, MONTH, "OPT EXP"};
rec timeFrameLow;
rec timeFrameHigh;
rec timeFrameClose;

def AP = getAggregationPeriod();
if AP < AggregationPeriod.DAY
then {
    switch (hourly){
    case DAY:
        timeFrame = timeFrame.DAY;
        timeFrameLow = low(period = "DAY");
        timeFrameHigh = high(period = "DAY");
        timeFrameClose = close(period = "DAY");
        disabled = no;
    case "2 DAYS":
        timeFrame = timeFrame."2 DAYS";
        timeFrameLow = low(period = "2 DAYS");
        timeFrameHigh = high(period = "2 DAYS");
        timeFrameClose = close(period = "2 DAYS");
        disabled = no;
    case "3 DAYS":
        timeFrame = timeFrame."3 DAYS";
        timeFrameLow = low(period = "3 DAYS");
        timeFrameHigh = high(period = "3 DAYS");
        timeFrameClose = close(period = "3 DAYS");
        disabled = no;
    case "4 DAYS":
        timeFrame = timeFrame."4 DAYS";
        timeFrameLow = low(period = "4 DAYS");
        timeFrameHigh = high(period = "4 DAYS");
        timeFrameClose = close(period = "4 DAYS");
        disabled = no;
    case WEEK:
        timeFrame = timeFrame.WEEK;
        timeFrameLow = low(period = "WEEK");
        timeFrameHigh = high(period = "WEEK");
        timeFrameClose = close(period = "WEEK");
        disabled = no;
    case MONTH:
        timeFrame = timeFrame.MONTH;
        timeFrameLow = low(period = "MONTH");
        timeFrameHigh = high(period = "MONTH");
        timeFrameClose = close(period = "MONTH");
        disabled = no;
    case "OPT EXP":
        timeFrame = timeFrame."OPT EXP";
        timeFrameLow = low(period = "OPT EXP");
        timeFrameHigh = high(period = "OPT EXP");
        timeFrameClose = close(period = "OPT EXP");
        disabled = no;
    case DISABLED:
        timeFrame = timeFrame.DAY;
        timeFrameLow = low(period = "DAY");
        timeFrameHigh = high(period = "DAY");
        timeFrameClose = close(period = "DAY");
        disabled = yes;
    }
}
else if AP < AggregationPeriod.WEEK
then {
    switch (daily){
    case DAY:
        timeFrame = timeFrame.DAY;
        timeFrameLow = low(period = "DAY");
        timeFrameHigh = high(period = "DAY");
        timeFrameClose = close(period = "DAY");
        disabled = no;
    case "2 DAYS":
        timeFrame = timeFrame."2 DAYS";
        timeFrameLow = low(period = "2 DAYS");
        timeFrameHigh = high(period = "2 DAYS");
        timeFrameClose = close(period = "2 DAYS");
        disabled = no;
    case "3 DAYS":
        timeFrame = timeFrame."3 DAYS";
        timeFrameLow = low(period = "3 DAYS");
        timeFrameHigh = high(period = "3 DAYS");
        timeFrameClose = close(period = "3 DAYS");
        disabled = no;
    case "4 DAYS":
        timeFrame = timeFrame."4 DAYS";
        timeFrameLow = low(period = "4 DAYS");
        timeFrameHigh = high(period = "4 DAYS");
        timeFrameClose = close(period = "4 DAYS");
        disabled = no;
    case WEEK:
        timeFrame = timeFrame.WEEK;
        timeFrameLow = low(period = "WEEK");
        timeFrameHigh = high(period = "WEEK");
        timeFrameClose = close(period = "WEEK");
        disabled = no;
    case MONTH:
        timeFrame = timeFrame.MONTH;
        timeFrameLow = low(period = "MONTH");
        timeFrameHigh = high(period = "MONTH");
        timeFrameClose = close(period = "MONTH");
        disabled = no;
    case "OPT EXP":
        timeFrame = timeFrame."OPT EXP";
        timeFrameLow = low(period = "OPT EXP");
        timeFrameHigh = high(period = "OPT EXP");
        timeFrameClose = close(period = "OPT EXP");
        disabled = no;
    case DISABLED:
        timeFrame = timeFrame.DAY;
        timeFrameLow = low(period = "DAY");
        timeFrameHigh = high(period = "DAY");
        timeFrameClose = close(period = "DAY");
        disabled = yes;
    }
}
else if AP < AggregationPeriod.MONTH
then {
    switch (weekly){
    case WEEK:
        timeFrame = timeFrame.WEEK;
        timeFrameLow = low(period = "WEEK");
        timeFrameHigh = high(period = "WEEK");
        timeFrameClose = close(period = "WEEK");
        disabled = no;
    case MONTH:
        timeFrame = timeFrame.MONTH;
        timeFrameLow = low(period = "MONTH");
        timeFrameHigh = high(period = "MONTH");
        timeFrameClose = close(period = "MONTH");
        disabled = no;
    case "OPT EXP":
        timeFrame = timeFrame."OPT EXP";
        timeFrameLow = low(period = "OPT EXP");
        timeFrameHigh = high(period = "OPT EXP");
        timeFrameClose = close(period = "OPT EXP");
        disabled = no;
    case DISABLED:
        timeFrame = timeFrame.DAY;
        timeFrameLow = low(period = "DAY");
        timeFrameHigh = high(period = "DAY");
        timeFrameClose = close(period = "DAY");
        disabled = yes;
    }
}
else {
    timeFrame = timeFrame.MONTH;
    timeFrameLow = low(period = "MONTH");
    timeFrameHigh = high(period = "MONTH");
    timeFrameClose = close(period = "MONTH");
    disabled = yes;
}

rec marketType = {default DISABLED, NEUTRAL, BEARISH, BULLISH};

def PP2 = timeFrameHigh[2] + timeFrameLow[2] + timeFrameClose[2];

marketType = if !applyPersonsLevelsFilter then marketType.DISABLED else
if PP2[-1] > (PP2[-1] + PP2 + PP2[1]) / 3 + marketThreshold then marketType.BULLISH else
if PP2[-1] < (PP2[-1] + PP2 + PP2[1]) / 3 - marketThreshold then marketType.BEARISH else marketType.NEUTRAL;

plot R3;
plot R2;
plot R1;
plot RR;
plot PP;
plot SS;
plot S1;
plot S2;
plot S3;

if showOnlyToday and !IsNaN(timeFrameClose[-1])
then {
R1 = Double.NaN;
R2 = Double.NaN;
R3 = Double.NaN;
PP = Double.NaN;
S1 = Double.NaN;
S2 = Double.NaN;
S3 = Double.NaN;
} else {
PP = (timeFrameHigh[1] + timeFrameLow[1] + timeFrameClose[1]) / 3;
R1 = 2 * PP - timeFrameLow[1];
R2 = PP + timeFrameHigh[1] - timeFrameLow[1];
R3 = R2 + timeFrameHigh[1] - timeFrameLow[1];
S1 = 2 * PP - timeFrameHigh[1];
S2 = PP - timeFrameHigh[1] + timeFrameLow[1];
S3 = S2 - timeFrameHigh[1] + timeFrameLow[1];
}

RR = if (marketType == marketType.BEARISH or marketType == marketType.NEUTRAL) then R1 else R2;
SS = if (marketType == marketType.BULLISH or marketType == marketType.NEUTRAL) then S1 else S2;

PP.setHiding(disabled);
RR.setHiding(disabled or !applyPersonsLevelsFilter);
R1.setHiding(disabled or applyPersonsLevelsFilter);
R2.setHiding(disabled or applyPersonsLevelsFilter);
R3.hide();
SS.setHiding(disabled or !applyPersonsLevelsFilter);
S1.setHiding(disabled or applyPersonsLevelsFilter);
S2.setHiding(disabled or applyPersonsLevelsFilter);
S3.hide();

PP.SetDefaultColor(GetColor(0));
R1.SetDefaultColor(GetColor(5));
R2.SetDefaultColor(GetColor(5));
R3.SetDefaultColor(GetColor(5));
S1.SetDefaultColor(GetColor(6));
S2.SetDefaultColor(GetColor(6));
S3.SetDefaultColor(GetColor(6));

SS.DefineColor("S1", GetColor(6));
SS.DefineColor("S2", GetColor(6));
SS.AssignValueColor(if SS == S1 then SS.color("S1") else SS.color("S2"));

RR.DefineColor("R1", GetColor(5));
RR.DefineColor("R2", GetColor(5));
RR.AssignValueColor(if RR == R1 then RR.color("R1") else RR.color("R2"));

PP.SetStyle(Curve.SHORT_DASH);
RR.SetStyle(Curve.SHORT_DASH);
R1.SetStyle(Curve.SHORT_DASH);
R2.SetStyle(Curve.SHORT_DASH);
R3.SetStyle(Curve.SHORT_DASH);
SS.SetStyle(Curve.SHORT_DASH);
S1.SetStyle(Curve.SHORT_DASH);
S2.SetStyle(Curve.SHORT_DASH);
S3.SetStyle(Curve.SHORT_DASH);

def paintingStrategy = if timeframe == timeframe.WEEK then PaintingStrategy.LINE_VS_TRIANGLES else if timeFrame == timeFrame.MONTH then PaintingStrategy.LINE_VS_SQUARES else PaintingStrategy.LINE_VS_POINTS;

PP.SetPaintingStrategy(paintingStrategy, yes);
RR.SetPaintingStrategy(paintingStrategy, yes);
R1.SetPaintingStrategy(paintingStrategy, yes);
R2.SetPaintingStrategy(paintingStrategy, yes);
R3.SetPaintingStrategy(paintingStrategy, yes);
SS.SetPaintingStrategy(paintingStrategy, yes);
S1.SetPaintingStrategy(paintingStrategy, yes);
S2.SetPaintingStrategy(paintingStrategy, yes);
S3.SetPaintingStrategy(paintingStrategy, yes);