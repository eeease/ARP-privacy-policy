var storyContent = ﻿{"inkVersion":13,"root":[{"->":"opening_question"},"done",{"opening_question":[["^Have you ever felt haunted?","\n",["ev","str","^Yes?","/str","/ev",{"*":".^.c","flg":20},{"c":[{"->":".^.^.^.^.explanation"},{"#f":7}]}],["ev","str","^No, never.","/str","/ev",{"*":".^.c","flg":20},{"c":[{"->":".^.^.^.^.explanation"},{"#f":7}]}],["ev","str","^What do you mean by 'haunted'?","/str","/ev",{"*":".^.c","flg":20},{"c":[{"->":".^.^.^.^.explanation"},{"#f":7}]}],null],{"explanation":[["^I don't mean by ghosts, but the more I think of it, describing it that way isn't inaccurate.  You don't just live one life; you live many.  You live them all at once, and the ones you're done with never really leave you.  Sometimes they overlap, and one of them taints the other.  Those intersections are what I mean.  Those are the ghosts that haunt us.","\n","^Once upon a time, ","<>","\n",{"->":".^.^.^.intro"},null],{"#f":3}],"intro":[["^I was a...","\n",["ev",{"^->":"opening_question.intro.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Cop",{"->":"$r","var":true},null],"c":["ev",{"^->":"opening_question.intro.0.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^, but I was also a father...","\n","\n",{"->":"cop_story"},{"#f":7}]}],["ev",{"^->":"opening_question.intro.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Teacher",{"->":"$r","var":true},null],"c":["ev",{"^->":"opening_question.intro.0.3.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^, but I was also a grandson...","\n","\n",{"->":"teacher_story"},{"#f":7}]}],null],{"#f":3}],"#f":3}],"cop_story":[["^\"You got some on your boot, Lieutenant.  Better clean it off before the zoo gets here.  She's going to be so excited to see you.\"","\n","^I panicked for a second before remembering where I was.  Jane saw it on my face.","\n","^\"Relax, it's just some cake.  Is everything all right?\"","\n",["ev",{"^->":"cop_story.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^\"","/str","/ev",{"*":".^.c","flg":22},{"s":["^\"Fine",{"->":"$r","var":true},null],"c":["ev",{"^->":"cop_story.0.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^, I'll just go wipe it off.  Otherwise the animals might take a bite out of my toe!\"","\n","\n",{"->":"bathroom"},{"#f":7}]}],["ev",{"^->":"cop_story.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^\"","/str","/ev",{"*":".^.c","flg":22},{"s":["^\"I'm tired",{"->":"$r","var":true},null],"c":["ev",{"^->":"cop_story.0.7.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^.  Some cold water to the face should do the trick.\"","\n","\n","^\"Well, of course you are.  Couldn't catch a nap on duty last night?\"","\n","^\"No.  It was... busy.\"","\n",{"->":"bathroom"},{"#f":7}]}],null],{"#f":3}],"bathroom":[[["ev","str","^In the bathroom...","/str","/ev",{"*":".^.c","flg":20},{"c":["^Jesus, they're getting worse.  It wasn't like this when I started.","\n","^I rubbed at the gooey rhubarb spot on the tip of my boot.  It won't come off.","\n",{"->":"bathroom.bathroom_rubbing"},{"#f":7}]}],null],{"bathroom_rubbing":[[["ev","str","^Rub harder","/str","/ev",{"*":".^.c","flg":20},{"c":["^I keep on rubbing but there's still a splotch of dark red.  I can see it.","\n",{"->":".^.^.^.^"},{"#f":7}]}],["ev","str","^Try soap","/str","/ev",{"*":".^.c","flg":20},{"c":["^A bit of soap, that should do the trick.  And some peroxide.  Mac taught me that one.","\n",{"->":"bathroom.bathroom_rubbing_harder"},{"#f":7}]}],null],{"#f":3}],"bathroom_rubbing_harder":[[["ev","str","^Rub","/str","/ev",{"*":".^.c","flg":4},{"c":[["G>",["ev","visit",3,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^It's going away a bit. ",{"->":".^.^.^.^.^.^.^"},{"->":".^.^.23"},null],"s1":["pop","^ Almost there. ",{"->":".^.^.^.^.^.^.^"},{"->":".^.^.23"},null],"s2":["pop","^ God... ",{"->":"bathroom.flashback_crime_scene"},{"->":".^.^.23"},null],"#f":5}],"G<",null],"\n",{"#f":7}]}],null],{"#f":3}],"flashback_crime_scene":[[["ev","str","^Remember","/str","/ev",{"*":".^.c","flg":20},{"c":["^\"You got some on your boot, Lieutenant.  Better clean it off before the zoo gets here.\"","\n","^Fucking media.  They always find a way to turn these things against us.","\n",{"->":"crime_scene"},{"#f":7}]}],null],{"#f":3}],"#f":3}],"crime_scene":[[["ev",{"^->":"crime_scene.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^?\"","/str","/ev",{"*":".^.c","flg":22},{"s":["^\"Got a Kleenex, Cap",{"->":"$r","var":true},null],"c":["ev",{"^->":"crime_scene.0.0.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^,  Or would you rather lick it off?\"","\n","\n","^\"I'd rather you didn't track that shit across the entire scene.\"","\n",{"->":"case_overview"},{"#f":7}]}],null],{"#f":3}],"case_overview":[[["ev","str","^What am I doing here?","/str","/ev",{"*":".^.c","flg":20},{"c":["^On March 3rd, 2012","\n",{"->":".^.^.^.^.zero"},{"#f":7}]}],null],{"zero":[[["ev","str","^(My daughter's fifth birthday)","/str","/ev",{"*":".^.c","flg":20},{"c":["^On March 3rd, at approximately 3:35AM, I clocked a red Hyundai motorbike travelling at approximately 85 miles per hour.  I left my post to pursue the vehicle.  Two young adults...","\n",{"->":".^.^.^.^.^.one"},{"#f":7}]}],null],{"#f":3}],"one":[[["ev","str","^(Kids, really)","/str","/ev",{"*":".^.c","flg":20},{"c":["^Two young adults were riding tandem.  I turned on my lights and siren at approximately 3:38AM, at which point the vehicle swerved and left Glen Cove Road.  The driver of the vehicle, as of yet unidentified...","\n",{"->":".^.^.^.^.^.two"},{"#f":7}]}],null],{"#f":3}],"two":[[["ev","str","^(Because we can't find his teeth)","/str","/ev",{"*":".^.c","flg":20},{"c":["^The driver died upon impact of a large tree.  The passenger, later identified as Jacqueline B. Gainor, 16 years of age, was launched from the vehicle upon impact.  She landed approximately 50 feet from the location of the initial impact and died shortly after.  She incurred several lacerations...","\n",{"->":".^.^.^.^.^.three"},{"#f":7}]}],null],{"#f":3}],"three":[[["ev","str","^(The branches ripped her apart)","/str","/ev",{"*":".^.c","flg":20},{"c":["^several lacerations across her face...","\n",{"->":".^.^.^.^.^.four"},{"#f":7}]}],null],{"#f":3}],"four":[[["ev","str","^(Her fucking upper lip is gone.)","/str","/ev",{"*":".^.c","flg":20},{"c":["^and was found with a large branch wedged between her pelvic bone and her ribs.  Cause of death to be determined.","\n",{"->":".^.^.^.^.^.five"},{"#f":7}]}],null],{"#f":3}],"five":[["^\"Set up a road block at the intersection!\" the Captain barked.","\n","^\"We need to divert traffic from the area.  And clean off your goddamn boot, Lieutenant, it's covered in that shitkid's brains.\"","\n",{"->":"flash_forward"},null],{"#f":3}],"#f":3}],"flash_forward":[[["ev","str","^Rub","/str","/ev",{"*":".^.c","flg":4},{"c":[["G>",["ev","visit",3,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^It's going away a bit. ",{"->":"flash_forward"},{"->":".^.^.23"},null],"s1":["pop","^ Almost there. ",{"->":"flash_forward"},{"->":".^.^.23"},null],"s2":["pop","^ ",{"->":"flash_forward.bathroom_exit"},{"->":".^.^.23"},null],"#f":5}],"G<",null],"\n",{"#f":7}]}],null],{"bathroom_exit":[[["G>",["ev","visit","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^\"Honey, I could really use a hand here!\" ",{"->":".^.^.27"},null],"s1":["pop","^ \"Hellooo!? Help, please\" ",{"->":".^.^.27"},null],"s2":["pop","^ \"Jack! You still in there?\" ",{"->":".^.^.27"},null],"s3":["pop","^ ",{"->":"party_starting"},{"->":".^.^.27"},null],"#f":5}],"G<",null],"\n",["ev",{"^->":"flash_forward.bathroom_exit.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^!\"","/str","/ev",{"*":".^.c","flg":22},{"s":["^\"Of course",{"->":"$r","var":true},null],"c":["ev",{"^->":"flash_forward.bathroom_exit.0.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^, coming!\"","\n","\n",{"->":"party_starting"},{"#f":7}]}],["ev","str","^It won't come out","/str","/ev",{"*":".^.c","flg":4},{"c":[{"->":".^.^.^.^.^"},{"#f":7}]}],null],{"#f":3}],"#f":3}],"party_starting":[[["G>",["ev","visit","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^\"Would you call the kids in, honey?  I already set up the snack table.\" ",{"->":".^.^.21"},null],"s1":["pop","^ \"I put the presents and the cake in the great room.\" ",{"->":".^.^.21"},null],"s2":["pop","^ \"I figure we can divert the traffic around the snacks until they've eaten, then we can get to presents.\"",{"->":".^.^.21"},null],"#f":5}],"G<",null],"\n",{"->":".^.^.calling"},null],{"calling":[[["ev","str","^Call kids","/str","/ev",{"*":".^.c","flg":4},{"c":[["G>",["ev","visit","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^\"Calling all animals!\" ",{"->":".^.^.21"},null],"s1":["pop","^ \"Hello out there, it's time to eat!\"",{"->":".^.^.21"},null],"s2":["pop","^ \"Anybody hungry?\" ",{"->":"party_starting.enter"},{"->":".^.^.21"},null],"#f":5}],"G<",null],"^","\n",{"->":".^.^.^.^.^"},{"#f":7}]}],null],{"#f":3}],"enter":[["^They streamed in like a stampede of crashing rhinos, Katie bringing up the rear.","\n","^\"Daddy!  Daddy!  You got home in time!\"","\n",["ev","str","^Pick up","/str","/ev",{"*":".^.c","flg":20},{"c":["^I picked her up and spun her around a few times before placing her back on the floor.","\n","^She stumbled slightly and looked down.","\n",{"->":".^.^.^.^.^.question"},{"#f":7}]}],["ev","str","^Bear hug","/str","/ev",{"*":".^.c","flg":20},{"c":["^I growled playfully and strapped my arms around her.  When I placed her back on the floor, she stumbled slightly and looked down.","\n",{"->":".^.^.^.^.^.question"},{"#f":7}]}],null],{"#f":3}],"question":[["^\"Daddy?  What's on your boot?\"","\n","end",null],{"#f":3}],"#f":3}],"teacher_story":[["^Story arm under construction.","\n",["ev","str","^Click to return","/str","/ev",{"*":".^.c","flg":20},{"c":[{"->":"opening_question.intro"},{"#f":7}]}],null],{"#f":3}],"#f":3}]};