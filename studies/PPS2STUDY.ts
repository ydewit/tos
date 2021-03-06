#Input adxrange = 20;
#Input length = 14;
#plot BS = if adx(length)>adxrange then PPS().BuySignal else double.nan; 
#plot SS = if adx(length)>adxrange then PPS().SellSignal else double.nan;
plot BS = PPS().BuySignal; 
plot SS = PPS().SellSignal;
plot slowAvg = PPS().slowAvg;
plot fastAvg = PPS().fastAvg;
slowAvg.setDefaultColor(GetColor(1));
fastAvg.setDefaultColor(GetColor(4));
BS.SetPaintingStrategy(PaintingStrategy.ARROW_UP); 
SS.SetPaintingStrategy(PaintingStrategy.ARROW_DOWN); 
#AddVerticalLine(BS, concat("Buy ", open), Color.UPTICK);
#AddChartBubble(BS, open, "B", Color.UPTICK);
#AddChartBubble(SS, open, "S", Color.DOWNTICK);
alert(BS, concat("PPS2 Buy signal @ ", open), Alert.BAR, Sound.Chimes);
alert(SS, concat("PPS2 Sell signal @ ", open), Alert.BAR, Sound.Chimes);