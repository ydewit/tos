#hint:<b> Average True Range Indicator (ATRI)</b> \n Average True Range Indicator combines ATR with AverageTrueIndicator to save lower study realestate.
#hint ATRLength: The number of bars used to calculate the ATR. <b>(Default is 14)</b>
 
declare lower;

input ATRLength = 14;

plot ATR = Average(TrueRange(high, close, low), ATRLength);
ATR.SetDefaultColor(GetColor(5));


plot TRI = TrueRange(high, close, low);
TRI.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
TRI.SetDefaultColor(GetColor(7));