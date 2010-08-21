declare lower;
declare real_size;
declare on_volume;
declare hide_on_intraday;

input fastLength = 12;
input slowLength = 26;
input MACDLength = 9;
input AverageType = {SMA, default EMA};

def Data = open_interest();

plot Value;
plot Avg;
switch (AverageType) {
case SMA:
    Value = Average(Data, fastLength) - Average(Data, slowLength);
    Avg = Average(Value, MACDLength);
case EMA:
    Value = ExpAverage(Data, fastLength) - ExpAverage(Data, slowLength);
    Avg = ExpAverage(Value, MACDLength);
}

plot Diff = Value - Avg;
plot ZeroLine = 0;

Value.SetDefaultColor(GetColor(1));
Avg.SetDefaultColor(GetColor(8));
Diff.SetDefaultColor(GetColor(5));
Diff.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
Diff.SetLineWeight(3);
Diff.DefineColor("Positive and Up", Color.GREEN);
Diff.DefineColor("Positive and Down", Color.DARK_GREEN);
Diff.DefineColor("Negative and Down", Color.RED);
Diff.DefineColor("Negative and Up", Color.DARK_RED);
Diff.AssignValueColor(if Diff >= 0 then if Diff > Diff[1] then Diff.color("Positive and Up") else Diff.color("Positive and Down") else if Diff < Diff[1] then Diff.color("Negative and Down") else Diff.color("Negative and Up"));
ZeroLine.SetDefaultColor(GetColor(0));