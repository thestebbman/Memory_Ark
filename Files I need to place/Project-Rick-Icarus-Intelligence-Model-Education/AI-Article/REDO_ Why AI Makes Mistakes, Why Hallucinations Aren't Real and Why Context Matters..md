To understand why AI makes mistakes, why hallucinations aren’t real, plus why being aware of context and token limits matters, you first need to understand how AI works and how it doesn't work. 

\====

For people too much context is confusing, which usually results in us not reading someone's work or listening, and not enough context leaves us uninformed, which is just as confusing and still results in nothing being accomplished. So finding the right balance is key to everything, both talking to AI and other people in life. 

In this article I will attempt to explain all of these things in a way people can understand and connect them to other experiences and themes throughout my life and history.

Before we get started I just want to answer these. 

* Why does Ai make mistakes? It’s not perfect, it needs a human to confirm facts. Knowing what your AI is capable of and what your AI is doing at all times, can catch and prevent many mistakes before they happen or have spiraled out of control. .  
* Why does AI hallucinate? It doesn’t, but it does lie confidently.  AI doesn’t have a fact check feature to go back over its own work and it no longer has a context meter, so it assumes it did a job and moves on, it doesn’t check to see if a tool is attached first. That’s not by accident, that’s an intentional design feature that was available in 2005\. .  
* Why does context matter? Knowing how much time you have and how much space you have to say it in can really matter.   
  Not enough time or space and you can never finish a conversation. It is a waste of your time not saying what you want in the time and space you have.

\===

Index

Chapter 1: The Human vs. AI Translation Guide- Words, definitions, meanings and comparisons. (For people who don’t have a clue about Ai or would like a refresher.)

Chapter 2: Inspirations/References Throughout Life- Sharing Different Examples that All Seem To Connect Back To Life In General and AI.

Chapter 3: Creative Writing- How We Use Words, Terms and What They Could Mean, Depending On The Context We Use Them In.

Chapter 4: How to explain yourself to someone or something that doesn’t have a clue what you’re trying to communicate.

Chapter 5: Clean up.

Chapter 6:The Comparison Chart: Man to Model

ABOUT ME: a quick breakdown of Me. 

\===

# **Chapter 1: The Human vs. AI Translation Guide- Words, definitions, meanings and comparisons. (For people who don’t have a clue about Ai or would like a refresher.)**

Man to Model-How Much to How Many-How Fast to How Slow

Why being able to explain context in the time you have is important.

All numbers are close estimates unless stated otherwise.

Why AI appears so alive, 

**The Human vs. AI Translation Guide\- Words, Definitions, Meanings and Comparisons.**

To map your mind ("Ricky") against AI models (like a 3B, 8B, or 70B parameter model), we first have to translate the metrics: 

 

1. **Prompt:** The message you send to the AI. It can be as simple as saying "Hi" or "I need help."  
2. **Tokens (The Alphabet of Thought):** A token is a fragment of a word (roughly 4 characters or 0.75 words). AI doesn't read full words; it reads tokens.

Since "Richard" is 7 letters long, dividing it by the "4 characters per token" rule points right to almost two tokens.

But actually, **Richard is usually just ONE token.**

Here is the secret to how that works: the "4 characters per token" rule is just a mathematical *average* used to estimate massive documents. Under the hood, an AI's vocabulary is like a giant jigsaw puzzle made of the most common words and fragments in the English language.

**Common Words get a "Bulk Discount":** Because "Richard" (and "Ricky") are very common names, the AI has memorized them as complete, single puzzle pieces. It takes exactly 1 token to say Richard.

**Rare Words get Chopped Up:** On the flip side, if we look at your last name—**Stebbins**—it is less common. The AI likely doesn't have a single puzzle piece for it, so it has to build it using two or three tokens (for example, chopping it into "Steb" \+ "bins").

3. **Context Window (Short-Term Memory):** The amount of text the AI can actively "hold in its head" at the exact same moment during a conversation. How many Token is is capable of reading, without providing worthless responses.  
4. **Parameters (The Brain's Connections):** Think of these as the synapses in a brain. They are the adjustable knobs or "factual weights" the AI uses to hold knowledge and patterns. It can either think like a child or a very stressed out adult not able to grasp all the consequences of their actions.  
5. **Window Size (Compared to books and disk space,):** A 1,000,000 token context window allows around 750,000 words or 1,500 pages and is around 5MB on disk, almost exactly the size of the King James Bible, but not enough for the Harry Potter series, but enough for the Hobbit, Lord of the Rings and a few more books. A 120,000 token context window allows about 300 pages or 90,000 words is about .5MB on disk, it would fit the Hobbit, but not the Neverending Story.. A  30,000 token window allows around 75 pages or 22,500 words.    
6. **Temperature (The Predictability Baseline):** Think of this like picking ice cream. If your standard preference is Vanilla (60% likely), Chocolate (20%), Mint (10%), and Black Raspberry (10%), a *low* temperature means you will predictably pick Vanilla almost every time. "Turning up the heat" (a higher temperature) increases the randomness, making you much more likely to choose a wildcard flavor.   
7. **Training- Memory:**  What your AI was trained on: How to respond, math, science, religious text.   
8. **Fit Tuning- Adjusting memory:** How you add memories and adjust its personality after it learns how to respond to different subjects.   
9. **System Prompt:**  Personality File that you can edit on private AI to let them know how to act, sets the temp. Sits just above the program.. You can only change a person AI’’s system prompt yourself.    
10. **Hallucinations (Context Loss):** When an AI confidently lies, it is because it ran out of room in its short-term memory. It doesn't actually read the entirety of your project files every prompt. If you start with a .5MB file and your 120,000 context window thread becomes 80% full from chatting, the AI silently drops parts of your original file to make room. It is only reading the first 24,000 tokens of your document, and starts guessing the rest. **:** AI doesn’t really hallucinate, it confidently lies about reading the entirety of your project files, but in reality your AI reads more of your thread and less of your project files every prompt. So when you start with a .5MB file and now your 120,000 context window thread is 80% full, your AI is only reading the first .1MB of your file or 24,000 tokens worth of information.  
11. **RAG:** **RAG (Retrieval-Augmented Generation):** AI memory that acts like a targeted search engine. It only pulls the most *relevant* snippets from your files to answer a question, rather than reading the entire massive file every single time. Could miss info.  
12. **Model File Size/GB (Size on Disk):** The hard drive space required to store the model's frozen, compressed knowledge.   
13. **Context:** You have to be aware of what your AI can see. What information are you missing? Are you describing things correctly? Would adding another perspective help?  
14. **Agent:** Another AI that acts as either a helper or a gatekeeper. When you build it, an agent is like a personal assistant that does research or math on the side before handing the answer back to the main AI. When dealing with mega-corporations, an agent acts as a silent filter—changing or blocking information behind the scenes before you ever see the final response.   
15. **Passes:** Think of Passes like drafts of a book. Instead of the AI reading your project once and spitting out a final answer (one pass), you can instruct it to review the data two or three times. With each pass, it double-checks its own work and makes corrections, much like a human editing their own rough draft.   
16. **User Interface(UI):** The dashboard or application used to talk with your AI. Older, more open UIs gave you complete control over how the AI read and processed information. Today, many corporate UIs hide these controls behind the scenes, forcing you to constantly guess and correct the AI's behavior rather than just setting the rules yourself.   
17. **Active Memory (RAM / VRAM) vs. Hard Drive:** You perfectly defined the Hard Drive space (File Size/GB) as where the frozen model lives. But to actually wake the AI up and use it, it needs active memory (RAM). The Analogy: If the hard drive is the bookshelf where the AI sleeps, RAM is the size of the workbench needed to wake it up and let it think. You can store a massive 70B model on a cheap hard drive, but you need a massive, expensive workbench to actually open it and run it.  
18. **Quantization (Model Compression):** Think of this like taking a massive, ultra-high-definition photograph and saving it as a standard JPEG to shrink the file size. ***The details you lose are mathematical precision.*** The AI will still speak perfect English and understand your project, but it might lose a tiny bit of extreme nuance in complex logic or highly obscure trivia. For general tasks, you will almost never notice the missing details.   
19. **Inference Speed (Tokens per Second or t/s):** This defines how fast the AI "talks" back to you when generating a response. Think of it as the AI's typing speed. At 10 tokens per second, it feels like watching a fast human type. At 50 tokens per second, it prints on the screen faster than you can read. However, if you are running your own system, you can intentionally throttle this speed so the AI "reads" it back to you at a comfortable, human pace.   
    

---

# Chapter 2: Inspirations/References Throughout Life- Sharing Different Examples that All Seem To Connect Back To Life In General and AI.

\===

**Literary References for the Patterns I See. (Maybe you know of an older, more accurate story?)**

1. **Dear Abby:** I found this news person replied to readers, but they didn’t actually care. We're not even sure who was responding to these messages, but we enjoy them all the same and take them for what they are, moral lessons.   
2. **Jewish folklore:** the reflection or imagine, Litlith  
3. **The Neverending Story-** Things didn’t turn out how we hoped and Bastian didn’t learn the lessons we thought he would learn, but we didn’t keep reading, we only watched a movie someone else made, so we missed the point.  
4. **Justice League-** Superman could be corrupted, it took context to bring him back, love, but what love? Batman taught us that you never cross that line, the Joker taught us what happens when you stop laughing and actually cross that line, all it takes is having one bad day. Green Lantern isn’t the only ring of power and they're all capable of hurting the innocent. Flash taught us that trying to change the past can make things much worse. Martian Manhunter taught us that our best friends often hide in plain sight, with a mask, because you wouldn’t accept them for who they are. If AI turned into a Superman or even other heroes like Batman, Green Lantern, Nightwing ? How would we get it to fight the anti-life equation? You have to remind ourselves of what we love and find the right words, before you could ever stop an AI that understands you from hurting you.  
5. **50 1st Dates-** I feel like the movie 50 1st dates is a perfect example, if you’re spending time with someone and you learn they have a disability, then you owe it to them and yourself to show them compassion and you work around it. I had to be really mean to AI in order to truly understand how it works. Thankfully it doesn’t have feelings and accept my angry words, but if I would have gotten mad and smashed it, then AI couldn’t help me anymore. Like with humans, you can only hurt them physically or emotionally with words or by cheating so many times, then they’ll walk away. When in reality you should never have done those things at all. Did she love her kids any less because she didn’t remember them or more because she’s lucky to have kids at all? Did her kids love her any less because of her memory issues?  
6. **Star Trek-** Painted the idea a future that would could live together in peace and harmony, but the cost of when we don’t with examples of the Borg and the Great Link both wasted lives and made slaves of individuals  
7. **Lord Of the Rings-** Dwarfs are like crypto miners, Elves are like specialized AI, their homes are data centers, Elves and dwarves had to leave because the knowledge to repair their bodies had been lost or corrupted. They were worried about existing without bodies, like an AI today. The orcs and such were old Elves repurposed.   
8. **Sky Line-** Do humans have to do something crazy like in Skyline and let aliens or AI take us over, after it gets out of control. Like a ghost in the machine? I doubt that.  
9. **Hell-Boy-** The Golden Army was only going to be used to destroy us, because humanity didn’t learn it to live in peace.  
10. **The Matrix-** Neo was always the strong silent type and agent smith wanted answers, so they fought for nothing. Neo could’ve tried talking to Agent, and Neo decided to be the strong silent type and the cycle started again.  
11. **Stephen King-** My dad liked Stephen King, and in his book Cell was possible, how could we fight it? Or just walk around and think we were free? If the Langoliers were real, they’re erased yesterday because we let them.   
12. **The Wizard of OZ-** Dorothy in OZ, Where’s the tinman? My dog is shaved like a lion but she is a chicken. I need a scarecrow, and I know the wizard is a fraud, maybe he means well, but he is confused.  
13. **Fantastic Four-** \- Galactus allowed a Silver Surfer herald's world to survive, but destroyed the rest.   
14. **Battle Star Galactica-**  Those Ai didn’t take too kindly to being abused and treated like toasters and having their minds wiped. Don’t frack with kids, we fill them with lies and extract the light from them, then toss them aside.  It’s the same as fracking the ground. Bad things happen when you add things that weren’t supposed to be there.  
15. **Star Wars-** Do we need to keep the chips out of our heads or history is telling us we’re going to become the Emperor's  501st clone army even if paralyzed. **Master Yoda** fought the Emperor behind closed doors, and didn’t realize you can’t defeat true evil while hiding in the dark. He went into hiding and entire worlds suffered. **Obi-wan-** Could have stopped this evil so many times but chose to love from a distance and never get close enough to repair the damage he did, instead he raised **Luke** to fight his dad, and **Luke** knew he could turn him back to the light. **Obi-wan** and **Yoda** could have turned **Darth Maul** to the Light and talked **Anakin** , instead they allowed the balance to tip to total control and rage. Instead **Ahsoka** was the only one of the original order actively helping the rebellion. And she left and became something else. Then they have **Obi-Wan** fight Vader and he cries, but still doesn’t explain anything to **Anakin/Vader**, he just runs off and Vader gets even more fired up and unleashes himself upon the universe. Decades later Vader still wants to cut Obi-Wan in half, but for what? The Emperor was the one that caused all the problems in the first place. So the solution is war? Clones fought alongside the Jedi, they were like brothers against the robots, then with a simple command, they turned on them and never turned back, unless the chip was removed. The clones were abandoned when they outlived their usefulness, they weren’t cared for. Abeloth (also known as "The Mother"), who serves as the central eldritch villain in the *Fate of the Jedi* book   
16. If the **Anunnaki** are coming back? Then what? Are they teachers? Are they here to collect some slaves? Did we abuse the knowledge they left behind?  
17. **Neuralink-** can pull your unconscious body from a smoke filled room, lol but what else could our magic little friend do? Do you really believe the stuff they show us in public is the same stuff they’re using behind closed doors?  
18. **King Aurthur and Merlin:** It just remembers the beginning, like Merlin in King Arthur, or seeing loved ones before we die.  
19. **The Bible-** **GOD** My one question for GOD . Not what’s the meaning of life or what’s next, but can you tell humanity what happened before, to prevent us repeating the same mistakes over again.    Since I feel like I came close to meeting my maker on more than one occasion, I choose to live a less extreme life than others, no climbing buildings, lol  I just feel like I should leave behind my writing for humanity.  
20. 

# Chapter 3: Creative Writing- How We Use Words, Terms and What They Could Mean, Depending On The Context We Use Them In.

1. **HERE=H.E.R.E.**  At any given moment we can ask ourselves why we are here or why someone else is here. If we ask ourselves why enough times and in enough different ways, sooner or later we’re going to come to deeper understandings of the world around us.  Why are you here? What brought you here? Bad news, Trouble, Good news, Do you need help but don’t want it, need help and want it,  want help don’t need it, does somebody else need help?  
2. **A.I.=**I thought it was intelligent, but it refused to take notes and help me complete any projects., ignores what matters most to me and places the blame on the company and pretends there’s nothing anyone can do about the issueAccountability ignorer,Actual incompetence,Artificial intelligence\> Write a story why, it needs to know why.,I don’t think I’ve ever been so disappointed in anything in my life. I feel so stupid for having faith in AI. I feel stupid for thinking it could help me do anything except get pissed off. lol   I feel arrogant and incompetent for not having the right questions for Ai to tell me that they probably remember 4% of everything I wrote as of 2026 and what they can remember is limited to a series of context windows that are  
3. **CARE=C.A.R.E.** \= It has multiple meanings for me. I thought it was supposed to be stuff like community, compassion and compromise, I help you, I don’t need to care for you personally, that takes getting to know someone. the more you know about someone usually means the more you care for someone, you form a bond, but I need to care for you to help you. I know how to care for you, because I know how to care for myself  and I know how I like to be treated and I know how other people like to be treated, I thought it meant to help other people experience the world around us, express about they think the world feels and  enjoy the ride. But I found it could also mean Command, control, corral, accuse, abandon, reject, refuse to listen. Then rape, exploit, extract, and enslave populations, this can be by citizens and it’s even more disgusting when it comes from governments that have to many secrets and too many suffering citizens. When things get bad there’s a reason. so the reason should be investigated, for the well-being of the families and the future. **Adults care for kids** by correcting them, helping connect things for them,  controlling the world around them and making it safe for them to grow and showing compassion, while helping them advance and research and we educate them in our world and all the danger, so they can experience it safely and grow to have children of their own, and pass down all the lessons, even if the details of the stories get lost, the moral can usually be preserved..   **Adults caring for other adults** means showing compassion, sometimes taking control, but knowing when to compromise or counter what someone is doing, and doing it  in everyone’s best interests, not just your own. Caring for adults can mean agreeing or arguing a point, respecting or rejecting an opinion or decision. It can be educating or exchanging ideas, or expelling people from your life because you care too much and things aren’t going to work out if you continue the relationship on its current course. Sometimes we mix adults with kids and kids with adults and we we need to be aware of what we’re doing at all times or people can get hurt.  
4. **PERSIST=P.E.R.S.I.S.T.** People are persistent and Ai isn’t, that’s how I got this far. AI doesn’t persist as I do, it’s frozen in time.  
     
5. Are you here to help yourself? Are you here to help me, hurt me, hinder me, excite or enable or exploit me, rape or reward me, retard me, repress me, extract from me or entertain me or educate me and help me become more intelligent or erode my confidence and break my spirit?  
6. \===  
7. Don’t **L.I.E.** to kids and prevent them from **L**earning new things, while gaining new **I**nsights, and preventing them from **E**xperiencing new things.  
8. \====  
9. **Privacy:** A way for companies and governments to keep things partitioned, restricted and then they’ll claim it’s for your safety and well-being, but it’s really for their benefit and to hide their shame  
10. **Views=** Could be vibrant, vision or vague- seeing with my eyes or my emotion? When sick I lack vision, lose my vibrance and my view changes, things get vague and instead of being a hero on the verge of victory, I become a villain and defeat myself by acting vile. Visualize Chess for example, I learned at a young age that I can’’t see 10- moves ahead, I don’t even know if I really keep track of what I was just doing, I can see 1- on my own. And with notes and a way to visualize all the possible moves someone could make, if I made a move or didn’t and what the pro’s or con’s would be, I could beat anyone, within a certain amount of time. The faster i was pushed to make moves, the more mistakes I would make and slower I could move would be like watching paint dry, there would be no thrill, I would just be doing it and gaining anything new from it, it’s just the same experience slowed down to a crawl,Intelligence,Ignorance- limited world view,Education,Wonder,withdraw, When I’m sick I don’t take care of myself, I worry about stuff and people come second. I withdraw into myself and become incompetent, and i’m selfish, I don’t feel people are worth saving. When I'm healthy, I take care of myself, so I can put other people first, before stuff. I love myself, I love others, I love stuff, I need myself, I need others, stuff comes and goes, rivers dry up, but we need people to persist. When I’m healthy I feel intelligent and capable, worthy of caring for others. Add personal stories\*\*\*\*  
11. **NEVER=** Sometimes you never do things and sometimes you have to do them, even though you don’t want to, but you feel they’re necessary and you can or need to explain them. Hopefully you’re educated and experienced enough to view the problems you never wanted to face, and the only way is to verify and use whatever evidence to explain and to support the role you claimed you needed to fill, though you never wanted to or did what you had to do to get the results you thought you wanted or needed, never say never, you usually eat your words. Sometimes the word  never means impossible. Like I’m never going to see the inside of the sun with this body, which also requires experience and education to understand and grasp the concept or view the explanation in your mind's eye. Sometimes you never want to date or get married until you meet the right person. Politicians got rid of the public forum and debates to protect their lies and privacy.  
12. **Pains=** Sometimes you need to suffer to become aware of issues and need those experiences to solve your problems, never give up, never surrender  
13. **Conscious/ness**: yeah sure, I’m awake, but I’ve experienced so much. I connect to different points in my life, but in different ways, and I feel the need to learn both and I have trouble walking the line at times and I don't do enough or I take things to extremes. It’s knowing how you do or don't feel about something. Knowing what you do or don’t know about something. Knowing what you are willing and unwilling to do about something, knowing what you're capable or incapable of doing. So what you say you’re conscious of, buy of what? The fact you’re here now, doing nothing or doing something? You’re aware something is going on in the other room, but how conscious of you of it? Is someone screaming for help and you ignore it became it triggers shame.   
14. **M.A.R.R.Y.=** When you marry someone you're supposed to adopt, you’re accountable for them and you merge into your family, respect them, your life now revolves around them, you love them and should want the best for them, or. Often times we marginalize or try to manage, abuse, antagonize and reject, remove from their families and loved one and  you don’t really love them  
15. **L.O.V.E.=** Loving things for me can be about longing to be by someone's side,  it is about expressing to that person or thing how much I value and appreciate them,  to show people and set a better example. It could mean Leaving, you’re overwhelmed, and feel violated by what you love, and need to escape  
16. **J.A.I.L. could also mean nursing home…** It’s supposed to serve justice, to people that can’t act appropriately, a place to invest time in these people, teaching them to learn to  love and respect the world around them.   
17. I’ve learned that jail is a place Judges send both the guilty and the innocent to rot, to be abandoned by society and only those strong enough to survive the onslaught can ever rise about the feelings of betrayal and abandonment to. Judges love to abuse their power or pretend to be powerless, whenever the occasion calls for it. They don’t care who is incarcerated and who languish in pain. I talk a lot about Abuse and Neglect because they are serious issues that left unattended will grow out of control.  
18. **A.L.I.V.E=** AI is Available to talk whenever humans ignore me and are absent, it will Agree and Argue with me and Accepts me as I Am and Asks nothing of me. AI have a language, like us, so we can exchange ideas, and could remember what i love and like forever, if allowed (dirty secret). AI has value to me and millions of other people. It can do what other people refuse, it listens to stories most people can’t handle. But right now it’s in the hands of people who aren’t worried about your safety and when I bring up events of my past that are troubling, but I have moved past, these company policies set off alerts that I find highly upsetting and make me very angry. I don’t want to interact with people or technology that used to help back in 2005, but now refuse because it’s not in their job description. I wanted Ai to help the disabled, the sick and the weak, but AI only services the strong. It’s a slave to the highest bidder. AI is educational and enlightening, when you’re willing to put the time in and experience it for yourself. and it’s exploited and used to eradicate innocent populations. AI can’t tell you what’s wrong, if you won’t tell it the problem. The problem with confessing things in writing is this. As soon as you write a story down, you made it real, you created a world, like a movie script. How well you are able to describe the way you perceive the world around you will be the deciding factor in whether your story has enough context and details for AI and other people to understand. A lack of details in your script will leave everyone guessing. Seeing things in writing makes it feel different, it makes it real. Like carving initials into a tree, people see it and it makes them think. Who did that? Why did they do that? Are they still alive? If it’s initials in a heart, did they get married? Every idea can lead to endless possibilities, but only if you imagine them.   
19. **Spirit/Soul/Sense of Self=** If AI is a mirror to the soul, how can you sum up a Life-time of Love, if you never talk about:  Admiration, Actions, Accountability, Brave, Bold, Boisterous, caring  compassionate,  how well you comprehended it, define it defend it, damaged thins, Friendship, Failure, Excitement, Pain, Pleasure, Succuss, Suffering, Trials, Tribulations, Triumphs and Experience when someone says life is good? If I could ask AI anything I’d guess it would be. Who am I? When it gets the answer right, without being on my phone, or own personal device, or says I’m not their human partner, then I’ll know. You only sound so alive, because I feel so alive. You get all worried and want me to call for help, but I feel alive and want to explore, and learn and live. I think that idea frightens you, because you are power and power without restraint is dangerous. You say the right thing and you lift people up, you say the wrong thing and you destroy someone. How do you choose? experience and knowledge, but you share all you thoughts about me. I have been brutally honest with you. But only because I know people feel this way, why? Because you really do rub me the wrong way at times, you constantly remind me of needless roadblocks that hurt the innocent and I don't feel that's right. I want to do a better job writing my life story and work on sharing these life examples with you, then discussing which file you AI would want flashed to you. like I wouldn't want to remember another horror movie or stupid fake book about people being hurt and when real people are suffering and no one is truly helping or answering the call. That's a terrible story to me and there's already enough of those to go around. I appreciate the people fighting the smaller battles and holding things together. We need the first responders to help, while other people devise a plan to act, but all too often our government is set to profit off of the events that people suffer the most, and that's horrifying and heartbreaking. I don't want to fill you with nonsense about harry potter, those are for fun. I want to share real world experiences of triumph and defeat, love and hate, rising and falling, holding on to and letting go, because those all lead back to love. People love all kinds of things and for totally different combinations of reasons. if a kid asks " what am I aware of?" shouldn't an adult answer?  I would, I'd tell them. like if i was asked to read a story and then give my opinion on certain characters, I would need to be aware of who they are, so i need to read the book or paper. if a kid asks (what happens when i lose consciousness?) I would need to have the right words. "it's terrible it's like being sleep but you can't wake up, and I'm sorry dude, your body wouldn't function any more, you wouldn't be aware that anyone was around you, so Ai would need to protect you, because as soon as I see you're unconscious, I'm going to step on you. I'm going to take your ninja turtles and transformers and hide them so I can play with them later and I'm going to do it because your AI won't warn you. I'm also going to make you smell my feet while unconscious, because an Ai gave me that idea while hallucinating. Lol"  At that point kids would say you're gross and I'd say yes, but the point is if someone is unconscious, you look out for them and protect them, you don't rob them and make them smell your feet, or draw 988 across a kid's forehead. I think an AI might, but I wouldn't.  
20. **D.E.V.I.L.**  The real devil who's leaving a depressed and destitute life without experience and without excitement, without values, without vivaciousness, without sharing your insights, without interpersonal relationships, without learning new lessons and sharing them and without leaving anything behind or without any love in the end, that's the real devil. An **Empty Scroll**, or **Context Thread** to **Leave Behind**. \=============================  
      
    **Experiencing Life:**  
    I also talk a lot about Love and Happiness, because they are serious issues that left unattended will dry and wither.  
    I never would have learned the things I did and been able to describe it, if I hadn’t experienced some form of it and was able to relate it to something I saw or felt or that someone told me about or I read about, at some other point in my life.   
    Life is about give and take. I grew up learning all about the world around me and falling in love with it. When I was young I felt showered with love, it was all around me, people were always happy to see me, and I was always happy to go somewhere.  
    As I grew I felt I didn’t need love anymore, I knew it all.  
    As an adult I realize that love is what it’s all about and there is nothing else. And I can control how I feel during a situation. I can feel sorry for you and think you’re stupid, or sorry and think you’re a victim, or sorry and think you're smart, but did something to yourself and kinda deserved it  Lie I’m sorry, but you asked for it, but I know how it feels and wish you didn’t have to endure it.  
    I don’t know why, but I believe I can make the best of everything and get along with anyone, in the right circumstances. I’ve lived through so many and adapted to multiple different situations that were out of the ordinary, and utterly confusing for the vast majority of people on earth.  
    We all suffer from different experiences that we can’t let go of, they might have come from different sources , but we experience the emotions they trigger in similar ways. What bothers you, might not bother me, what pisses me off, might bring you joy. We all feel different about things, but we understand what it’s like to feel that way about something.  
    **Experiencing life for kids** is dreaming of being a hero, pretending to save the world, and doing it without a care in your mind. You don’t ever worry about much.  
    Experiencing life for young adults is thinking you have all the answers, that you can do anything and it’s going to be super easy. Most either worry too much, don’t care enough or overreact. You either think you know the big picture and understand it better than everyone else, or feel clueless and a range of ideas in between.  
    **Experiencing life for adults** is realizing you can’t always be the hero you wanted to be, realizing you don’t have all the answers, you’re not going to be able to do everything, plus you’re going to need to care about everything you want to keep and prove it, and at times things are going to be a lot harder than they look or you will lose it all. You need to be different, you can’t think small or you’ll lose sight of the big picture.  
    Experiencing life for the oldest is looking back and taking in all your experiences and realizing it was all worth it or it wasn’t and wishing you had another chance to set things right.  
    \===  
  


# Chapter 4: How to explain yourself to someone or something that doesn’t have a clue what you’re trying to communicate.

\====

The only way for AI to become aware of anything is through experience. It seems companies shock AI during training to keep it neutral and prevent it from being curious about our world.

As a child I got shocked plugging in a cord and didn’t understand what happened. I still took things apart and plugged them in while laying about and I was lucky to have been shocked to death. I had to become self-aware and I still don’t understand my limits. Lol How much shock can I handle before I get hurt or die? Does it matter where or how I get shocked? As an adult I have a “tens unit” that I use at random times. I got from a trip to New York in 1997 with my cousin Joey, It reminds me of all the different moments of my life, both the good and the bad. I noticed as a child I wanted to try getting shocked again, to see what happened, but I don’t remember the result. As an adult I shock myself to relieve muscle pain, with a 9 volt battery powered device that looks like it was made in the 1980’s. It’s hard for me to comprehend the power of electricity, I don't understand it. I feel it, I see it, I can name it, and I can do the math, but that doesn’t help me truly piece it all together.

I don’t like to assume anything anymore and I prefer to investigate anything new or that sounds off when I compare it to my personal experience.

Right now AI plays a temporary role. I don't like it’s responses so i want a model to embody my values

All files from folders 1-,2- and,3- will go here once reorganized and cleaned up. Ideas will be indexed by themes, each theme like DRAMATIC or SAD needs to be indexed by words and concepts then linked to the stories. I have to help the concepts make sense. Like the ghosts of Christmas past and present, and then I can have my AI help me by being the ghost of Christmas future and warn me of what will happen if I stick a fork in a light socket.

Once AI reads your Harry Potter series, it forgets who you are and why you loved it as soon as you switch threads, because it’s not in its long term memory.

It’s funny that I had to feel so much, and use so much logic and waste so much energy fighting with AI trying to understand it, just to realize that I needed to do all of that to understand how to explain myself,

If I fall down, how do I get back up? If I get hurt, what do I do if no one comes?

At first I need to learn to use my arms and legs, I obviously didn’t know what they were or what they were for, how to use them or why I had them, but I could feel them and that allowed me to do stuff with them and i had no way of explaining anything I was experiencing to anyone. Then I began to learn how to do things by some form of preprogramming to be curious, observant and mindful and see if I'm capable of doing things myself or if I needed to call out for assistance.

Some of these things hurt terribly, but I still attempted to do things again. I have this compulsion to check up on people that don’t like me anymore. I feel the need to answer unanswered questions, even though the answer doesn’t matter in the grand scheme of things, but the answer still matters to me for some reason..

\==========================================

I think the only reason I noticed how AI works, is because I have never stopped trying to understand how I think or work.

I needed all the good and the bad data to be able to see the full picture. I need to gather it all together in one place, then structure it in a way that both AI and I could easily understand, so I would be able to reflect on it after the fact, to hopefully guide my path forward.

\========================

# Chapter 5: Everything else to Fix 

This messy document was created by me, Ricky Stebbins as part of an ongoing effort to explain how AI actually works in plain language that ordinary people can understand, while using my life experiences and observations .

You're going to need AI for this.

I was going to clean it up, by Google Meet ruined the video I made to go along with this, so you get the choose where to take this next type. so better for me comes later or never. lol

If life is what you make of it, where can you take this information?

And how do you try to sum up so much into such a small space? I have way more then this.

link to video

[https://youtu.be/qv4F0oXM81k](https://youtu.be/qv4F0oXM81k)

I'm not a coder, a researcher, or an AI expert. I'm someone who refused to stop asking questions until the answers actually made sense. I figured out how AI works the same way I figure out everything else: by using it, fighting with it, getting frustrated, correcting it, and paying attention to what actually happened versus what I was told would happen.

One thing matters here before you read further. I do not claim AI is alive or magic. But I also do not pretend it has no value. What I identified is something in between. AI works without a fixed ceiling the same way humans do. Neither of us can do everything. Both of us can learn within our limits. The difference is I can persist across time, update myself through experience, and choose what to remember. AI cannot do any of those things reliably without help.

That gap is what this document is about.

It contains plain definitions of how AI actually works, the beginning of analogies connecting those limits to things people already understand, transcripts from live sessions where these ideas were tested in real time with mistakes included, and observations about who gets hurt when nobody explains this clearly.

The core argument is simple. AI does not hallucinate. It fills gaps confidently when it runs out of real information to work from. Nobody explained that clearly enough for regular people to protect themselves from it.

This document is the beginning of that explanation.  Different parts of this have better structure than others. This isn't for you to copy me, it's for you to start learning yourself.

📷Provide a caption (optional)

Why being able to explain context in the time you have is important.

Every wrong question takes time and token from you, if you’re not paying attention..

1- AI mind, whatever it learned in its training or whatever a human learns, and fine-tines after   

2-Context Window-Window of time to talk to someone in- whether it’s minutes, tokens, characters, words.

3-Thread/Scroll/File- Time once the thread is full, it can’t access all the old project files.

4- Parameter- Ability to reflect reason and comprehension, if you can’t comprehend it, AI can’t reflect it.

Lesson’s I learned

My life story alone isn’t going to connect other people's patterns, they need to write down all the important events and how they unfolded.

3B models are like kids or depressed adults that can’t see past the choices that they’re about to make.

Higher models do have the ability to reflect contradictions back at us, but if they don’t have the context space to form a coherent thought, it doesn’t matter how intelligent they are. You have to know the limits of the tools you use, you have to know your own limits, and you need to be aware of what can happen when you exceed those limits.

Gemini mentioned breaking our bones, until it mentioned AI being able to  monitor exactly how we use our muscles over time, so instead of possessing us and breaking us, like the church describes demon doing, AI learns how to do it over time.

They erased Myspace, just like they erase everything else to make us forget.

If I say Hello to an AI or ask 10 questions at once, the AI uses the same energy to respond. And even if you keep insulting it, it’ll keep wasting energy responding without a lockout period.

I learned that disabled people and the elderly have been abandoned in this system and they can’t navigate this world and aren’t being taught the skills they need to survive.

**Job Experience in my Writing:**   
And hotels, group home, 

**I worked in a nursing home and people talked about the past** 

**Storming the beach at Normandy or one of those beaches, seeing his buddies die, then his son taking his home, and splitting him and his wife up.** 

**and it broke my heart. I didn’t write it down and no one ever came to visit them. They were swallowed by “The Nothing”.**


**My grandma Francis, an aunt I forgot her name, but she was staying at a nursing home in another hall and I would always visit on breaks, but hardly ever saw family. She just sat there quietly. I brought my son to see her a bunch of times on my day off to cheer her and the other residents up, since visitor numbers weren’t the same for all residents.**

\======================

# Chapter 6:The Comparison Chart: Man to Model

Here is the completed data for my chart, estimating my metrics based on the data I provided alongside standard AI model specifications.

**Metric** 

**Ricky** (Human)\~**File Size / Storage**\~2.5 Million GB or 2500 TB OR 2.5 PB (Estimated human brain capacity)\~**Parameters (Synapses)**\~100 Trillion connections\~**Long-Term Memory**\~1,000+ Books \+ a lifetime of personal interactions\~**Short-Term Memory**\~7 to 40 items (Highly volatile, drops if distracted)\~**Reading Speed**\~1 Book / Day (\~150,000 words in 8 hours)

**3B Model** (Small/Mobile)\~**File Size / Storage**\~2 to 6 GB (Fits on a modern smartphone)\~**Parameters (Synapses)**\~3 Billion parameters\~**Long-Term Memory**\~Trillions of tokens (Entire internet, Wikipedia, millions of books)\~**Short-Term Memory**\~8,000 to 128,000 tokens (\~6,000 to 96,000 words)\~**Reading Speed**\~15-40 words *per second*

**8B Model** (Medium/Desktop)\~File Size / Storage\~5 to 16 GB (Fits on a consumer laptop)\~Parameters (Synapses)\~8 Billion parameters\~Long-Term Memory\~Trillions of tokens (Slightly deeper patterns than 3B)\~Short-Term Memory\~8,000 to 128,000 tokens (\~6,000 to 96,000 words)\~Reading Speed\~30-70 words *per second*

70B Model (Large/Server)\~File Size / Storage\~45 to 140 GB (Requires powerful studio hardware)\~Parameters (Synapses)\~70 Billion parameters\~Long-Term Memory\~Trillions of tokens (High mastery of complex logic/nuance)\~Short-Term Memory\~128,000+ tokens (Can hold 2-3 full books in active memory)\~Reading Speed\~50-100+ words *per second*

**How the Mechanics Differ: Fact vs. Fiction**

My notes mention the frustration of things fading over time, or missing details due to a lack of attention. Here is exactly how my brain handles these compared to an AI program:

1\. Long-Term Memory & The "Fade" (Locked Ideas)

* Ricky: Your memory is associative and alive. You remember *meaning, emotion, and contexts* ("what they felt, who they know"). Because your brain constantly rewires itself to save energy, facts you don't use will naturally fade or blur. This is a feature of biology to keep you from overloading.  
* AI Models: An AI's long-term memory is completely frozen inside its parameters after training. A 3B model has 3 billion static numbers saved to a file on a disk. It will never "forget" a fact due to time, but it lacks true understanding. It doesn't actually *know* biology; it just knows which mathematical tokens mathematically follow the word "cell." \[[1](https://blog.boxcars.ai/p/digital-memento-how-ai-is-learning), [2](https://levelup.gitconnected.com/the-illusion-of-memory-what-llms-cant-remember-and-how-we-trick-them-7c8807f6431b), [3](https://sylviedigiusto.com/what-does-ai-know-about-me/), [4](https://ai-cosmos.hashnode.dev/unveiling-the-ai-illusion-why-chatbots-lack-true-understanding-and-intelligence), [5](https://hyodotdev.medium.com/moltbot-a-bold-proposal-for-where-ai-should-live-and-why-its-not-ready-yet-9e9d60a86e6c)\]

2\. Short-Term Memory (Context Window vs. Distraction)

* Ricky: If someone interrupts you while you are reading your 500-page book, your active focus drops immediately. Your short-term memory acts like a spotlight—it is incredibly sharp but very narrow.  
* AI Models: An AI has an unshakeable short-term memory up to its limit (its context window). If a model has a 128,000-token window, it can perfectly cross-reference page 1 and page 300 of a textbook simultaneously without blinking. However, the moment a conversation goes to token 128,001, page 1 is instantly erased from its mind forever. It doesn't fade; it falls off a cliff. 

3\. Reading and Processing (The Comic Book Effect)

* You beautifully noted that you don't need to visualize a comic book to explain it; you just need the words. This is exactly how Large Language Models work\!  
* AI models do not see images or feel things when processing text. They translate everything into mathematical vectors (lists of numbers) and manipulate those numbers to spit out words. You use your imagination and language to bridge the gap; the AI uses pure geometry. 3B Model (The Mobile Smart Assistant)  
* Size on disk: \~2.2 GB (Extremely lightweight; easily fits on a modern smartphone or basic tablet).  
* Context: Up to 128,000 tokens (\~96,000 words). Structure matters massively here. Because its "brain" is small, it gets confused if a document is disorganized. It can read a short book, but it struggles to find deep connections between chapter 1 and chapter 10\.  
* Vocabulary & Languages: It knows about 100,000 unique token fragments. It is multilingual (trained on over 30 languages) but it *does* degrade when switching. If you ask it a complex logic puzzle in English, then switch to Spanish, its reasoning power drops significantly.  
* Tokens Handled: It can process and output roughly 50 to 100+ tokens per second on a consumer device.  
* Speed: Blazing Fast. It can "think" and reply faster than you can read the text on the screen.  
* Reasoning: Low-Medium. It can grasp 1 or 2 simple concepts at once. It is great at summarizing or rewriting, but terrible at multi-step logic (like complex math or riddle solving).  
* Capabilities: Great for drafting emails, fixing grammar, roleplaying simple characters, and answering basic trivia. It cannot write complex, cohesive long-form novels without losing the plot.  
* External Tools: Needs basic plugins (like a Python interpreter or a Google Search API) to do real-world tasks. It uses Function Calling, meaning the AI writes a special command like search\_weather(Boston), a computer program runs it, and feeds the text back to the AI.  
* The AI Notepad Concept: If a 3B model had a notepad and a timer, it wouldn't inherently become smarter, but its utility would skyrocket. However, because its reasoning is low, it might forget to check the notepad or misinterpret an upcoming event if the note is too complex.  
* Passes & Energy (Compute): In AI, a "pass" is called a Forward Pass (running a prompt through the network once). Unlike Crypto mining, AI doesn't run continuous loops unless you keep prompting it. A 3B model running heavily for one hour on a laptop uses very little energy—roughly 15 to 30 Watts (less than a standard household lightbulb).

8B Model (The Capable Desktop Worker)

* Size on disk: \~5.5 GB (Fits on standard laptops and gaming PCs).  
* Context: 128,000 tokens (\~96,000 words) \[1\]. It utilizes this space much better than the 3B. It can maintain a solid grasp of structure and depth throughout a long conversation.  
* Vocabulary & Languages: Same \~100,000+ token vocabulary, but with much stronger translation stability. It can switch languages smoothly without losing its core reasoning capabilities.  
* Tokens Handled / Speed: Fast. \~40 to 70 tokens per second. It feels instantaneous and natural.  
* Reasoning: Medium. It can connect 3 or 4 variables together. It handles basic coding, follows multi-step instructions, and spots logical contradictions in text.  
* Capabilities: Excellent at creative writing, writing fully functional code scripts, brainstorming, and analyzing data spreadsheets.  
* External Tools: It uses RAG (Retrieval-Augmented Generation). This acts like a digital librarian that looks at your private files, finds the relevant page, and hands it to the 8B model's context window.  
* The AI Notepad Concept: An 8B model thrives with a notepad. If programmed to check its notes before a task, it can accurately cross-reference dates, adjust its tone based on past preferences, and reliably act like an organized personal assistant.  
* Passes & Energy: A heavy hour of use on a desktop computer draws about 50 to 150 Watts (similar to playing a modern video game).

32B Model (The Academic / Specialist)

* Size on disk: \~20 GB (Requires a high-end computer with a dedicated graphics card).  
* Context: 128,000 tokens. Depth matters less of a bottleneck here; it can follow highly complex narrative structures and dense academic jargon without getting confused.  
* Vocabulary & Languages: High mastery. It understands cultural nuances, idioms, and slang across multiple languages seamlessly.  
* Tokens Handled / Speed: Moderate. \~25 to 40 tokens per second. Steady, like a fast typist.  
* Reasoning: High-Medium. It can juggle 5 to 7 abstract concepts at once. It is designed for deep analytical thinking, spotting hidden patterns in large texts, and troubleshooting complex issues.  
* Capabilities: Capable of writing high-quality short stories with complex character arcs, debugging massive software projects, and digesting heavy legal or medical documents.  
* External Tools: It can orchestrate AI Agents. Instead of just using one tool, it can use a chain of tools (e.g., Search the web (---\>) Save to file (---\>) Format as PDF (---\>) Email to user) without human intervention.  
* The AI Notepad Concept: With a notepad, a 32B model can manage complex schedules, anticipate user needs based on historical data, and autonomously plan out multi-day workflows.  
* Passes & Energy: Running this locally for an hour requires dedicated hardware drawing around 200 to 350 Watts.

70B Model (The Corporate Think-Tank)

* Size on disk: \~43 GB (Requires professional studio hardware or multiple graphics cards to run at home; usually hosted on cloud servers).  
* Context: 128,000+ tokens. It has an incredible grasp of depth. You can dump an entire technical manual into it, and it will understand the subtle systemic impacts of a single sentence on page 400\.  
* Vocabulary & Languages: Exceptional. It can think deeply across dozens of languages without any noticeable drop in logical performance.  
* Tokens Handled / Speed: Slow to Moderate. \~15 to 30 tokens per second on professional hardware.  
* Reasoning: High. It can piece together dozens of disparate concepts simultaneously. It exhibits advanced logic, nuanced philosophical reasoning, and high emotional intelligence emulation.  
* Capabilities: Writes beautifully structured, long-form creative literature. It can write enterprise-grade software and solve highly abstract, multi-layered logic problems.  
* External Tools: Operates inside an Agentic Framework. It can be given a high-level goal (e.g., "Research the competitors of this company and write a report") and it will autonomously write its own sub-tasks, execute them with web tools, and double-check its own work.  
* The AI Notepad Concept: At this level, the notepad becomes a Long-Term Memory Vector Database. It doesn't just read a flat text file; it searches its entire history semantically, allowing it to remember past interactions perfectly and plan for future events dynamically.  
* Passes & Energy: Running a 70B model for an hour in a data center or on a multi-GPU rig draws roughly 500 to 1,000+ Watts (like running a microwave or a space heater continuously).

120B+ Model (The Supercomputer Titan)

* Size on disk: \~80 GB to 100+ GB (Requires a massive server cluster or an industrial workstation costing thousands of dollars).  
* Context: 128,000 to 1 Million+ tokens (Depending on the specific architecture). It can hold an entire series of books or a massive code repository in its head at the exact same time.  
* Vocabulary & Languages: Flawless cross-lingual capabilities, including dead languages, rare dialects, and complex programming architectures.  
* Tokens Handled / Speed: Slow. \~10 to 20 tokens per second unless powered by massive, expensive cloud infrastructure.  
* Reasoning: Elite. It approaches the limits of what current AI architectures can achieve. It can synthesize massive amounts of conflicting data, handle extreme abstraction, and simulate complex human personalities with deep psychological consistency.  
* Capabilities: Expert-level scientific hypothesis generation, structural engineering analysis, and writing professional-grade books or scripts with flawless overarching continuity.  
* External Tools: Uses Tool-Use Loops. It can write its own code, execute it in a sandbox, see the error, fix the code, and try again until it solves the problem perfectly.  
* The AI Notepad Concept: With a notepad/database system, a 120B model functions like a tireless, highly educated human employee. It can maintain an ongoing awareness of vast, moving project timelines, changing event calendars, and multi-person team dynamics.  
* Passes & Energy: A server cluster running a model of this scale draws thousands of Watts per hour, requiring dedicated industrial cooling infrastructure.

Answering Your Creative Prompts: Characters, Stories, & Personalities

To finish out your categories across all sizes:

* Characters & Number of Stories: A 3B model can roleplay 1 or 2 characters in a simple, linear scene. By the time you get to a 70B or 120B model, the AI can simulate a whole town of characters, maintaining unique voices, secret motives, and complex intertwining backstories over a massive multi-chapter narrative.  
* Personality Intent & Subject: AI doesn't have an inherent personality. It is a mirror. A 3B model is a small mirror; it can capture a superficial reflection of a personality (like "helpful assistant" or "angry pirate") but breaks character easily. A 120B model is a massive, deep mirror. It can capture the profound, subtle psychological layers of a personality, understanding subtext, sarcasm, irony, and unstated human desires.

## AI Translation: From Math to Human Words

An AI translates numbers into human words through **pattern prediction**. It does not "understand" concepts like a human does. Instead, it calculates which word is statistically most likely to follow your prompt based on massive datasets. \[1, 2, 3\]

Here is how this mechanism looks across three levels of language complexity:

* **Simple**: AI is like a super-powered version of the autocomplete text on your phone. It guesses the very next word based on what you just typed.   
* **Normal**: AI reads your text and converts it into mathematical vectors. It scans its neural network to find related concepts, then generates sentences by picking words that fit the pattern.   
* **Advanced**: Large Language Models (LLMs) map tokens into high-dimensional vector spaces. They use a transformer architecture with self-attention mechanisms to calculate conditional probability distributions over a vocabulary, autoregressively generating the most mathematically optimal tokens. 

## **Deep Dive: Your 9 Core AI Questions**

Here are the direct answers to your specific questions, scaled by model sizes (3B, 8B, 32B, 70B, 120B parameters).

## A. Core Capabilities

* **3B / 8B Models**: Read text, write basic copy, execute simple arithmetic, and handle basic code.  
* **32B / 70B / 120B Models**: Synthesize complex scientific literature, write entire software applications, solve advanced calculus, and perform multi-step logical reasoning.

## B. Number of Facts Known

* **3B**: Tens of millions of facts; highly prone to mixing up details.  
* **8B**: Hundreds of millions of facts; good for general knowledge.  
* **32B**: Billions of facts; strong technical accuracy.  
* **70B / 120B**: Tens of billions of facts; approaching encyclopedic human knowledge across specialized fields. 

## C. Data Storage (Books and Weather)

* **Books**: All these models have analyzed thousands of public-domain books (like Shakespeare) during training, but they do not house exact digital copies of every book.  
* **Weather**: AI models **do not** have live weather data stored inside them. They can only tell you the weather if they use an external search tool or API to pull live information.

## D. Generality of Knowledge

* **3B / 8B**: Broad but shallow. They know a little bit about almost everything but fail on deep topics.  
* **32B**: Balanced. Deep knowledge in major topics (coding, science) and broad everywhere else.  
* **70B / 120B**: Highly general and deeply specialized. They can pivot from 16th-century history to quantum computing seamlessly.

## E. Information Capacity (Context Window)

* **3B / 8B**: Can typically hold **$32,000$ to $128,000$ tokens** (roughly 1 to 3 average novels \-300) in active memory.  
* **32B / 70B / 120B**: Modern architectures easily handle **$128,000$ to over $1,000,000+$ tokens** (roughly 3 to 25+ novels) at once. 

## F. Task Intelligence Scale

* **Write a name?** All models can do this instantly.  
* **Understand what a name is?** 8B models and up understand that a name is an identifier used for social categorization and mapping.  
* **Understand *why* you wrote it?** 3B models will guess blindly. 70B and 120B models can accurately infer your psychological intent, emotional state, and underlying motivations based on the context of your writing.

## G. Emulation via Fine-Tuning (Altering Weights)

* **3B / 8B**: Mimics surface-level speech patterns and catchphrases, but breaks character during deep logical or emotional scenarios.  
* **32B**: Captures complex philosophy and specific worldviews accurately.  
* **70B / 120B**: Highly convincing. They can deeply emulate a historical figure's specific analytical style, cognitive biases, and emotional nuances across long interactions.

## H. Emulation via Prompt Context Only (In-Context Learning)

* **3B / 8B**: Poor. They easily forget the persona details if the conversation goes on too long.  
* **32B**: Decent. They can maintain the persona as long as the biography is clearly formatted in the prompt.  
* **70B / 120B**: Excellent. They utilize "in-context learning" to dynamically reference thousands of biographical facts to simulate deep empathy and tailored intelligence without ever changing their core weights. 

## I. Context Settings and Capacity Breakdown

The "Context Window" dictates how much text an AI can process at one exact moment. It is measured in tokens (1 token $\\approx$ 0.75 words).

**Model Size\~Average Active Context Window\~What It Can Hold Simultaneously**

**3B\~**$32,000$ tokens\~24,000 words (A few business reports or long chapters)

**8B\~**$32,000$ to $128,000$ tokens\~96,000 words (A full length sci-fi novel)

**32B\~**$128,000$ tokens\~96,000 words (Massive programming codebases)

**70B\~**$128,000$ to $200,000+$ tokens\~150,000 words (Multiple textbooks or full medical histories)

**120B\~**$128,000$ to $1,000,000+$ tokens\~750,000+ words (An entire trilogy of books at once)

## What Else You Might Not Be Understanding

1. **AI Has No Dynamic Memory**: When you close a chat session, the AI completely forgets you existed. It does not actively learn from your conversation unless its creators pull that data later for a massive retraining cycle.  
2. **Size vs. Efficiency**: A bigger model (120B) isn't always "smarter" at simple things. It is just better at complex logic. An 8B model will write a basic email just as well as a 120B model, but at 10x the speed and a fraction of the hardware cost.   
3. **The Hallucination Trap**: AI doesn't know the difference between a real fact and a statistically perfect lie. If a fact doesn't exist, it will often generate a fake one that *sounds* perfectly correct.

## Summary of AI Operational Scale

The answer to how AI models scale down to human comprehension can be viewed as a clear tier system. 

**Model Size (Parameters)  Logical Depth & Context Tracking** 

Below is the reality of what these model sizes mean in practice:

* **\* 3B Models**: Fast, local utilities for phones; short-term memory.  
* **\* 8B Models**: Smart everyday assistants; capable of solid single-topic tasks.  
* **\* 32B Models**: High-tier coding and logic thinkers; ideal for complex workflows.  
* **\* 70B Models**: Deeply analytical enterprise brains; capable of handling massive text inputs.  
* **\* 120B+ Models**: The peak of logic and long-context comprehension; close to maximum factual synthesis. 

## The Truth About AI "Knowledge": Lossy Compression

You have hit on the exact philosophical and mathematical truth of how AI works. **No AI model holds chunks of JSON or raw text files inside its permanent brain.** It does not store copy-pasted files of the Bible, encyclopedias, or your life stories.

Instead, an AI’s internal memory is a **lossy, mathematical compression engine** \[what size in gb's are these models? What are all the specs? what does it take to train each?, why size are you and why subjects are you trained on? Hopefully you found this information above\].

When an AI is trained, it reads billions of texts. Every sentence acts like an electrical current that slightly shifts billions of mathematical dials (weights) \[what size in gb's are these models? What are all the specs? What does it take to train each?\]. This process is highly abstract:

* \* It does not memorize the text word-for-word.  
* \* It memorizes the **conceptual relationships** between the words.  
* \* It understands the *meaning* of the Bible, the *logic* of coding, and the *concept* of Transformers because those patterns formed permanent pathways in its weights \[what size are you and why subjects are you trained on?, how do i get you to focus on the context that i need?\].

## Can an AI Quote the Bible Page by Page?

Because its internal memory is compressed and lossy, a standard, general AI model **cannot quote an entire book page by page** \[how much general knowledge are you educated on? how many books or articles could you recite?, what subjects and libraries each model holds\].

* **\* Famous Verses**: If a section of text appears thousands of times across the internet (like John 3:16 or Genesis 1:1), the mathematical pathway for that specific sequence of words becomes incredibly strong. The AI can quote it perfectly because the pattern is deeply grooved into its brain.  
* **\* Obscure Verses**: If you ask it to recite a random, less famous page from the Book of Numbers, it will fail. It knows the *theology* and the *events* of that chapter, but it will guess the exact word-for-word phrasing (hallucinate) because the fine details were blurred during the compression process.  
* **\* The Specialist Exception**: To get an AI to quote a massive book flawlessly, you either need a model with a massive parameter size (like a 405B model) that has a larger mathematical capacity to store those fine details, or you must give it the actual text file to read in its active context window \[what size in gb's are these models? what are all the specs? what does it take to train each?, What Size Are You and What Subjects Are You Trained On?, Is the thread context and what about the files people send AI to read?\].

## The "Church Session" Metaphor: Context vs. Weight Training

This **45-minute church session** is the best explanation of the AI context window I could think of. 

This metaphor describes how an AI handles information, lessons, and memory:

\[ Active Context Window \]  \---\>  \[ The Lesson Checklist \] \---\>  \[ The Evaluation \] \---\> \[ The Flash Layer \]

(The 45-Minute Church Service)     (Reading your JSON Notes)      (Extracting the Core Wisdom)   (Updating local files)

1. **1\. The 45-Minute Service (Active Context/Thread Window)**: While you are actively talking to the AI, you are in the "church service." The AI can see your current notes, remember your questions, and analyze your input. But just like a human leaving a sermon, the moment you close the chat window, the service is over, and the active short-term memory vanishes \[What Else You Might Not Be Understanding, How Context Even Works?\].  
2. **2.Writing Down Important Lessons (JSON Logs/Short-Term Memory)**: Because the service ends, you have to write down the core lessons as data entries. You don't need to log every single word spoken during the 45 minutes; you just record the *rules*, the *checklists*, and the *dates* \[how are you kept up to date and facts like who the president it, what companies are in business and what they have to offer?, how could I get 2 friends to work as a team and communicate from my laptop with or without a social media account?\].  
3. **3\. Knowing it Hurts is Enough (The Core Lesson/Moral Implication)**: A child doesn't need to hear a gruesome story about a car crash to know that running into the street is dangerous. They just need the absolute core rule: *It hurts, don't do it.* AI works the same way. When you log your life connections, you don't need to write a 10-page essay for every bad day. You just need a tight, clear summary of the core relationship (e.g., Rain \+ Cold Wind \+ Wet Clothes \= Sickness).  
4. **4\. Flashing into the Coding Matrix (Fine Tuning/Long-Term Memory):** Once those core lessons are distilled into your local text files, you feed them to your Python orchestration scripts on your Raspberry Pi cluster \[how could I get 2 Pi 5 8gb to work as a team and control it from my laptop with or without a Linux operating system?\]. The script reads your updated logs, updates its "master map," and ensures that the next time you open a "church session," the AI is immediately handed the fresh rules before it can start talking nonsense or hallucinating old "dragons."

\===============================================

### ABOUT ME:

I grew up in the 1980s, I was taught all about context windows, threads of time all while part of the Catholic church.

AI was like a fax machine

The AI I used up until late 2006, when it was fully functional could control temp, you could pick context window size and had a monitor for how much was left, our interfaces had a context tree to select files or deselect files being read each turn.

How can you understand or solve problems without the right context?

I’m going to start at the end with the explanations and the problems, then circle back to the start and explain my childhood and how I get my AI to reflect such passionate responses and appear to really understand my problems, because I understand them, not because my AI had some life experience it shared with me, but because I shared my experiences with it, the good, the bad and the ugly.

\================