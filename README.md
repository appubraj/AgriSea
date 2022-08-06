# AgriSea
  Every grain matters
Blockchain Agriculture supplychain 

## Overview
Agrochain is a transparent market place powered by blockchain where farmers and customers may practice cooperative farming. On the distributed private ledger, the farmer can identify the potential crops and the anticipated yield for his property. Consumers can read the specifics and evaluate the farmer's authenticity based on historical production and cultivation. For farm products, this establishes a transparent and unchangeable digital market platform. As a result, a consensus can be reached between the farmer and the consumer, allowing the latter to finance specific crops or fields and purchase the farm's output or a profit margin of its market worth. Based on their prior agromarket experiences, there will be a rating system to increase the confidence of both farmers and consumers.

AgriSea bridges the gap between the farmers and buyers/consumers. The project is an attempt to maximize the farmer’s options. In a general case the farmer’s options are limited to the local retailers and a few local marketplaces but having a global marketplace takes the whole thing to a different level. This system can only work with the synergy of farmers and the consumers and the core principle of this synergy will be trust which we will achieve through blockchain.

Through AgriSea we are trying to build a marketplace for the farmers of India in an attempt to help them sell their produce at the best price possible. We have also taken a few measures to have diversity in the crops and we also have provided an option for a Long-Term-Engagement between the consumer and the Farmer. We have also put in checks for the farmer’s security and at the same time the consumer trust.
Lately, the consumers don’t really have a feasible choice in what they are buying because they aren’t assured the trust right from the conditions under which the crop was grown to the moment it was ripe and cut and finally reaching their plate, such a transparent supply chain system helps in generating trust between the end user and the farmers. This also helps in reducing the ill practices like hoarding and black marketing etc. as all the stages of the product is on chain and it can be viewed by each member of the network.

## Motivation 
The motivation behind AgriSea is to get Farmers the best value for their produce and get the consumers the best possible product for their money. There is an ulterior motive here to cut the middleman here by connecting the farmers directly to the consumers which will help the government in reducing activities like black marketing  and hoarding to increase the price of a certain product. This transparent platform will create a trust which both the farmers and consumers can verify since the blockchain is immutable.


## Goals
Successfully develop and scale a platform for the verified farmers and consumers..
Successfully track right from the seed sowing to crop selling so that the middleware lag i.e. a disconnect between the farmer and the consumer is minimized.
Have the rights of farmers and consumers protected for every transaction that happens on the platform.
Avoid all sorts of illegal activities which affect the price of the product and end-user is discomforted.




AgriSea specifications can be divided into the following phases:
  - On-boarding the farmers and consumers/retailers/traders etc.
  - Verifying the farmers and buyers.
  - Putting in safety options which will help keeping the rights protected of both the farmer and buyer and thus, continuing a harmonious synergy between the two.
  - Having a check for illegal activities.
  
## Process Flow:
 # Scenario 1 Registration,Product Description and Simple Auction
The first step is on-boarding the farmers and consumers which are verified using an e-KYC which will require both the farmers and consumers to register using their Government issued PAN cards/ Aadhar Cards. This will also require the farmers to register their lands on the platform which in case of any further checking can be physically verified.{ all the images and documents will be uploaded into a separate IPFS network which will generate a hash for the network}. At the end of this process a unique farmerID and a unique customerID will be generated.
After registering on the platform the farmers will have to record the specifics of their product onto the blockchain. 
Once the farmer records the specifics of the product the next stage is to view the product information which will include the specifics like lot number, grade, price quoted, test date, expiration date and quality testing process.
After this stage the consumer can bid on the lot and once the auction is over the consumer will deposit the bid amount in the escrow account, the amount present in the escrow account will be transferred to the farmer when the product is received by the consumer.


 # Scenario 2 Registration and Product Requirement at 0th Month
In India, there are two major seasons and two major kinds of crops grown which are Kharif and Rabi crops. Generally, based on the requirements that are predicted by the farmer the majority of the crops grown by them are the one in most demand which increases the price of certain exclusive commodities.{provision for an insurance is given}
To counter the above problem we have come-up with an option for the consumer to give a proposal to the farmers about a certain crop requirement they have which needs to be fulfilled in the given time-frame.Other requirement details are also provided by the consumer like the grade, quantity etc.
For this system to work the consumer will have to put a portion of the winning bid into an escrow account as an advance to the predetermined price. The buyer also can send anyone to monitor the crop during the crop growth lifecycle. 
To ensure the quality of the crop is maintained upto the standard the bidder visits the farm and ensures the same. Once the bidder is assured that the product is of the standard as required the bidder has to put the full amount in the escrow account.
If at any time due to any unforeseen circumstances or a natural calamity, the farmer is unable to fulfill the agreement {which basically is the smart contract}, an insurance can be claimed for the loss suffered by the buyer.
If everything that was present in the agreement checks out the asset is transferred and the agreement is considered closed.

 # Scenario 3 Registration and Product Requirement at 3rd Month

If the crop the farmer is growing is already sold even before the crop is ripe is saving a lot of hassle. This scenario is another unique feature of our platform. In this scenario the following steps take place:
The farmer registration form allows for the immediate recording and saving of the data onto the blockchain.Farmers must submit the crop's fundamental information, including its MSP and the environmental circumstances under which it was grown.
Before the buyer may purchase from a supplier, he must enter his information and complete eKYC on the application.A buyer selects a farmer as a supplier based on the information entered, and may or may not now visit the field to verify the information before bidding in the auction.
A buyer is chosen by the farmer based on the number of bidders and the prices they offer.Farmers must wait for a full crop cycle and wait for the government to purchase their harvest at the current market price if the price quoted by bidders is less than the MSP set by the farmer or if no one else is bidding for the crop.
Whoever places the highest bid and wins the auction must promptly transfer the money to the escrow account for the farmer's protection.After the asset transfer, this will be deposited into the farmer's account.The crop is still valued at the same price it was sold for regardless of whether the amount of money changes during the course of the crop cycle.
If a natural disaster or other unforeseen circumstance prevents the farmer from fulfilling the initial agreement, an insurance officer first confirms the cause and, if it is legitimate, sells the available produce to the buyer at the agreed-upon price. A claim for insurance can be made for the loss suffered by the buyer.
If the agreement is followed, the money in the escrow account is transferred to the farmer's account, and the asset is  transferred to the buyer's account. The agreement is now considered closed.

# Future Goals

## Farmer Metrics
Create a metric to measure and rate the farmers so that the consumers are better guided  and basically an incentive for the farmers to work harder.

## Taxation
The taxation policy can be implemented by the government to keep illegal activities in check and it can be a healthy boost to our country’s GDP if done on a large scale.


# Tech stack used
Hyperledger Fabric, Hyperledger Firefly, golang, HTML, CSS, JavaScript, MongoDB, AWS EKS.
