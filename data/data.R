setwd("C:/Users/Kevin/Desktop/Temp")
zip = read.csv("zips.csv")
pop = read.csv("national_gazetteer.txt",sep="\t")

names(zip)[1] = "zipcode"
names(pop)[1] = "zipcode"

#join pop and zip where zipcodes match!

merged = merge(zip, pop, by="zipcode")
merged = merged[,c(1:7)]
combinecities = aggregate(POP10~city+state,data=merged,sum)
avgcoordinate = aggregate(.~city+state,data=merged,mean)
names(combinecities)[3] = "totalpop"

final = merge(combinecities,avgcoordinate,by=c("city", "state"))
final = final[,c(1,2,3,5,6)]

write.csv(final,"master_data.csv")