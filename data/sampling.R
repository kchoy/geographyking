setwd("C:/Projects/geographyking/data")
dat = read.csv("master_data.csv")
dat = dat[,c(2:6)]


#let's see how to split up the populations
hist(dat$totalpop)
sum(dat$totalpop > 100000)

top = subset(dat,dat$totalpop > 100000)
mid = subset(dat,dat$totalpop < 100000 & dat$totalpop >= 10000)
bot = subset(dat,dat$totalpop > 1000 & dat$totalpop <10000)

#histogram + sample size of each
hist(top$totalpop) #416
hist(mid$totalpop) #4882
hist(bot$totalpop) #12580


#testing random samples
a = top[sample(nrow(top),10),]
b = mid[sample(nrow(mid),10),]
c = bot[sample(nrow(bot),10),]
a
b
c
