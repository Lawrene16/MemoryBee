import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-topics",
  templateUrl: "./topics.page.html",
  styleUrls: ["./topics.page.scss"],
})
export class TopicsPage implements OnInit {
  cards = ["fdfd", "dfjdwfk", "djjdjfjdhfdj"];

  res = [
    {
      Subject: "RPCGA Licensure",
      Topic: "Christology",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Christology",
      Deck: "Christ",
      Question: "How does Christ execute the office of King?",
      Answer:
        "(LC Q 45) Christ executeth the office of a king, in calling out of the world a people to himself, and giving them officers, laws, and censures, by which he visibly governs them; in bestowing saving grace upon his elect, rewarding their obedience, and correcting them for their sins, preserving and supporting them under all their temptations and sufferings, restraining and overcoming all their enemies, and powerfully ordering all things for his own glory, and their good; and also in taking vengeance on the rest, who know not God, and obey not the gospel.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Christology",
      Deck: "Christ",
      Question: "How does Christ execute the office of Priest?",
      Answer:
        "(LC Q 44) Christ executeth the office of a priest, in his once offering himself a sacrifice without spot to God, to be a reconciliation for the sins of the people; and in making continual intercession for them.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Christology",
      Deck: "Christ",
      Question: "How does Christ execute the office of Prophet?",
      Answer:
        "(LC Q 43) Christ executeth the office of a prophet, in his revealing to the church, in all ages, by his Spirit and word, in divers ways of administration, the whole will of God, in all things concerning their edification and salvation.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Christology",
      Deck: "Christ",
      Question: "What are the three offices of Christ?",
      Answer:
        "(LC Q42)  ¦executes the offices of prophet, priest, and king of His church, in the estate both of his humiliation and exaltation",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Christology",
      Deck: "Christ",
      Question: "What are the two natures of Christ?",
      Answer:
        "The two natures of Christ are fully God and fully man, yet within one person.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Christology",
      Deck: "Christ",
      Question: "What are the two states of Christ?",
      Answer: "The two states of Christ are humiliation and exaltation.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Christology",
      Deck: "Christ",
      Question: "What does the Bible teach about the birth of Christ?",
      Answer:
        "(LC Q.37) Christ, the Son of God, became man, by taking Himself a true body, and a reasonable soul, being conceived by the power of the Holy Spirit in the womb of the Virgin Mary, of her substance, and born of her, yet without sin.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Christology",
      Deck: "Christ",
      Question: 'What is meant by the state of Christ"s humiliation?',
      Answer:
        'Humiliation - (LC Q 46) The estate of Christ"s humiliation was that low condition wherein he for our sakes, emptying Himself of His glory, took upon Him the form of a servant, in his conception and birth, life, death, and after this death, until his resurrection.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Christology",
      Deck: "Christ",
      Question: "What is meant by the state of Christ's exaltation?",
      Answer:
        'Exaltation - (LC Q.51) The estate of Christ"s exaltation comprehendeth his resurrection, ascension, sitting at the right hand of the Father, and His coming again to judge the world.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "General",
      Question:
        "What are the two main dispensations of the covenant and how do they differ and how are they a like?",
      Answer: "<ol>\t - The Old Testament and\t - the New Testament.</ol>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "General",
      Question: "What is meant by the phrase covenant of redemption?",
      Answer:
        "It is the firm and eternal foundation for the covenant of grace whereby an agreement was made between the members of the Trinity in order to bring us salvation. We find allusions to it in several biblical texts. Under this covenant, the Father plans redemption and sends the Son in order to save His people. The Son agrees to be sent and to do the work necessary to save the elect (John 10:17-18), and the Spirit agrees to apply the work of Christ to us by sealing us unto salvation (Eph. 1:13-14).",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "General",
      Question: "What is meant by the term covenant?",
      Answer:
        "A  covenant  is an agreement enacted between two parties in which one or both make promises under oath to perform or refrain from certain actions stipulated in advance.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "General",
      Question: "Why is covenant theology also referred to a Federal Theology?",
      Answer:
        "Federal theology suggests that as the first human, Adam acted as the  federal head  or legal representative of the rest of humankind. Thus God entered into a covenantal relationship with Adam that promised blessing for obedience and a curse for disobedience. According to federal theology, if Adam had been obedient to God, his obedience would have meant blessing for all humans. But because Adam was disobedient, the curse extends to humankind, of which Adam is the covenantal representative. Federal theology adds that just as Adam was the federal head of humanity, so also Christ enters history as a second Adam, free from the curse, and acts as the covenantal head of righteousness for all those who believe in him.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "Covenant of Grace",
      Question:
        "What is the Covenant of Grace as defined by the Westminster Confession?",
      Answer:
        "The Covenant of Grace; wherein He freely offereth upon sinners life and salvation by Jesus Christ; requiring of them faith in Him, that they may be saved, and promising to give unto all those that are ordained unto eternal life His Holy Spirit, to make them willing and able to believe. (WC #7, Sections 2, 3)",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "Covenant of Grace",
      Question: "Who is the covenant of Grace made with?",
      Answer:
        "The covenant was made with Christ as the second Adam, and in Him with all the elect as His seed. (LC #31)",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "Covenant of Grace",
      Question:
        "Why are the covenants of grace and redemption considered as really one covenant?",
      Answer:
        "They are closely related. The covenant of redemption is the eternal foundation of the covenant of grace.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "Covenant of Grace",
      Question:
        "Why do we maintain that the Covenant is unilateral in redemption and bi-lateral in its calling men to Christ?",
      Answer:
        "The covenant is **unilateral **in redemption because God **initiates **the covenant, not only setting for the conditions but **keeping **those conditions as well. Hebrews 8-10, Genesis 15.It is called **bi-latera**l in that men are required to **respond in faith **but that faith is given by grace as a gift from God.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "Covenant of redemption participants",
      Question: "Who is the covenant of redemption made with?",
      Answer:
        "The Father and the Son.The Father required of the Son, who appeared in this covenant\t - as the **Surety **and **Head **of His people, and\t\t\t - as the last Adam,\t</ul>\t\t - that He **should make amends **\t\t\t - for the sin of Adam and\t\t - of those whom the Father had given Him, and\t</ul>\t\t - should do what Adam failed to do by** keeping the law** and\t - thus **securing eternal life** for all His spiritual progeny.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "Covenant of Works",
      Question:
        "What is the Covenant of Works as defined by the Westminster Confession?",
      Answer:
        "Covenant of Works -  ¦was made with man wherein life was promised to Adam and in Him to His posterity, upon condition of perfect and personal obedience.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "Dispensations",
      Question: "Describe the dispensation of the New Testament.",
      Answer:
        "The New Testament - (LC Q.35) Under the New Testament, when Christ the substance was exhibited, the same covenant of grace was and still is to be administered in the preaching of the word, and the administration of the sacraments of baptism and the Lord's supper; in which grace and salvation are held forth in more fullness, evidence, and efficacy, to all nations.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Covenants",
      Deck: "Dispensations",
      Question: "Describe the dispensation of the Old Testament.",
      Answer:
        "The Old Testament - (LC Q. 34) The covenant of grace was administered under the Old Testament, by promises, prophecies, sacrifices, circumcision, the passover, and other types and ordinances, which did all foresignify Christ then to come, and were for that time sufficient to build up the elect in faith in the promised messiah, by whom they then had full remission of sin, and eternal salvation.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Dichotomy",
      Question: "Explain the following theory: dichotomy",
      Answer:
        "Dichotomy - often refers to the theory that humans are composed of two distinct components: body and soul",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Doctrine of election",
      Question: "What is the biblical doctrine of election?",
      Answer:
        'Election may be defined as God"s eternal purpose to save some of the human race in and by Jesus Christ.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Doctrine of reprobation",
      Question: "What is the biblical doctrine of reprobation?",
      Answer:
        "Reprobation may be defined as that decree of God whereby He has determined to pass some men by with the operation of His special grace and to punish them for their sin to the manifestation of His justice.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Essential issue between God",
      Question:
        "What is the essential issue between God and man as a result of original sin and how has it affected the human race?",
      Answer:
        '(LC Q#27) The fall brought upon mankind<p style="margin-left:40px;">the **loss of communion** with God,<p style="margin-left:40px;">His **displeasure **and **curse**;so as we are by nature<p style="margin-left:40px;">**children of wrath**,<p style="margin-left:40px;">**bond slaves to Satan**, and<p style="margin-left:40px;">**justly liable to all punishments** in this words, and that which is to come.<em>In other words, we are separated and guilty of transgression against a most Holy God.</em>',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Fourfold state of man",
      Question: "Explain the following fourfold states of man: glorification.",
      Answer:
        "Glorification - Man is both able to resist sin but is also no longer able to sin. This state is entered after the death of man when all vestiges of sin and corruption will be removed and we will see Jesus in His glory and we will appear with Him (Col 3:3)",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Fourfold state of man",
      Question: "Explain the following fourfold states of man: innocence",
      Answer:
        "Innocence - we mean the first condition of man created after the image of God in internal goodness and external happiness. As it abounded in all goods (of the body as well as of the soul) necessary for obtaining true happiness in that state, so it experienced the most holy and agreeable government of God. Hence it consists principally of two parts: the happy condition of man and the federal government of God around him. His happiness arose from the image of God in which he was created. It consisted especially in original righteousness and the immortality and dominion consequent upon it (of which we have spoken before in the Topic on Creation) (Elentic Thelogy - V1, p. 569). Adam was both able to sin and to resist sin.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Fourfold state of man",
      Question: "Explain the following fourfold states of man: redemption.",
      Answer:
        "Redemption - Man is again both able to sin and to resist sin through regeneration of the Spirit and thus given a new nature. All men that are in a state of grace have been born again. 2 Cor 5:17",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Fourfold state of man",
      Question: "Explain the fourfold state of man: condemnation",
      Answer:
        "Condemnation - also known as the  state of nature  after the fall wherein corruption had entered man. Man in no longer able to resist sin but still retains the ability to sin. In this state, man is in a state of sin and misery, wholly defiled in all their parts. (LC Q. 23 &amp;amp; WC #6 Sections. 2, 4)",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Origin of the soul",
      Question:
        "Explain the following theories of the origin of the soul: Creationism",
      Answer:
        "Creationism - It regards the soul of each human being as immediately created by God and joined to the body either at conception, at birth, or at some time between these two. The advocates of the theory urge in its favor certain texts of Scripture, referring to God as the Creator of the human spirit, together with the fact that there is a marked individuality in the child, which cannot be explained as a mere reproduction of the qualities existing in the parents.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Origin of the soul",
      Question:
        "Explain the following theories of the origin of the soul: Pre-existentianism.",
      Answer:
        "Pre-existentianism - is the name given to those who hold the hypothesis of the preexistence of souls, or the doctrine that, at the beginning of creation, not that of this world simply, but of all worlds, God created the souls of all men, which, however, are not united to the body till the individuals for whom they are destined are begotten or born into the world.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Origin of the soul",
      Question:
        "Explain the following theories of the origin of the soul: Traducianism.",
      Answer:
        "Traducianism is the belief that the souls of children, as well as their bodies, are propagated from their parents",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Original Holiness",
      Question:
        "What holiness had man, when he was created, in his affections?",
      Answer:
        "Man's affections at first were\t - holy and pure,\t\t\t - free from all sin and defilement,\t\t - free from all disorder an distemper;\t</ul>\t</ul>they were placed upon the most holy, high, and noble objects.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Original Knowledge",
      Question:
        "What knowledge had man, when he was created, in his understanding?",
      Answer:
        "Man had, in his first creation,\t - the knowledge of God, and\t - His law, and\t - His creatures, and\t - all things which were necessary to make him happy.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Original Righteousness",
      Question: "What righteousness had man, when he was created, in his will?",
      Answer:
        "Man had at first in his  will a disposition, accompanied with an executive power,\t - to every thing which was right, and\t - to give that which was both due to God and also\t - to man, had there been any man besides himself.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Original sin and it's effects",
      Question:
        "What is the biblical teaching on original sin and its effects on the human race?",
      Answer:
        "That Adam and Eve, being the root of all mankind, the guilt of their sin was imputed, and the same death in sin, and corrupted nature, conveyed to all their posterity descending from them by ordinary generation.From this original corruption, whereby we are utterly\t - indisposed,\t - disabled, and\t - made opposite to all good, and\t - wholly inclined to all evil, do proceed all actual transgressions. (WC #6 Sections 3, 4)</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Reject trichotomy",
      Question: "Explain why we reject the trichotomy theory?",
      Answer: "body -> bad; soul -> good; spirit -> mystical",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Total depravity",
      Question:
        "How does total depravity differ from partial depravity and absolute depravity?",
      Answer:
        "**Partial **depravity - assumes that not every part of man is depraved but there **exists some part of man that is still good** and **untouched by sin** (self-esteem hermeneutic). Thus man is not entirely opposed to God nor is he fully at enmity with Him.**Absolute **depravity - assumes that man is **as bad and depraved as he can be**. Although, there seems to be confusion as some liken this to the same doctrine of total depravity.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Total depravity",
      Question: "What is meant by total depravity?",
      Answer:
        "By this is meant that every part of man (his mind, his will, his emotions, his affections, his conscience, his body) is rendered corrupt and are utterly incapable of saving themselves. Romans 1.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "Trichotomy",
      Question: "Explain the following theory: trichotomy",
      Answer:
        "Trichotomy - often refers to the theory that humans are composed of three distinct components: body, spirit, and soul",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "What does the Bible teach about the origin of man?",
      Question: "What does the Bible teach about the origin of man?",
      Answer:
        'Man was created by God on the sixth day from the dust of the ground and given charge to tend the garden, the woman was made from his rib, they were endued with living, reasonable, and immortal souls; made after God"s image with His law written on their hearts, and given dominion over the creatures. They were to populate the earth.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "What does the Bible teach is the punishment for sin and why?",
      Question: "What does the Bible teach is the punishment for sin and why?",
      Answer:
        "(LC Q#28) The punishments of sin in this world are either inward, as blindness of mind, a reprobate sense, strong delusions, hardness of heart, horror of conscience, and vile affections; or outward, as the curse of God upon the creatures for our sakes, and all other evils that befall us in our bodies, names, estates, relations, and employments, together with death itself.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "What is meant by actual sin?",
      Question: "What is meant by actual sin?",
      Answer:
        "**Outward **-> Actual sin, is of omission or commission. Again, both these are in the words or deeds.**Inward**, is of the\t - **mind, **\t - **will, and **\t - **affections.**  </ul>The actual sin of both will and affection, is every wicked motion, inclination and desire,  Gal. 5:17,  For the flesh lusteth against the Spirit, and the Spirit against the flesh: and these are contrary the one to the other: so that ye cannot do the things that ye would. ",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "What is meant by conversion?",
      Question: "What is meant by conversion?",
      Answer:
        'Logically, conversion follows regeneration. the turning of a sinner to God (Acts 15:3). As regeneration is the renewment of the soul"s nature by the power of the Holy Ghost, so conversion is the forthputting in act of that new nature, a positive turning  from darkness to light, and from the power of Satan unto God  (Acts 26:18). In common usage it denotes the change of heart and life experienced by one who becomes a true believer.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "What is meant by predestination?",
      Question: "What is meant by predestination?",
      Answer:
        "Predestination is the purpose of God respecting the destination of His moral creatures,  to include both mankind and angels. Predestination includes two parts: election and reprobation.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "What is meant by regeneration?",
      Question: "What is meant by regeneration?",
      Answer:
        "In Tit. 3:5 it is employed to designate that change of heart and life in every subject of divine grace which is effected by the agency of the Holy Spirit. It is called being  born again  (John 3:3)",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "What is meant by saving faith?",
      Question: "What is meant by saving faith?",
      Answer:
        "(WFC 14.1)The grace of faith, whereby the elect are enabled to believe to the saving of their souls, is the work of the Sprit of Christ in their hearts, and is ordinarily wrought by the ministry of the Word, by which also, and by the administration of the sacraments, and prayer, it is increased and strengthened.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "What is meant by the term autonomy?",
      Question: "What is meant by the term autonomy?",
      Answer:
        'Autonomy derives from two Greek words: auto ( self ) and nomos ( law ). It effectively means  self-law,  or  self-rule.  Human autonomy asserts that man"s reasoning is the ultimate criterion of knowledge and man"s will alone determines his law, makes its own choices, and exercises its own free will as he desires.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "What is the Arminian view of sin?",
      Question: "What is the Arminian view of sin?",
      Answer:
        "The Arminian view of sin teaches that at the fall, man did not exit totally depraved but still retains an ability to freely choose God. Thus, not being enslaved to sin, he can synergistically effect His salvation.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: 'What is the Bible"s teaching concerning the transmission of',
      Question:
        "What is the Bible's teaching concerning the transmission of sin?",
      Answer:
        "(LC Q#26) Original sin is conveyed from our first parents unto their posterity by natural generation, so al all that proceed from them in that way are conceived and born in sin.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Doctrine of Man",
      Deck: "What is the essential character of sin?",
      Question: "What is the essential character of sin?",
      Answer:
        'Sin is essentially\t - a **breaking away **from God,\t - **opposition **to God, and\t - **transgression **of the law of God.</ul>Sin should always be defined in terms of man"s relation to God and to His will as expressed in the moral law.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Christ",
      Question:
        "What do the Scriptures teach about the second coming of Christ?",
      Answer:
        "The Bible teaches that when Jesus returns at the end of the age, three distinct yet related events occur simultaneously.  <ol>\t - The **resurrection of the dead** (Daniel 12:1-4; Isaiah 25:6-9)-including both those who will live forever blessed in the presence of Christ (1 Thessalonians 4:13-5:11; 1 Corinthians 15:12-58), and those who will enter into eternal judgment (2 Thessalonians 1:6, 8-9; Revelation 20:11-14).  \t - The **general and final judgment** of believers and unbelievers alike (Matthew 13:36-43; 25:31-46).  \t - The **creation of a new heaven and earth** (Romans 8:21; 2 Peter 3:10).</ol>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Death",
      Question:
        "What benefits do the souls of believers receive from Christ at death?",
      Answer:
        'The souls of believers are at their death<p style="margin-left:40px;">made perfect in <b>holiness</b>, and<p style="margin-left:40px;">do immediately **pass into glory**; and<p style="margin-left:40px;">their bodies, being still united to Christ,  do **rest in their graves** till the resurrection.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Death",
      Question:
        "What do the Scriptures teach about death and the state of man thereafter?",
      Answer:
        "The wages of sin is death and, therefore, all men will die. Upon death, the souls of the righteous will enjoy the communion in glory with Christ whereas the soulds of the wicked will be cast into hell.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Death",
      Question:
        "What do the Scriptures teach about death and the state of the righteous thereafter?",
      Answer:
        "The communion in glory with Christ which the members of the invisible church enjoy immediately after death, is, in that\t - their souls are then made **perfect in holiness**, and\t - **received **into the highest heavens,\t\t\t - where they **behold the face of God **in light and glory,\t\t - **waiting **for the full redemption of their bodies,\t\t\t\t\t - which even in death continue united to Christ,\t\t\t - and **rest in their graves **as in their beds, till at the last day they be again united to their souls.  \t\t</ul>\t\t\t</ul>\t</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Death",
      Question:
        "What do the Scriptures teach about death and the state of the wicked thereafter?",
      Answer:
        "The souls of the wicked are at their death\t - **cast into hell**, where they remain in<em><u> torments and utter darkness</u></em>, and\t - their **bodies kept in their graves**,\t\t\t - as in their <em><u>prisons</u></em>,\t\t - **till the resurrection and judgment** of the great day.\t</ul>\t</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Doctrine of glorification",
      Question: "Explain the doctrine of glorification?",
      Answer:
        'Glorification is not to be confused with that benefit which the believer receives at death when his soul is made perfect in holiness and passes immediately into glory (Shorter Catechism, Question 37). Death introduces the believer into what is termed the soul"s  intermediate state,  which is certainly  gain  and  better by far  than this present state (Phil. 1:21, 23). But the soul"s intermediate state is not what Paul has in mind when he speaks of the believers" glorification.Rather, **glorification speaks of that final state into which all believers enter together at the resurrection**,\t - when being raised up in glory or transformed,\t - they are openly acquitted in the Day of Judgment, and\t - made perfectly blessed, as coheirs with Jesus Christ, in the full enjoying of God to all eternity (Shorter Catechism, Question 38).</ul>',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Eschatology",
      Question: "Explain the following millennial views: pretribulation.",
      Answer:
        '<p style="text-align: center;">The beleif that believers wil not suffer the tribulation but wiull be raptured in advance.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Eschatology",
      Question:
        "What are the teachings of the following millennial views? A-mill",
      Answer:
        'A-Mill - the theological doctrine that the millennium is metaphorical and refers to what happens to the church between Christ"s first and second coming.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Eschatology",
      Question:
        "What are the teachings of the following millennial views? Dispensational Premill.",
      Answer:
        "Dispensational Premill - the idea that Jesus actually returns twice, which makes a total of three times that Jesus comes to earth. For the dispensational premil, the millennium is a time in which God fulfills promises he made specifically to the Jews. In the dispensational view, there are two distinct people of God, the Jews and the church of Christ (which contains both Jews and Gentiles).",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Eschatology",
      Question:
        "What are the teachings of the following millennial views? Post-mill",
      Answer:
        "Post-mill - the theological doctrine that the second coming of Christ will occur after the millennium",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Eschatology",
      Question:
        "What are the teachings of the following millennial views? Pre-mill",
      Answer:
        "Pre-mill - the theological doctrine that the second coming of Christ will occur before the millennium",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Judgment of the Righteous",
      Question: "What shall be done to the righteous at the day of judgment?",
      Answer:
        "At the day of judgment, the righteous, being caught up to Christ in the clouds, shall be set on his right hand, and there\t - **openly acknowledged and acquitted**,\t - shall join with him in the **judging of reprobate angels and men**, and\t - shall be **received into** heaven, where they shall\t\t\t - be **fully **and **forever freed **from all sin and misery;\t\t - **filled **with inconceivable joys,\t\t - **made **perfectly **holy **and **happy **both in body and soul,\t</ul>\t</ul>..in the company of innumerable saints and holy angels, but especially in the immediate vision and fruition of God the Father, of our Lord Jesus Christ, and of the Holy Spirit, to all eternity.And this is the **perfect and full communion** which the members of the **invisible church **shall enjoy with Christ in glory, at the resurrection and day of judgment.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Judgment of the Wicked",
      Question: "What shall be done to the wicked at the day of judgment?",
      Answer:
        "At the day of judgment, the wicked shall be set on <em><u>Christ's left hand</u></em>, and,\t - upon clear evidence, and full conviction of their own consciences, shall have the fearful but just **sentence of condemnation** pronounced against them; and\t - thereupon shall be **cast out** from the favorable presence of God, and the glorious fellowship with Christ, his saints, and all his holy angels,\t - **into hell**, to be punished with **unspeakable torments**, both of body and soul, with the devil and his angels forever.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "Resurrection",
      Question:
        "What benefits do believers receive from Christ at the resurrection?",
      Answer:
        "At the resurrection, believers being raised up in glory,shall be openly **acknowledged and acquitted** in the day of judgment, andmade **perfectly blessed** in the **full enjoying of God**,  to all **eternity**.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "The resurrection - generally",
      Question:
        "What do the Scriptures teach generally about the resurrection?",
      Answer:
        '(LC Q.87) We are to believe that at the last day there shall be a general resurrection of the dead,both of the **just and unjust**: when they that are then found alive shall in a moment be changed;<p style="margin-left:40px;">and the selfsame bodies of the dead which were laid in the grave, **being then again united to their souls forever**,<p style="margin-left:40px;">shall be **raised up by the power of Christ**.The **bodies of the just**, by the <u>Spirit of Christ</u>, and by <u>virtue of his resurrection</u> as their head, shall be<p style="margin-left:40px;">raised in **power**, **spiritual**, **incorruptible**, and<p style="margin-left:40px;">made **like to his glorious body**; andthe **bodies of the wicked** shall be<p style="margin-left:40px;">raised up in **dishonor **by him, <u>as an offended judge</u>.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Eschatology",
      Deck: "The resurrection - immediately",
      Question:
        "What do the Scriptures teach happens immediately after the resurrection?",
      Answer:
        "(LC Q. 88) Immediately after the resurrection shall follow\t - the **general and final judgment** of angels and men;\t - the **day and hour** whereof no man knoweth,\t - that all may **watch and pray**, and be **ever ready** for the coming of the Lord.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Brachyology",
      Question: "What is a brachyology and how is it used in Scripture?",
      Answer:
        "Brachyology is the  **breaking off**  of words from a phrase for the sake of brevity but which can be easily supplied.\t -  Morning  from  Good Morning  or\t - Gen 25:32 when Esau asks   ¦what profit shall this birthright do to me?  -> meaning, to a dying man.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Context of Scripture",
      Question: "What is meant by the context of the passage of Scripture?",
      Answer:
        " In context  refers to\t - **historical**,\t - **anthropological**,\t - **cultural**,\t - **social**,\t - **cognitive**,\t - **literary**, and\t - **textual factors** that all play a role in determining what a word means.</ul>Additionally, context must also take into account those words\t - **preceding **and\t - **following **such as the\t\t\t - clause, sentence, paragraph, periscope, chapter, book and overall Scripture to determine the proper context.\t</ul>\t</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Doctrine of Inerrancy",
      Question: "What is meant by the inerrancy of Scripture?",
      Answer:
        "The teaching that the Scriptures never  err , that it is without error or fault. The Bible is completely and totally true and reliable. John 17:17 ->  Your word is truth The scriptures are the **absolute authority in all matters** concerning this world and life, this includes\t - psychology,\t - cience,\t - history,\t - geography, etc.</ul>**Inerrancy **= The Scriptures **do not** err.<br>**Infallibility **= The Scriptures **cannot **err.   (the higher standard)",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Ellipsis",
      Question: "What is a Relative ellipsis?",
      Answer:
        "Relative, where the **omitted word or words** are to be supplied from, and are suggested by the context.\t - Gal 4:24-26:</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Ellipsis",
      Question: "What is an Absolute ellipsis?",
      Answer:
        "Absolute, where the **omitted **word or words are to be supplied from the <b>nature of the subject alone</b> and not from the context of the passage.\t - 1 Cor 15:53 speaking about the corruptible/ incorruptible body\t\t\t -  For this corruptible  body  must put on incorruption and this mortal  body  must put on immortality. \t</ul>\t\t - Fire when ready  ->  Fire when you are ready </ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Ellipsis",
      Question: "What is an ellipsis and how is it used in Scripture?",
      Answer:
        "An ellipsis is the **omission of words from speech or writing**, typically indicated by a series of dots ( ¦).Literally, the  leaving in  of a gap in a sentence leaving out words necessary for the grammar but not necessary for the sense of the sentence.For instance, in Matt. 14:19, we read that the Lord Jesus  gave the loaves to His disciples, and the disciples to the multitude. ",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Ellipsis",
      Question: "What is an Ellipsis of Repetition?",
      Answer:
        "The Ellipsis of Repetition, where the **omitted word** or words are to be supplied by repeating them **from a clause which precedes or follows**.\t - \tExample: Romans 13:7\t\t\t - \t\t Taxes to whom taxes  is not a complete phrase - there is no verb!\t\t\t\t - \t\tBut it is found in the preceding  render to all their  due \t\t\t\t - \t\tThus it is saying  Render therefore to all their due: taxes to whom taxes  are due, customs to whom custom  is due, fear to whom fear  is due, honor to whom honor  is due. \t\t\t</ul>\t</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Epizeuxis",
      Question: "What is an epizeuxis and how is it used in Scripture?",
      Answer:
        "An epizeuxis is the **duplication **or **repetition of a word** in a sentence.\t - Gen 6:17 ->  And, behold, I, even, I, do bring a flood of waters upon the earth \t - Isaiah 40:1 ->  Comfort, comfort my people ¦ \t - John 1:51 ->  Verily, verily I say unto you ¦   </ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Etymological study of words",
      Question:
        "What is meant by the etymological study of the words in Scriptures?",
      Answer:
        "The study of words taking into account their **origins **and **development **of their meaning.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Figure of Speech",
      Question: "What is a euphemism and how is it used in Scripture?",
      Answer:
        'A **figure of speech** often used to avoid what may be indelicate or unseemly and so it sounds refined or smooth.\t - Genesis 4:1 -> Adam  knew  Eve leading to the birth of Cain\t - "Slept with his fathers" -> death</ul>',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Figures of Speech",
      Question:
        "There are three types of tropes used in Scripture, what are they?",
      Answer:
        "A trope is a figurative or metaphorical use of a word or expression. The types of tropes in Scripture are **s**imiles, **m**etaphors, and **s**ubstitutions (e.g. metonymy, Schenectady, anthropopathism, and anthropomorphisms).  --> Tropes are like a giant walking through the forest, **s**lowly with **m**any **s**teps as a lumberign oaf.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Figures of Speech",
      Question: "What is a hyperbole and how is it used in Scripture?",
      Answer:
        'A hyperbole is an **exaggeration **to either enlarge or diminish the subject to heighten the sense and meaning of the word or passage.\t - Gen 42:28 ->  Their heart failed them \t - Matt 23:24 -> "You strain the gnat to swallow a camel"\t - Matt 5:29 -> "if thy right eye offend thee, pluck it out"</ul>',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Figures of Speech",
      Question: "What is a metaphor?",
      Answer:
        "A metaphor describes how a thing\t - **is**,\t - **acts like**, or\t - **represents **something else that is <em>**unlike the first**</em>.</ul>It can be identified through the use of  is ,  as ,  are ,  was ,  were ,  have been . For example,\t -  The Lord is my Rock  Psalm 18.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Figures of Speech",
      Question: "What is a metonymy?",
      Answer:
        'A metonymy **substitutes **one word for another; a change in the noun to communicate a concept.The kettle is boiling."To thee and all thy seed" -> descendents',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Figures of Speech",
      Question: "What is a simile and how is it used in Scripture?",
      Answer:
        "A simile is the comparison of two things using  like  or  as. \t - 1 Peter 1:24  All men are like grass. </ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Figures of Speech",
      Question: "What is a synecdoche?",
      Answer:
        "Similar to metonomy. It is a figure of speech by which the **whole of a thing is put for a part**, or a **part for the whole**.\t - Luke 2:1: Ceaser ordered a census of the whole world. Only the Roman Empire was meant, not every corner of the world.\t - Proverbs 1:16: Their feet rush into sin. The feet represent the entire man.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Figures of Speech",
      Question: "What is an idiom?",
      Answer:
        "An idiom is a figure of speech unique to a culture, language, or person.Ex 3.8 **Flowing with milk and honey **-> fertile",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "How many meanings can a word have in conjunction with other",
      Question:
        "How many meanings can a word have in conjunction with other terms in a single passage of Scripture?",
      Answer:
        "**One**. Alone, a word can multiple meanings but when examined **within context**, there be only one meaning.To be otherwise would\t - **lead to the confusion of man** and\t - therefore tend to **violate **\t\t\t - the **veracity **and\t\t - **unequivocalness **of Scripture.\t</ul>\t\t - This, also, would lead to **allegorizing **Scripture.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Inerrancy",
      Question: "What are some of the objections to the doctrine of inerrancy?",
      Answer:
        "<ol>\t - It was **written by men** and therefore cannot possibly be considered the Words of God since God did not fully control them.\t - Modern Bibles have **errors **and **contradictions**;\t - Modern **science **has disproved the Bible;\t - Different **manuscripts **make inspiration useless;\t - The NT **quotes **the OT without care or precision;\t - The Bible has inexact and **non-scientific** language; and\t - Some **passages indicate the author is not inspired**.</ol>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Inspiration",
      Question: "What is meant by plenary inspiration?",
      Answer:
        'Plenary inspiration teaches that God"s superintending work of inspiration applies to each and every part of the Scripture; each and word is considered as inspired.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Inspiration",
      Question: "What is meant by verbal and plenary inspiration?",
      Answer:
        "The words of the Bible (verbal) and every word (plenary) are inspired (very breath, spoken) by God.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Inspiration",
      Question: "What is meant by verbal inspiration?",
      Answer:
        "Verbal inspiration teaches that the Bible contains the **actual words of God**. They are not just His ideas or thoughts but the actual words breathed out by God Himself.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question:
        "In what way is logic important in systematics and in interpretation of Scripture?",
      Answer:
        "Logic **controls **and **informs **how a person properly thinks and reasons.To understand Scripture, one must learn and use logic such that the propositions that are taught in Scripture are** rightly understood as God wants them understood**.The laws of logic **inform us as to how God thinks since He makes no unwarranted conclusions nor mistakes**.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question:
        "What are the basic principles for the interpretation of prophecy?",
      Answer:
        '1. **Identify **the passage as prophecy ( It shall come to pass.. 2. Give careful attention to the** language, context, historical background. **3. Determine the **literal meaning** of the passage (don"t get down into the weeds).4. Determine whether it is **predictive or didactic**. Predictive: Zechariah 1:7. Didactic: Zechariah 1:6',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question:
        "What are the basic principles of theological interpretation of the Bible?",
      Answer:
        '<ol>\t - It is the inerrant, infallible, and inspired word of God\t - It is its own best interpreter (the analogy of faith and analogy of Scripture)\t<ol>\t\t - Analogy of Faith -> more doctrinal in nature, that is there is a "systematic" overarching doctrine on some topic and then it gets applied to a particular text and that text is to be interpreted in the light of the teaching of the rest of scripture.\t\t - Analogy of Scripture -> "Scripture interprets Scripture" I think more textually. That is, if you want the answer to, (let\'s just say) who the suffering servant of  Isaiah 52:13-53:12  is, then you take them to the NT passages in the gospels.\t</ol>\t\t - It must be understood within its grammatic-historical context\t - It must be understood in its literary form\t - Difficult passages must be understood in the light of more explicit ones</ol>',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question: "What are the rules for interpreting types in Scripture?",
      Answer:
        "\t - A type must have an anti-type.\t\t\t - We look for the anti-type to identify the type.\t\t - The type is a shadow of the anti-type which is the fulfillment.\t</ul>\t\t - Consequently, there must resemblances and associations between the two.\t - One must first understand the original meaning of the type when it was instituted and then next to understand how it was used as a stepping stone to its greater fulfillment - being careful that the full meanings be guided by the revealed will of God in the Scriptures.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question:
        "What do we mean by grammatico-historical interpretation and explain its function?",
      Answer:
        "The grammatical method of interpretation seeks to identify and understand the natural meaning of the text by examining the various parts of grammar and their interactions while keeping in mind the historical context (meaning, time, culture, environment, politics) of the writing. The intent is to seek to understand the single meaning of Scripture in the immediate context. Grammatical must be understood in terms of its historical context.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question:
        "What do we mean when we speak of the historical interpretation of the Bible?",
      Answer:
        "It is the study of Scripture within historical circumstances and events. To understand the meaning and intent, you must understand the history in which it was written.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question:
        "What event gave rise to the allegorical method of interpretation?",
      Answer:
        "The allegorical method can be attributed to the Greeks in an attempt to **harmonize **the **OT Scriptures to Greek philosophy** to remove embarrassing anthropomorphism or other difficult texts.There were conflicts between traditions of interpretation:\t - one was a **literal **approach (Home, Hysod) and\t - the other was **rooted in philosophical and historical** using logic, science, ethics, etc.</ul>The attempt to reconcile the two approaches resulted in interpreting the bible by using an allegorical approach.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question: "What is allegorical interpretation?",
      Answer:
        "The method of interpretation where the **literal**, **historical**, or more **obvious meaning** is **cast aside** in order to discover a <em><u>deeper or hidden meaning</u></em>.This can often result in a hidden meaning where there may not be one or even turning the meaning of Scripture into something that was never intended.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question: "What is meant by Scripturea Scripturae interpres?",
      Answer:
        "Scripture interprets scripture.This highlights the fact that the less clear portions of Scripture are explained (in the ultimate sense) by the clearer portions.  ",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question:
        "What is meant by the historico-grammatical method of interpretation?",
      Answer:
        "The grammatical method of interpretation seeks to understand the text by examining the various parts of grammar and their interactions while keeping in mind the historical context (meaning, time, culture, environment, politics) of the writing. The intent is to seek to understand the single meaning of Scripture in the immediate context. Grammatical must be understood in terms of its historical context.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question: 'What is meant by the phrase "regula fidei"?',
      Answer:
        'Development of the concept is attributed to Tertullian.It translates as the  rule of faith  and means that  **Scripture interprets Scripture**. In short, those passages that are clear and about which there can be no confusion carry the most weight and are called  positive analogies . General Analogies" are those teachings that deal not with an explicit passage but are founded in comparison with positive analogies and Scripture as a whole.Overall, Scripture is the means to be used to understand Scripture, since being the very Word of God and therefore infallible and inerrant, it cannot and does not contradict itself and is always in agreement.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question: 'What is meant by the phrase "Scripture interprets Scripture"?',
      Answer:
        "WCF 1:9. Overall, Scripture is the means to be used to understand Scripture, since being the very Word of God, **it cannot and does not contradict itself **and is always in agreement and fully sufficient for our needs.Therefore, the only adequate expounder of God's Word is and must only be God Himself.*** In short, those passages that are clear and about which there can be no confusion carry the most weight and are called  **positive analogies** . **General Analogies**\" are those teachings that deal not with an explicit passage but are founded in comparison with positive analogies and Scripture as a whole.Overall, Scipture is the means to be used to understand Scripture, since being the very Word of God, it cannot and does not contradict itself and is always in agreement.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question: 'What is meant by the phrase the "analogy of faith"?',
      Answer:
        'A principle of interpretation that suggests that clearer passages of Scripture should be used to interpret more obscure or difficult passages; that **all Scripture is in agreement and will not contradict** itselfIn short, those passages that are clear and about which there can be no confusion carry the most weight and are called  **positive analogies** . **General Analogies**" are those teachings that deal not with an explicit passage but are founded in comparison with positive analogies and Scripture as a whole.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question: "What is meant by the sufficiency of Scripture?",
      Answer:
        "Sufficiency of Scripture teaches that our supreme authority in all spiritual matters is Scripture. Sola Scriptura simply means that all truth necessary for our salvation and spiritual life is taught either explicitly or implicitly in Scripture. 2 Timothy 3:16",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question: "Why do we call the Bible propositional truth?",
      Answer:
        "The Bible provides propositions stating what  is  and since the Bible is inerrant and infallible, all statements are therefore true.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question:
        "Why do we reject the allegorization type of interpretative method?",
      Answer:
        "We reject it because it allows the reader/ interpreter to make the texts say whatever they want them to say.It **encourages **the interpreter to\t - **misread **and\t - **apply meanings** to the text that may **never **have been **intended **by the writer.\t - It can lead to the** corruption of God's word** and that we can never know the Word of God or His thoughts since everything can now possess a **double or hidden meaning**.</ul>It fails to see the historical text as literal.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question:
        "Why has this method of allegorization been used by Roman Catholic Church?",
      Answer:
        "It allowed the church to retain control over the interpretation of Scripture by stating only the church could properly interpret Scripture. It also allowed them to interpret Scripture such that it did not conflict with church teaching, theology, practice, or tradition.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpretation",
      Question: "Why is the method of allegorical interpretation faulty?",
      Answer:
        'It is faulty because it allows the reader/ interpreter to make the texts say whatever they want them to say. It encourages the interpreter to misread and apply meanings to the text that may never have been intended by the writer. It can lead to the corruption of God"s word and that we can never know the Word of God or His thoughts since everything can now possess a double or hidden meaning. It fails to see the historical text as literal.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Interpreting Psalms",
      Question:
        "What are the basic principles for the interpretation of the psalms?",
      Answer:
        "<ol>\t - Treat each Psalm **as a whole** yet identifying the pericope.\t - Understand the historical context for the writing of the Psalm, e.g. the **introductory line of the Psalm.**\t - Understand how the Psalm might be used in **worship of God**.\t - Understand their **Christological **nature</ol>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Lucid brevity",
      Question: 'What is meant by the phrase "lucid brevity"?',
      Answer:
        "John Calvin said that the best thing an interpreter can do is to make the meaning of the text **clear **and to do it with** as few words as possible**.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Parallelism",
      Question: "What is a antithetic parallelism?",
      Answer:
        "Passages in which there is a **contrast or opposition of thought** presented in the different sentences. Especially, in the books of Proverbs.\t - **Simple **- when the contrast is presented in a single distich of simple sentences\t\t\t - Righteousness will exalt a nation,<br>\t\tBut the disgrace of the peoples is sin. Prov. 14:84\t</ul>\t\t - **Compound **- when there are two or more sentences in each member of the antithesis\t\t\t - The ox has known his owner,<br>\t\tAnd the ass the crib of his lord;<br>\t\tIsrael has not known -  <br>\t\tMy people have not shown themselves discerning. Isa 1:3\t</ul>\t</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Parallelism",
      Question: "What is a parallelism?",
      Answer:
        "The **repetition **of\t - similar,\t - synonymous, or\t - opposite thoughts or\t - successive lines of Scripture displaying a deliberate\t\t\t - comparison,\t\t - contrast, or\t\t - correlation.\t</ul>\t</ul>  \t - Psalm 103:10\t\t\t - Not according to our sins did he deal with us;\t\t - And not according to our transgressions did he requite us.\t</ul>\t</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Parallelism",
      Question: "What is a Synonymous Parallelism?",
      Answer:
        "Passages in which different lines or members present the **same thought** in a slightly different manner of expression.\t - **Identical **- different members are composed of the same or nearly the same words\t\t\t - Thou wert snared in the sayings of thy mouth;<br>\t\tThous wert taken up in the sayings of thy mouth. Prov 6:9\t</ul>\t\t - **Similar **- the sentiment is substantially the same, but language and figures are different\t\t\t - For he on seas has found it,<br>\t\tAnd on floods will he establish it. Psalm 24:9\t</ul>\t\t - **Inverted **- when there is an inversion or transposition of words or sentences so as to change the order of the thought\t\t\t - The heavens are telling the story of God,<br>\t\tAnd the work of his hands declares the expanse. Psalm 24:2\t</ul>\t</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Parallelism",
      Question: "What is a Synthetic Parallelism?",
      Answer:
        "The use of parallelism using **similar forms of construction but not necessarily in content**, related thoughts are brought together to **emphasize similarities, contrasts, or other correlations**; to **advance a thought**.  Basically, when the structure of the poetry is not synonymous or antithetical, then it could be considered synthetic.\t - **Correspondent **- when there is a designed and formal correspondency between related sentences; e.g. when the first line corresponds with the third and the second with the fourth.\t\t\t - Jehovah, my light and my salvation,<br>\t\tOf whom shall i be afraid?<br>\t\tJehovah, fortress of my life,<br>\t\tOf whome shall I stand in terror?\t</ul>\t\t - **Cumulative **- when there is a climax of sentiment running through the successive parallels, or when there is aconstant variation of words and thought by means of the simple accumulation of images or ideas\t\t\t - Happy the man who has not walked in the counsel of wicked ones,<br>\t\tAnd in the way of sinners has not stood.<br>\t\tAnd in the seat of scorners has not sat down;<br>\t\tBut in the law of Jehovah in his delight;<br>\t\tAnd in his lay will he meditate day and night. Psalm 1:1-2\t</ul>\t</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Perspicuity of Scripture",
      Question: "What is the perspicuity of Scripture?",
      Answer:
        "Perspicuity of Scripture means that\t - all that is **necessary to salvation** and leaving men without excuse for disobedience\t\t\t - is **clear and easy** to understand to those who\t\t - make a **due use** of Scripture and\t\t - receive **illumination **by the Spirit of God.\t</ul>\t</ul>This is contrary to the teaching of the Roman Catholic Church which teaches the Bible can only be properly interpreted and understood through the infallible interpretation of the Church.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Preservation of Scripture",
      Question: "What do you believe concerning the preservation of Scripture?",
      Answer:
        "The doctrine of preservation is the teaching that God's Word has been preserved and its **original meaning has been kept intact**.\t - God gives His word that He will preserve it ->\t\t\t - **Isaiah **59:21\t\t - **Psalm **12\t\t - **Isaiah **40:8\t</ul>\t</ul>We see that the vast majority of these\t - differences are **insignificant**,\t - consisting of such things as\t\t\t - easily recognized **spelling errors**,\t\t - words appearing in **different order **(word order is not as significant in Greek as it is in English), and so on\t</ul>\t</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Repentance",
      Question: "What is meant by repentance?",
      Answer:
        "(WCF 14) It designates\t - **sorrow **for sin, grief for having committed it, and\t - a **turning away **from it,\t - accompanied with **sincere endeavors**,\t\t\t - in** reliance on the grace** and aid of God's Holy Spirit,\t\t - to live in **humble and holy obedience** to the divine commands and will\t</ul>\t</ul>(Matt. 3:2, 8; Acts 5:31; 11:18; 2 Cor. 7:8-10; 2 Tim. 2:25). Look at 1 Thessalonians, the turning from one thing to another.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Revelation",
      Question: "What is meant by the phrase General Revelation?",
      Answer:
        "General revelation is that which is described as the  light of nature  and  the works of creation and providence  that  reveals the **goodness**, **wisdom**, and **power **of God and the Godhead but it** is not sufficient unto salvation**. (Romans 1)<ol>\t - The  **light of nature**  refers to that which is **inside of us**, being made** in the image of God.**\t - The  **works of creation and providenc**e  refers to that which is **outside of us** , **the world around us**.</ol>Both of these tell us about the existence of a Creator, that we ought to** obey and honor **Him, and that we are, therefore, **without excuse** for not recognizing Him and obeying/ praising Him.  ",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Revelation",
      Question: "What is meant by the phrase Special Revelation?",
      Answer:
        'Special revelation is that which is described as **God"s self-revelation** - His spoken Word.It not only reveals\t - His **will **to creation but also\t - teaches us the **way to life (salvation)** and the way to live life.</ul>The Bible is all special revelation but <em>all</em> special revelation** is not** contained in the Bible.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Revelation",
      Question:
        "What is the value and significance of general revelation as it relates to special revelation?",
      Answer:
        "General Revelation is <b>truth that applies to everyone</b>.Special Revelation is truth that applies to a **small, select group** of people.General revelation leaves us **without excuse** and subject to just punishment.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Systematic theology",
      Question: "Why is systematic theology important to the church?",
      Answer:
        "Systematic theology ensures all doctrines of the Bible are treated in **wholistic**, **exhaustive **way such that it looks at the Bible **topically**.For example, what the Bible says about the nature and character of God.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "The effect of the Reformation upon the church",
      Question:
        "What has been the effect of the Reformation upon the post-Reformation church?",
      Answer:
        "Cast off the ultimate authority of the Roman Catholic Church and placed copies of the Bibles in the hands of everyman.\t - It replaced the Vulgate as the **primary source** of Scripture back to the Greek/ Hebrew source texts.\t - It impacted the **hermeneutic of interpreting Scripture**.\t\t\t - The pre-Reformation church oftentimes used an approach known as the  **quadriga**  to find a four-fold meaning:\t\t<ol>\t\t\t - original,\t\t\t - allergorical,\t\t\t - moral, and\t\t\t - heavenly meaning.\t\t</ol>\t\t\t</ul>\t</ul>The Reformers stressed the **grammtico-historical **approach, instead focusing upon the literal (according to its genre) and overall unity of the Scriptures.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Unity and diversity",
      Question: 'What is meant by "unity and diversity" in the Bible?',
      Answer:
        "By unity, we mean that is has a **consistent theme** bound together in the Unity of **Christ**, coming from a** single mind** (God).Diversity, we refer to the differences in\t - **content **(OT -> points toward coming of Christ, NT -> describes the fulfillment),\t - different **forms **(prophecy, apostolical, poetry, didactic, historical),\t - difference in **language **(Hebrew, Greek),\t - **style **(according to the styles of each different author used by the Spirit).</ul>We say the unity is an organic unity growing out of a progressive revelation and not a mere mechanical unity.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal inspiration",
      Question:
        "Describe the following objection to verbal inspiration: Different manuscripts make inspiration useless.",
      Answer:
        "Scientific textual criticism is good at showing the probable original text; and variations are very minor, with no doctrines depending on the outcome. An abundance of textual material is available for text-critical research.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal inspiration",
      Question:
        "Describe the following objection to verbal inspiration: Modern Bibles have errors and contradictions.",
      Answer:
        'Many of these can be shown to arise from **faulty copying** or **translating**. Inspiration applies to the autographs, the <u>**original writings**</u>.Errors of copying or translating **do not negate** this doctrine.To **prove **an error or contradiction, it must<p style="margin-left:40px;">first be proved that the reading is in the original text.Supposed contradictions usually can be shown to be based on **faulty or superficial exegesis**.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal inspiration",
      Question:
        "Describe the following objection to verbal inspiration: Modern science has disproved the Bible.",
      Answer:
        "This **cannot be proved** in any particular instance.<ol>\t - While modern scientific theories may contradict the Bible, **no proven fact** has.\t - The Bible must be** interpreted properly**; when it is, there is **no contradiction** between the Bible and correct science.</ol>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal inspiration",
      Question:
        "Describe the following objection to verbal inspiration: Some passages indicate the author is not inspired.",
      Answer:
        "These passages are misinterpreted. Rom 3:5-6,  What shall we say? That God is unjust in bringing his wrath on us? (I am using a human argument.) Certainly not! ",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal inspiration",
      Question:
        "Describe the following objection to verbal inspiration: The Bible has inexact and non-scientific language.",
      Answer:
        "The Bible makes no claim to be written as a science book, with high precision. It is written on the popular level, with many interesting and vivid figures of speech and ordinary expressions. Besides, we ourselves (and even scientists!) use such expressions in daily conversation.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal inspiration",
      Question:
        "Describe the following objection to verbal inspiration: The NT quotes the OT without care or precision.",
      Answer:
        "NT writers do quote the OT with varying degrees of precision, from precise quotes to paraphrases.There is no error involved in this type of quotation, as long as there is **no claim to verbatim quotation**.Careful study of the OT contexts shows that the NT quotes the OT with great care and profundity, being **sensitive to the OT context**.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal Inspiration",
      Question:
        "Explain from the Bible its own teaching on divine inspiration.",
      Answer:
        'The Bible claims divine inspiration in 2 Peter 1:19-21 stating men spake as they were moved by the Holy Spirit and in 2 Timothy 3:16 stating that all Scripture is described as coming out of the mouth of God. Even Jeremiah in 1:4 claimed God put His words directly into his mouth. New Testament is placed on the same level of inspiration of the Old Testament in 2 Peter 3:15-16 (..as they do the other Scriptures-> classifies Paul"s writing as Scripture) and 1 Timothy 5:18 (references a worker being worthy of His wages from Luke 10).',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal inspiration",
      Question:
        "Support the doctrine of verbal inspiration from the New Testament.",
      Answer:
        '<ol>\t - Paul says:  **Which things also we speak, not in words which man"s wisdom teacher, but which the Spirit teacheth; comparing spiritual things with spiritual**  (1 Cor 2:13).  \t - In **Hebrews**, there are many quotations from the Old Testament: 1:5; 2:12, 13; 3:7; 4:4, 5, 7; 8:10; 10:15-17 which are **cited, not as words of some individual writer, but as words of God**.</ol>',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal inspiration",
      Question:
        "Support the doctrine of verbal inspiration from the Old Testament.",
      Answer:
        "<ol>\t - Moses constantly speaks of verbal revelations given him from Jehovah: e.g., Exodus 3:4, 5:1.\t - Jeremiah 1:9:  Then the Lord put forth his hand and touched my mouth; and the Lord said unto me, Behold, I have put my words in thy mouth. \t - Ezekiel 3:4, 10, 11 is told to receive and speak the words of Jehovah.</ol>And this is **characteristic of the prophets** in general.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal inspiration",
      Question:
        "What are some objections to the doctrine of verbal inspiration?",
      Answer:
        "The Scriptures teach a general idea. The writers of Scripture captured the thought but not the actual inspired Words.The Scriptures main purpose is to teach about Christ, everything else is incidental.The actual words are not important. The Bible is rather a book of religious experiences showing the path towards God and the experience of Him.---> Without verbal inspiration, the bible is left as a **generally icy **book with no feeling or **experience **of warmth.\t - generally -> general idea of thought\t - experience -> book of religious experiences\t - Isolates Christ -> the real important is about Christ, none of the other words matter</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Verbal Inspiriation",
      Question:
        "Is it essential that inspiration extend to every word in the Bible? Why?",
      Answer:
        "Yes, otherwise everyone is able to decide which parts are inspired and which parts are not thus leading to the approach  What does it mean to you  resulting in Scripture ultimately not meaning anything.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "View of inspiration",
      Question: "Explicate these three views of inspiration: dynamic",
      Answer:
        "Dynamic - the Scriptures were written not under the direction of the Spirit but rather the writers intended to capture the general revelation or idea of their understanding and experiences. The Bible may contain the Words of God but not necessarily are all the word His.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "View of inspiration",
      Question: "Explicate these three views of inspiration: Mechanical",
      Answer:
        "Mechanical - the Scriptures were caused to be written in such a way that the writers themselves did not contribute to the contents or form of the writings but were completely and utterly controlled by the Spirit.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "View of inspiration",
      Question: "Explicate these three views of inspiration: organic.",
      Answer:
        "Organic - the Scriptures were developed in such a way that God used His created beings with the\t - **character**,\t - **temperaments**,\t - **gifts**,\t - **talents**,\t - **education**, etc. and</ul>prompted them to write **what He wanted as He wanted it written**.This would require the <b>suppression of their sin from any influence upon the writing of Scripture</b>. 2 Peter 3:1,2, 16; Rev -> now this is Jesus speaking to the churches; Col -> make sure you read the epistle I wrote to Laodiceans",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What does didactic mean?",
      Question: "What does didactic mean?",
      Answer:
        "Didactic means  teaching , intending to provide instruction and training.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What is an allegory and how is it used in Scripture?",
      Question: "What is an allegory and how is it used in Scripture?",
      Answer:
        "An allegory is a story or a poem that is used to communicate a greater lesson beyond the initial meaning. An example would be rich man, the poor man, and the sheep between David and Nathan (2 Samuel 12:1-4). Another example is the parable of the sower in Mark 4:14-20.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What is meant by Synonymous use of words in Scripture?",
      Question: "What is meant by Synonymous use of words in Scripture?",
      Answer:
        "A synonym is so called when two or more words are similar in meaning. Synonymous use of words in Scripture is important because it is how the Spirit teaches us. Synonyms are useful to cause us to pay attention and think about a topic in different ways such that we might better understand the meaning.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What is meant by the authority of Scripture?",
      Question: "What is meant by the authority of Scripture?",
      Answer:
        'The Bible is self-authenticating and self-attesting because it is God"s inspired and infallible Word with God Himself as the final authority. Therefore, it does not need to be validated or affirmed by an external authority.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What is meant by the syntactical use of words in Scripture?",
      Question: "What is meant by the syntactical use of words in Scripture?",
      Answer:
        "It examines the way in which words are used in connection with other words in a sentence according to the rules of grammar for a particular language. Words have a single meaning in their immediate context and this is dictate by their location and relationship to other words. Since the Scriptures were written by men as they were carried along by the Spirit, it is understood the Spirit caused His words to be written so that they could be understood. The way to understand them is by understand their syntax.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What is the difference between a positive analogy and a gene",
      Question:
        "What is the difference between a positive analogy and a general analogy?",
      Answer:
        "These are two degrees of the analogy of faith.The positive analogy is\t - the **most important **and\t - deals with teachings in the Bible about which there is **no confusion** and\t - Scripture is **clear **and\t - **positively stated in several places**.</ul>A general analogy deals with teachings that\t - **rest on Scripture as a whole**\t - but for which there is **no single explicit verse** nor supported by an abundance of passages.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What is the major hermeneutical distinction between the pre-",
      Question:
        "What is the major hermeneutical distinction between the pre-Reformation church and the church during the Reformation?",
      Answer:
        "**Ad Fontes** - the pre-Reformation church invested authority in the church itself and interpreted Scripture according to its traditions and often was allegorical.The post-Reformation church strove to let **Scripture be the ultimate source** of authority and to derive meaning from the text.Reformed hermeneutics is covenantal. Christ-centered, law/gospel.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What is your view on Bible translations?",
      Question: "What is your view on Bible translations?",
      Answer: "??",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What was the effect of the Renaissance upon the church as it",
      Question:
        "What was the effect of the Renaissance upon the church as it relates to the Reformation?",
      Answer:
        "The Renaissance produced a group known as the  Humanists  composed of scholars and educationalists.They were **interested in truth and knowledge** and therefore began to read and examine the classical writings of the church fathers and the **Hebrew and Greek texts.**This led to **questioning of church tradition and dogma** and ultimately to a **desire to reform **the church.This, then, led to a **separation **from the Roman church and the **birth of the Reformation** and Protestantism.An important figure during this time was Erasmus who believed the Vulgate possessed numerous translation errors and therefore published a Greek Text called the Novum Testamentum which was used by Lutehr, Calvin, and Tyndale.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What was the position of the Church in the Middle Ages conce",
      Question:
        "What was the position of the Church in the Middle Ages concerning tradition and authority?",
      Answer:
        "The church was the ultimate authority and any/ all teachings of the church and tradition is supreme.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "What was the relationship between dogmatics and exegesis dur",
      Question:
        "What was the relationship between dogmatics and exegesis during the Middle Ages?",
      Answer:
        "During the Middle Ages, the church used their**dogmatics **(systematic theology) to\t - **inform**,\t - **guide**, and\t - **direct their exegesis** so that the interpretation of Scripture would always be in alignment with and in support of their theology.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Why is the current usage of words in Scripture, at the time",
      Question:
        "Why is the current usage of words in Scripture, at the time of their writing, more important than their etymological meaning?",
      Answer:
        "The current meaning, usage, and context of the word used in Scripture has a direct impact of the meaning intended at the time it was written. If we fail to properly understand the context, we will miss the plain sense/ meaning of the phrase. Etymological studies can lead to what is know as the etymological fallacy where there original meaning of a word, or the meaning of the root of a word, influences and directs the meaning of all current and future usages of that word. For example, the English word  nice  no longer possesses its original Latin root meaning  ignorant . Another example can be the different contextual usage of the word  law  within Romans 3. Also, within this fallacy is the tendency to define all compound words but their components parts, e.g.  butter  and  fly .",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Why must we avoid developing doctrine on the basis of histor",
      Question:
        "Why must we avoid developing doctrine on the basis of historical narratives?",
      Answer:
        "It can limit the development of understanding Scripture in its totality.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Hermeneutics",
      Deck: "Why must we be careful in using historical narrative in the",
      Question:
        "Why must we be careful in using historical narrative in the establishment of doctrine?",
      Answer:
        "We must be careful because not all historical narrative can be seen as prescriptive. Sometimes it is descriptive. For example, we would not take the crossing of the Red Sea in a prescriptive sense in that we should drown all Egyptians.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "Amyraldism",
      Question: "What is Amyraldism?",
      Answer:
        'Amyraldism takes issue with limited atonement and replaces it with the concept of "**hypothetical universalism**," which asserts that Christ died for the sins of all people, but God only elected some to whom He would impart saving faith.By doing this, Amyraldism avoids some of the** problems that limited atonement** raises in the minds of some, while at the same time preserving the doctrine of unconditional election.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "Do you believe that there is anything man can do to restore",
      Question:
        "Do you believe that there is anything man can do to restore himself to a right redemptive relationship with God legally?",
      Answer:
        "No, even our best works are as filthy rags before the Lord. Isaiah 64:6.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "Doctine of Justification",
      Question:
        "What is the relationship of justification and sanctification and good works?",
      Answer:
        "Justification is the declaration that we are righteous and free from the guilt of sin, because we are justified, we are therefore sanctified and set apart unto God unto good works.\t - justification is a **legal declaration **that is **instantaneous**,\t - sanctification is a **process**.</ul>Though we are doing the **works**, it is God that is at work both within us to will and to do them such that He receives all glory for them.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "Doctrine",
      Question: "What is meant by sanctification?",
      Answer:
        'Sanctification is the setting apart from the world for God"s Holy purposes and the continuation walking before Him in holiness, putting to death the sin in our lives through obedience. Eph. 5:26, 27; 1 Thess. 5:23',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "Doctrine Justification",
      Question:
        "Explain the difference between justification and sanctification.",
      Answer:
        "(LC Q. 77) Although sanctification be inseparably joined with justification, yet they differ,\t - in that God in justification **imputeth **the righteousness of Christ;\t\t\t - in sanctification his Spirit **infuseth **grace, and enableth to the exercise thereof;\t</ul>\t\t - in the former, sin is **pardoned**;\t\t\t - in the other, it is **subdued**:\t</ul>\t\t - the one doth **equally free all believers** from the revenging wrath of God, and that perfectly in this life, that they never fall into condemnation;\t\t\t - the other is **neither equal in all**, nor in this life perfect in any, but growing up to perfection.\t</ul>\t</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "Doctrine of adoption",
      Question: "Explain the doctrine of adoption.",
      Answer:
        "(LC Q.74) Adoption is an act of the free grace of God, in and for his only Son Jesus Christ, whereby all those that are justified are received into the number of his children, have his name put upon them, the Spirit of his Son given to them, are under his fatherly care and dispensations, admitted to all the liberties and privileges of the sons of God, made heirs of all the promises, and fellow-heirs with Christ in glory.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "Doctrine of justification",
      Question: "Define the doctrine of justification?",
      Answer:
        "(WCF 11, LC Q.70) Justification is an act of God's free grace unto sinners, in which he pardoneth all their sins, accepteth and accounteth their persons righteous in his sight; not for anything wrought in them, or done by them, but only for the perfect obedience and full satisfaction of Christ, by God imputed to them, and received by faith alone.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "Doctrine of Justification",
      Question:
        'Explain how that "justification is by faith alone in Christ alone by grace alone".',
      Answer:
        "We rest on Jesus Christ and His righteousness by faith and in not in response to our works. It is Christ\"s work alone that we are declared to be righteous and free from guilt. The faith, through which we believe, is a gift of God's grace. Ephesians 2:8-9.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "How are we made partakers of the benefits Christ purchased f",
      Question:
        "How are we made partakers of the benefits Christ purchased for us?",
      Answer:
        "(LC Q.58) We are made partakers of the benefits which Christ hath procured, by the application of them unto us, which is the work especially of God the Holy Ghost.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "How is redemption applied?",
      Question: "How is redemption applied?",
      Answer:
        "(LC Q.59) Redemption is certainly applied, and effectually communicated, to all those for whom Christ hath purchased it; who are in time by the Holy Ghost enabled to believe in Christ according to the gospel.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "Sanctification",
      Question: "What are the positive activities in sanctification?",
      Answer:
        "The positive aspect of holiness involves the **living out** of the life of faith in the world without being part of it.It is not so much of feeling or an experience as a way of life that seeks to mirror in outlook and conduct the life of our Saviour.The positive side of sanctification involves what amounts the   ¦strengthening in all saving graces to the **practice of true holiness** ",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "What is meant by effectual calling?",
      Question: "What is meant by effectual calling?",
      Answer:
        "(LC Q.67) Effectual calling is the work of God's almighty power and grace, whereby (out of his free and special love to his elect, and from nothing in them moving him thereunto) he doth, in his accepted time, invite and draw them to Jesus Christ, by his word and Spirit; savingly enlightening their minds, renewing and powerfully determining their wills, so as they (although in themselves dead in sin) are hereby made willing and able freely to answer his call, and to accept and embrace the grace offered and conveyed therein.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "What is meant by perseverance of the saints?",
      Question: "What is meant by perseverance of the saints?",
      Answer:
        "(LC Q.79) True believers, by reason of the unchangeable love of God, and his decree and covenant to give them perseverance, their inseparable union with Christ, his continual intercession for them, and the Spirit and seed of God abiding in them, can neither totally nor finally fall away from the state of grace, but are kept by the power of God through faith unto salvation. (Phil 1:6)",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "What is meant by the external call of the Gospel and the int",
      Question:
        "What is meant by the external call of the Gospel and the internal call of the Gospel?",
      Answer:
        "(LC Q.68) All the elect, and they only, are effectually called; although others may be, and often are, outwardly called by the ministry of the word, and have some common operations of the Spirit; who, for their willful neglect and contempt of the grace offered to them, being justly left in their unbelief, do never truly come to Jesus Christ.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "What is the nature and extent of the atonement?",
      Question: "What is the nature and extent of the atonement?",
      Answer:
        "The nature is that it is full and complete, both certainly and effectually applied. It was vicariously applied on our behalf through the propitiation of Christ, satisfying the wrath of God thus righting the wrong done unto Him and reconciling both man and God. The extent of the atonement is such that it applies to the elect, to those whom the Father had given Him. (WCF 8.5).",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Soteriology",
      Deck: "What is the operation of the Holy Spirit in Salvation?",
      Question: "What is the operation of the Holy Spirit in Salvation?",
      Answer:
        "The Holy Spirit effects a quickening, a regeneration which gives the elect a new nature thus enabling them to believe.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question:
        "Define the following communicable attributes of God: goodness of God",
      Answer:
        "His essential property whereby He is altogether good, and does good. Ps. 119:68.It appears in (WPPS - Works, Providence, Patience, Love)<ol>\t - His **works**, Gen 1\t - His bouty and **provisions **to His creatures Ps 145:9\t - His **patience **and forebearance towards the wicked Rom 2:4\t - His **special love **and mercy towards His own, in choosing, redeeming, calling, pardoning, adopting, sactifying</ol>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question:
        "Define the following communicable attributes of God: holiness of God",
      Answer:
        'The quality of God that sets him utterly apart from his world, especially in terms of his purity and sanctity.And may be defined as that perfection of God, in virtue of which He eternally wills and maintains His own **M**oral excellence, **A**bhors sin, and **D**emands purity in his moral creatures. It is manifested and revealed in the moral law, implanted in man"s heart and given in God"s special revelation.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question:
        "Define the following communicable attributes of God: knowledge of God.",
      Answer:
        "Knowledge of God - The knowledge of God may be defined as that perfection of God whereby He, in an entirely unique manner, knows Himself and all things possible and actual in one eternal and most simple act. The Bible testifies to the knowledge of God abundantly, as, for instance, in 1 Sam. 2:3; Job 12:13; Ps. 94:9; 147:4; Isa. 29:15; 40:27, 28",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question:
        "Define the following communicable attributes of God: sovereignty of God.",
      Answer:
        "He is represented as the **Creator**, and His will as **the cause of all things** in virtue of His creative work heaven and earth and all that they contain belong to Him.He is** clothed with absolute authority** over the hosts of heaven and the inhabitants of the earth.He **upholds all things** with His almighty power, and **determines the ends** which they are destined to serve.**He rules as King in the most absolute sense **of the word, and all things are dependent on Him and subservient to Him.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question:
        "Define the following communicable attributes of God: spirituality of God.",
      Answer:
        "God is an immaterial substance, without flesh or bones, or body parts",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question:
        "Define the following communicable attributes of God: veracity of God.",
      Answer:
        "Essential property, whereby He is sincere and faithful, free from all falsehood and simmulation, from which the source of all truth flows.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question:
        "Define the following communicable attributes of God: wisdom of God.",
      Answer:
        "The essential property where by **one simple and eternal act**\t - He knoweth both **himself **and **all possible things perfectly**, and\t - according to which he\t\t\t - **maketh**,\t\t - **directeth**, and\t\t - **ordereth **<u>all future things for <em>His own glory</em></u><em>.</em>\t</ul>\t</ul>This wisdom of God is seen (**CPR**) particularly in **creation**, Ps. 19:1-7; 104:1-34; in **providence**, Ps. 33:10, 11; Rom. 8:28; and in **redemption**, Rom. 11:33; 1 Cor. 2:7; Eph. 3:10.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "Define the following incommunicable attributes:  infinity",
      Answer:
        "God is infinite, without measure, bounds, or limits  in regards of his being and perfection.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "Define the following incommunicable attributes: immutability.",
      Answer:
        "Immutability - God cannot change in His being, perfections, purposes, and promises.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question:
        "Define the following incommunicable attributes: self-existence.",
      Answer:
        "Self-existence - God is self-existent, that is, He has the ground of His existence in Himself, and exists by the necessity of His own Being.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "Explain the following attributes: Simplicity.",
      Answer:
        "Simplicity - Simplicity is one of the fundamental characteristics of God. This means not only that, as a spirit, He is not composed of different parts, but also that His essence and properties are one. The being of God is not something existing by itself, to which His attributes are added; the whole of His essence is in each one of the attributes. Neither is God capable of division or of being increased or decreased.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "Explain the following communicable attributes: Omnipotence",
      Answer:
        'Omnipotence - The attribute that refers to God"s ability to do whatever is consistent with God"s own character and being in effecting the divine plan for creation. God"s omnipotence is primarily demonstrated in God"s overturning evil for good. This is especially evident in the death of Jesus, which although it was the act of malicious people, has become God"s means of human salvation.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "Explain the following communicable attributes: Omnipresence",
      Answer:
        'Omnipresence - The attribute that refers to God"s being present everywhere in creation at the same time.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "Explain the following communicable attributes: Omniscience",
      Answer:
        'Omniscience - The attribute that denotes God"s knowing all things. Omniscience means that all events are present to the divine mind; that is, God has direct cognition of everything in creation.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "Explain the following communicable attributes: Righteousness.",
      Answer:
        'Righteousness - An attribute of God"s being; God"s\t - **right **and **just character**, **actions **and **judgments**.</ul>God"s righteousness as understood in a covenantal context includes God"s\t - right **judgment **of both God"s **own** people\t - and those who **oppress **them,\t - as well as God"s **salvation and mercy** extended to those to whom the covenanting God has promised to be faithful.</ul>',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "The attributes of God are of two types, what are they?",
      Answer: "<ol>\t - Communicable and\t - Incommunicable.</ol>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "What do we mean by communicable attributes?",
      Answer:
        "Those divine attributes of God which, in some limited sense, can be found in man. Although all the attributes of God are truly incommunicable, being infinite, eternal, and unchangeable in each one, man can, in some limited measure, show mercy and goodness and justice and love. communicable (of which there is some appearance or certain faint vestiges in creatures) and by simple analogy of name and effects. Such are the affirmative attributes which are attributed to God by way of eminence or causality.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "What do we mean by the incommunicable attributes of God?",
      Answer:
        "those attributes can properly be called incommunicable strictly and in every way, which are so proper to God that nothing similar or analogous, or any image and trace can be found in creatures.Such are the negative attributes which remove from him whatever is imperfect in creatures (such as infinity, immensity, eternity, which are such that every creature is either without them or has their contraries).**Those divine attributes of God which cannot be found in man but belong to God alone**. Examples can be found in the Shorter Catechism where it describes God as a   spirit, infinite, eternal, and unchangeable in His being.. ",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question: "What is meant by the 'incomprehensibility of God'.",
      Answer:
        "Incomprehensibility means that God cannot be fully known. He is beyond measure or definition. Job 11:7",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Attributes of God",
      Question:
        "What is the true source and method for determining the attributes of God?",
      Answer: "The Scriptures and the illumination of the Spirit",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Creation",
      Question: "What is the Bible's teaching of creationism?",
      Answer:
        "The work of creation is that wherein God id in the beginning, by the word of His power, make of nothing the world, and all things therein, for Himself, within the space of six days and all very good. Gen 1, Heb 11, Prov 16:4",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Creation",
      Question:
        "What is the Day-Age theory of creation and what does it teach about the existence of the universe?",
      Answer:
        "The Day-Age theory of creation teaches that each day of creation as described in Genesis corresponds to much longer periods of time and not approximately 24 hour days. The periods of time could range from thousands to billions of years and therefore the universe could be billions of years old.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Creation",
      Question:
        "What is the Framework Hypothesis theory and what does it teach about the existence of the universe?",
      Answer:
        "The Framework Hypothesis attempts to teach the creation story of Genesis is not to be taken literally but rather figuratively. It is teaching that God generally created all things but not necessarily within in time constraints or order but could have occurred during any period of time and even in overlapping periods.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Creation",
      Question:
        "What is theistic evolution and what does it teach about the existence of the universe?",
      Answer:
        "Theistic evolution is the attempt to accommodate or harmonize the Word of God to the theory of evolution. Some try to explain that God provided all the necessary elements for evolution; others say He directed evolution.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Divine Decree",
      Question: "Define infralapsarianism.",
      Answer:
        'Infralapsarianism, on the other hand, insists that God"s **decree to save is **l**ogically after** his decrees related to creation and fall (infra meaning  below  or  after ).The infralapsarian view tends to reflect God as tender and merciful to fallen man and just to the reprobate otherwise, the argument is that Supra reflects God as being arbitrary towards His election.Also know as the **historical principal**.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Divine Decree",
      Question: "Define supralapsarian.",
      Answer:
        'Supralapsarianism ”supra meaning  above  or  before  and lapsum meaning  fall  ”is the position which holds that God"s **decree to save is logically prior** to his decree to create the world and permit the fall.  Also know as the **logical **order.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Divine Decree",
      Question: "How do the divine decrees relate to time and history?",
      Answer:
        "They are eternal, unchangeable, and appointed because God knows all things that shall come to pass but not because He foresaw it as a future event.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Divine Decree",
      Question:
        "What is meant by divine decrees? and why is it really only one decree?",
      Answer:
        'God"s decrees are the wise, free, and holy acts of the counsel of His will, whereby, from all eternity, He hath, for His own glory, unchangeably foreordained whatsoever comes to pass in time, especially concerning angels and men. (LC Q.10)',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Divine Decree",
      Question: "What is supralapsarian and infralapsarianism?",
      Answer:
        "The question is, whether in the plan of God the decrees of election and reprobation precede or follow the decrees to create the world and to permit the fall.  Specifically, which is logically prior: the decree of election and reprobation, or the decree to create the world and permit the fall?Supralapsarian (**Logical **Order) has the decrees of election and reprobation occur before and infralapsarianism (**Historical **Principal) occurs after.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Divine Decree",
      Question: "Why is it considered that there is only one divine decree?",
      Answer:
        "It is really one decree because they all lead to the praise of His glory - to either the praise of His glorious grace through the salvation of man or to the praise of His glorious justice through the passing over and foreordaining those to dishonor. (LC Q. 13)",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Evolution",
      Question:
        "What is evolution and what does it teach about the existence of the universe?",
      Answer:
        "The theory that different kinds of living organisms are thought to have developed an diversified over a prolonged period of time from a single common ancestor.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Evolution",
      Question: "Why do we reject the Day-Age theory of creation?",
      Answer:
        "It minimizes the authority of scripture by trying to harmonize it with scientific theories. The book of Genesis describes creation between fixed periods of time blocked by  morning  and  evening  and then institutes the Sabbath day for observance - the 7th day of the week on which God rested after creating during the first 6th days. This concept of a 7 day week is carried into Exodus and further in the Bible.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Evolution",
      Question: "Why do we reject the teaching of evolution?",
      Answer:
        "We reject it because it is\t - **contrary to the Word of God** wherein\t\t\t - He is the author and creator of all things.\t</ul>\t\t - It also **strips man of the special dignity and blessing** that comes with being made in the** image of God.**\t - It tries to **rob God of the glory **that His creatures are due to give Him.</ul>",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Evolution",
      Question: "Why do we reject the teaching of theistic evolution?",
      Answer:
        "It contradicts the teaching of Scripture as well as introduces an issue with the existence of death. For Adam to have evolved, there would have required the existence of death before sin entered the world. But Scripture says that by the sin of one man, death entered. Romans 5:12. Further, it calls into question the veracity of Scripture and which sections should be trusted and which should not.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Figure of Speech",
      Question: "What is an anthropomorphism?",
      Answer:
        "The attribution of human characteristics to God.\t - For example, God walks  in the cool of the day  (Gen. 3:8).</ul> morph  ->** takes the form of a body part**",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Figure of Speech",
      Question: "What is an anthropopathism?",
      Answer:
        "Those numerous occasions when God manifests **human emotions** such as pity or anger (e.g., Hos. 1:6-7; 8:5). papth  -> empathy",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Liberation theology",
      Question: "What is the theological teaching of liberation theology?",
      Answer:
        "liberation theology is a movement that attempts to interpret Scripture through the plight of the poor. True followers of Jesus, according to liberation theology, must work toward a just society, bring about social and political change, and align themselves with the working class. Jesus, who was poor Himself, focused on the poor and downtrodden, and any legitimate church will give preference to those who have historically been marginalized or deprived of their rights. All church doctrine should grow out of the perspective of the poor. Defending the rights of the poor is seen as the central aspect of the gospel.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Liberation Theology",
      Question:
        "What is the view held by liberation theology concerning the authority of Scripture?",
      Answer:
        "The authority of Scripture is interpreted through the lens of a particular ethnic, economic, political, or social condition and therefore Scripture is subservient.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Names of God",
      Question: "What do the following names for God mean: Adonai?",
      Answer:
        'Adonai -  **Lord**  (Genesis 15:2;  Judges 6:15) - **used in place of YHWH**, which was thought by the Jews to be too sacred to be uttered by sinful men.In the Old Testament, YHWH is more often used in God"s dealings with His people, while  Adonai  is used more **when He deals with the Gentiles**.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Names of God",
      Question: "What do the following names for God mean: Elohim?",
      Answer:
        "Elohim -   God  Creator, Mighty and Strong El -> Godohim -> **Mighty &amp; Strong**(Genesis 17:7;  Jeremiah 31:33) - the plural form of **Eloah**, which accommodates the doctrine of the **Trinity**",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Names of God",
      Question: "What do the following names for God mean: El-Shaddai?",
      Answer:
        'El Shaddai -  God Almighty, El -> **God**Shaddai -> **Mighty** The Mighty One of Jacob  (Genesis 49:24; Psalm 132:2,5) - speaks to God"s ultimate power over all',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Names of God",
      Question: "What do the following names for God mean: Kurios?",
      Answer:
        "Kurios - it is used for Christ and God, equivalent to  Adoni  meaning Lord",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Names of God",
      Question: "What do the following names for God mean: Pater?",
      Answer: "Pater - Father",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Names of God",
      Question: "What do the following names for God mean: Theos?",
      Answer: "Theos - God",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Names of God",
      Question: "What do the following names for God mean: Yahweh?",
      Answer:
        "Yahweh - It is especially in the name Yahweh, It has always been regarded as the most sacred and the most distinctive name of God",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Sanctification",
      Question: "What are the negative activities in sanctification?",
      Answer:
        'The negative aspect has to do with **separation **from all those activities that defile and pollute us.For example, 2 Corinthians 6:17 "Come out from among them, and be ye separate, saith of the Lord, and touch not the unclean thing; and I will receive you."   ¦the mortification of several lusts ',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Theistic Proofs",
      Question:
        "Explain the existence of God as taught by the following: Classical method of apologetics?",
      Answer:
        "Classical - also know as  Teleological  or  Rational  argues for the existence of God based on the seemingly purposeful order of the universe and that there must be a  Master Architect . It is often heard in the argument for the existence of God based on the observation that all species were apparently designed.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Theistic Proofs",
      Question:
        "Explain the existence of God as taught by the following: Empirical method of apologetics?",
      Answer:
        'Empirical - belief that God"s existence can be proven through internal experience (thoughts, emotions) or external experience (sight, smell, touch, hearing, taste).',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Theistic Proofs",
      Question:
        "Explain the existence of God as taught by the following: Presuppositional method of apologetics?",
      Answer:
        'We don"t. We start with the presupposition that He does exist and then point to creation and the knowledge written in our hearts/ mind testifying to His existence.The existence of God does not need to be proven but the starting point in that He does exist and that human experience makes sense on when viewed in the light of God"s existence',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Theistic Proofs",
      Question: "What are the Cosmological theistic proofs of God's existence?",
      Answer:
        "Cosmological - A family of arguments for the existence of God that postulate God's existence as the ultimate cause or ground or explanation of the cosmos.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Theistic Proofs",
      Question: "What are the Moral theistic proofs of God's existence?",
      Answer:
        'Moral - The argument first used by Immanuel Kant, which claims that morality (humans" seeking the  highest good ) presupposes the existence of God, who is both the lawgiver and the judge who will reward humankind"s moral striving. More recently, C. S. Lewis offered a revision of the moral argument.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Theistic Proofs",
      Question: "What are the Ontological theistic proofs of God's existence?",
      Answer:
        'Ontological - A classical argument for God\'s existence holding that the concept of God entails the real existence of God. It was first elaborated by St *Anselm, who urged that God must exist since "God" means "that than which nothing greater can be conceived" (id quo nihil majus cogitari posit) and since nothing lacking extra-mental existence could be that than which nothing greater can be conceived.',
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Theistic Proofs",
      Question: "What are the Teleological theistic proofs of God's existence?",
      Answer:
        "Teleological - An argument for the existence of God that takes as its starting point the purposive (teleological) character of the universe. The argument is often termed  the argument from design  and comes in many different versions.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Theistic Proofs",
      Question: "What are the theistic proofs of God's existence?",
      Answer:
        "Arguments for the existence of God, as God is understood by theists. (See theism.) Such arguments may be intended as proofs or merely as arguments that confirm or increase the probability or plausibility of belief that God exists. Some of the most important theistic arguments include the ontological argument, the cosmological argument, the teleological argument and the moral argument.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Theistic Proofs",
      Question:
        "Which method(s) explaining the existence of God do you accept or reject and why? (Emerical, Presuppostional, Classical)",
      Answer: "Presupppositional",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Trinity",
      Question:
        "Defend the term Trinity from NT Scripture as to its ontological nature?",
      Answer:
        "New Testament: Baptism of Jesus Luke 3:21,22; Great Commission Matt 28:19, 1 John 5:7",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Trinity",
      Question:
        "Defend the term Trinity from OT Scripture as to its ontological nature?",
      Answer:
        "Old Testament: Genesis 1:26, 11:7; Spirit is spoken of as a distinct person Isa 48:16; Angel of the Lord is a divine person Genesis 16:7-13",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Trinity",
      Question: "Explain the roles of the person of the Father in the Godhead.",
      Answer:
        "The Father is the first person of the Trinity, appoints people unto election, and eternally generates the Son and send the Spirit but it neither generated nor sent.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Trinity",
      Question: "Explain the roles of the person of the Son in the Godhead.",
      Answer:
        "The Son is the second person of the Trinity, redeems and mediates for those whom the Father elects, and is eternally generated by the Father and sends the Spirit.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Trinity",
      Question: "Explain the roles of the person of the Spirit in the Godhead.",
      Answer:
        "The Spirit is the third member of the Trinity, regenerates, instructs, leads, and illuminates those whom the Father has elected and the Son redeemed. The Spirit proceeds from both the Father and the Son.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Trinity",
      Question:
        "What does the term Trinity mean and defend it from Scripture as to its ontological nature?",
      Answer:
        "The term is used to communicate that God exists three persons that are one true, eternal God; the same in substance, equal in power and glory, although distinguished by the person properties of each. (LC Q.9): The Father, The Son, and The Holy Spirit. Also look at LC Q.11",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Trinity",
      Question: "What is meant by economical Trinity?",
      Answer:
        "The economy of salvation refers to the manifestation of the three persons of the Trinity and their relationship to the world, particularly in the outworking of salvation (also known as the economical trinity).The economical aspect has reference to the\t - **creational**,\t - **providential **and\t - **historico-redemptive work** of the Trinity,</ul>in which there is **a certain historical order and temporary subordination** among the Persons in terms **of their work in bringing salvation**.In this respect, the Father is **first**, the Son **second**, and the Holy Spirit **third**.Yet in the ultimate sense, this historical order does not mean that there is any antecedent inequality among the Persons of the Triune Being.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Trinity",
      Question: "What is meant by ontological Trinity?",
      Answer:
        "The ontological aspect refers to the eternal character of the Holy Trinity, antecedent to all creational and redemptive history, and in their ontology or Being, there is absolute and eternal equality",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "What does the Bible teach about the creation of the spiritua",
      Question:
        "What does the Bible teach about the creation of the spiritual world?",
      Answer:
        "It is not precisely clear when the spiritual world was created. Job 38:7 tells us the angels rejoiced when the stars were created on Day 4. Colossians 1:16 does tell us that the angels were created by God. They were created with a free will to choose sin (Isaiah 14:13-14) and to praise His name (Psalm 103:20,21)",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "What does the confession mean when it talks about secondary",
      Question:
        "What does the confession mean when it talks about secondary causes?",
      Answer:
        "That God causes all things to come to pass immutably and infallibly; yet, by the same providence, he orders them to fall out, according to the nature of second causes, either necessarily, freely, or contingently. (WC #5, Section 2) He could have been the primary and only cause of all effects but He so chose to govern the world with patterns and regularities where some events or actions cause other events or actions. This does not imply deism but that God immediately wills and governs all things according to His will without violating the free will of His creatures.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "What is meant by the term common grace? What is your positio",
      Question:
        "What is meant by the term common grace? What is your position?",
      Answer:
        "Common Grace is the grace God gives to creation as a whole, to the just and unjust.In this universal** non-salvific** form of grace, God allows the sun to shine upon both the righteous and the unrighteous. God endures for the sake of those who would believe.Psalm 145 -\t - God** sheds his goodness on all** mankind and all that He created\t - He **restrains evil and it's effects** from the 4 corners of the earth **along with His wrath**</ul>His justice and wrath and are therefore **justified **because man did not glorify God with the knowledge and goodness He exhibited (Romans 1)",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "What is meant when we say man is made in the image of God as",
      Question:
        "What is meant when we say man is made in the image of God as defined by the Westminster Confession?",
      Answer:
        "That man is created as a reasonable and immortal soul, endued with knowledge, righteousness and true holiness after His image. Being thus endued and knowing right from wrong, he is therefore required to choose righteousness and glorify His creator.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "What must one know to be a faithful preacher?",
      Question: "What must one know to be a faithful preacher?",
      Answer:
        "To be a faithful preacher, you must know the truth. Paul was  a teacher of the Gentiles in faith and truth  (1 Timothy 2:7). When Paul preached, he spoke the truth. The world already has too many men who preach lies. So please do not preach unless you preach the truth.  If anyone speaks, let him speak as the oracles of God  (1 Peter 4:11).  He who has My word, let him speak My word faithfully  (Jeremiah 23:28).",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "What role in history has been ascribed to Mary the Mother of",
      Question:
        "What role in history has been ascribed to Mary the Mother of Jesus by the Roman Catholics and how does that differ from the Protestant view?",
      Answer:
        "Mary has been deemed to be saint to whom Roman Catholics should offer prayer and adoration, that is, she has become an idol. She is treated as a protector and as a mediator and intercessor. Also attributed to Mary is the doctrine of  immaculate conception  which teaches that Mary was born without and preserved from sin. It is taught that she remained perpetually a virgin and that her body did not see corruption upon death but became a heavenly body.",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Who may do the work of evangelism?",
      Question: "Who may do the work of evangelism?",
      Answer:
        "Only those who have been appointed by Christ and confirmed by the church. Ephesians 4:7-13",
    },
    {
      Subject: "RPCGA Licensure",
      Topic: "Theology Proper",
      Deck: "Who may preach the gospel?",
      Question: "Who may preach the gospel?",
      Answer:
        "\"How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them? And how can they preach unless they are sent? As it is written, 'How beautiful are the feet of those who bring good news!' But not all Israelites accepted the good news.  Romans 10:14-15",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter I. Of  the Holy Scripture.",
      Question: "What is Section 1?",
      Answer:
        "I. Although the light of nature and the works of creation and providence do so far manifest the goodness, wisdom, and power of God, as to leave men unexcusable;(a) yet are they not sufficient to give that knowledge of God and of His will, which is necessary unto salvation.(b) Therefore it pleased the Lord, at sundry times, and in divers manners, to reveal Himself, and to declare that His will unto His Church;(c) and afterwards, for the better preserving and propagating of the truth, and for the more sure establishment and comfort of the Church against the corruption of the flesh, and the malice of Satan and of the world, to commit the same wholly unto writing:(d) which maketh the Holy Scripture to be most necessary;(e) those former ways of God’s revealing His will unto His people being now ceased.(f)<br \\><br \\>(a) Rom. 2:14, 15; Rom. 1:19, 20; Ps. 19:1, 2, 3; Rom. 1:32, with chap. 2:1.<br \\>(b) I Cor. 1:21; I Cor. 2:13, 14.<br \\>(c) Heb. 1:1.<br \\>(d) Prov. 22:19, 20, 21; Luke 1:3, 4; Rom. 15:4; Matt. 4:4, 7, 10; Isa. 8:19, 20.<br \\>(e) II Tim. 3:15; II Pet. 1:19.<br \\>(f) Heb. 1:1, 2",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter I. Of  the Holy Scripture.",
      Question: "What is Section 2?",
      Answer:
        "II. Under the name of Holy Scripture, or the Word of God written, are now contained all the books of the Old and New Testament, which are these:<br \\><br \\>Of the Old Testament:<br \\>Genesis<br \\>Exodus<br \\>Leviticus<br \\>Numbers<br \\>Deuteronomy<br \\>Joshua<br \\>Judges<br \\>Ruth<br \\>I. Samuel<br \\>II. Samuel<br \\>I. Kings<br \\>II. Kings<br \\>I. Chronicles<br \\>II. Chronicles<br \\>Ezra<br \\>Nehemiah<br \\>Esther<br \\>Job<br \\>Psalms<br \\>Proverbs<br \\>Ecclesiastes<br \\>The Song of Songs<br \\>Isaiah<br \\>Jeremiah<br \\>Lamentations<br \\>Ezekiel<br \\>Daniel<br \\>Hosea<br \\>Joel<br \\>Amos<br \\>Obadiah<br \\>Jonah<br \\>Micah<br \\>Nahum<br \\>Habakkuk<br \\>Zephaniah<br \\>Haggai<br \\>Zechariah<br \\>Malachi<br \\><br \\>Of the New Testament:<br \\>The Gospels according to<br \\>Matthew<br \\>Mark<br \\>Luke<br \\>John<br \\>The Acts of the Apostles<br \\>Paul’s Epistles<br \\>To the Romans<br \\>Corinthians I.<br \\>Corinthians II.<br \\>Galatians<br \\>Ephesians<br \\>Philippians<br \\>Colossians<br \\>Thessalonians I.<br \\>Thessalonians II.<br \\>To Timothy I.<br \\>To Timothy II.<br \\>To Titus<br \\>To Philemon<br \\>The Epistle to the Hebrews<br \\>The Epistle of James<br \\>The first and second Epistles of Peter<br \\>The first, second, and third Epistles of John<br \\>The Epistle of Jude<br \\>The Revelation of John<br \\><br \\>All which are given by inspiration of God, to be the rule of faith and life.(g)<br \\><br \\>(g) Luke 16:29, 31; Eph. 2:20; Rev. 22:18, 19; II Tim. 3:16",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter I. Of  the Holy Scripture.",
      Question: "What is Section 3?",
      Answer:
        "III. The books commonly called Apocrypha, not being of divine inspiration, are no part of the canon of the Scripture; and therefore are of no authority in the Church of God, nor to be any otherwise approved, or made use of, than other human writings.(h)<br \\><br \\>(h) Luke 24:27, 44; Rom. 3:2; II Pet. 1:21",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter I. Of  the Holy Scripture.",
      Question: "What is Section 4?",
      Answer:
        "IV. The authority of the Holy Scripture, for which it ought to be believed and obeyed, dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth itself) the author thereof: and therefore it is to be received because it is the Word of God.(i)<br \\><br \\>(i) II Pet. 1:19, 21; II Tim. 3:16; I John 5:9; I Thess. 2:13",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter I. Of  the Holy Scripture.",
      Question: "What is Section 5?",
      Answer:
        "V. We may be moved and induced by the testimony of the Church to a high and reverent esteem of the Holy Scripture.(k) And the heavenliness of the matter, the efficacy of the doctrine, the majesty of the style, the consent of all the parts, the scope of the whole (which is, to give all glory to God), the full discovery it makes of the only way of man’s salvation, the many other incomparable excellencies, and the entire perfection thereof, are arguments whereby it doth abundantly evidence itself to be the Word of God: yet notwithstanding, our full persuasion and assurance of the infallible truth and divine authority thereof, is from the inward work of the Holy Spirit bearing witness by and with the Word in our hearts.(l)<br \\><br \\>(k) I Tim. 3:15.<br \\>(l) I John 2:20, 27; John 16:13, 14; I Cor. 2:10, 11, 12; Isa. 59:21",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter I. Of  the Holy Scripture.",
      Question: "What is Section 6?",
      Answer:
        "VI. The whole counsel of God concerning all things necessary for His own glory, man’s salvation, faith, and life, is either expressly set down in Scripture, or by good and necessary consequence may be deduced from Scripture: unto which nothing at any time is to be added, whether by new revelations of the Spirit, or traditions of men.(m) Nevertheless we acknowledge the inward illumination of the Spirit of God to be necessary for the saving understanding of such things as are revealed in the Word:(n) and that there are some circumstances concerning the worship of God, and government of the Church, common to human actions and societies, which are to be ordered by the light of nature and Christian prudence, according to the general rules of the Word, which are always to be observed.(o)<br \\><br \\>(m) II Tim. 3:15, 16, 17; Gal. 1:8, 9; II Thess. 2:2.<br \\>(n) John 6:45, I Cor. 2:9 to 12.<br \\>(o) I Cor. 11:13, 14; I Cor. 14:26, 40",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter I. Of  the Holy Scripture.",
      Question: "What is Section 7?",
      Answer:
        "VII. All things in Scripture are not alike plain in themselves, nor alike clear unto all:(p) yet those things which are necessary to be known, believed, and observed for salvation, are so clearly propounded and opened in some place of Scripture or other, that not only the learned, but the unlearned, in a due use of the ordinary means, may attain unto a sufficient understanding of them.(q)<br \\><br \\>(p) II Pet. 3:16.<br \\>(q) Psalm 119:105, 130",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter I. Of  the Holy Scripture.",
      Question: "What is Section 8?",
      Answer:
        "VIII. The Old Testament in Hebrew (which was the native language of the people of God of old), and the New Testament in Greek (which, at the time of the writing of it was most generally known to the nations), being immediately inspired by God, and, by His singular care and providence kept pure in all ages, are therefore authentical;(r) so as, in all controversies of religion, the Church is finally to appeal unto them.(s) But, because these original tongues are not known to all the people of God, who have right unto, and interest in the Scriptures, and are commanded, in the fear of God, to read and search them,(t) therefore they are to be translated into the vulgar language of every nation unto which they come,(u) that the Word of God dwelling plentifully in all, they may worship Him in an acceptable manner;(w) and, through patience and comfort of the Scriptures, may have hope.(x)<br \\><br \\>(r) Matt. 5:18.<br \\>(s) Isa. 8:20; Acts 15:15; John 5:39, 46.<br \\>(t) John 5:39.<br \\>(u) I Cor. 14:6, 9, 11, 12, 24, 27, 28.<br \\>(w) Col. 3:16.<br \\>(x) Rom. 15:4",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter I. Of  the Holy Scripture.",
      Question: "What is Section 9?",
      Answer:
        "IX. The infallible rule of interpretation of Scripture is the Scripture itself: and therefore, when there is a question about the true and full sense of any Scripture (which is not manifold, but one), it must be searched and known by other places that speak more clearly.(y)<br \\><br \\>(y) II Pet. 1:20, 21; Acts 15:15, 16",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter I. Of  the Holy Scripture.",
      Question: "What is Section 10?",
      Answer:
        "X. The supreme judge by which all controversies of religion are to be determined, and all decrees of councils, opinions of ancient writers, doctrines of men, and private spirits, are to be examined; and in whose sentence we are to rest; can be no other but the Holy Spirit speaking in the Scripture.(z)<br \\><br \\>(z) Matt. 22:29, 31; Eph. 2:20 with Acts 28:25.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter II. Of  God, and of the Holy Trinity.",
      Question: "What is Section 1?",
      Answer:
        "I. There is but one only,(a) living, and true God:(b) who is infinite in being and perfection,(c) a most pure spirit,(d) invisible,(e) without body, parts,(f) or passions,(g) immutable,(h) immense,(i) eternal,(k) incomprehensible,(l) almighty,(m) most wise,(n) most holy,(o) most free,(p) most absolute,(q) working all things according to the counsel of His own immutable and most righteous will,(r) for His own glory;(s) most loving,(t) gracious, merciful, long-suffering, abundant in goodness and truth, forgiving iniquity, transgression, and sin;(u) the rewarder of them that diligently seek Him;(w) and withal, most just and terrible in His judgments,(x) hating all sin,(y) and who will by no means clear the guilty.(z)<br \\><br \\>(a) Deut. 6:4; I Cor. 8:4, 6.<br \\>(b) I Thess. 1:9; Jer. 10:10.<br \\>(c) Job 11:7, 8, 9; Job 26:14.<br \\>(d) John 4:24.<br \\>(e) I Tim. 1:17.<br \\>(f) Deut. 4:15, 16; John 4:24, with Luke 24:39.<br \\>(g) Acts 14:11, 15.<br \\>(h) James 1:17; Mal. 3:6.<br \\>(i) I Kings 8:27; Jer. 23:23, 24.<br \\>(k) Ps. 90:2; I Tim. 1:17.<br \\>(l) Ps. 145:3.<br \\>(m) Gen. 17:1; Rev. 4:8.<br \\>(n) Rom. 16:27.<br \\>(o) Isa. 6:3; Rev. 4:8.<br \\>(p) Ps. 115:3.<br \\>(q) Exod. 3:14.<br \\>(r) Eph. 1:11.<br \\>(s) Prov. 16:4; Rom. 11:36.<br \\>(t) I John 4:8, 16.<br \\>(u) Exod. 34:6, 7.<br \\>(w) Heb. 11:6.<br \\>(x) Neh. 9:32, 33.<br \\>(y) Ps. 5:5, 6.<br \\>(z) Nah. 1:2, 3; Exod. 34:7",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter II. Of  God, and of the Holy Trinity.",
      Question: "What is Section 2?",
      Answer:
        "II. God hath all life,(a) glory,(b) goodness,(c) blessedness,(d) in and of Himself; and is alone in and unto Himself all-sufficient, not standing in need of any creatures which He hath made,(e) nor deriving any glory from them,(f) but only manifesting His own glory in, by, unto, and upon them: He is the alone fountain of all being, of whom, through whom, and to whom are all things;(g) and hath most sovereign dominion over them, to do by them, for them, or upon them whatsoever Himself pleaseth.(h) In His sight all things are open and manifest;(i) His knowledge is infinite, infallible, and independent upon the creature,(k) so as nothing is to Him contingent, or uncertain.(l) He is most holy in all His counsels, in all His works, and in all His commands.(m) To Him is due from angels and men, and every other creature, whatsoever worship, service, or obedience He is pleased to require of them.(n)<br \\><br \\>(a) John 5:26.<br \\>(b) Acts 7:2.<br \\>(c) Ps. 119:68.<br \\>(d) I Tim. 6:15; Rom. 9:5.<br \\>(e) Acts 17:24, 25.<br \\>(f) Job 22:2, 3.<br \\>(g) Rom 11:36.<br \\>(h) Rev. 4:11; I Tim. 6:15; Dan. 4:25, 35.<br \\>(i) Heb. 4:13.<br \\>(k) Rom. 11:33, 34; Ps. 147:5.<br \\>(l) Acts 15:18; Ezek. 11:5.<br \\>(m) Ps. 145:17; Rom. 7:12.<br \\>(n) Rev. 5:12, 13, 14",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter II. Of  God, and of the Holy Trinity.",
      Question: "What is Section 3?",
      Answer:
        "III. In the unity of the Godhead there be three persons, of one substance, power, and eternity; God the Father, God the Son, and God the Holy Ghost.(o) The Father is of none, neither begotten, nor proceeding: the Son is eternally begotten of the Father:(p) the Holy Ghost eternally proceeding from the Father and the Son.(q)<br \\><br \\>(o) I John 5:7; Matt. 3:16, 17; Matt. 28:19; II Cor. 13:14.<br \\>(p) John 1:14, 18.<br \\>(q) John 15:26; Gal. 4:6.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter III. Of  God’s Eternal Decree.",
      Question: "What is Section 1?",
      Answer:
        "I. God from all eternity did, by the most wise and holy counsel of His own will, freely, and unchangeably ordain whatsoever comes to pass:(a) yet so, as thereby neither is God the author of sin,(b) nor is violence offered to the will of the creatures, nor is the liberty or contingency of second causes taken away, but rather established.(c)<br \\><br \\>(a) Eph. 1:11; Rom. 11:33; Heb. 6:17; Rom. 9:15, 18.<br \\>(b) Jam. 1:13, 17; I John 1:5.<br \\>(c) Acts 2:23; Matt. 17:12; Acts 4:27, 28; John 19:11; Prov. 16:33",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter III. Of  God’s Eternal Decree.",
      Question: "What is Section 2?",
      Answer:
        "II. Although God knows whatsoever may or can come to pass upon all supposed conditions,(d) yet hath He not decreed anything because He foresaw it as future, or as that which would come to pass upon such conditions.(e)<br \\><br \\>(d) Acts 15:18; I Sam. 23:11, 12; Matt. 11:21, 23.<br \\>(e) Rom. 9:11, 13, 16, 18",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter III. Of  God’s Eternal Decree.",
      Question: "What is Section 3?",
      Answer:
        "III. By the decree of God, for the manifestation of His glory, some men and angels(f) are predestinated unto everlasting life, and others fore-ordained to everlasting death.(g)<br \\><br \\>(f) I Tim. 5:21; Matt. 25:41.<br \\>(g) Rom. 9:22, 23; Eph. 1:5, 6; Prov. 16:4",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter III. Of  God’s Eternal Decree.",
      Question: "What is Section 4?",
      Answer:
        "IV. These angels and men, thus predestinated, and fore-ordained, are particularly and unchangeably designed, and their number so certain and definite, that it cannot be either increased or diminished.(h)<br \\><br \\>(h) II Tim. 2:19; John 13:18",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter III. Of  God’s Eternal Decree.",
      Question: "What is Section 5?",
      Answer:
        "V. Those of mankind that are predestinated unto life, God, before the foundation of the world was laid, according to His eternal and immutable purpose, and the secret counsel and good pleasure of His will, hath chosen, in Christ, unto everlasting glory,(i) out of His mere free grace and love, without any foresight of faith or good works, or perseverance in either of them, or any other thing in the creature, as conditions, or causes moving Him thereunto:(k) and all to the praise of His glorious grace.(l)<br \\><br \\>(i) Eph. 1:4, 9, 11; Rom. 8:30; II Tim. 1:9; I Thess. 5:9.<br \\>(k) Rom. 9:11, 13, 16; Eph. 1:4, 9.<br \\>(l) Eph. 1:6, 12",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter III. Of  God’s Eternal Decree.",
      Question: "What is Section 6?",
      Answer:
        "VI. As God hath appointed the elect unto glory, so hath He, by the eternal and most free purpose of His will, fore-ordained all the means thereunto.(m) Wherefore they who are elected, being fallen in Adam, are redeemed by Christ,(n) are effectually called unto faith in Christ by His Spirit working in due season, are justified, adopted, sanctified,(o) and kept by His power through faith, unto salvation.(p) Neither are any other redeemed by Christ, effectually called, justified, adopted, sanctified, and saved, but the elect only.(q)<br \\><br \\>(m) I Pet. 1:2; Eph. 1:4, 5; Eph. 2:10; II Thess. 2:13.<br \\>(n) I Thess. 5:9, 10; Titus 2:14.<br \\>(o) Rom. 8:30; Eph. 1:5; II Thess. 2:13.<br \\>(p) I Pet. 1:5.<br \\>(q) John 17:9; Rom. 8:28 to the end; John 6:64, 65; John 10:26; John 8:47; I John 2:19",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter III. Of  God’s Eternal Decree.",
      Question: "What is Section 7?",
      Answer:
        "VII. The rest of mankind God was pleased, according to the unsearchable counsel of His own will, whereby He extendeth or withholdeth mercy, as He pleaseth, for the glory of His sovereign power over His creatures, to pass by; and to ordain them to dishonour and wrath, for their sin, to the praise of His glorious justice.(r)<br \\><br \\>(r) Matt. 11:25, 26; Rom. 9:17, 18, 21, 22; II Tim. 2:19, 20; Jude ver. 4; I Pet. 2:8",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter III. Of  God’s Eternal Decree.",
      Question: "What is Section 8?",
      Answer:
        "VIII. The doctrine of this high mystery of predestination is to be handled with special prudence and care,(s) that men attending the will of God revealed in His Word, and yielding obedience thereunto, may, from the certainty of their effectual vocation, be assured of their eternal election.(t) So shall this doctrine afford matter of praise, reverence, and admiration of God,(u) and of humility, diligence, and abundant consolation to all that sincerely obey the Gospel.(w)<br \\><br \\>(s) Rom. 9:20; Rom. 11:33; Deut. 29:29.<br \\>(t) II Pet. 1:10.<br \\>(u) Eph. 1:6; Rom. 11:33.<br \\>(w) Rom. 11:5, 6, 20; II Pet. 1:10; Rom. 8:33; Luke 10:20.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter IV. Of  Creation.",
      Question: "What is Section 1?",
      Answer:
        "I. It pleased God the Father, Son, and Holy Ghost,(a) for the manifestation of the glory of His eternal power, wisdom, and goodness,(b) in the beginning, to create, or make of nothing, the world, and all things therein whether visible or invisible, in the space of six days; and all very good.(c)<br \\><br \\>(a) Heb. 1:2; John 1:2, 3; Gen. 1:2; Job. 26:13; Job. 33:4.<br \\>(b) Rom. 1:20; Jer. 10:12; Ps. 104:24; Ps. 33:5, 6.<br \\>(c) Gen. 1 chap.; Heb. 11:3; Col. 1:16; Acts 17:24",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter IV. Of  Creation.",
      Question: "What is Section 2?",
      Answer:
        "II. After God had made all other creatures, He created man, male and female,(d) with reasonable and immortal souls,(e) endued with knowledge, righteousness, and true holiness, after His own image;(f) having the law of God written in their hearts,(g) and power to fulfil it:(h) and yet under a possibility of transgressing, being left to the liberty of their own will, which was subject unto change.(i) Beside this law written in their hearts, they received a command, not to eat of the tree of the knowledge of good and evil, which while they kept, they were happy in their communion with God,(k) and had dominion over the creatures.(l)<br \\><br \\>(d) Gen. 1:27.<br \\>(e) Gen. 2:7 with Eccles. 12:7 & Luke 23:43 and Matt. 10:28.<br \\>(f) Gen. 1:26; Col. 3:10; Eph. 4:24.<br \\>(g) Rom. 2:14, 15.<br \\>(h) Eccles. 7:29.<br \\>(i) Gen. 3:6; Eccles. 7:29.<br \\>(k) Gen. 2:17; Gen. 3:8, 9, 10, 11, 23.<br \\>(l) Gen. 1:26, 28.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter V. Of  Providence.",
      Question: "What is Section 1?",
      Answer:
        "I. God the great Creator of all things doth uphold,(a) direct, dispose, and govern all creatures, actions, and things,(b) from the greatest even to the least,(c) by His most wise and holy providence,(d) according to His infallible fore-knowledge,(e) and the free and immutable counsel of His own will,(f) to the praise of the glory of His wisdom, power, justice, goodness, and mercy.(g)<br \\><br \\>(a) Heb. 1:3.<br \\>(b) Dan. 4:34, 35; Ps. 135:6; Acts 17:25, 26, 28; Job 38 to 41 chapters.<br \\>(c) Matt. 10:29, 30, 31.<br \\>(d) Prov. 15:3; Ps. 104:24; Ps. 145:17.<br \\>(e) Acts 15:18; Ps. 94:8, 9, 10, 11.<br \\>(f) Eph. 1:11; Ps. 33:10, 11.<br \\>(g) Isa. 63:14; Eph. 3:10; Rom. 9:17; Gen. 45:7; Ps. 145:7",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter V. Of  Providence.",
      Question: "What is Section 2?",
      Answer:
        "II. Although, in relation to the fore-knowledge and decree of God, the first Cause, all things come to pass immutably, and infallibly:(h) yet, by the same providence, He ordereth them to fall out, according to the nature of second causes, either necessarily, freely, or contingently.(i)<br \\><br \\>(h) Acts 2:23.<br \\>(i) Gen. 8:22; Jer. 31:35; Exod. 21:13 with Deut. 19:5; I Kings 22:28, 34; Isa. 10:6, 7",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter V. Of  Providence.",
      Question: "What is Section 3?",
      Answer:
        "III. God in His ordinary providence maketh use of means,(k) yet is free to work without,(l) above,(m) and against them at His pleasure.(n)<br \\><br \\>(k) Acts 27:31, 44; Isa. 55:10, 11; Hos. 2:21, 22.<br \\>(l) Hos. 1:7; Matt. 4:4; Job 34:20.<br \\>(m) Rom. 4:19, 20, 21.<br \\>(n) II Kings 6:6; Dan. 3:27",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter V. Of  Providence.",
      Question: "What is Section 4?",
      Answer:
        "IV. The almighty power, unsearchable wisdom, and infinite goodness of God so far manifest themselves in His providence, that it extendeth itself even to the first fall, and all other sins of angels and men;(o) and that not by a bare permission,(p) but such as hath joined with it a most wise and powerful bounding,(q) and otherwise ordering and governing of them, in a manifold dispensation, to His own holy ends;(r) yet so, as the sinfulness thereof proceedeth only from the creature, and not from God, who, being most holy and righteous, neither is, nor can be, the author or approver of sin.(s)<br \\><br \\>(o) Rom. 11:32, 33, 34; II Sam. 24:1 with I Chron. 21:1; I Kings 22:22, 23; I Chron. 10:4, 13, 14; II Sam. 16:10; Acts 2:23; Acts 4:27, 28.<br \\>(p) Acts 14:16.<br \\>(q) Ps. 76:10; II Kings 19:28.<br \\>(r) Gen. 50:20; Isa. 10:6, 7, 12.<br \\>(s) James 1:13, 14, 17; I John 2:16; Ps. 50:21",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter V. Of  Providence.",
      Question: "What is Section 5?",
      Answer:
        "V. The most wise, righteous, and gracious God doth oftentimes leave for a season His own children to manifold temptations, and the corruption of their own hearts, to chastise them for their former sins, or to discover unto them the hidden strength of corruption, and deceitfulness of their hearts, that they may be humbled;(t) and, to raise them to a more close and constant dependence for their support upon Himself, and to make them more watchful against all future occasions of sin, and for sundry other just and holy ends.(u)<br \\><br \\>(t) II Chron. 32:25, 26, 31; II Sam. 24:1.<br \\>(u) II Cor. 12:7, 8, 9; Ps. 73 throughout; Ps. 77:1 to 12; Mark 14:66 to the end, with John 21:15, 16, 17",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter V. Of  Providence.",
      Question: "What is Section 6?",
      Answer:
        "VI. As for those wicked and ungodly men whom God, as a righteous Judge, for former sins, doth blind and harden,(w) from them He not only withholdeth His grace, whereby they might have been enlightened in their understandings, and wrought upon in their hearts;(x) but sometimes also withdraweth the gifts which they had,(y) and exposeth them to such objects as their corruption makes occasions of sin;(z) and, withal, gives them over to their own lusts, the temptations of the world, and the power of Satan:(a) whereby it comes to pass that they harden themselves, even under those means which God useth for the softening of others.(b)<br \\><br \\>(w) Rom. 1:24, 26, 28; Rom. 11:7, 8.<br \\>(x) Deut. 29:4.<br \\>(y) Matt. 13:12; Matt. 25:29.<br \\>(z) Deut. 2:30; II Kings 8:12, 13.<br \\>(a) Ps. 81:11, 12; II Thess. 2:10, 11, 12.<br \\>(b) Exod. 7:3 with Exod. 8:15, 32; II Cor. 2:15, 16; Isa. 8:14; I Pet. 2:7, 8; Isa. 6:9, 10 with Acts 28:26, 27",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter V. Of  Providence.",
      Question: "What is Section 7?",
      Answer:
        "VII. As the providence of God doth in general reach to all creatures, so after a most special manner, it taketh care of His Church, and disposeth all things to the good thereof.(c)<br \\><br \\>(c) I Tim. 4:10; Amos 9:8, 9; Rom. 8:28; Isa. 43:3, 4, 5, 14.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck:
        "Chapter VI. Of  the Fall of Man, of Sin, and of the Punishment thereof.",
      Question: "What is Section 1?",
      Answer:
        "I. Our first parents, being seduced by the subtilty and temptation of Satan, sinned, in eating the forbidden fruit.(a) This their sin God was pleased, according to His wise and holy counsel, to permit, having purposed to order it to His own glory.(b)<br \\><br \\>(a) Gen. 3:13; II Cor. 11:3.<br \\>(b) Rom. 11:32",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck:
        "Chapter VI. Of  the Fall of Man, of Sin, and of the Punishment thereof.",
      Question: "What is Section 2?",
      Answer:
        "II. By this sin they fell from their original righteousness and communion, with God,(c) and so became dead in sin,(d) and wholly defiled in all the parts and faculties of soul and body.(e)<br \\><br \\>(c) Gen. 3:6, 7, 8; Eccles. 7:29; Rom. 3:23.<br \\>(d) Gen. 2:17; Eph. 2:1.<br \\>(e) Tit. 1:15; Gen. 6:5; Jer. 17:9; Rom. 3:10 to 19",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck:
        "Chapter VI. Of  the Fall of Man, of Sin, and of the Punishment thereof.",
      Question: "What is Section 3?",
      Answer:
        "III. They being the root of all mankind, the guilt of this sin was imputed,(f) and the same death in sin and corrupted nature conveyed, to all their posterity descending from them by ordinary generation.(g)<br \\><br \\>(f) Gen. 1:27, 28 & Gen. 2:16, 17 and Acts 17:26 with Rom. 5:12, 15, 16, 17, 18, 19 and I Cor. 15:21, 22, 49.<br \\>(g) Ps. 51:5; Gen. 5:3; Job 14:4, Job 15:14",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck:
        "Chapter VI. Of  the Fall of Man, of Sin, and of the Punishment thereof.",
      Question: "What is Section 4?",
      Answer:
        "IV. From this original corruption, whereby we are utterly indisposed, disabled, and made opposite to all good,(h) and wholly inclined to all evil,(i) do proceed all actual transgressions.(k)<br \\><br \\>(h) Rom. 5:6; Rom. 8:7, Rom. 7:18; Col. 1:21.<br \\>(i) Gen. 6:5; Gen. 8:21; Rom. 3:10, 11, 12.<br \\>(k) James 1:14, 15; Eph. 2:2, 3; Matt. 15:19",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck:
        "Chapter VI. Of  the Fall of Man, of Sin, and of the Punishment thereof.",
      Question: "What is Section 5?",
      Answer:
        "V. This corruption of nature, during this life, doth remain in those that are regenerated;(l) and although it be, through Christ, pardoned and mortified, yet both itself and all the motions thereof are truly and properly sin.(m)<br \\><br \\>(l) I John 1:8, 10; Rom. 7:14, 17, 18, 23; James 3:2; Prov. 20:9; Eccles. 7:20.<br \\>(m) Rom. 7:5, 7, 8, 25; Gal. 5:17",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck:
        "Chapter VI. Of  the Fall of Man, of Sin, and of the Punishment thereof.",
      Question: "What is Section 6?",
      Answer:
        "VI. Every sin, both original and actual, being a transgression of the righteous law of God, and contrary thereunto,(n) doth, in its own nature, bring guilt upon the sinner;(o) whereby he is bound over to the wrath of God,(p) and curse of the law,(q) and so made subject to death,(r) with all miseries spiritual,(s) temporal,(t) and eternal.(u)<br \\><br \\>(n) I John 3:4.<br \\>(o) Rom. 2:15; Rom. 3:9, 19.<br \\>(p) Ephes. 2:3.<br \\>(q) Gal. 3:10.<br \\>(r) Rom. 6:23.<br \\>(s) Ephes. 4:18.<br \\>(t) Rom. 8:20; Lam. 3:39.<br \\>(u) Matt. 25:41, II Thess. 1:9.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VII. Of  God’s Covenant with Man.",
      Question: "What is Section 1?",
      Answer:
        "I. The distance between God and the creature is go great, that although reasonable creatures do owe obedience unto Him as their Creator, yet they could never have any fruition of Him as their blessedness and reward, but by some voluntary condescension on God’s part, which He hath been pleased to express by way of covenant.(a)<br \\><br \\>(a) Isa. 40:13, 14, 15, 16, 17; Job. 9:32, 33; I Sam. 2:25; Ps. 113:5, 6; Ps. 100:2, 3; Job. 22:2, 3; Job 35:7, 8; Luke 17:10; Acts 17:24, 25",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VII. Of  God’s Covenant with Man.",
      Question: "What is Section 2?",
      Answer:
        "II. The first covenant made with man was a covenant of works,(b) wherein life was promised to Adam, and in him to his posterity,(c) upon condition of perfect and personal obedience.(d)<br \\><br \\>(b) Gal. 3:12.<br \\>(c) Rom. 10:5, Rom. 5:12 to 20.<br \\>(d) Gen. 2:17; Gal. 3:10",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VII. Of  God’s Covenant with Man.",
      Question: "What is Section 3?",
      Answer:
        "III. Man by his fall having made himself incapable of life by that covenant, the Lord was pleased to make a second,(e) commonly called the covenant of grace; wherein He freely offereth unto sinners life and salvation by Jesus Christ, requiring of them faith in Him, that they may be saved,(f) and promising to give unto all those that are ordained unto life His Holy Spirit, to make them willing and able to believe.(g)<br \\><br \\>(e) Gal. 3:21; Rom. 8:3; Rom. 3:20, 21; Gen. 3:15; Isa. 42:6.<br \\>(f) Mark 16:15, 16; John 3:16; Rom. 10:6, 9; Gal. 3:11.<br \\>(g) Ezek. 36:26, 27; John 6:44, 45",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VII. Of  God’s Covenant with Man.",
      Question: "What is Section 4?",
      Answer:
        "IV. This covenant of grace is frequently set forth in Scripture by the name of a Testament, in reference to the death of Jesus Christ the Testator, and to the everlasting inheritance, with all things belonging to it, therein bequeathed.(h)<br \\><br \\>(h) Heb. 9:15, 16, 17; Heb. 7:22; Luke 22:20; I Cor. 11:25",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VII. Of  God’s Covenant with Man.",
      Question: "What is Section 5?",
      Answer:
        "V. This covenant was differently administered in the time of the law, and in the time of the gospel:(i) under the law, it was administered by promises, prophecies, sacrifices, circumcision, the paschal lamb, and other types and ordinances delivered to the people of the Jews, all fore-signifying Christ to come:(k) which were, for that time, sufficient and efficacious, through the operation of the Spirit, to instruct and build up the elect in faith in the promised Messiah,(l) by whom they had full remission of sins, and eternal salvation; and is called, the Old Testament.(m)<br \\><br \\>(i) II Cor. 3:6, 7, 8, 9.<br \\>(k) Heb. 8, 9, 10 chapters; Rom. 4:11; Col. 2:11, 12; I Cor. 5:7.<br \\>(l) I Cor. 10:1, 2, 3, 4; Heb. 11:13; John 8:56.<br \\>(m) Gal. 3:7, 8, 9, 14",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VII. Of  God’s Covenant with Man.",
      Question: "What is Section 6?",
      Answer:
        "VI. Under the gospel, when Christ, the substance,(n) was exhibited, the ordinances in which this covenant is dispensed are the preaching of the Word, and the administration of the sacraments of Baptism and the Lord’s Supper:(o) which, though fewer in number, and administered with more simplicity, and less outward glory; yet, in them, it is held forth in more fulness, evidence, and spiritual efficacy,(p) to all nations, both Jews and Gentiles;(q) and is called the New Testament.(r) There are not therefore two covenants of grace, differing in substance, but one and the same, under various dispensations.(s)<br \\><br \\>(n) Col. 2:17.<br \\>(o) Matt. 28:19, 20; I Cor. 11:23, 24, 25.<br \\>(p) Heb. 12:22 to 28; Jer. 31:33, 34.<br \\>(q) Matt. 28:19; Eph. 2:15, 16, 17, 18, 19.<br \\>(r) Luke 22:20.<br \\>(s) Gal. 3:14, 16; Rom 3:21, 22, 23, 30; Ps. 32:1 with Rom. 4:3, 6, 16, 17, 23, 24; Heb. 13:8; Acts 15:11.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VIII. Of  Christ the Mediator.",
      Question: "What is Section 1?",
      Answer:
        "I. It pleased God, in His eternal purpose, to choose and ordain the Lord Jesus, His only begotten Son, to be the Mediator between God and man;(a) the Prophet,(b) Priest,(c) and King,(d) the Head and Saviour of His Church,(e) the Heir of all things,(f) and Judge of the world:(g) unto whom He did from all eternity give a people, to be His seed,(h) and to be by Him in time redeemed, called, justified, sanctified, and glorified.(i)<br \\><br \\>(a) Isa. 42:1; I Pet. 19, 20; John 3:16; I Tim. 2:5.<br \\>(b) Acts 3:22.<br \\>(c) Heb. 5:5, 6.<br \\>(d) Ps. 2:6; Luke 1:33.<br \\>(e) Eph. 5:23.<br \\>(f) Heb. 1:2.<br \\>(g) Acts 17:31.<br \\>(h) John 17:6; Ps. 22:30, Isa. 53:10.<br \\>(i) I Tim. 2:6; Isa. 55:4, 5; I Cor. 1:30",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VIII. Of  Christ the Mediator.",
      Question: "What is Section 2?",
      Answer:
        "II. The Son of God, the second person in the Trinity, being very and eternal God, of one substance and equal with the Father, did, when the fulness of time was come, take upon Him man’s nature,(k) with all the essential properties and common infirmities thereof, yet without sin:(l) being conceived by the power of the Holy Ghost, in the womb of the virgin Mary, of her substance.(m) So that two whole, perfect, and distinct natures, the Godhead and the manhood, were inseparably joined together in one person, without conversion, composition, or confusion.(n) Which person is very God, and very man, yet one Christ, the only Mediator between God and man.(o)<br \\><br \\>(k) John 1:1, 14; I John 5:20; Phil. 2:6; Gal. 4:4.<br \\>(l) Heb. 2:14, 16, 17; Heb. 4:15.<br \\>(m) Luke 1:27, 31, 35; Gal. 4:4.<br \\>(n) Luke 1:35; Col. 2:9; Rom. 9:5; I Pet. 3:18; I Tim. 3:16.<br \\>(o) Rom. 1:3, 4; I Tim. 2:5",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VIII. Of  Christ the Mediator.",
      Question: "What is Section 3?",
      Answer:
        "III. The Lord Jesus, in His human nature thus united to the divine, was sanctified and anointed with the Holy Spirit, above measure,(p) having in Him all the treasures of wisdom and knowledge;(q) in whom it pleased the Father that all fulness should dwell;(r) to the end that, being holy, harmless, undefiled, and full of grace and truth,(s) He might be thoroughly furnished to execute the office of a mediator and surety.(t) Which office He took not unto Himself, but was thereunto called by His Father,(u) who put all power and judgment into His hand, and gave Him commandment to execute the same.(w)<br \\><br \\>(p) Ps. 45:7; John 3:34.<br \\>(q) Col. 2:3.<br \\>(r) Col. 1:19.<br \\>(s) Heb. 7:26; John 1:14.<br \\>(t) Acts 10:38; Heb. 12:24; Heb. 7:22.<br \\>(u) Heb. 5:4, 5.<br \\>(w) John 5:22, 27; Matt. 28:18; Acts 2:36",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VIII. Of  Christ the Mediator.",
      Question: "What is Section 4?",
      Answer:
        "IV. This office the Lord Jesus did most willingly undertake;(x) which that He might discharge, He was made under the law,(y) and did perfectly fulfil it,(z) endured most grievous torments immediately in His soul,(a) and most painful sufferings in His body;(b) was crucified, and died;(c) was buried, and remained under the power of death; yet saw no corruption.(d) On the third day He arose from the dead,(e) with the same body in which He suffered,(f) with which also he ascended into heaven, and there sitteth at the right hand of His Father,(g) making intercession,(h) and shall return to judge men and angels at the end of the world.(i)<br \\><br \\>(x) Ps. 40:7, 8 with Heb. 10:5 to 10; John 10:18; Phil. 2:8.<br \\>(y) Gal. 4:4.<br \\>(z) Matt. 3:15; Matt. 5:17.<br \\>(a) Matt. 26:37, 38; Luke 22:44; Matt. 27:46.<br \\>(b) Matt. 26, 27 chapters.<br \\>(c) Phil. 2:8.<br \\>(d) Acts. 2:23, 24, 27; Acts 13:37; Rom. 6:9.<br \\>(e) I Cor. 15:3, 4.<br \\>(f) John 20:25, 27.<br \\>(g) Mark 16:19.<br \\>(h) Rom. 8:34; Heb. 9:24; Heb. 7:25.<br \\>(i) Rom. 14:9, 10; Acts 1:11; Acts 10:42; Matt. 13:40, 41, 42; Jude ver. 6; II Pet. 2:4",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VIII. Of  Christ the Mediator.",
      Question: "What is Section 5?",
      Answer:
        "V. The Lord Jesus, by His perfect obedience, and sacrifice of Himself, which He, through the eternal Spirit, once offered up unto God, hath fully satisfied the justice of His Father;(k) and purchased, not only reconciliation, but an everlasting inheritance in the kingdom of heaven, for all those whom the Father hath given unto Him.(l)<br \\><br \\>(k) Rom. 5:19; Heb. 9:14, 16; Heb. 10:14; Eph. 5:2; Rom. 3:25, 26.<br \\>(l) Dan. 9:24, 26; Col. 1:19, 20; Eph. 1:11, 14; John 17:2; Heb. 9:12, 15",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VIII. Of  Christ the Mediator.",
      Question: "What is Section 6?",
      Answer:
        "VI. Although the work of redemption was not actually wrought by Christ till after His incarnation, yet the virtue, efficacy, and benefits thereof were communicated unto the elect in all ages successively from the beginning of the world, in and by those promises, types, and sacrifices, wherein He was revealed, and signified to be the seed of the woman which should bruise the serpent’s head; and the Lamb slain from the beginning of the world: being yesterday and to-day the same, and forever.(m)<br \\><br \\>(m) Gal. 4:4, 5; Gen. 3:15; Rev. 13:8; Heb. 13:8",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VIII. Of  Christ the Mediator.",
      Question: "What is Section 7?",
      Answer:
        "VII. Christ, in the work of mediation, acteth according to both natures, by each nature doing that which is proper to itself:(n) yet, by reason of the unity of the person, that which is proper to one nature, is sometimes in Scripture attributed to the person denominated by the other nature.(o)<br \\><br \\>(n) Heb. 9:14; I Pet. 3:18.<br \\>(o) Acts 20:28; John 3:13; I John 3:16",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter VIII. Of  Christ the Mediator.",
      Question: "What is Section 8?",
      Answer:
        "VIII. To all those for whom Christ hath purchased redemption, He doth certainly and effectually apply and communicate the same,(p) making intercession for them,(q) and revealing unto them, in and by the Word, the mysteries of salvation,(r) effectually persuading them by His Spirit to believe and obey, and governing their hearts by His Word and Spirit;(s) overcoming all their enemies by His almighty power and wisdom, in such manner, and ways, as are most consonant to His wonderful and unsearchable dispensation.(t)<br \\><br \\>(p) John 6:37, 39; John 10:15, 16.<br \\>(q) I John 2:1, 2; Rom. 8:34.<br \\>(r) John 15:13, 15; Eph. 1:7, 8, 9; John 17:6.<br \\>(s) John 14:26; Heb. 12:2; II Cor. 4:13; Rom. 8:9, 14; Rom. 15:18, 19; John 17:17.<br \\>(t) Ps. 110:1; I Cor. 15:25, 26; Mal. 4:2, 3; Col. 2:15.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter IX. Of  Free Will.",
      Question: "What is Section 1?",
      Answer:
        "I. God hath endued the will of man with that natural liberty, that is neither forced, nor by any absolute necessity of nature determined to good or evil.(a)<br \\><br \\>(a) Matt. 17:12; James 1:14; Deut. 30:19",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter IX. Of  Free Will.",
      Question: "What is Section 2?",
      Answer:
        "II. Man, in his state of innocency, had freedom and power to will and to do that which was good, and well pleasing to God;(b) but yet, mutably, so that he might fall from it.(c)<br \\><br \\>(b) Eccles. 7:29; Gen. 1:26.<br \\>(c) Gen. 2:16, 17; Gen. 3:6",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter IX. Of  Free Will.",
      Question: "What is Section 3?",
      Answer:
        "III. Man, by his fall into a state of sin, hath wholly lost all ability of will to any spiritual good accompanying salvation:(d) so as, a natural man, being altogether averse from that good,(e) and dead in sin,(f) is not able, by his own strength, to convert himself, or to prepare himself thereunto.(g)<br \\><br \\>(d) Rom. 5:6; Rom 8:7; John 15:5.<br \\>(e) Rom. 3:10, 12.<br \\>(f) Eph. 2:1, 5; Col. 2:13.<br \\>(g) John 6:44, 65; Eph. 2:2, 3, 4, 5; I Cor. 2:14; Titus 3:3, 4, 5",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter IX. Of  Free Will.",
      Question: "What is Section 4?",
      Answer:
        "IV. When God converts a sinner, and translates him into the state of grace, He freeth him from his natural bondage under sin;(h) and, by His grace alone, enables him freely to will and to do that which is spiritually good;(i) yet so, as that by reason of his remaining corruption, he doth not perfectly, nor only, will that which is good, but doth also will that which is evil.(k)<br \\><br \\>(h) Col. 1:13; John 8:34, 36.<br \\>(i) Phil. 2:13; Rom. 6:18, 22.<br \\>(k) Gal. 5:17; Rom. 7:15, 18, 19, 21, 23",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter IX. Of  Free Will.",
      Question: "What is Section 5?",
      Answer:
        "V. The will of man is made perfectly and immutably free to do good alone, in the state of glory only.(l)<br \\><br \\>(l) Eph. 4:13; Heb. 12:23; I John 3:2; Jude ver. 24.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter X. Of  Effectual Calling.",
      Question: "What is Section 1?",
      Answer:
        "I. All those whom God hath predestinated unto life, and those only, He is pleased in His appointed and accepted time effectually to call,(a) by His Word and Spirit,(b) out of that state of sin and death, in which they are by nature, to grace and salvation by Jesus Christ;(c) enlightening their minds spiritually and savingly to understand the things of God,(d) taking away their heart of stone, and giving unto them a heart of flesh;(e) renewing their wills, and, by His almighty power determining them to that which is good,(f) and effectually drawing them to Jesus Christ:(g) yet so, as they come most freely, being made willing by His grace.(h)<br \\><br \\>(a) Rom. 8:30; Rom. 11:7; Eph. 1:10, 11.<br \\>(b) II Thess. 2:13, 14; II Cor. 3:3, 6.<br \\>(c) Rom. 8:2; Eph. 2:1, 2, 3, 4, 5; II Tim. 1:9, 10.<br \\>(d) Acts 26:18; I Cor. 2:10, 12; Eph. 1:17, 18.<br \\>(e) Ezek. 36:26.<br \\>(f) Ezek. 11:19; Phil. 2:13; Deut. 30:6; Ezek. 36:27.<br \\>(g) Eph. 1:19; John 6:44, 45.<br \\>(h) Cant. 1:4; Ps. 110:3; John 6:37; Rom. 6:16, 17, 18",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter X. Of  Effectual Calling.",
      Question: "What is Section 2?",
      Answer:
        "II. This effectual call is of God’s free and special grace alone, not from anything at all foreseen in man,(i) who is altogether passive therein, until being quickened and renewed by the Holy Spirit,(k) he is thereby enabled to answer this call, and to embrace the grace offered and conveyed in it.(l)<br \\><br \\>(i) II Tim. 1:9; Tit. 3:4, 5; Eph. 2:4, 5, 8, 9; Rom. 9:11.<br \\>(k) I Cor. 2:14; Rom. 8:7; Eph. 2:5.<br \\>(l) John 6:37; Ezek. 36:27; John 5:25",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter X. Of  Effectual Calling.",
      Question: "What is Section 3?",
      Answer:
        "III. Elect infants, dying in infancy, are regenerated, and saved by Christ through the Spirit,(m) who worketh when, and where, and how He pleaseth:(n) so also, are all other elect persons who are uncapable of being outwardly called by the ministry of the Word.(o)<br \\><br \\>(m) Luke 18:15, 16, and Acts 2:38, 39 and John 3:3, 5 and I John 5:12 & Rom. 8:9 compared.<br \\>(n) John 3:8.<br \\>(o) I John 5:12; Acts 4:12",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter X. Of  Effectual Calling.",
      Question: "What is Section 4?",
      Answer:
        "IV. Others, not elected, although they may be called by the ministry of the Word,(p) and may have some common operations of the Spirit,(q) yet they never truly come unto Christ, and therefore cannot be saved:(r) much less can men, not professing the Christian religion, be saved in any other way whatsoever, be they never so diligent to frame their lives according to the light of nature, and the law of that religion they do profess.(s) And to assert and maintain that they may, is very pernicious, and to be detested.(t)<br \\><br \\>(p) Matt. 22:14.<br \\>(q) Matt. 7:22; Matt. 13:20, 21; Heb. 6:4, 5.<br \\>(r) John 6:64, 65, 66; John 8:24.<br \\>(s) Acts 4:12; John 14:6; Eph. 2:12; John 4:22; John 17:3.<br \\>(t) II John ver. 9, 10, 11; I Cor. 16:22; Gal. 1:6, 7, 8.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XI. Of  Justification.",
      Question: "What is Section 1?",
      Answer:
        "I. Those whom God effectually calleth, He also freely justifieth;(a) not by infusing righteousness into them, but by pardoning their sins, and by accounting and accepting their persons as righteous, not for anything wrought in them, or done by them, but for Christ’s sake alone; nor by imputing faith itself, the act of believing, or any other evangelical obedience to them, as their righteousness, but by imputing the obedience and satisfaction of Christ unto them,(b) they receiving and resting on Him and His righteousness by faith; which faith they have not of themselves, it is the gift of God.(c)<br \\><br \\>(a) Rom. 8:30; Rom. 3:24.<br \\>(b) Rom. 4:5, 6, 7, 8; II Cor. 5:19, 21; Rom. 3:22, 24, 25, 27, 28; Tit. 3:5, 7; Eph. 1:7; Jer. 23:6; I Cor. 1:30, 31; Rom. 5:17, 18, 19.<br \\>(c) Acts 10:43; Gal. 2:16; Phil. 3:19; Acts 13:38, 39; Eph. 2:7, 8",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XI. Of  Justification.",
      Question: "What is Section 2?",
      Answer:
        "II. Faith, thus receiving and resting on Christ and His righteousness, is the alone instrument of justification;(d) yet is it not alone in the person justified, but is ever accompanied with all other saving graces, and is no dead faith, but worketh by love.(e)<br \\><br \\>(d) John 1:12; Rom. 3:28; Rom. 5:1.<br \\>(e) Jam. 2:17, 22, 26; Gal. 5:6",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XI. Of  Justification.",
      Question: "What is Section 3?",
      Answer:
        "III. Christ, by His obedience and death, did fully discharge the debt of all those that are thus justified, and did make a proper, real, and full satisfaction to His Father’s justice in their behalf.(f) Yet, inasmuch as He was given by the Father for them;(g) and His obedience and satisfaction accepted in their stead;(h) and both freely, not for anything in them; their justification is only of free grace;(i) that both the exact justice, and rich grace of God, might be glorified in the justification of sinners.(k)<br \\><br \\>(f) Rom. 5:8, 9, 10, 19; I Tim. 2:5, 6; Heb. 10:10, 14; Dan. 9:24, 26; Isa. 53:4, 5, 6, 10, 11, 12.<br \\>(g) Rom. 8:32.<br \\>(h) II Cor. 5:21; Matt. 3:17; Eph. 5:2.<br \\>(i) Rom. 3:24; Eph. 1:7.<br \\>(k) Rom. 3:26; Eph. 2:7",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XI. Of  Justification.",
      Question: "What is Section 4?",
      Answer:
        "IV. God did, from all eternity, decree to justify all the elect,(l) and Christ did, in the fulness of time, die for their sins, and rise again for their justification:(m) nevertheless, they are not justified, until the Holy Spirit doth, in due time, actually apply Christ unto them.(n)<br \\><br \\>(l) Gal. 3:8; I Pet. 1:2, 19, 20; Rom. 8:30.<br \\>(m) Gal. 4:4; I Tim. 2:6; Rom. 4:25.<br \\>(n) Col. 1:21, 22; Gal. 2:16; Tit. 3:3, 4, 5, 6, 7",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XI. Of  Justification.",
      Question: "What is Section 5?",
      Answer:
        "V. God doth continue to forgive the sins of those that are justified:(o) and although they can never fall from the state of justification;(p) yet they may, by their sins, fall under God’s fatherly displeasure, and not have the light of His countenance restored unto them, until they humble themselves, confess their sins, beg pardon, and renew their faith and repentance.(q)<br \\><br \\>(o) Matt. 6:12; I John 1:7, 9; I John 2:1, 2.<br \\>(p) Luke 22:32; John 10:28; Heb. 10:14.<br \\>(q) Ps. 89:31, 32, 33; Ps. 51:7, 8, 9, 10, 11, 12; Ps. 32:5; Matt. 26:75; I Cor. 11:30, 32; Luke 1:20",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XI. Of  Justification.",
      Question: "What is Section 6?",
      Answer:
        "VI. The justification of believers under the old testament was, in all these respects, one and the same with the justification of believers under the new testament.(r)<br \\><br \\>(r) Gal. 3:9, 13, 14; Rom. 4:22, 23, 24; Heb. 13:8.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XII. Of  Adoption.",
      Question: "What is Section 1?",
      Answer:
        "All those that are justified, God vouchsafeth, in and for His only Son Jesus Christ, to make partakers of the grace of adoption:(a) by which they are taken into the number, and enjoy the liberties and privileges of the children of God,(b) have His name put upon them,(c) receive the spirit of adoption,(d) have access to the throne of grace with boldness,(e) are enabled to cry, Abba, Father,(f) are pitied,(g) protected,(h) provided for,(i) and chastened by Him as by a Father;(k) yet never cast off,(l) but sealed to the day of redemption,(m) and inherit the promises,(n) as heirs of everlasting salvation.(o)<br \\><br \\>(a) Eph. 1:5.<br \\>(b) Gal. 4:4, 5; Rom. 8:17; John 1:12.<br \\>(c) Jer. 14:9; II Cor. 6:18; Rev. 3:12.<br \\>(d) Rom. 8:15.<br \\>(e) Eph. 3:12; Rom. 5:2.<br \\>(f) Gal. 4:6.<br \\>(g) Ps. 103:13.<br \\>(h) Prov. 14:26.<br \\>(i) Matt. 6:30, 32; I Pet. 5:7.<br \\>(k) Heb. 12:6.<br \\>(l) Lam. 3:31.<br \\>(m) Eph. 4:30.<br \\>(n) Heb. 6:12.<br \\>(o) I Pet. 1:3, 4; Heb. 1:14.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIII. Of  Sanctification.",
      Question: "What is Section 1?",
      Answer:
        "I. They who are once effectually called and regenerated, having a new heart and a new spirit created in them, are further sanctified, really and personally, through the virtue of Christ’s death and resurrection,(a) by His Word and Spirit dwelling in them:(b) the dominion of the whole body of sin is destroyed,(c) and the several lusts thereof are more and more weakened and mortified;(d) and they more and more quickened and strengthened in all saving graces,(e) to the practice of true holiness, without which no man shall see the Lord.(f)<br \\><br \\>(a) I Cor. 6:11; Acts 20:32; Phil. 3:10; Rom. 6:5, 6.<br \\>(b) John 17:17; Eph. 5:26; II Thess. 2:13.<br \\>(c) Rom. 6:6, 14.<br \\>(d) Gal. 5:24; Rom. 8:13.<br \\>(e) Col. 1:11; Eph. 3:16, 17, 18, 19.<br \\>(f) II Cor. 7:1; Heb. 12:14",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIII. Of  Sanctification.",
      Question: "What is Section 2?",
      Answer:
        "II. This sanctification is throughout, in the whole man;(g) yet imperfect in this life, there abiding still some remnants of corruption in every part:(h) whence ariseth a continual and irreconcilable war; the flesh lusting against the Spirit, and the Spirit against the flesh.(i)<br \\><br \\>(g) I Thess. 5:23.<br \\>(h) I John 1:10; Rom. 7:18, 23; Phil. 3:12.<br \\>(i) Gal. 5:17; I Pet. 2:11",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIII. Of  Sanctification.",
      Question: "What is Section 3?",
      Answer:
        "III. In which war, although the remaining corruption, for a time, may much prevail;(k) yet through the continual supply of strength from the sanctifying Spirit of Christ, the regenerate part doth overcome;(l) and so, the saints grow in grace,(m) perfecting holiness in the fear of God.(n)<br \\><br \\>(k) Rom. 7:23.<br \\>(l) Rom. 6:14; I John 5:4; Eph. 4:15, 16.<br \\>(m) II Pet. 3:18; II Cor. 3:18.<br \\>(n) II Cor. 7:1.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIV. Of  Saving Faith.",
      Question: "What is Section 1?",
      Answer:
        "I. The grace of faith, whereby the elect are enabled to believe to the saving of their souls,(a) is the work of the Spirit of Christ in their hearts;(b) and is ordinarily wrought by the ministry of the Word:(c) by which also, and by the administration of the sacraments, and prayer, it is increased and strengthened.(d)<br \\><br \\>(a) Heb. 10:39.<br \\>(b) II Cor. 4:13; Eph. 1:17, 18, 19; Eph. 2:8.<br \\>(c) Rom. 10:14, 17.<br \\>(d) I Pet. 2:2; Acts 20:32; Rom. 4:11; Luke 17:5; Rom. 1:16, 17",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIV. Of  Saving Faith.",
      Question: "What is Section 2?",
      Answer:
        "II. By this faith, a Christian believeth to be true whatsoever is revealed in the Word, for the authority of God Himself speaking therein;(e) and acteth differently upon that which each particular passage thereof containeth; yielding obedience to the commands,(f) trembling at the threatenings,(g) and embracing the promises of God for this life, and that which is to come.(h) But the principal acts of saving faith are accepting, receiving, and resting upon Christ alone for justification, sanctification, and eternal life, by virtue of the covenant of grace.(i)<br \\><br \\>(e) John 4:42; I Thess. 2:13; I John 5:10; Acts 24:14.<br \\>(f) Rom. 16:26.<br \\>(g) Isa. 66:2.<br \\>(h) Heb. 11:13; I Tim. 4:8.<br \\>(i) John 1:12; Acts 16:31; Gal. 2:20; Acts 15:11",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIV. Of  Saving Faith.",
      Question: "What is Section 3?",
      Answer:
        "III. This faith is different in degrees, weak or strong;(k) may be often and many ways assailed, and weakened, but gets the victory;(l) growing up in many to the attainment of a full assurance through Christ,(m) who is both the author and finisher of our faith.(n)<br \\><br \\>(k) Heb. 5:13, 14; Rom. 4:19, 20; Matt. 6:30; Matt. 8:10.<br \\>(l) Luke 22:31, 32; Eph. 6:16; I John 5:4, 5.<br \\>(m) Heb. 6:11, 12; Heb. 10:22; Col. 2:2.<br \\>(n) Heb. 12:2.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XV. Of  Repentance unto Life.",
      Question: "What is Section 1?",
      Answer:
        "I. Repentance unto life is an evangelical grace,(a) the doctrine whereof is to be preached by every minister of the Gospel, as well as that of faith in Christ.(b)<br \\><br \\>(a) Zech. 12:10; Acts 11:18.<br \\>(b) Luke 24:47; Mark 1:15; Acts 20:21",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XV. Of  Repentance unto Life.",
      Question: "What is Section 2?",
      Answer:
        "II. By it, a sinner, out of the sight and sense not only of the danger, but also of the filthiness and odiousness of his sins, as contrary to the holy nature and righteous law of God; and upon the apprehension of his mercy in Christ to such as are penitent, so grieves for, and hates his sins, as to turn from them all unto God,(c) purposing and endeavouring to walk with Him in all the ways of His commandments.(d)<br \\><br \\>(c) Ezek. 18:30, 31; Ezek. 36:31; Isa. 30:22; Ps. 51:4; Jer. 31:18, 19; Joel 2:12, 13; Amos 5:15; Ps. 119:128; II Cor. 7:11.<br \\>(d) Ps. 119:6, 59, 106; Luke 1:6; II Kings 23:25",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XV. Of  Repentance unto Life.",
      Question: "What is Section 3?",
      Answer:
        "III. Although repentance be not to be rested in, as any satisfaction for sin, or any cause of the pardon thereof,(e) which is the act of God’s free grace in Christ;(f) yet is it of such necessity to all sinners, that none may expect pardon without it.(g)<br \\><br \\>(e) Ezek. 36:31, 32; Ezek. 16:61, 62, 63.<br \\>(f) Hosea 14:2, 4; Rom. 3:24; Eph. 1:7.<br \\>(g) Luke 13:3, 5; Acts 17:30, 31",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XV. Of  Repentance unto Life.",
      Question: "What is Section 4?",
      Answer:
        "IV. As there is no sin so small, but it deserves damnation,(h) so there is no sin so great, that it can bring damnation upon those who truly repent.(i)<br \\><br \\>(h) Rom. 6:23; Rom. 5:12; Matt. 12:36.<br \\>(i) Isa. 55:7; Rom. 8:1; Isa. 1:16, 18",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XV. Of  Repentance unto Life.",
      Question: "What is Section 5?",
      Answer:
        "V. Men ought not to content themselves with a general repentance, but it is every man’s duty to endeavour to repent of his particular sins, particularly.(k)<br \\><br \\>(k) Ps. 19:13; Luke 19:8; I Tim. 1:13, 15",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XV. Of  Repentance unto Life.",
      Question: "What is Section 6?",
      Answer:
        "VI. As every man is bound to make private confession of his sins to God, praying for the pardon thereof;(l) upon which, and the forsaking of them, he shall find mercy:(m) so, he that scandalizeth his brother, or the Church of Christ, ought to be willing, by a private or public confession, and sorrow for his sin, to declare his repentance to those that are offended,(n) who are thereupon to be reconciled to him, and in love to receive him.(o)<br \\><br \\>(l) Ps. 51:4, 5, 7, 9, 14; Ps. 32:5, 6.<br \\>(m) Prov. 28:13; I John 1:9.<br \\>(n) James 5:16; Luke 17:3, 4; Joshua 7:19; Ps. 51 throughout.<br \\>(o) II Cor. 2:8.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVI. Of  Good Works.",
      Question: "What is Section 1?",
      Answer:
        "I. Good works are only such as God hath commanded in His holy Word,(a) and not such as, without the warrant thereof, are devised by men, out of blind zeal, or upon any pretence of good intention.(b)<br \\><br \\>(a) Micah 6:8; Rom. 12:2; Heb. 13:21.<br \\>(b) Matt. 15:9; Isa. 29:13; I Pet. 1:18; Rom. 10:2; John 16:2; I Sam. 15:21, 22, 23",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVI. Of  Good Works.",
      Question: "What is Section 2?",
      Answer:
        "II. These good works, done in obedience to God’s commandments, are the fruits and evidences of a true and lively faith:(c) and by them believers manifest their thankfulness,(d) strengthen their assurance,(e) edify their brethren,(f) adorn the profession of the Gospel,(g) stop the mouths of the adversaries,(h) and glorify God,(i) whose workmanship they are, created in Christ Jesus thereunto;(k) that, having their fruit unto holiness, they may have the end, eternal life.(l)<br \\><br \\>(c) James 2:18, 22.<br \\>(d) Ps. 116:12, 13; I Pet. 2:9.<br \\>(e) I John 2:3, 5; II Pet. 1:5, 6, 7, 8, 9, 10.<br \\>(f) II Cor. 9:2; Matt. 5:16.<br \\>(g) Tit. 2:5, 9, 10, 11, 12; I Tim. 6:1.<br \\>(h) I Pet. 2:15.<br \\>(i) I Pet. 2:12; Phil. 1:11; John 15:8.<br \\>(k) Eph. 2:10.<br \\>(l) Rom. 6:22",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVI. Of  Good Works.",
      Question: "What is Section 3?",
      Answer:
        "III. Their ability to do good works is not at all of themselves, but wholly from the Spirit of Christ.(m) And that they may be enabled thereunto, besides the graces they have already received, there is required an actual influence of the same Holy Spirit, to work in them to will and to do of His good pleasure:(n) yet are they not hereupon to grow negligent, as if they were not bound to perform any duty, unless upon a special motion of the Spirit; but they ought to be diligent in stirring up the grace of God that is in them.(o)<br \\><br \\>(m) John 15:4, 5; Ezek. 36:26, 27.<br \\>(n) Phil. 2:13; Phil. 4:13; II Cor. 3:5.<br \\>(o) Phil. 2:12; Heb. 6:11, 12; II Pet. 1:3, 5, 10, 11; Isa. 64:7; II Tim. 1:6; Acts 26:6, 7; Jude ver. 20, 21",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVI. Of  Good Works.",
      Question: "What is Section 4?",
      Answer:
        "IV. They, who in their obedience attain to the greatest height which is possible in this life, are so far from being able to supererogate, and to do more than God requires, as that they fall short of much which in duty they are bound to do.(p)<br \\><br \\>(p) Luke 17:10; Neh. 13:22; Job 9:2, 3; Gal. 5:17",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVI. Of  Good Works.",
      Question: "What is Section 5?",
      Answer:
        "V. We cannot, by our best works, merit pardon of sin, or eternal life at the hand of God, by reason of the great disproportion that is between them and the glory to come; and the infinite distance that is between us and God, whom, by them, we can neither profit, nor satisfy for the debt of our former sins,(q) but when we have done all we can, we have done but our duty, and are unprofitable servants;(r) and because, as they are good, they proceed from His Spirit;(s) and as they are wrought by us, they are defiled, and mixed with so much weakness and imperfection, that they cannot endure the severity of God’s judgment.(t)<br \\><br \\>(q) Rom. 3:20; Rom. 4:2, 4, 6; Eph. 2:8, 9; Tit. 3:5, 6, 7; Rom. 8:18; Ps. 16:2; Job 22:2, 3; Job 35:7, 8.<br \\>(r) Luke 17:10.<br \\>(s) Gal. 5:22, 23.<br \\>(t) Isa. 64:6; Gal. 5:17; Rom. 7:15, 18; Ps. 143:2; Ps. 130:3",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVI. Of  Good Works.",
      Question: "What is Section 6?",
      Answer:
        "VI. Yet notwithstanding, the persons of believers being accepted through Christ, their good works also are accepted in Him,(u) not as though they were in this life wholly unblamable and unreproveable in God’s sight;(w) but that He, looking upon them in His Son, is pleased to accept and reward that which is sincere, although accompanied with many weaknesses and imperfections.(x)<br \\><br \\>(u) Eph. 1:6; I Pet. 2:5; Exod. 28:38; Gen. 4:4 with Heb. 11:4.<br \\>(w) Job. 9:20; Ps. 143:2.<br \\>(x) Heb. 13:20, 21; II Cor. 8:12; Heb. 6:10; Matt. 25:21, 23",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVI. Of  Good Works.",
      Question: "What is Section 7?",
      Answer:
        "VII. Works done by unregenerate men, although, for the matter of them, they may be things which God commands, and of good use both to themselves and others:(y) yet, because they proceed not from a heart purified by faith;(z) nor are done in a right manner according to the Word;(a) nor to a right end, the glory of God;(b) they are therefore sinful, and cannot please God, or make a man meet to receive grace from God.(c) And yet, their neglect of them is more sinful, and displeasing unto God.(d)<br \\><br \\>(y) II Kings 10:30, 31; I Kings 21:27, 29; Phil. 1:15, 16, 18.<br \\>(z) Gen. 4:5 with Heb. 11:4; Heb. 11:6.<br \\>(a) I Cor. 13:3; Isa. 1:12.<br \\>(b) Matt. 6:2, 5, 16.<br \\>(c) Hag. 2:14; Tit. 1:15; Amos 5:22, 23; Hosea 1:4; Rom. 9:16; Titus 3:5.<br \\>(d) Ps. 14:4; Ps. 36:3; Job 21:14, 15; Matt. 25:41, 42, 43, 45; Matt. 23:23.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVII. Of  the Perseverance of the Saints.",
      Question: "What is Section 1?",
      Answer:
        "I. They, whom God hath accepted in His Beloved, effectually called, and sanctified by His Spirit, can neither totally, nor finally, fall away from the state of grace: but shall certainly persevere therein to the end, and be eternally saved.(a)<br \\><br \\>(a) Phil. 1:6; II Pet. 1:10; John 10:28, 29; I John 3:9; I Pet. 1:5, 9",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVII. Of  the Perseverance of the Saints.",
      Question: "What is Section 2?",
      Answer:
        "II. This perseverance of the saints depends not upon their own free will, but upon the immutability of the decree of election, flowing from the free and unchangeable love of God the Father;(b) upon the efficacy of the merit and intercession of Jesus Christ;(c) the abiding of the Spirit, and of the seed of God within them;(d) and the nature of the covenant of grace:(e) from all which ariseth also the certainty and infallibility thereof.(f)<br \\><br \\>(b) II Tim. 2:18, 19; Jer. 31:3.<br \\>(c) Heb. 10:10, 14; Heb. 13:20, 21; Heb. 9:12, 13, 14, 15; Rom. 8:33 to the end; John 17:11, 24; Luke 22:32; Heb. 7:25.<br \\>(d) John 14:16, 17; I John 2:27; I John 3:9.<br \\>(e) Jer. 32:40.<br \\>(f) John 10:28; II Thess. 3:3; I John 2:19",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVII. Of  the Perseverance of the Saints.",
      Question: "What is Section 3?",
      Answer:
        "III. Nevertheless, they may, through the temptations of Satan and of the world, the prevalency of corruption remaining in them, and the neglect of the means of their preservation, fall into grievous sins;(g) and, for a time, continue therein:(h) whereby they incur God’s displeasure,(i) and grieve His Holy Spirit,(k) come to be deprived of some measure of their graces and comforts,(l) have their hearts hardened,(m) and their consciences wounded,(n) hurt and scandalize others,(o) and bring temporal judgments upon themselves.(p)<br \\><br \\>(g) Matt. 26:70, 72, 74.<br \\>(h) Ps. 51 title and ver. 14.<br \\>(i) Isa. 64:5, 7, 9; II Sam. 11:27.<br \\>(k) Eph. 4:30.<br \\>(l) Ps. 51:8, 10, 12; Rev. 2:4; Cant. 5:2, 3, 4, 6.<br \\>(m) Isa. 63:17; Mark 6:52; Mark 16:14.<br \\>(n) Ps. 32:3, 4; Ps. 51:8.<br \\>(o) II Sam. 12:14.<br \\>(p) Ps. 89:31, 32; I Cor. 11:32.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVIII. Of  the Assurance of Grace and Salvation.",
      Question: "What is Section 1?",
      Answer:
        "I. Although hypocrites and other unregenerate men may vainly deceive themselves with false hopes, and carnal presumptions of being in the favour of God, and estate of salvation;(a) which hope of theirs shall perish:(b) yet such as truly believe in the Lord Jesus, and love Him in sincerity, endeavouring to walk in all good conscience before Him, may, in this life, be certainly assured that they are in the state of grace,(c) and may rejoice in the hope of the glory of God, which hope shall never make them ashamed.(d)<br \\><br \\>(a) Job 8:13, 14; Mic. 3:11; Deut. 29:19; John 8:41.<br \\>(b) Matt. 7:22, 23.<br \\>(c) I John 2:3; I John 3:14, 18, 19, 21, 24; I John 5:13.<br \\>(d) Rom. 5:2, 5",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVIII. Of  the Assurance of Grace and Salvation.",
      Question: "What is Section 2?",
      Answer:
        "II. This certainty is not a bare conjectural and probable persuasion, grounded upon a fallible hope;(e) but an infallible assurance of faith, founded upon the divine truth of the promises of salvation,(f) the inward evidence of those graces unto which these promises are made,(g) the testimony of the Spirit of adoption witnessing with our spirits that we are the children of God:(h) which Spirit is the earnest of our inheritance, whereby we are sealed to the day of redemption.(i)<br \\><br \\>(e) Heb. 6:11, 19.<br \\>(f) Heb. 6:17, 18.<br \\>(g) II Pet. 1:4, 5, 10, 11; I John 2:3; I John 3:14; II Cor. 1:12.<br \\>(h) Rom. 8:15, 16.<br \\>(i) Eph. 1:13, 14; Eph. 4:30; II Cor. 1:21, 22",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVIII. Of  the Assurance of Grace and Salvation.",
      Question: "What is Section 3?",
      Answer:
        "III. This infallible assurance doth not so belong to the essence of faith, but that a true believer may wait long, and conflict with many difficulties before he be partaker of it:(k) yet, being enabled by the Spirit to know the things which are freely given him of God, he may without extraordinary revelation, in the right use of ordinary means, attain thereunto.(l) And therefore it is the duty of everyone to give all diligence to make his calling and election sure;(m) that thereby his heart may be enlarged in peace and joy in the Holy Ghost, in love and thankfulness to God, and in strength and cheerfulness in the duties of obedience, the proper fruits of this assurance:(n) so far is it from inclining men to looseness.(o)<br \\><br \\>(k) I John 5:13; Isa. 50:10; Mark 9:24; Ps. 88 throughout; Ps. 77 to ver. 12.<br \\>(l) I Cor. 2:12; I John 4:13; Heb. 6:11, 12; Eph. 3:17, 18, 19.<br \\>(m) II Pet. 1:10.<br \\>(n) Rom. 5:1, 2, 5; Rom. 14:17; Rom. 15:13; Eph. 1:3, 4; Ps. 4:6, 7; Ps. 119:32.<br \\>(o) I John 2:1, 2; Rom. 6:1, 2; Tit. 2:11, 12, 14; II Cor. 7:1; Rom. 8:1, 12; I John 3:2, 3; Ps. 130:4; I John 1:6, 7",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XVIII. Of  the Assurance of Grace and Salvation.",
      Question: "What is Section 4?",
      Answer:
        "IV. True believers may have the assurance of their salvation divers ways shaken, diminished, and intermitted; as, by negligence in preserving of it, by falling into some special sin, which woundeth the conscience and grieveth the Spirit; by some sudden or vehement temptation, by God’s withdrawing the light of His countenance, and suffering even such as fear Him to walk in darkness and to have no light:(p) yet are they never so utterly destitute of that seed of God, and life of faith, that love of Christ and the brethren, that sincerity of heart, and conscience of duty, out of which, by the operation of the Spirit, this assurance may, in due time, be revived;(q) and by the which, in the mean time, they are supported from utter despair.(r)<br \\><br \\>(p) Cant. 5:2, 3, 6; Ps. 51:8, 12, 14; Eph. 4:30, 31; Ps. 77:1 to 10; Matt. 26:69, 70, 71, 72; Ps. 31:22; Ps. 88 throughout; Isa. 50:10.<br \\>(q) I John 3:9; Luke 22:32; Job 13:15; Ps. 73:15; Ps. 51:8, 12; Isa. 50:10.<br \\>(r) Mic. 7:7, 8, 9; Jer. 32:40; Isa. 54:7, 8, 9, 10; Ps. 22:1; Ps. 88 throughout.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIX. Of  the Law of God.",
      Question: "What is Section 1?",
      Answer:
        "I. God gave to Adam a law, as a covenant of works, by which He bound him and all his posterity to personal, entire, exact, and perpetual obedience; promised life upon the fulfilling, and threatened death upon the breach of it: and endued him with power and ability to keep it.(a)<br \\><br \\>(a) Gen. 1:26, 27 with Gen. 2:17; Rom. 2:14, 15; Rom. 10:5; Rom. 5:12, 19; Gal. 3:10, 12; Eccles. 7:29; Job 28:28",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIX. Of  the Law of God.",
      Question: "What is Section 2?",
      Answer:
        "II. This law, after his fall, continued to be a perfect rule of righteousness, and, as such, was delivered by God upon Mount Sinai, in ten commandments, and written in two tables:(b) the four first commandments containing our duty towards God; and the other six our duty to man.(c)<br \\><br \\>(b) James 1:25; James 2:8, 10, 11, 12; Rom. 13:8, 9; Deut. 5:32; Deut. 10:4; Ex. 34:1.<br \\>(c) Matt. 22:37, 38, 39, 40",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIX. Of  the Law of God.",
      Question: "What is Section 3?",
      Answer:
        "III. Beside this law, commonly called moral, God was pleased to give to the people of Israel, as a church under age, ceremonial laws, containing several typical ordinances, partly of worship, prefiguring Christ, His graces, actions, sufferings, and benefits;(d) and partly holding forth divers instructions of moral duties.(e) All which ceremonial laws are now abrogated, under the new testament.(f)<br \\><br \\>(d) Heb. 9 chap.; Heb. 10:1; Gal. 4:1, 2, 3; Col. 2:17.<br \\>(e) I Cor. 5:7; II Cor. 6:17; Jude ver. 23.<br \\>(f) Col. 2:14, 16, 17; Dan. 9:27; Eph. 2:15, 16",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIX. Of  the Law of God.",
      Question: "What is Section 4?",
      Answer:
        "IV. To them also, as a body politic, He gave sundry judicial laws, which expired together with the State of that people; not obliging any other now, further than the general equity thereof may require.(g)<br \\><br \\>(g) Ex. 21 chap.; Ex. 22:1 to 29; Gen. 49:10 with I Pet. 2:13, 14; Matt. 5:17, with ver. 38, 39; I Cor. 9:8, 9, 10",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIX. Of  the Law of God.",
      Question: "What is Section 5?",
      Answer:
        "V. The moral law doth for ever bind all, as well justified persons as others, to the obedience thereof;(h) and that, not only in regard of the matter contained in it, but also in respect of the authority of God the Creator, who gave it:(i) neither doth Christ, in the Gospel, any way dissolve, but much strengthen this obligation.(k)<br \\><br \\>(h) Rom. 13:8, 9, 10; Eph. 6:2; I John 2:3, 4, 7, 8.<br \\>(i) James 2:10, 11.<br \\>(k) Matt. 5:17, 18, 19; James 2:8; Rom. 3:31",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIX. Of  the Law of God.",
      Question: "What is Section 6?",
      Answer:
        "VI. Although true believers be not under the law, as a covenant of works, to be thereby justified, or condemned;(l) yet is it of great use to them, as well as to others; in that, as a rule of life informing them of the will of God, and their duty, it directs, and binds them to walk accordingly;(m) discovering also the sinful pollutions of their nature, hearts, and lives;(n) so as, examining themselves thereby, they may come to further conviction of, humiliation for, and hatred against sin;(o) together with a clearer sight of the need they have of Christ, and the perfection of His obedience.(p) It is likewise of use to the regenerate, to restrain their corruptions, in that it forbids sin:(q) and the threatenings of it serve to show what even their sins deserve; and what afflictions, in this life, they may expect for them, although freed from the curse thereof threatened in the law.(r) The promises of it, in like manner, show them God’s approbation of obedience, and what blessings they may expect upon the performance thereof;(s) although not as due to them by the law, as a covenant of works.(t) So as, a man’s doing good, and refraining from evil, because the law encourageth to the one and deterreth from the other, is no evidence of his being under the law; and not under grace.(u)<br \\><br \\>(l) Rom. 6:14; Gal. 2:16; Gal. 3:13; Gal. 4:4, 5; Acts 13:39; Rom. 8:1.<br \\>(m) Rom. 7:12, 22, 25; Ps. 119:4, 5, 6; I Cor. 7:19; Gal. 5:14, 16, 18, 19, 20, 21, 22, 23.<br \\>(n) Rom. 7:7; Rom. 3:20.<br \\>(o) James 1:23, 24, 25; Rom. 7:9, 14, 24.<br \\>(p) Gal. 3:24; Rom. 7:24, 25; Rom. 8:3, 4.<br \\>(q) Jam. 2:11; Ps. 119:101, 104, 128.<br \\>(r) Ezra 9:13, 14; Ps. 89:30, 31, 32, 33, 34.<br \\>(s) Lev. 26:1 to 14 with II Cor. 6:16; Eph. 6:2, 3; Ps. 37:11 with Matt. 5:5; Ps. 19:11.<br \\>(t) Gal. 2:16; Luke 17:10.<br \\>(u) Rom. 6:12, 14; I Pet. 3:8, 9, 10, 11, 12, with Ps. 34:12, 13, 14, 15, 16; Heb. 12:28, 29",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XIX. Of  the Law of God.",
      Question: "What is Section 7?",
      Answer:
        "VII. Neither are the forementioned uses of the law contrary to the grace of the Gospel, but do sweetly comply with it;(w) the Spirit of Christ subduing and enabling the will of man to do that, freely and cheerfully, which the will of God, revealed in the law, requireth to be done.(x)<br \\><br \\>(w) Gal. 3:21.<br \\>(x) Ezek. 36:27; Heb. 8:10 with Jer. 31:33.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XX. Of  Christian Liberty, and Liberty of Conscience.",
      Question: "What is Section 1?",
      Answer:
        "I. The liberty which Christ hath purchased for believers under the Gospel consists in their freedom from the guilt of sin, and condemning wrath of God, the curse of the moral law;(a) and, in their being delivered from this present evil world, bondage to Satan, and dominion of sin;(b) from the evil of afflictions, the sting of death, the victory of the grace, and everlasting damnation;(c) as also, in their free access to God,(d) and their yielding obedience unto Him, not out of slavish fear, but a child-like love and willing mind.(e) All which were common also to believers under the law.(f) But, under the new testament, the liberty of Christians is further enlarged, in their freedom from the yoke of the ceremonial law, to which the Jewish Church was subjected;(g) and in greater boldness of access to the throne of grace,(h) and in fuller communications of the free Spirit of God, than believers under the law did ordinarily partake of.(i)<br \\><br \\>(a) Tit. 2:14; I Thess. 1:10; Gal. 3:13.<br \\>(b) Gal. 1:4; Col. 1:13; Acts 26:18; Rom. 6:14.<br \\>(c) Rom. 8:28; Ps. 119:71; I Cor. 15:54, 55, 56, 57; Rom. 8:1.<br \\>(d) Rom. 5:1, 2.<br \\>(e) Rom. 8:14, 15; I John 4:18.<br \\>(f) Gal. 3:9, 14.<br \\>(g) Gal. 4:1, 2, 3, 6, 7; Gal. 5:1; Acts 15:10, 11.<br \\>(h) Heb. 4:14, 16; Heb. 10:19, 20, 21, 22.<br \\>(i) John 7:38, 39; II Cor. 3:13, 17, 18",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XX. Of  Christian Liberty, and Liberty of Conscience.",
      Question: "What is Section 2?",
      Answer:
        "II. God alone is Lord of the conscience,(k) and hath left it free from the doctrines and commandments of men, which are in any thing contrary to His Word; or beside it, if matters of faith or worship.(l) So that, to believe such doctrines, or to obey such commands, out of conscience,(m) is to betray true liberty of conscience: and the requiring of an implicit faith, and an absolute and blind obedience is to destroy liberty of conscience, and reason also.(n)<br \\><br \\>(k) Jam. 4:12; Rom. 14:4.<br \\>(l) Acts 4:19; Acts 5:29; I Cor. 7:23; Matt. 23:8, 9, 10; II Cor. 1:24; Matt. 15:9.<br \\>(m) Col. 2:20, 22, 23; Gal. 1:10; Gal. 2:4, 5; Gal. 5:1.<br \\>(n) Rom. 10:17; Rom. 14:23; Isa. 8:20; Acts 17:11; John 4:22; Hos. 5:11; Rev. 13:12, 16, 17; Jer. 8:9",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XX. Of  Christian Liberty, and Liberty of Conscience.",
      Question: "What is Section 3?",
      Answer:
        "III. They who, upon pretence of Christian liberty, do practice any sin, or cherish any lust, do thereby destroy the end of Christian liberty, which is, that being delivered out of the hands of our enemies, we might serve the Lord, without fear, in holiness and righteousness before Him, all the days of our life.(o)<br \\><br \\>(o) Gal. 5:13; I Pet. 2:16; II Pet. 2:19; John 8:34; Luke 1:74, 75",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XX. Of  Christian Liberty, and Liberty of Conscience.",
      Question: "What is Section 4?",
      Answer:
        "IV. And because the powers which God hath ordained, and the liberty which Christ hath purchased, are not intended by God to destroy, but mutually to uphold and preserve one another; they who, upon pretence of Christian liberty, shall oppose any lawful power, or the lawful exercise of it, whether it be civil or ecclesiastical, resist the ordinance of God.(p) And, for their publishing of such opinions, or maintaining of such practices, as are contrary to the light of nature, or to the known principles of Christianity, whether concerning faith, worship, or conversation; or, to the power of godliness; or, such erroneous opinions or practices, as either in their own nature, or in the manner of publishing or maintaining them, are destructive to the external peace and order which Christ hath established in the Church, they may lawfully be called to account, and proceeded against by the censures of the Church,(q) and by the power of the civil magistrate.(r)<br \\><br \\>(p) Matt. 12:25; I Pet. 2:13, 14, 16; Rom. 13:1 to 8; Heb. 13:17.<br \\>(q) Rom. 1:32 with I Cor. 5:1, 5, 11, 13; II John ver. 10, 11, and II Thess. 3:14, and I Tim. 6:3, 4, 5, and Tit. 1:10, 11, 13, and Tit. 3:10 with Matt. 18:15, 16, 17; I Tim. 1:19, 20; Rev. 2:2, 14, 15, 20; Rev. 3:9.<br \\>(r) Deut. 13:6 to 12; Rom. 13:3, 4 with II John ver. 10, 11; Ezra 7:23, 25, 26, 27, 28; Rev. 17:12, 16, 17; Neh. 13:15, 17, 21, 22, 25, 30; II Kings 23:5, 6, 9, 20, 21; II Chron. 34:33; II Chron. 15:12, 13, 16; Dan. 3:29; I Tim. 2:2; Isa. 49:23; Zech. 13:2, 3.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXI. Of  Religious Worship and the Sabbath-day.",
      Question: "What is Section 1?",
      Answer:
        "I. The light of nature showeth that there is a God, who hath lordship and sovereignty over all, is good, and doth good unto all, and is therefore to be feared, loved, praised, called upon, trusted in, and served, with all the heart, and with all the soul, and with all the might.(a) But the acceptable way of worshipping the true God is instituted by Himself, and so limited by His own revealed will, that He may not be worshipped according to the imaginations and devices of men, or the suggestions of Satan, under any visible representation, or any other way not prescribed in the holy Scripture.(b)<br \\><br \\>(a) Rom. 1:20; Acts 17:24; Ps. 119:68; Jer. 10:7; Ps. 31:23; Ps. 18:3; Rom. 10:12; Ps. 62:8; Josh. 24:14; Mark 12:33.<br \\>(b) Deut. 12:32; Matt. 15:9; Acts 17:25; Matt. 4:9, 10; Deut. 4:15 to 20; Exod. 20:4, 5, 6; Col. 2:23",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXI. Of  Religious Worship and the Sabbath-day.",
      Question: "What is Section 2?",
      Answer:
        "II. Religious worship is to be given to God, the Father, Son, and Holy Ghost; and to Him alone;(c) not to angels, saints, or any other creature:(d) and since the fall, not without a Mediator; nor in the mediation of any other but of Christ alone.(e)<br \\><br \\>(c) Matt. 4:10 with John 5:23 and II Cor. 13:14.<br \\>(d) Col. 2:18, Rev. 19:10; Rom. 1:25.<br \\>(e) John 14:6; I Tim. 2:5; Eph. 2:18; Col. 3:17",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXI. Of  Religious Worship and the Sabbath-day.",
      Question: "What is Section 3?",
      Answer:
        "III. Prayer, with thanksgiving, being one special part of religious worship,(f) is by God required of all men:(g) and that it may be accepted, it is to be made in the name of the Son,(h) by the help of His Spirit,(i) according to His will,(k) with understanding, reverence, humility, fervency, faith, love, and perseverance;(l) and, if vocal, in a known tongue.(m)<br \\><br \\>(f) Phil. 4:6.<br \\>(g) Ps. 65:2.<br \\>(h) John 14:13, 14; I Pet. 2:5.<br \\>(i) Rom. 8:26.<br \\>(k) I John 5:14.<br \\>(l) Ps. 47:7; Eccles. 5:1, 2; Heb. 12:28; Gen. 18:27; James 5:16; James 1:6, 7; Mark 11:24; Matt. 6:12, 14, 15; Col. 4:2; Eph. 6:18.<br \\>(m) I Cor. 14:14",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXI. Of  Religious Worship and the Sabbath-day.",
      Question: "What is Section 4?",
      Answer:
        "IV. Prayer is to be made for things lawful;(n) and for all sorts of men living, or that shall live hereafter:(o) but not for the dead,(p) nor for those of whom it may be known that they have sinned the sin unto death.(q)<br \\><br \\>(n) I John 5:14.<br \\>(o) I Tim. 2:1, 2; John 17:20; II Sam. 7:29; Ruth 4:12.<br \\>(p) II Sam. 12:21, 22, 23 with Luke 16:25, 26; Rev. 14:13.<br \\>(q) I John 5:16",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXI. Of  Religious Worship and the Sabbath-day.",
      Question: "What is Section 5?",
      Answer:
        "V. The reading of the Scriptures with godly fear,(r) the sound preaching(s) and conscionable hearing of the Word, in obedience unto God, with understanding, faith and reverence;(t) singing of psalms with grace in the heart;(u) as also, the due administration and worthy receiving of the sacraments instituted by Christ; are all parts of the ordinary religious worship of God:(w) beside religious oaths,(x) vows,(y) solemn fastings,(z) and thanksgivings, upon special occasions,(a) which are, in their several times and seasons, to be used in a holy and religious manner.(b)<br \\><br \\>(r) Acts 15:21; Rev. 1:3.<br \\>(s) II Tim. 4:2.<br \\>(t) James 1:22; Acts 10:33; Matt. 13:19; Heb. 4:2; Isa. 66:2.<br \\>(u) Col. 3:16; Eph. 5:19; James 5:13.<br \\>(w) Matt. 28:19; I Cor. 11:23 to 29; Acts 2:42.<br \\>(x) Deut. 6:13 with Neh. 10:29.<br \\>(y) Isa. 19:21 with Eccles. 5:4, 5.<br \\>(z) Joel 2:12; Esther 4:16; Matt. 9:15; I Cor. 7:5.<br \\>(a) Ps. 107 throughout; Esther 9:22.<br \\>(b) Heb. 12:28",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXI. Of  Religious Worship and the Sabbath-day.",
      Question: "What is Section 6?",
      Answer:
        "VI. Neither prayer, nor any other part of religious worship, is now under the Gospel either tied unto, or made more acceptable by any place in which it is performed, or towards which it is directed:(c) but God is to be worshipped everywhere,(d) in spirit and truth;(e) as in private families(f) daily,(g) and in secret each one by himself;(h) so, more solemnly, in the public assemblies, which are not carelessly or wilfully to be neglected, or forsaken, when God, by His Word or providence, calls thereunto.(i)<br \\><br \\>(c) John 4:21.<br \\>(d) Mal. 1:11; I Tim. 2:8.<br \\>(e) John 4:23, 24.<br \\>(f) Jer. 10:25; Deut. 6:6, 7; Job 1:5; II Sam. 6:18, 20; I Pet. 3:7; Acts 10:2.<br \\>(g) Matt. 6:11.<br \\>(h) Matt. 6:6; Eph. 6:18.<br \\>(i) Isa. 56:6, 7; Heb. 10:25; Prov. 1:20, 21, 24; Prov. 8:34; Acts 13:42; Luke 4:16; Acts 2:42",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXI. Of  Religious Worship and the Sabbath-day.",
      Question: "What is Section 7?",
      Answer:
        "VII. As it is the law of nature, that, in general, a due proportion of time be set apart for the worship of God; so, in His Word, by a positive, moral, and perpetual commandment, binding all men, in all ages, He hath particularly appointed one day in seven, for a Sabbath, to be kept holy unto Him:(k) which, from the beginning of the world to the resurrection of Christ, was the last day of the week; and, from the resurrection of Christ, was changed into the first day of the week,(l) which, in Scripture, is called the Lord’s Day,(m) and is to be continued to the end of the world, as the Christian Sabbath.(n)<br \\><br \\>(k) Exod. 20:8, 10, 11; Isa. 56:2, 4, 6, 7.<br \\>(l) Gen. 2:2, 3; I Cor. 16:1, 2; Acts 20:7.<br \\>(m) Rev. 1:10.<br \\>(n) Exod. 20:8, 10, with Matt. 5:17, 18",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXI. Of  Religious Worship and the Sabbath-day.",
      Question: "What is Section 8?",
      Answer:
        "VIII. This Sabbath is then kept holy unto the Lord, when men, after a due preparing of their hearts, and ordering of their common affairs beforehand, do not only observe an holy rest, all the day, from their own works, words, and thoughts about their worldly employments and recreations,(o) but also are taken up the whole time in the public and private exercises of His worship, and in the duties of necessity and mercy.(p)<br \\><br \\>(o) Exod. 20:8; Exod. 16:23, 25, 26, 29, 30; Exod. 31:15, 16, 17; Isa. 58:13; Neh. 13:15, 16, 17, 18, 19, 21, 22.<br \\>(p) Isa. 58:13; Matt. 12:1 to 13.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXII. Of  Lawful Oaths and Vows.",
      Question: "What is Section 1?",
      Answer:
        "I. A lawful oath is a part of religious worship,(a) wherein, upon just occasion, the person swearing solemnly calleth God to witness what he asserteth, or promiseth, and to judge him according to the truth or falsehood of what he sweareth.(b)<br \\><br \\>(a) Deut. 10:20.<br \\>(b) Exod. 20:7; Lev. 19:12; II Cor. 1:23, II Chron. 6:22, 23",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXII. Of  Lawful Oaths and Vows.",
      Question: "What is Section 2?",
      Answer:
        "II. The name of God only is that by which men ought to swear; and therein it is to be used with all holy fear and reverence.(c) Therefore, to swear vainly or rashly, by that glorious and dreadful Name; or, to swear at all by any other thing, is sinful, and to be abhorred.(d) Yet, as in matters of weight and moment, an oath is warranted by the Word of God, under the New Testament, as well as under the Old;(e) so a lawful oath, being imposed by lawful authority, in such matters ought to be taken.(f)<br \\><br \\>(c) Deut. 6:13.<br \\>(d) Exod. 20:7; Jer. 5:7; Matt. 5:34, 37; James 5:12.<br \\>(e) Heb. 6:16; II Cor. 1:23; Isa. 65:16.<br \\>(f) I Kings 8:31; Neh. 13:25; Ezra 10:5",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXII. Of  Lawful Oaths and Vows.",
      Question: "What is Section 3?",
      Answer:
        "III. Whosoever taketh an oath ought duly to consider the weightiness of so solemn an act; and therein to avouch nothing, but what he is fully persuaded is the truth.(g) Neither may any man bind himself by oath to anything but what is good and just, and what he believeth so to be, and what he is able and resolved to perform.(h) Yet is it a sin to refuse an oath touching anything that is good and just, being imposed by lawful authority.(i)<br \\><br \\>(g) Exod. 20:7; Jer. 4:2.<br \\>(h) Gen. 24:2, 3, 5, 6, 8, 9.<br \\>(i) Num. 5:19, 21; Neh. 5:12; Exod. 22:7, 8, 9, 10, 11",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXII. Of  Lawful Oaths and Vows.",
      Question: "What is Section 4?",
      Answer:
        "IV. An oath is to be taken in the plain and common sense of the words, without equivocation, or mental reservation.(k) It cannot oblige to sin: but in anything not sinful, being taken, it binds to performance, although to a man’s own hurt.(l) Not is it to be violated, although made to heretics, or infidels.(m)<br \\><br \\>(k) Jer. 4:2; Ps. 24:4.<br \\>(l) I Sam. 25:22, 32, 33, 34; Ps. 15:4.<br \\>(m) Ezek. 17:16, 18, 19; Josh. 9:18, 19 with II Sam. 21:1",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXII. Of  Lawful Oaths and Vows.",
      Question: "What is Section 5?",
      Answer:
        "V. A vow is of the like nature with a promissory oath, and ought to be made with the like religious care, and to be performed with the like faithfulness.(n)<br \\><br \\>(n) Isa. 19:21; Eccles. 5:4, 5, 6; Ps. 61:8; Ps. 66:13, 14",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXII. Of  Lawful Oaths and Vows.",
      Question: "What is Section 6?",
      Answer:
        "VI. It is not to be made to any creature, but to God alone:(o) and that it may be accepted, it is to be made voluntarily, out of faith, and conscience of duty, in way of thankfulness for mercy received, or for the obtaining of what we want; whereby we more strictly bind ourselves to necessary duties; or to other things, so far and so long as they may fitly conduce thereunto.(p)<br \\><br \\>(o) Ps. 76:11; Jer. 44:25, 26.<br \\>(p) Deut. 23:21, 22, 23; Ps. 50:14; Gen. 28:20, 21, 22; I Sam. 1:11; Ps. 66:13, 14; Ps. 132:2, 3, 4, 5",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXII. Of  Lawful Oaths and Vows.",
      Question: "What is Section 7?",
      Answer:
        "VII. No man may vow to do anything forbidden in the Word of God, or what would hinder any duty therein commanded, or which is not in his own power, and for the performance whereof he hath no promise of ability from God.(q) In which respects, Popish monastical vows of perpetual single life, professed poverty, and regular obedience, are so far from being degrees of higher perfection, that they are superstitious and sinful snares, in which no Christian may entangle himself.(r)<br \\><br \\>(q) Acts 23:12, 14; Mark 6:26; Numb. 30:5, 8, 12, 13.<br \\>(r) Matt. 19:11, 12; I Cor. 7:2, 9; Eph. 4:28; I Peter 4:2; I Cor. 7:23.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIII. Of  the Civil Magistrate.",
      Question: "What is Section 1?",
      Answer:
        "I. God, the supreme Lord and King of all the world, hath ordained civil magistrates, to be, under Him, over the people, for His own glory, and the public good: and, to this end, hath armed them with the power of the sword, for the defence and encouragement of them that are good, and for the punishment of evil doers.(a)<br \\><br \\>(a) Rom. 13:1, 2, 3, 4; I Pet. 2:13, 14",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIII. Of  the Civil Magistrate.",
      Question: "What is Section 2?",
      Answer:
        "II. It is lawful for Christians to accept and execute the office of a magistrate, when called thereunto;(b) in the managing whereof, as they ought especially to maintain piety, justice, and peace, according to the wholesome laws of each commonwealth;(c) so for that end, they may lawfully now, under the New Testament, wage war, upon just and necessary occasion.(d)<br \\><br \\>(b) Prov. 8:15, 16; Rom. 13:1, 2, 4.<br \\>(c) Ps. 2:10, 11, 12; I Tim. 2:2; Ps. 82:3, 4; II Sam. 23:3; I Pet. 2:13.<br \\>(d) Luke 3:14; Rom. 13:4; Matt. 8:9, 10; Acts 10:1, 2; Rev. 17:14, 16",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIII. Of  the Civil Magistrate.",
      Question: "What is Section 3?",
      Answer:
        "III. The civil magistrate may not assume to himself the administration of the Word and sacraments, or the power of the keys of the kingdom of heaven:(e) yet he hath authority, and it is his duty, to take order, that unity and peace be. preserved in the Church, that the truth of God be kept pure and entire; that all blasphemies and heresies be suppressed; all corruptions and abuses in worship and discipline prevented or reformed; and all the ordinances of God duly settled, administrated, and observed.(f) For the better effecting whereof, he hath power to call synods, to be present at them, and to provide that whatsoever is transacted in them be according to the mind of God.(g)<br \\><br \\>(e) II Chron. 26:18 with Matt. 18:17 and Matt. 16:19; I Cor. 12:28, 29; Eph. 4:11, 12; I Cor. 4:1, 2; Rom. 10:15; Heb. 5:4.<br \\>(f) Isa. 49:23; Ps. 122:9; Ezra 7:23, 25, 26, 27, 28; Lev. 24:16; Deut. 13:5, 6, 12; I Kings 18:4; I Chron. 13:1 to 9; II Kings 23:1 to 26; II Chron. 34:33; II Chron. 15:12, 13.<br \\>(g) II Chron. 19:8, 9, 10, 11; II Chron. 29 and 30; Matt. 2:4, 5",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIII. Of  the Civil Magistrate.",
      Question: "What is Section 4?",
      Answer:
        "IV. It is the duty of people to pray for magistrates,(h) to honour their persons,(i) to pay them tribute or other dues,(k) to obey their lawful commands, and to be subject to their authority, for conscience’ sake.(l) Infidelity, or difference in religion, doth not make void the magistrates’ just and legal authority, nor free the people from their due obedience to them:(m) from which ecclesiastical persons are not exempted,(n) much less hath the Pope any power and jurisdiction over them in their dominions, or over any of their people; and, least of all, to deprive them of their dominions, or lives, if he shall judge them to be heretics, or upon any other pretence whatsoever.(o)<br \\><br \\>(h) I Tim. 2:1, 2.<br \\>(i) I Pet. 2:17.<br \\>(k) Rom. 13:6, 7.<br \\>(l) Rom. 13:5; Tit. 3:1.<br \\>(m) I Pet. 2:13, 14, 16.<br \\>(n) Rom. 13:1; I Kings 2:35; Acts 25:9, 10, 11; II Pet. 2:1, 10, 11; Jude ver. 8, 9, 10, 11.<br \\>(o) II Thess. 2:4; Rev. 13:15, 16, 17.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIV. Of  Marriage and Divorce.",
      Question: "What is Section 1?",
      Answer:
        "I. Marriage is to be between one man and one woman: neither is it lawful for any man to have more than one wife, nor for any woman to have more than one husband; at the same time.(a)<br \\><br \\>(a) Gen. 2:24; Matt. 19:5, 6; Prov. 2:17",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIV. Of  Marriage and Divorce.",
      Question: "What is Section 2?",
      Answer:
        "II. Marriage was ordained for the mutual help of husband and wife,(b) for the increase of mankind with a legitimate issue, and of the Church with an holy seed;(c) and for preventing of uncleanness.(d)<br \\><br \\>(b) Gen. 2:18.<br \\>(c) Mal. 2:15.<br \\>(d) I Cor. 7:2, 9",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIV. Of  Marriage and Divorce.",
      Question: "What is Section 3?",
      Answer:
        "III. It is lawful for all sorts of people to marry, who are able with judgment to give their consent.(e) Yet is it the duty of Christians to marry only in the Lord:(f) and therefore such as profess the true reformed religion should not marry with infidels, papists, or other idolaters: neither should such as are godly be unequally yoked, by marrying with such as are notoriously wicked in their life, or maintain damnable heresies.(g)<br \\><br \\>(e) Heb. 13:4; I Tim. 4:3; I Cor. 7:36, 37, 38; Gen. 24:57, 58.<br \\>(f) I Cor. 7:39.<br \\>(g) Gen. 34:14; Exod. 34:16; Deut. 7:3, 4; I Kings 11:4; Neh. 13:25, 26, 27; Mal. 2:11, 12; II Cor. 6:14",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIV. Of  Marriage and Divorce.",
      Question: "What is Section 4?",
      Answer:
        "IV. Marriage ought not to be within the degrees of consanguinity or affinity forbidden by the Word;(h) nor can such incestuous marriages ever be made lawful by any law of man or consent of parties, so as those persons may live together as man and wife.(i) The man may not marry any of his wife’s kindred nearer in blood than he may of his own; nor the woman of her husband’s kindred nearer in blood than of her own.(k)<br \\><br \\>(h) Lev. 18 ch.; I Cor. 5:1; Amos 2:7.<br \\>(i) Mark 6:18; Lev. 18:24, 25, 26, 27, 28.<br \\>(k) Lev. 20:19, 20, 21",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIV. Of  Marriage and Divorce.",
      Question: "What is Section 5?",
      Answer:
        "V. Adultery or fornication committed after a contract, being detected before marriage, giveth just occasion to the innocent party to dissolve that contract.(l) In the case of adultery after marriage, it is lawful for the innocent party to sue out a divorce:(m) and, after the divorce, to marry another, as if the offending party were dead.(n)<br \\><br \\>(l) Matt. 1:18, 19, 20.<br \\>(m) Matt. 5:31, 32.<br \\>(n) Matt. 19:9; Rom. 7:2, 3",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIV. Of  Marriage and Divorce.",
      Question: "What is Section 6?",
      Answer:
        "VI. Although the corruption of man be such as is apt to study arguments unduly to put asunder those whom God hath joined together in marriage: yet nothing but adultery, or such wilful desertion as can no way be remedied by the Church or civil magistrate, is cause sufficient of dissolving the bond of marriage:(o) wherein, a public and orderly course of proceeding is to be observed; and the persons concerned in it not left to their own wills and discretion, in their own case.(p)<br \\><br \\>(o) Matt. 19:8, 9; I Cor. 7:15; Matt. 19:6.<br \\>(p) Deut. 24:1, 2, 3, 4.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXV. Of  the Church.",
      Question: "What is Section 1?",
      Answer:
        "I. The catholic or universal Church which is invisible, consists of the whole number of the elect, that have been, are, or shall be gathered into one, under Christ the Head thereof; and is the spouse, the body, the fulness of Him that filleth all in all.(a)<br \\><br \\>(a) Eph. 1:10, 22, 23; Eph. 5:23, 27, 32; Col. 1:18",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXV. Of  the Church.",
      Question: "What is Section 2?",
      Answer:
        "II. The visible Church, which is also catholic or universal under the Gospel (not confined to one nation as before under the law), consists of all those throughout the world that profess the true religion;(b) and of their children:(c) and is the kingdom of the Lord Jesus Christ,(d) the house and family of God,(e) out of which there is no ordinary possibility of salvation.(f)<br \\><br \\>(b) I Cor. 1:2; I Cor. 12:12, 13; Ps. 2:8; Rev. 7:9; Rom. 15:9, 10, 11, 12.<br \\>(c) I Cor. 7:14; Acts 2:39; Ezek. 16:20, 21; Rom. 11:16; Gen. 3:15; Gen. 17:7.<br \\>(d) Matt. 13:47; Isa. 9:7.<br \\>(e) Eph. 2:19; Eph. 3:15.<br \\>(f) Acts 2:47",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXV. Of  the Church.",
      Question: "What is Section 3?",
      Answer:
        "III. Unto this catholic visible Church Christ hath given the ministry, oracles, and ordinances of God, for the gathering and perfecting of the saints, in this life, to the end of the world: and doth by His own presence and Spirit, according to His promise, make them effectual thereunto.(g)<br \\><br \\>(g) I Cor. 12:28; Eph. 4:11, 12, 13; Matt. 28:19, 20; Isa. 59:21",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXV. Of  the Church.",
      Question: "What is Section 4?",
      Answer:
        "IV. This catholic Church hath been sometimes more, sometimes less visible.(h) And particular Churches, which are members thereof, are more or less pure, according as the doctrine of the Gospel is taught and embraced, ordinances administered, and public worship performed more or less purely in them.(i)<br \\><br \\>(h) Rom. 11:3, 4; Rev. 12:6, 14.<br \\>(i) Rev. 2 and 3; I Cor. 5:6, 7",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXV. Of  the Church.",
      Question: "What is Section 5?",
      Answer:
        "V. The purest Churches under heaven are subject both to mixture and error:(k) and some have so degenerated, as to become no Churches of Christ, but synagogues of Satan.(l) Nevertheless, there shall be always a Church on earth, to worship God according to His will.(m)<br \\><br \\>(k) I Cor. 13:12; Rev. 2 and 3; Matt. 13:24, 25, 26, 27, 28, 29, 30, 47.<br \\>(l) Rev. 18:2; Rom. 11:18, 19, 20, 21, 22.<br \\>(m) Matt. 16:18; Ps. 72:17; Ps. 102:28; Matt. 28:19, 20",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXV. Of  the Church.",
      Question: "What is Section 6?",
      Answer:
        "VI. There is no other head of the Church, but the Lord Jesus Christ;(n) nor can the Pope of Rome, in any sense, be head thereof; but is that Antichrist, that man of sin, and son of perdition, that exalteth himself, in the Church, against Christ and all that is called God.(o)<br \\><br \\>(n) Col. 1:18; Eph. 1:22.<br \\>(o) Matt. 23:8, 9, 10; II Thess. 2:3, 4, 8, 9; Rev. 13:6.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVI. Of  the Communion of the Saints.",
      Question: "What is Section 1?",
      Answer:
        "I. All saints, that are united to Jesus Christ their Head by His Spirit and by faith, have fellowship with Him in His grace, sufferings, death, resurrection, and glory:(a) and, being united to one another in love, they have communion in each other’s gifts and graces,(b) and are obliged to the performance of such duties, public and private, as do conduce to their mutual good, both in the inward and outward man.(c)<br \\><br \\>(a) John 1:3; Eph. 3:16, 17, 18, 19; John 1:16; Eph. 2:5, 6; Phil. 3:10; Rom. 6:5, 6; II Tim. 2:12.<br \\>(b) Eph. 4:15, 16; I Cor. 12:7; I Cor. 3:21, 22, 23; Col. 2:19.<br \\>(c) I Thess. 5:11, 14; Rom. 1:11, 12, 14; I John 3:16, 17, 18; Gal. 6:10",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVI. Of  the Communion of the Saints.",
      Question: "What is Section 2?",
      Answer:
        "II. Saints by profession are bound to maintain a holy fellowship and communion in the worship of God; and in performing such other spiritual services as tend to their mutual edification;(d) as also in relieving each other in outward things, according to their several abilities, and necessities. Which communion, as God offereth opportunity, is to be extended unto all those who, in every place, call upon the name of the Lord Jesus.(e)<br \\><br \\>(d) Heb. 10:24, 25; Acts 2:42, 46; Isa. 2:3; I Cor. 11:20.<br \\>(e) Acts 2:44, 45; I John 3:17; II Cor. 8 and 9 chapters; Acts 11:29, 30",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVI. Of  the Communion of the Saints.",
      Question: "What is Section 3?",
      Answer:
        "III. This communion which the saints have with Christ, doth not make them, in any wise, partakers of the substance of His Godhead; or to be equal with Christ, in any respect: either of which to affirm is impious and blasphemous.(f) Nor doth their communion one with another, as saints, take away, or infringe the title or propriety which each man hath in his goods and possessions.(g)<br \\><br \\>(f) Col. 1:18, 19; I Cor. 8:6; Isa. 42:8; I Tim. 6:15, 16; Ps. 45:7, with Heb. 1:8, 9.<br \\>(g) Exod. 20:15; Eph. 4:28; Acts 5:4.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVII. Of  the Sacraments.",
      Question: "What is Section 1?",
      Answer:
        "I. Sacraments are holy signs and seals of the covenant of grace,(a) immediately instituted by God,(b) to represent Christ and His benefits; and to confirm our interest in Him;(c) as also, to put a visible difference between those that belong unto the Church, and the rest of the world;(d) and solemnly to engage them to the service of God in Christ, according to His Word.(e)<br \\><br \\>(a) Rom. 4:11; Gen. 17:7, 10.<br \\>(b) Matt. 28:19; I Cor. 11:23.<br \\>(c) I Cor. 10:16; I Cor. 11:25, 26; Gal. 3:17.<br \\>(d) Rom. 15:8; Exod. 12:48; Gen. 34:14.<br \\>(e) Rom. 6:3, 4; I Cor. 10:16, 21",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVII. Of  the Sacraments.",
      Question: "What is Section 2?",
      Answer:
        "II. There is in every sacrament a spiritual relation, or sacramental union, between the sign and the thing signified: whence it comes to pass, that the names and effects of the one are attributed to the other.(f)<br \\><br \\>(f) Gen. 17:10; Matt. 26:27, 28; Tit. 3:5",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVII. Of  the Sacraments.",
      Question: "What is Section 3?",
      Answer:
        "III. The grace which is exhibited in or by the sacraments rightly used, is not conferred by any power in them; neither doth the efficacy of a sacrament depend upon the piety or intention of him that doth administer it:(g) but upon the work of the Spirit,(h) and the word of institution, which contains, together with a precept authorizing the use thereof, a promise of benefit to worthy receivers.(i)<br \\><br \\>(g) Rom. 2:28, 29; I Pet. 3:21.<br \\>(h) Matt. 3:11; I Cor. 12:13.<br \\>(i) Matt. 26:27, 28; Matt. 28:19, 20",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVII. Of  the Sacraments.",
      Question: "What is Section 4?",
      Answer:
        "IV. There are only two sacraments ordained by Christ our Lord in the Gospel; that is to say, Baptism and the Supper of the Lord: neither of which may be dispensed by any but by a minister of the Word lawfully ordained.(k)<br \\><br \\>(k) Matt. 28:19; I Cor. 11:20, 23, I Cor. 4:1; Heb. 5:4",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVII. Of  the Sacraments.",
      Question: "What is Section 5?",
      Answer:
        "V. The sacraments of the Old Testament, in regard to the spiritual things thereby signified and exhibited, were, for substance, the same with those of the New.(l)<br \\><br \\>(l) I Cor. 10:1, 2, 3, 4.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVIII. Of  Baptism.",
      Question: "What is Section 1?",
      Answer:
        "I. Baptism is a sacrament of the New Testament, ordained by Jesus Christ,(a) not only for the solemn admission of the party baptized into the visible Church;(b) but also, to be unto him a sign and seal of the covenant of grace,(c) of his ingrafting into Christ,(d) of regeneration,(e) of remission of sins,(f) and of his giving up unto God through Jesus Christ, to walk in the newness of life.(g) Which sacrament is, by Christ’s own appointment, to be continued in His Church until the end of the world.(h)<br \\><br \\>(a) Matt. 28:19.<br \\>(b) I Cor. 12:13.<br \\>(c) Rom. 4:11 with Col. 2:11, 12.<br \\>(d) Gal. 3:27; Rom. 6:5.<br \\>(e) Tit. 3:5.<br \\>(f) Mark 1:4.<br \\>(g) Rom. 6:3, 4.<br \\>(h) Matt. 28:19, 20",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVIII. Of  Baptism.",
      Question: "What is Section 2?",
      Answer:
        "II. The outward element to be used in this sacrament is water, wherewith the party is to be baptized, in the name of the Father, and of the Son, and of the Holy Ghost, by a minister of the Gospel, lawfully called thereunto.(i)<br \\><br \\>(i) Matt. 3:11; John 1:33; Matt. 28:19, 20",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVIII. Of  Baptism.",
      Question: "What is Section 3?",
      Answer:
        "III. Dipping of the person into the water is not necessary; but Baptism is rightly administered by pouring or sprinkling water upon the person.(k)<br \\><br \\>(k) Heb. 9:10, 19, 20, 21, 22; Acts 2:41; Acts 16:33; Mark 7:4",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVIII. Of  Baptism.",
      Question: "What is Section 4?",
      Answer:
        "IV. Not only those that do actually profess faith in and obedience unto Christ,(l) but also the infants of one or both believing parents, are to be baptized.(m)<br \\><br \\>(l) Mark 16:15, 16; Acts 8:37, 38.<br \\>(m) Gen. 17:7, 9, 10 with Gal. 3:9, 14 and Col. 2:11, 12 & Acts 2:38, 39 & Rom. 4:11, 12; I Cor. 7:14; Matt. 28:19; Mark 10:13, 14, 15, 16; Luke 18:15",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVIII. Of  Baptism.",
      Question: "What is Section 5?",
      Answer:
        "V. Although it be a great sin to contemn or neglect this ordinance,(n) yet grace and salvation are not so inseparably annexed unto it, as that no person can be regenerated or saved without it;(o) or, that all that are baptized are undoubtedly regenerated.(p)<br \\><br \\>(n) Luke 7:30 with Exod. 4:24, 25, 26.<br \\>(o) Rom. 4:11; Acts 10:2, 4, 22, 31, 45, 47.<br \\>(p) Acts 8:13, 23",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVIII. Of  Baptism.",
      Question: "What is Section 6?",
      Answer:
        "VI. The efficacy of Baptism is not tied to that moment of time wherein it is administered;(q) yet notwithstanding, by the right use of this ordinance, the grace promised is not only offered, but really exhibited and conferred, by the Holy Ghost, to such (whether of age or infants) as that grace belongeth unto, according to the counsel of God’s own will, in His appointed time.(r)<br \\><br \\>(q) John 3:5, 8.<br \\>(r) Gal. 3:27; Titus 3:5; Eph. 5:25, 26; Acts 2:38, 41",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXVIII. Of  Baptism.",
      Question: "What is Section 7?",
      Answer:
        "VII. The sacrament of Baptism is but once to be administered unto any person.(s)<br \\><br \\>(s) Titus 3:5.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIX. Of  the Lord’s Supper.",
      Question: "What is Section 1?",
      Answer:
        "I. Our Lord Jesus, in the night wherein He was betrayed, instituted the sacrament of His body and blood, called the Lord’s Supper, to be observed in His Church, unto the end of the world, for the perpetual remembrance of the sacrifice of Himself in His death; the sealing all benefits thereof unto true believers, their spiritual nourishment and growth in Him, their further engagement in and to all duties which they owe unto Him; and to be a bond and pledge of their communion with Him, and with each other, as members of His mystical body.(a)<br \\><br \\>(a) I Cor. 11:23, 24, 25, 26; I Cor. 10:16, 17, 21; I Cor. 12:13",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIX. Of  the Lord’s Supper.",
      Question: "What is Section 2?",
      Answer:
        "II. In this sacrament, Christ is not offered up to His Father; nor any real sacrifice made at all for remission of sins of the quick or dead;(b) but only a commemoration of that one offering up of Himself, by Himself, upon the cross, once for all: and a spiritual oblation of all possible praise unto God for the same:(c) so that the Popish sacrifice of the mass (as they call it) is most abominably injurious to Christ’s one, only sacrifice, the alone propitiation for all the sins of His elect.(d)<br \\><br \\>(b) Heb. 9:22, 25, 26, 28.<br \\>(c) I Cor. 11:24, 25, 26; Matt. 26:26, 27.<br \\>(d) Heb. 7:23, 24, 27; Heb. 10:11, 12, 14, 18",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIX. Of  the Lord’s Supper.",
      Question: "What is Section 3?",
      Answer:
        "III. The Lord Jesus hath, in this ordinance, appointed His ministers to declare His word of institution to the people; to pray, and bless the elements of bread and wine, and thereby to set them apart from a common to a holy use; and to take and break the bread, to take the cup, and (they communicating also themselves) to give both to the communicants;(e) but to none who are not then present in the congregation.(f)<br \\><br \\>(e) Matt. 26:26, 27, 28 & Mark 14:22, 23, 24 and Luke 22:19, 20 with I Cor. 11:23, 24, 25, 26.<br \\>(f) Acts. 20:7; I Cor. 11:20",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIX. Of  the Lord’s Supper.",
      Question: "What is Section 4?",
      Answer:
        "IV. Private masses, or receiving this sacrament by a priest or any other alone;(g) as likewise, the denial of the cup to the people,(h) worshipping the elements, the lifting them up or carrying them about for adoration, and the reserving them for any pretended religious use; are all contrary to the nature of this sacrament, and to the institution of Christ.(i)<br \\><br \\>(g) I Cor. 10:16.<br \\>(h) Mark 14:23; I Cor. 11:25, 26, 27, 28, 29.<br \\>(i) Matt. 15:9",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIX. Of  the Lord’s Supper.",
      Question: "What is Section 5?",
      Answer:
        "V. The outward elements in this sacrament, duly set apart to the uses ordained by Christ, have such relation to Him crucified, as that, truly, yet sacramentally only, they are sometimes called by the name of the things they represent, to wit, the body and blood of Christ;(k) albeit in substance and nature they still remain truly and only bread and wine, as they were before.(l)<br \\><br \\>(k) Matt. 26:26, 27, 28.<br \\>(l) I Cor. 11:26, 27, 28; Matt. 26:29",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIX. Of  the Lord’s Supper.",
      Question: "What is Section 6?",
      Answer:
        "VI. That doctrine which maintains a change of the substance of bread and wine into the substance of Christ’s body and blood (commonly called transubstantiation) by consecration of a priest, or by any other way, is repugnant, not to Scripture alone, but even to common sense and reason; overthroweth the nature of the sacrament, and hath been, and is the cause of manifold superstitions; yea, of gross idolatries.(m)<br \\><br \\>(m) Acts 3:21 with I Cor. 11:24, 25, 26; Luke 24:6, 39",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIX. Of  the Lord’s Supper.",
      Question: "What is Section 7?",
      Answer:
        "VII. Worthy receivers outwardly partaking of the visible elements in this sacrament,(n) do then also, inwardly by faith, really and indeed, yet not carnally and corporally, but spiritually, receive and feed upon Christ crucified, and all benefits of His death: the body and blood of Christ being then, not corporally or carnally, in, with, or under the bread and wine; yet, as really, but spiritually, present to the faith of believers in that ordinance, as the elements themselves are to their outward senses.(o)<br \\><br \\>(n) I Cor. 11:28.<br \\>(o) I Cor. 10:16",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXIX. Of  the Lord’s Supper.",
      Question: "What is Section 8?",
      Answer:
        "VIII. Although ignorant and wicked men receive the outward elements in this sacrament: yet they receive not the thing signified thereby, but by their unworthy coming thereunto are guilty of the body and blood of the Lord to their own damnation. Wherefore, all ignorant and ungodly persons, as they are unfit to enjoy communion with Him, so are they unworthy of the Lord’s table; and cannot, without great sin against Christ while they remain such, partake of these holy mysteries,(p) or be admitted thereunto.(q)<br \\><br \\>(p) I Cor. 11:27, 28, 29; II Cor. 6:14, 15, 16.<br \\>(q) I Cor. 5:6, 7, 13; II Thess. 3:6, 14, 15; Matt. 7:6.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXX. Of  Church Censures.",
      Question: "What is Section 1?",
      Answer:
        "I. The Lord Jesus, as King and Head of His Church, hath therein appointed a government, in the hand of Church officers, distinct from the civil magistrate.(a)<br \\><br \\>(a) Isa. 9:6, 7; I Tim. 5:17; I Thess. 5:12; Acts 20:17, 28; Heb. 13:7, 17, 24; I Cor. 12:28; Matt. 28:18, 19, 20",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXX. Of  Church Censures.",
      Question: "What is Section 2?",
      Answer:
        "II. To these officers the keys of the kingdom of heaven are committed: by virtue whereof, they have power respectively to retain, and remit sins; to shut that kingdom against the impenitent, both by the Word and censures; and to open it unto penitent sinners, by the ministry of the Gospel, and by absolution from censures, as occasion shall require.(b)<br \\><br \\>(b) Matt. 16:19; Matt. 18:17, 18; John 20:21, 22, 23; II Cor. 2:6, 7, 8",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXX. Of  Church Censures.",
      Question: "What is Section 3?",
      Answer:
        "III. Church censures are necessary, for the reclaiming and gaining of offending brethren, for deterring of others from the like offences, for purging out of that leaven which might infect the whole lump, for vindicating the honour of Christ, and the holy profession of the Gospel, and for preventing the wrath of God, which might justly fall upon the Church, if they should suffer His covenant and the seals thereof to be profaned by notorious and obstinate offenders.(c)<br \\><br \\>(c) I Cor. 5 chap.; I Tim. 5:20; Matt. 7:6; I Tim. 1:20; I Cor. 11:27 to the end, with Jude ver. 23",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXX. Of  Church Censures.",
      Question: "What is Section 4?",
      Answer:
        "IV. For the better attaining of these ends, the officers of the Church are to proceed by admonition; suspension from the sacrament of the Lord’s Supper for a season; and by excommunication from the Church; according to the nature of the crime, and demerit of the person.(d)<br \\><br \\>(d) I Thess. 5:12; II Thess. 3:6, 14, 15; I Cor. 5:4, 5, 13; Matt. 18:17; Tit. 3:10.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXXI. Of  Synods and Councils.",
      Question: "What is Section 1?",
      Answer:
        "I. For the better government, and further edification of the Church, there ought to be such assemblies as are commonly called synods or councils.(a)<br \\><br \\>(a) Acts 15:2, 4, 6",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXXI. Of  Synods and Councils.",
      Question: "What is Section 2?",
      Answer:
        "II. As magistrates may lawfully call a synod of ministers, and other fit persons, to consult and advise with, about matters of religion;(b) so, if magistrates be open enemies to the Church, the ministers of Christ of themselves, by virtue of their office, or they, with other fit persons upon delegation from their Churches, may meet together in such assemblies.(c)<br \\><br \\>(b) Isa. 49:23; I Tim. 2:1, 2; II Chron. 19:8, 9, 10, 11; II Chron. 29, 30 chaps.; Matt. 2:4, 5; Prov. 11:14.<br \\>(c) Acts 15:2, 4, 22, 23, 25",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXXI. Of  Synods and Councils.",
      Question: "What is Section 3?",
      Answer:
        "III. It belongs to synods and councils, ministerially to determine controversies of faith and cases of conscience; to set down rules and directions for the better ordering of the public worship of God, and government of his Church; to receive complaints in cases of maladministration, and authoritatively to determine the same: which decrees and determinations, if consonant to the Word of God, are to be received with reverence and submission; not only for their agreement with the Word, but also for the power whereby they are made, as being an ordinance of God appointed thereunto in His Word.(d)<br \\><br \\>(d) Acts 15:15, 19, 24, 27, 28, 29, 30, 31; Acts 16:4; Matt. 18:17, 18, 19, 20",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXXI. Of  Synods and Councils.",
      Question: "What is Section 4?",
      Answer:
        "III. All synods or councils, since the Apostles’ times, whether general or particular, may err; and many have erred. Therefore they are not to be made the rule of faith, or practice; but to be used as a help in both.(e)<br \\><br \\>(e) Eph. 2:20; Acts 17:11; I Cor. 2:5; II Cor. 1:24",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXXI. Of  Synods and Councils.",
      Question: "What is Section 5?",
      Answer:
        "IV. Synods and councils are to handle, or conclude, nothing, but that which is ecclesiastical: and are not to intermeddle with civil affairs which concern the commonwealth; unless by way of humble petition, in cases extraordinary; or by way of advice, for satisfaction of conscience, if they be thereunto required by the civil magistrate.(f)<br \\><br \\>(f) Luke 12:13, 14; John 18:36.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck:
        "Chapter XXXII. Of  the State of Man After Death, and of the Resurrection of the Dead.",
      Question: "What is Section 1?",
      Answer:
        "I. The bodies of men, after death, return to dust and see corruption:(a) but their souls (which neither die nor sleep) having an immortal subsistence, immediately return to God who gave them:(b) the souls of the righteous, being then made perfect in holiness, are received into the highest heavens, where they behold the face of God, in light and glory, waiting for the full redemption of their bodies.(c) And the souls of the wicked are cast into hell, where they remain in torments and utter darkness, reserved to the judgment of the great day.(d) Beside these two places, for souls separated from their bodies, the Scripture acknowledgeth none.<br \\><br \\>(a) Gen. 3:19; Acts 13:36.<br \\>(b) Luke 23:43; Eccles. 12:7.<br \\>(c) Heb. 12:23; II Cor. 5:1, 6, 8; Phil. 1:23, with Acts 3:21 & Eph. 4:10.<br \\>(d) Luke 16:23, 24; Acts 1:25; Jude ver. 6, 7; I Pet. 3:19",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck:
        "Chapter XXXII. Of  the State of Man After Death, and of the Resurrection of the Dead.",
      Question: "What is Section 2?",
      Answer:
        "II. At the last day, such as are found alive shall not die, but be changed:(e) and all the dead shall be raised up, with the selfsame bodies, and none other, although with different qualities, which shall be united again to their souls for ever.(f)<br \\><br \\>(e) I Thess. 4:17; I Cor. 15:51, 52.<br \\>(f) Job 19:26, 27; I Cor. 15:42, 43, 44",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck:
        "Chapter XXXII. Of  the State of Man After Death, and of the Resurrection of the Dead.",
      Question: "What is Section 3?",
      Answer:
        "III. The bodies of the unjust shall, by the power of Christ, be raised to dishonour: the bodies of the just, by His Spirit, unto honour; and be made conformable to His own glorious body.(g)<br \\><br \\>(g) Acts 24:15; John 5:28, 29; I Cor. 15:43; Phil. 3:21.",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXXIII. Of  the Last Judgment.",
      Question: "What is Section 1?",
      Answer:
        "I. God hath appointed a day, wherein He will judge the world in righteousness, by Jesus Christ,(a) to whom all power and judgment is given of the Father.(b) In which day, not only the apostate angels shall be judged,(c) but likewise all persons that have lived upon earth shall appear before the tribunal of Christ, to give an account of their thoughts, words, and deeds; and to receive according to what they have done in the body, whether good or evil.(d)<br \\><br \\>(a) Acts 17:31.<br \\>(b) John 5:22, 27.<br \\>(c) I Cor. 6:3; Jude ver. 6; II Pet. 2:4.<br \\>(d) II Cor. 5:10; Eccles. 12:14; Rom. 2:16; Rom. 14:10, 12; Matt. 12:36, 37",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXXIII. Of  the Last Judgment.",
      Question: "What is Section 2?",
      Answer:
        "II. The end of God’s appointing this day is for the manifestation of the glory of His mercy, in the eternal salvation of the elect; and of His justice, in the damnation of the reprobate who are wicked and disobedient. For then shall the righteous go into everlasting life, and receive that fulness of joy and refreshing, which shall come from the presence of the Lord: but the wicked who know not God, and obey not the Gospel of Jesus Christ, shall be cast into eternal torments, and be punished with everlasting destruction from the presence of the Lord, and from the glory of His power.(e)<br \\><br \\>(e) Matt. 25:31 to the end; Rom. 2:5, 6; Rom. 9:22, 23; Matt. 25:21; Acts 3:19; II Thess. 1:7, 8, 9, 10",
    },
    {
      Subject: "Westminster Confession of Faith",
      Topic: "Westminster Confession of Faith",
      Deck: "Chapter XXXIII. Of  the Last Judgment.",
      Question: "What is Section 3?",
      Answer:
        "III. As Christ would have us to be certainly persuaded that there shall be a day of judgment, both to deter all men from sin, and for the greater consolation of the godly in their adversity;(f) so will He have that day unknown to men, that they may shake off all carnal security, and be always watchful, because they know not at what hour the Lord will come; and may be ever prepared to say, Come, Lord Jesus, come quickly, Amen.(g)<br \\><br \\>(f) II Pet. 3:11, 14; II Cor. 5:10, 11; II Thess. 1:5, 6, 7; Luke 21:27, 28; Rom. 8:23, 24, 25.<br \\>(g) Matt. 24:36, 42, 43, 44; Mark 13:35, 36, 37; Luke 12:35, 36; Rev. 22:20.",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Holy Scripture",
      Question: "Q. 1. What is the chief end of man?",
      Answer:
        "Man’s chief end is to glorify God, [a] and to enjoy him for ever. [b]<br />[a]. Ps. 86:9; Isa. 60:21; Rom. 11:36; 1 Cor. 6:20; 10:31; Rev.4:11<br />[b]. Ps. 16:5-11; 144:15; Isa. 12:2; Luke 2:10; Phil. 4:4; Rev. 21:3-4?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Holy Scripture",
      Question:
        "Q. 2. What rule hath God given to direct us how we may glorify and enjoy him?",
      Answer:
        "The Word of God, which is contained in the Scriptures of the Old and New Testaments, [a] is the only rule to direct us how we may glorify and enjoy him. [b]<br />[a]. Matt. 19:4-5 with Gen. 2:24; Luke 24:27, 44; 1 Cor. 2:13;14:37; 2 Pet.1:20-21; 3:2, 15-16<br />[b]. Deut. 4:2; Ps. 19:7-11; Isa. 8:20; John 15:11; 20:30-31; Acts 17:11; 2 Tim. 3:15-17; 1 John 1:4?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Holy Scripture",
      Question: "Q. 3. What do the Scriptures principally teach?",
      Answer:
        "The Scriptures principally teach what man is to believe concerning God, [a] and what duty God requires of man <br />[b].<br />[a]. Gen. 1:1; John 5:39; 20:31; Rom. 10:17; 2 Tim. 3:15<br />[b]. Deut. 10:12-13; Josh. 1:8; Ps. 119:105; Mic. 6:8; 2 Tim.3:16-17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question: "Q. 4. What is God?",
      Answer:
        "God is a Spirit [a], infinite [b], eternal [c], and unchangeable [d] in his being [e], wisdom [f], power [g], holiness [h], justice [i], goodness [j], and truth <br />[k].<br />[a]. Deut. 4:15-19; Luke 24:39; John 1:18; 4:24; Acts 17:29<br />[b]. 1 Kings 8:27; Ps. 139:7-10; 145:3; 147:5; Jer. 23:24; Rom.11:33-36<br />[c]. Deut. 33:27; Ps. 90:2; 102:12, 24-27; Rev. 1:4,8<br />[d]. Ps. 33:11; Mal. 3:6; Heb. 1:12; 6:17-18; 13:8; Jas. 1:17<br />[e]. Ex. 3:14; Ps. 115:2-3; 1 Tim. 1:17; 6:15-16<br />[f]. Ps. 104:24; Rom. 11:33-34; Heb. 4:13; 1 John 3:20<br />[g]. Gen. 17:1; Ps. 62:11; Jer. 32:17; Mat. 19:26; Rev. 1:8<br />[h]. Heb. 1:13; I Pet. 1:15-16; 1 John 3:3, 5; Rev. 15:4<br />[i]. Gen. 18:25; Ex. 34:6-7; Deut. 32:4; Ps. 96:13; Rom. 3:5, 26<br />[j]. Ps. 103:5; 107:8; Matt. 19:17; Rom. 2:4<br />[k]. Ex. 34:6; Deut. 32:4; Ps. 86:15; 117:2; Heb. 6:18?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question: "Q. 5. Are there more Gods than one?",
      Answer:
        "There is but one only [a], the living and true God <br />[b].<br />[a]. Deut. 6:4; Isa. 44:6; 45:21-22; 1 Cor. 8:4-6<br />[b]. Jer. 10:10; John 17:3; 1 Thess. 1:9; 1 John 5:20?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question: "Q. 6. How many persons are there in the Godhead?",
      Answer:
        "There are three persons in the Godhead; the Father, the Son, and the Holy Ghost [a]; and these three are one God, the same in substance, equal in power and glory. [b]<br />[a]. Matt. 3:16-17; 28:19; 2 Cor. 13:14; 1 Pet. 1:2<br />[b]. Ps. 45:6; John 1:1; 17:5; Acts 5:3-4; Rom. 9:5; Col. 2:9;Jude 24-25?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question: "Q. 7. What are the decrees of God?",
      Answer:
        "The decrees of God are, his eternal purpose, according to the counselof his will, whereby, for his own glory, he hath foreordained whatsoevercomes to pass <br />[a].<br />[a]. Ps. 33:11; Isa. 14:24; Acts 2:23; Eph. 1:11-12?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question: "Q. 8. How doth God execute his decrees?",
      Answer:
        "God executeth his decrees in the works of creation and providence<br />[a].<br />[a]. Ps. 148:8; Isa. 40:26; Dan. 4:35; Acts 4:24-28; Rev. 4:11?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question: "Q. 9. What is the work of creation?",
      Answer:
        "The work of creation is, God’s making all things of nothing, by the word of his power [a], in the space of six days, and all very good. [b]<br />[a]. Gen. 1:1; Ps. 33:6, 9; Heb. 11:3<br />[b]. Gen. 1:31?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question: "Q. 10. How did God create man?",
      Answer:
        "God created man male and female, after his own image [a], in knowledge [b], righteousness, and holiness [c], with dominion over thecreatures <br />[d].<br />[a]. Gen. 1:27<br />[b]. Col. 3:10<br />[c]. Eph. 4:24<br />[d]. Gen. 1:28; see Ps. 8?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question: "Q. 11. What are God’s works of providence?",
      Answer:
        "God’s works of providence are, his most holy [a], wise [b], and powerful [c] preserving [d] and governing [e] all his creatures, and alltheir actions <br />[f].<br />[a]. Ps. 145:17<br />[b]. Ps. 104:24<br />[c]. Heb. 1:3<br />[d]. Neh. 9:6<br />[e]. Eph. 1:19-22<br />[f]. Ps. 36:6; Prov. 16:33; Matt. 10:30?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question:
        "Q. 12. What special act of providence did God exercise toward man in the estate wherein he was created?",
      Answer:
        "When God had created man, he entered into a covenant of life with him, upon condition of perfect obedience; forbidding him to eat of the tree of the knowledge of good and evil, upon pain of death. [a]<br />[a]. Gen. 2:16-17; Jas. 2:10?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question:
        "Q. 13. Did our first parents continue in the estate wherein they were created?",
      Answer:
        "Our first parents, being left to the freedom of their own will, fell from the estate wherein they were created, by sinning against God <br />[a].<br />[a]. Gen. 3:6-8, 13; 2 Cor. 11:3?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question: "Q. 14. What is sin?",
      Answer:
        "Sin is any want of conformity unto, or transgression of, the law of God <br />[a].<br />[a]. Lev. 5:17; Jas. 4:17; 1 John 3:4?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question:
        "Q. 15. What was the sin whereby our first parents fell from the estate wherein they were created?",
      Answer:
        "The sin whereby our first parents fell from the estate wherein thy were created, was their eating the forbidden fruit <br />[a].<br />[a]. Gen. 3:6?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question: "Q. 16. Did all mankind fall in Adam’s first transgression?",
      Answer:
        "The covenant being made with Adam [a], not only for himself, but forhis posterity; all mankind, descending from him by ordinary generation,sinned in him, and fell with him, in his first transgression <br />[b].<br />[a]. Gen. 2:16-17; Jas. 2:10<br />[b]. Rom. 5:12-21; 1 Cor. 15:22?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question: "Q. 17. Into what estate did the fall bring mankind?",
      Answer:
        "The fall brought mankind into an estate of sin and misery <br />[a].<br />[a]. Gen. 3:16-19, 23; Rom. 3:16; 5:12; Eph. 2:1?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question:
        "Q. 18. Wherein consists the sinfulness of that estate whereinto man fell?",
      Answer:
        "The sinfulness of that estate whereinto man fell, consists in the guilt of Adam’s first sin [a], the want of original righteousness [b], and the corruption of his whole nature [c], which is commonly called original sin; together with all actual transgressions which proceedfrom it <br />[d].<br />[a]. Rom. 5:12, 19<br />[b]. Rom. 3:10; Col. 3:10; Eph. 4:24<br />[c]. Ps. 51:5; John 3:6; Rom. 3:18; 8:7-8; Eph. 2:3<br />[d]. Gen. 6:5; Ps. 53:1-3; Matt. 15:19; Rom. 3:10-18, 23; Gal.5:19-21; Jas. 1:14-15?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question: "Q. 19. What is the misery of that estate whereinto man fell?",
      Answer:
        "All mankind by their fall lost communion with God [a], are under his wrath [b] and curse [c], and so made liable to all miseries in this life [d], to death [e] itself, and to the pains of hell for ever <br />[f].<br />[a]. Gen. 3:8, 24; John 8:34, 42, 44; Eph. 2:12; 4:18<br />[b]. John 3:36; Rom. 1:18; Eph. 2:3; 5:6<br />[c]. Gal. 3:10; Rev. 22:3<br />[d]. Gen. 3:16-19; Job 5:7; Ecc. 2:22-23; Rom. 8:18-23<br />[e]. Ezek. 18:4; Rom. 5:12; 6:23<br />[f]. Matt. 25:41, 46; 2 Thess. 1:9; Rev. 14:9-11?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question:
        "Q. 20. Did God leave all mankind to perish in the estate of sin and misery?",
      Answer:
        "God having, out of his mere good pleasure, from all eternity, elected some to everlasting life [a,] did enter into a covenant of grace, to deliver them out of the estate of sin and misery, and to bring them into an estate of salvation by a Redeemer <br />[b].<br />[a]. Acts 13:48; Eph. 1:4-5; 2 Thess. 2:13-14<br />[b]. Gen. 3:15; 17:7; Ex. 19:5-6; Jer. 31:31-34; Matt. 20:28; 1 Cor. 11:25; Heb. 9:15?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant, Of Christ",
      Question: "Q. 21. Who is the Redeemer of God’s elect?",
      Answer:
        "The only Redeemer of God’s elect is the Lord Jesus Christ [a], who, being the eternal Son of God [b], became man [c] and so was, and continueth to be, God and man in two distinct natures, and one person, forever <br />[d].<br />[a]. John 14:6; Acts 4:12; 1 Tim. 2:5-6<br />[b]. Ps. 2:7; Matt. 3:17; 17:5; John 1:18<br />[c]. Isa. 9:6; Matt. 1:23; John 1:14; Gal. 4:4<br />[d]. Acts 1:11; Heb. 7:24-25?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant, Of Christ",
      Question: "Q. 22. How did Christ, being the Son of God, become man?",
      Answer:
        "Christ, the Son of God, became man, by taking to himself a true body, and a reasonable soul [a], being conceived by the power of the Holy Ghost, in the womb of the virgin Mary, and born of her [b] yet without sin <br />[c].<br />[a]. Phil. 2:7; Heb. 2:14, 17<br />[b]. Luke 1:27, 31, 35<br />[c]. 2 Cor. 5:21; Heb. 4:15; 7:26; 1 John 3:5?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant, Of Christ",
      Question: "Q. 23. What offices doth Christ execute as our Redeemer?",
      Answer:
        "Christ, as our Redeemer, executeth the offices of a prophet [a], of a priest [b], and of a king [c], both in his estate of humiliation and exaltation.<br />[a]. Deut. 18:18; Acts 2:33; 3:22-23; Heb. 1:1-2<br />[b]. Heb. 4:14-15; 5:5-6<br />[c]. Isa. 9:6-7; Luke 1:32-33; John 18:37; 1 Cor. 15:25?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant, Of Christ",
      Question: "Q. 24. How doth Christ execute the office of a prophet?",
      Answer:
        "Christ executeth the office of a prophet, in revealing to us, by his Word [a] and Spirit [b,] the will of God for our salvation <br />[c].<br />[a]. Luke 4:18-19, 21; Acts 1:1-2; Heb. 2:3<br />[b]. John 15:26-27; Acts 1:8; 1 Pet. 1:11<br />[c]. John 4:41-42; 20:30-31?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant, Of Christ",
      Question: "Q. 25. How doth Christ execute the office of a priest?",
      Answer:
        "Christ executeth the office of a priest, in his once offering up of himself a sacrifice to satisfy divine justice [a], and reconcile us to God [b]; and in making continual intercession for us <br />[c].<br />[a]. Isa. 53; Acts 8:32-35; Heb. 9:26-28; 10:12<br />[b]. Rom. 5:10-11; 2 Cor. 5:18; Col. 1:21-22<br />[c]. Rom. 8:34; Heb. 7:25; 9:24?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant, Of Christ",
      Question: "Q. 26. How doth Christ execute the office of a king?",
      Answer:
        "Christ executeth the office of a king, in subduing us to himself, in ruling and defending us [a], and in restraining and conquering all hisand our enemies <br />[b].<br />[a]. Ps. 110:3; Matt. 28:18-20; John 17:2; Col. 1:13<br />[b]. Ps. 2:6-9; 110:1-2; Matt. 12:28; 1 Cor. 15:24-26; Col. 2:15?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant, Of Christ",
      Question: "Q. 27. Wherein did Christ’s humiliation consist?",
      Answer:
        "Christ’s humiliation consisted in his being born, and that in a low condition [a], made under the law [b], undergoing the miseries of this life [c], the wrath of God [d], and the cursed death of the cross [e]; in being buried, and continuing under the power of death for a time. [f]<br />[a]. Luke 2:7; 2 Cor. 8:9; Gal. 4:4<br />[b]. Gal. 4:4<br />[c]. Isa. 53:3; Luke 9:58; John 4:6; 11:35; Heb. 2:18<br />[d]. Ps. 22:1 (Matt. 27:46); Isa. 53:10; 1 John 2:2<br />[e]. Gal. 3:13; Phil. 2:8<br />[f]. Matt. 12:40; 1 Cor. 15:3-4?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant, Of Christ",
      Question: "Q. 28. Wherein consisteth Christ’s exaltation?",
      Answer:
        "Christ’s exaltation consisteth in his rising again from the dead on the third day [a], in ascending up into heaven [b], in sitting at theright hand [c] of God the Father, and in coming to judge the world at the last day <br />[d].<br />[a]. 1 Cor. 15:4<br />[b]. Ps. 68:18; Acts 1:11; Eph. 4:8<br />[c]. Ps. 110:1; Acts 2:33-34; Heb. 1:3<br />[d]. Matt. 16:27; Acts 17:31?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 29. How are we made partakers of the redemption purchased by Christ?",
      Answer:
        "We are made partakers of the redemption purchased by Christ, by the effectual application of it to us by his Holy Spirit <br />[a].<br />[a]. Titus 3:4-7?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 30. How doth the Spirit apply to us the redemption purchased by Christ?",
      Answer:
        "The Spirit applieth to us the redemption purchased by Christ, by working faith in us [a], and thereby uniting us to Christ in oureffectual calling <br />[b].<br />[a]. Rom. 10:17; 1 Cor. 2:12-16; Eph. 2:8; Phil. 1:29<br />[b]. John 15:5; 1 Cor. 1:9; Eph. 3:17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 31. What is effectual calling?",
      Answer:
        "Effectual calling is the work of God’s Spirit, whereby, convincing us of our sin and misery, enlightening our minds in the knowledge of Christ [a], and renewing our wills [b], he doth persuade and enable us to embrace Jesus Christ [c], freely offered to us in the gospel <br />[d].<br />[a]. Acts 26:18; 1 Cor. 2:10, 12; 2 Cor. 4:6; Eph. 1:17-18<br />[b]. Deut. 30:6; Ezk. 36:26-27; John 3:5; Titus 3:5<br />[c]. John 6:44-45; Acts 16:14<br />[d]. Isa. 45:22; Matt. 11:28-30; Rev. 22:17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 32. What benefits do they that are effectually called partake of in this life?",
      Answer:
        "They that are effectually called do in this life partake of justification, adoption, and sanctification, and the several benefits which in this life do either accompany or flow from them <br />[a].<br />[a]. Rom. 8:30; 1 Cor. 1:30; 6:11; Eph. 1:5?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 33. What is justification?",
      Answer:
        "Justification is an act of God’s free grace [a], wherein he pardoneth all our sins [b], and accepteth us as righteous in his sight [c], onlyfor the righteousness of Christ imputed to us [d], and received by faith alone <br />[e].<br />[a]. Rom. 3:24<br />[b]. Rom. 4:6-8; 2 Cor. 5:19<br />[c]. 2 Cor. 5:21<br />[d]. Rom. 4:6, 11; 5:19<br />[e]. Gal. 2:16; Phil. 3:9?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 34. What is adoption?",
      Answer:
        "Adoption is an act of God’s free grace [a], whereby we are received into the number, and have a right to all the privileges, of the sons of God <br />[b].<br />[a]. 1 John 3:1<br />[b]. John 1:12; Rom. 8:17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 35. What is sanctification?",
      Answer:
        "Sanctification is the work of God’s free grace [a], whereby we are renewed in the whole man after the image of God [b], and are enabled more and more to die unto sin, and live unto righteousness <br />[c].<br />[a]. Ezk. 36:27; Phil. 2:13; 2 Thess. 2:13<br />[b]. 2 Cor. 5:17; Eph. 4:23-24; 1 Thess. 5:23<br />[c]. Ezek. 36:25-27; Rom. 6:4, 6, 12-14; 2 Cor. 7:1; 1 Pet. 2:24?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 36. What are the benefits which in this life do accompany or flowfrom justification, adoption, and sanctification?",
      Answer:
        "The benefits which in this life do accompany or flow from justification, adoption, and sanctification, are, assurance of God’s love [a], peace of conscience [b], joy in the Holy Ghost [c], increase of grace [d], and perseverance therein to the end <br />[e].<br />[a]. Rom. 5:5<br />[b]. Rom. 5:1<br />[c]. Rom. 14:17<br />[d]. 2 Pet. 3:18<br />[e]. Phil. 1:6; 1 Pet. 1:5?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 37. What benefits do believers receive from Christ at death?",
      Answer:
        "The souls of believers are at their death made perfect in holiness [a], and do immediately pass into glory [b]; and their bodies, beingstill united to Christ [c], do rest in their graves till the resurrection <br />[d].<br />[a]. Heb. 12:23<br />[b]. Luke 23:43; 2 Cor. 5:6, 8; Phil. 1:23<br />[c]. 1 Thess. 4:14<br />[d]. Dan. 12:2; John 5:28-29; Acts 24:15?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 38. What benefits do believers receive from Christ at the resurrection?",
      Answer:
        "At the resurrection, believers being raised up in glory [a], shall be openly acknowledged and acquitted in the day of judgment [b], and made perfectly blessed in the full enjoying of God [c] to all eternity <br />[d].<br />[a]. I Cor. 15:42-43<br />[b]. Matt. 25:33-34, 46<br />[c]. Rom. 8:29; 1 John 3:2<br />[d]. Ps. 16:11; 1 Thess. 4:17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 39. What is the duty which God requireth of man?",
      Answer:
        "The duty which God requireth of man, is obedience to his revealed will <br />[a].<br />[a]. Deut. 29:29; Mic. 6:8; 1 John 5:2-3?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 40. What did God at first reveal to man for the rule of his obedience?",
      Answer:
        "The rule which God at first revealed to man for his obedience, was the moral law <br />[a].<br />[a]. Rom. 2:14-15; 10:5?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 41. Wherein is the moral law summarily comprehended?",
      Answer:
        "The moral law is summarily comprehended in the ten commandments <br />[a].<br />[a]. Deut. 4:13; Matt. 19:17-19?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 42. What is the sum of the ten commandments?",
      Answer:
        "The sum of the ten commandments is, To love the Lord our God with all our heart, with all our soul, with all our strength, and with all our mind; and our neighbour as ourselves <br />[a].<br />[a]. Matt. 22:37-40?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 43. What is the preface to the ten commandments?",
      Answer:
        "The preface to the ten commandments is in these words, I am the Lord thy God, which have brought thee out of the land of Egypt, out of the house of bondage. [a]<br />[a]. Ex. 20:2; Deut. 5:6?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 44. What doth the preface to the ten commandments teach us?",
      Answer:
        "The preface to the ten commandments teacheth us, That because God is the Lord, and our God, and Redeemer, therefore we are bound to keep all his commandments <br />[a].<br />[a]. Luke 1:74-75; 1 Pet. 1:14-19?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 45. Which is the first commandment?",
      Answer:
        "The first commandment is, Thou shalt have no other gods before me.[a]<br />[a]. Ex. 20:3; Deut. 5:7?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 46. What is required in the first commandment?",
      Answer:
        "The first commandment requireth us to know and acknowledge God to be the only true God, and our God; and to worship and glorify him accordingly <br />[a].<br />[a]. I Chron. 28:9; Isa. 45:20-25; Matt. 4:10?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 47. What is forbidden in the first commandment?",
      Answer:
        "The first commandment forbiddeth the denying [a], or not worshipping and glorifying the true God as God [b], and our God [c]; and the giving of that worship and glory to any other, which is due to him alone <br />[d].<br />[a]. Ps. 14:1<br />[b]. Rom. 1:20-21<br />[c]. Ps. 81:10-11<br />[d]. Ezek. 8:16-18; Rom. 1:25?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 48. What are we specially taught by these words, “before me,” in the first commandment?",
      Answer:
        "These words, before me, in the first commandment teach us, that God, who seeth all things, taketh notice of, and is much displeasedwith, the sin of having any other God <br />[a].<br />[a]. Deut. 30:17-18; Ps. 44:20-21; Ezek. 8:12?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 49. Which is the second commandment?",
      Answer:
        "The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: thou shalt not bow down thy self to them, nor serve them: for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and showing mercy unto thousands of them that love me, and keep my commandments. [a]<br />[a]. Ex. 20:4-6; Deut. 5:8-10?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 50. What is required in the second commandment?",
      Answer:
        "The second commandment requireth the receiving, observing, and keeping pure and entire, all such religious worship and ordinances as God hath appointed in his Word <br />[a].<br />[a]. Deut. 12:32; Matt. 28:20?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 51. What is forbidden in the second commandment?",
      Answer:
        "The second commandment forbiddeth the worshipping of God by images [a], or any other way not appointed in his Word <br />[b].<br />[a]. Deut. 4:15-19; Rom. 1:22-23<br />[b]. Lev. 10:1-2; Jer. 19:4-5; Col. 2:18-23?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 52. What are the reasons annexed to the second commandment?",
      Answer:
        "The reasons annexed to the second commandment are, God’s sovereignty over us [a], his propriety in us [b], and the zeal he hath to his own worship <br />[c].<br />[a]. Ps. 95:2-3, 6-7; 96:9-10<br />[b]. Ex. 19:5; Ps. 45:11; Isa. 54:5<br />[c]. Ex. 34:14; ICor. 10:22?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 53. Which is the third commandment?",
      Answer:
        "The third commandment is, Thou shalt not take the name of the Lord thy God in vain; for the Lord will not hold him guiltless that taketh his name in vain. [a]<br />[a]. Ex. 20:7; Deut. 5:11?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 54. What is required in the third commandment?",
      Answer:
        "The third commandment requireth the holy and reverend use of God’s names, titles [a], attributes [b], ordinances [c], Word [d], and works<br />[e].<br />[a]. Deut. 10:20; Ps. 29:2; Matt. 6:9<br />[b]. 1 Chron. 29:10-13; Rev. 15:3-4<br />[c]. Acts 2:42; 1 Cor. 11:27-28<br />[d]. Ps. 138:2; Rev. 22:18-19<br />[e]. Ps. 107:21-22; Rev. 4:11?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 55. What is forbidden in the third commandment?",
      Answer:
        "The third commandment forbiddeth all profaning or abusing of anything whereby God maketh himself known <br />[a].<br />[a]. Lev. 19:12; Matt. 5:33-37; Jas. 5:12?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 56. What is the reason annexed to the third commandment?",
      Answer:
        "The reason annexed to the third commandment is, that however the breakers of this commandment may escape punishment from men, yet the Lord our God will not suffer them to escape his righteous judgment <br />[a].<br />[a]. Deut. 28:58-59; 1 Sam. 3:13; 4:11?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 57. Which is the fourth commandment?",
      Answer:
        "The fourth commandment is, Remember the sabbath day, to keep it holy. Six days shalt thou labor, and do all thy work; but the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates. For in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the sabbath day, and hallowed it. [a]<br />[a]. Ex. 20:8-11; Deut. 5:12-15?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 58. What is required in the fourth commandment?",
      Answer:
        "The fourth commandment requireth the keeping holy to God such set times as he hath appointed in his Word; expressly one whole day in seven, to be a holy sabbath to himself <br />[a].<br />[a]. Ex. 31:13, 16-17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 59. Which day of the seven hath God appointed to be the weeklysabbath?",
      Answer:
        "From the beginning of the world to the resurrection of Christ, God appointed the seventh day of the week to be the weekly sabbath [a]; and the first day of the week ever since, to continue to the end of the world, which is the Christian sabbath <br />[b].<br />[a]. Gen. 2:2-3; Ex. 20:11<br />[b]. Mark 2:27-28; Acts 20:7; 1 Cor. 16:2; Rev. 1:10?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 60. How is the sabbath to be sanctified?",
      Answer:
        "The sabbath is to be sanctified by a holy resting all that day, even from such worldly employments and recreations as are lawful on other days [a]; and spending the whole time in the public and private exercises of God’s worship [b], except so much as is to be taken up in the works of necessity and mercy <br />[c].<br />[a]. Ex. 20:10; Neh. 13:15-22; Isa. 58:13-14<br />[b]. Ex. 20:8; Lev. 23:3; Luke 4:16; Acts 20:7<br />[c]. Matt. 12:1-13?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 61. What is forbidden in the fourth commandment?",
      Answer:
        "The fourth commandment forbiddeth the omission or careless performance of the duties required, and the profaning the day byidleness, or doing that which is in itself sinful, or by unnecessary thoughts, words, or works, about our worldly employments or recreations <br />[a].<br />[a]. Neh. 13:15-22; Isa. 58:13-14; Amos 8:4-6?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 62. What are the reasons annexed to the fourth commandment?",
      Answer:
        "The reasons annexed to the fourth commandment are, God’s allowing us six days of the week for our own employments [a], his challenging a special propriety in the seventh, his own example, and his blessing the sabbath day <br />[b].<br />[a]. Ex. 20:9; 31:15; Lev. 23:3<br />[b]. Gen. 2:2-3; Ex. 20:11; 31:17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 63. Which is the fifth commandment?",
      Answer:
        "The fifth commandment is, Honour thy father and thy mother; that thy days may be long upon the land which the Lord thy God giveth thee.[a]<br />[a]. Ex. 20:12; Deut. 5:16?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 64. What is required in the fifth commandment?",
      Answer:
        "The fifth commandment requireth the preserving the honor, and performing the duties, belonging to everyone in their several places and relations, as superiors, inferiors, or equals <br />[a].<br />[a]. Rom. 13:1, 7; Eph. 5:21-22, 24; 6:1, 4-5, 9; 1 Pet. 2:17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 65. What is forbidden in the fifth commandment?",
      Answer:
        "The fifth commandment forbiddeth the neglecting of, or doing anything against, the honor and duty which belongeth to everyone in their several places and relations <br />[a].<br />[a]. Matt. 15:4-6; Rom. 13:8?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 66. What is the reason annexed to the fifth commandment?",
      Answer:
        "The reason annexed to the fifth commandment is, a promise of long life and prosperity (as far as it shall serve for God’s glory and their own good) to all such as keep this commandment <br />[a].<br />[a]. Ex. 20:12; Deut. 5:16; Eph. 6:2-3?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 67. Which is the sixth commandment?",
      Answer:
        "The sixth commandment is, Thou shalt not kill. [a]<br />[a]. Ex. 20:13; Deut. 5:17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 68. What is required in the sixth commandment?",
      Answer:
        "The sixth commandment requireth all lawful endeavors to preserve our own life, and the life of others <br />[a].<br />[a]. Eph. 5:28-29?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 69. What is forbidden in the sixth commandment?",
      Answer:
        "The sixth commandment forbiddeth the taking away of our own life, or the life of our neighbour, unjustly, or whatsoever tendeth thereunto<br />[a].<br />[a]. Gen. 9:6; Matt. 5:22; 1 John 3:15?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 70. Which is the seventh commandment?",
      Answer:
        "The seventh commandment is, Thou shalt not commit adultery.[a]<br />[a]. Ex. 20:14; Deut. 5:18?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 71. What is required in the seventh commandment?",
      Answer:
        "The seventh commandment requireth the preservation of our own and our neighbour’s chastity, in heart, speech, and behavior <br />[a].<br />[a]. 1 Cor. 7:2-3, 5; 1 Thess. 4:3-5?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 72. What is forbidden in the seventh commandment?",
      Answer:
        "The seventh commandment forbiddeth all unchaste thoughts, words, and actions <br />[a].<br />[a]. Matt. 5:28; Eph. 5:3-4?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 73. Which is the eighth commandment?",
      Answer:
        "The eighth commandment is, Thou shalt not steal. [a]<br />[a]. Ex. 20:15; Deut. 5:19?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 74. What is required in the eighth commandment?",
      Answer:
        "The eighth commandment requireth the lawful procuring and furthering the wealth and outward estate of ourselves and others <br />[a].<br />[a]. Lev. 25:35; Eph. 4:28b; Phil. 2:4?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 75. What is forbidden in the eighth commandment?",
      Answer:
        "The eighth commandment forbiddeth whatsoever doth, or may, unjustly hinder our own, or our neighbour’s, wealth or outward estate <br />[a].<br />[a]. Prov. 28:19ff; Eph. 4:28a; 1 Thess. 3:10; 1 Tim. 5:8?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 76. Which is the ninth commandment?",
      Answer:
        "The ninth commandment is, Thou shalt not bear false witness against thy neighbour. [a]<br />[a]. Ex. 20:16; Deut. 5:20?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 77. What is required in the ninth commandment?",
      Answer:
        "The ninth commandment requireth the maintaining and promoting of truth between man and man, and of our own and our neighbour’s good name [a], especially in witness bearing <br />[b].<br />[a]. Zech. 8:16; Acts 25:10; 3 John 12<br />[b]. Prov. 14:5, 25?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 78. What is forbidden in the ninth commandment?",
      Answer:
        "The ninth commandment forbiddeth whatsoever is prejudicial to truth, or injurious to our own, or our neighbour’s, good name <br />[a].<br />[a]. Lev. 19:16; Ps. 15:3; Prov. 6:16-19; Luke 3:14?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 79. Which is the tenth commandment?",
      Answer:
        "The tenth commandment is, Thou shalt not covet thy neighbour’s house, thou shalt not covet thy neighbour’s wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor anything that is thy neighbour’s. [a]<br />[a]. Ex. 20:17; Deut. 5:21?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 80. What is required in the tenth commandment?",
      Answer:
        "The tenth commandment requireth full contentment with our own condition [a], with a right and charitable frame of spirit toward ourneighbour, and all that is his <br />[b].<br />[a]. Ps. 34:1; Phil. 4:11; 1 Tim. 6:6; Heb. 13:5<br />[b]. Luke 15:6, 9, 11-32; Rom. 12:15; Phil. 2:4?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 81. What is forbidden in the tenth commandment?",
      Answer:
        "The tenth commandment forbiddeth all discontentment with our own estate [a], envying or grieving at the good of our neighbour, and all inordinate motions and affections to anything that is his <br />[b].<br />[a]. 1 Cor. 10:10; Jas. 3:14-16<br />[b]. Gal. 5:26; Col. 3:5?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 82. Is any man able perfectly to keep the commandments of God?",
      Answer:
        "No mere man, since the fall, is able in this life perfectly to keep the commandments of God, but doth daily break them in thought, word, and deed <br />[a].<br />[a]. Gen. 8:21; Rom. 3:9ff, 23?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 83. Are all transgressions of the law equally heinous?",
      Answer:
        "Some sins in themselves, and by reason of several aggravations, are more heinous in the sight of God than others <br />[a].<br />[a]. Ezek. 8:6, 13, 15; Matt. 11:20-24; John 19:11?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 84. What doth every sin deserve?",
      Answer:
        "Every sin deserveth God’s wrath and curse, both in this life, and that which is to come <br />[a].<br />[a]. Matt. 25:41; Gal. 3:10; Eph. 5:6; Jas. 2:10?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 85. What doth God require of us, that we may escape his wrath and curse, due to us for sin?",
      Answer:
        "To escape the wrath and curse of God, due to us for sin, God requireth of us faith in Jesus Christ, repentance unto life [a, with thediligent use of all the outward means whereby Christ communicateth to us the benefits of redemption <br />[b].<br />[a]. Mark 1:15; Acts 20:21[b]: Acts 2:38; 1 Cor. 11:24-25; Col. 3:16?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 86. What is faith in Jesus Christ?",
      Answer:
        "Faith in Jesus Christ is a saving grace [a], whereby we receive and rest upon him alone for salvation, as he is offered to us in the gospel <br />[b].<br />[a]. Eph. 2:8-9; cf. Rom. 4:16<br />[b]. John 20:30-31; Gal. 2:15-16; Phil. 3:3-11?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 87. What is repentance unto life?",
      Answer:
        "Repentance unto life is a saving grace [a], whereby a sinner, out of a true sense of his sin, and apprehension of the mercy of God in Christ [b], doth, with grief and hatred of his sin, turn from it unto God [c], with full purpose of, and endeavour after, new obedience <br />[d].<br />[a]. Acts 11:18; II Tim. 2:25<br />[b]. Ps. 51:1-4; Joel 2:13; Luke 15:7, 10; Acts 2:37<br />[c]. Jer. 31:18-19; Luke 1:16-17; 1 Thess. 1:9<br />[d]. 2 Chron. 7:14; Ps. 119:57-64; Matt. 3:8; 2 Cor. 7:10?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 88. What are the outward and ordinary means whereby Christcommunicateth to us the benefits of redemption?",
      Answer:
        "The outward and ordinary means whereby Christ communicateth to us the benefits of redemption are, his ordinances, especially the Word, sacraments, and prayer; all which are made effectual to the elect for salvation <br />[a].<br />[a]. Matt. 28:18-20; Acts 2:41-42?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 89. How is the Word made effectual to salvation?",
      Answer:
        "The Spirit of God maketh the reading, but especially the preaching of the Word, an effectual means of convincing and converting sinners, and of building them up in holiness and comfort, through faith, unto salvation <br />[a].<br />[a]. Neh. 8:8-9; Acts 20:32; Rom. 10:14-17; 2 Tim. 3:15-17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 90. How is the Word to be read and heard, that it may become effectual to salvation?",
      Answer:
        "That the Word may become effectual to salvation, we must attend thereunto with diligence, preparation, and prayer [a]; receive it withfaith and love, lay it up in our hearts, and practice it in our lives <br />[b].<br />[a]. Deut. 6:6ff; Ps. 119:18; 1 Pet. 2:1-2<br />[b]. Ps. 119:11; 2 Thess. 2:10; Heb. 4:2; Jas. 1:22-25?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 91. How do the sacraments become effectual means of salvation?",
      Answer:
        "The sacraments become effectual means of salvation, not from any virtue in them, or in him that doth administer them; but only by the blessing of Christ, and the working of his Spirit in them that by faith receive them <br />[a].<br />[a]. I Cor. 3:7; cf. 1 Cor. 1:12-17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 92. What is a sacrament?",
      Answer:
        "A sacrament is an holy ordinance instituted by Christ [a]; wherein, by sensible signs, Christ, and the benefits of the new covenant, arerepresented, sealed, and applied to believers <br />[b].<br />[a]. Matt. 28:19; 26:26-28; Mark 14:22-25; Luke 22:19-20; 1 Cor. 1:22-26<br />[b]. Gal. 3:27; 1 Cor. 10:16-17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 93. Which are the sacraments of the New Testament?",
      Answer:
        "The sacraments of the New Testament are, Baptism [a], and the Lord’s Supper <br />[b].<br />[a]. Matt. 28:19<br />[b]. 1 Cor 11:23-26?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 94. What is Baptism?",
      Answer:
        "Baptism is a sacrament, wherein the washing with water in the name of the Father, and of the Son, and of the Holy Ghost [a], doth signify and seal our ingrafting into Christ, and partaking of the benefits of the covenant of grace, and our engagement to be the Lord’s <br />[b].<br />[a]. Matt. 28:19<br />[b]. Acts 2:38-42; 22:16; Rom. 6:3-4; Gal. 3:26-27; 1 Pet. 3:21?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 95. To whom is Baptism to be administered?",
      Answer:
        "Baptism is not to be administered to any that are out of the visible church, till they profess their faith in Christ, and obedience to him[a]; but the infants of such as are members of the visible church are to be baptized <br />[b].<br />[a]. Acts. 2:41; 8:12, 36, 38; 18:8<br />[b]. Gen. 17:7, 9-11; Acts 2:38-39; 16:32-33; Col. 2:11-12?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 96. What is the Lord’s Supper?",
      Answer:
        "The Lord’s Supper is a sacrament, wherein, by giving and receiving bread and wine, according to Christ’s appointment, his death is showed forth [a]; and the worthy receivers are, not after a corporal and carnal manner, but by faith, made partakers of his body and blood, with all his benefits, to their spiritual nourishment, and growth in grace <br />[b].<br />[a]. Luke 22:19-20; 1 Cor. 11:23-26<br />[b]. 1 Cor. 10:16-17?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 97. What is required for the worthy receiving of the Lord’s Supper?",
      Answer:
        "It is required of them that would worthily partake of the Lord’s Supper, that they examine themselves of their knowledge to discern theLord’s body, of their faith to feed upon him, of their repentance, love, and new obedience; lest, coming unworthily, they eat and drink judgment to themselves <br />[a].<br />[a]. 1 Cor. 11:27-32?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 98. What is prayer?",
      Answer:
        "Prayer is an offering up of our desires unto God [a], for things agreeable to his will [b], in the name of Christ [c], with confession of our sins [d], and thankful acknowledgement of his mercies. [e]<br />[a]. Ps. 10:17; 62:8; Matt. 7:7-8<br />[b]. 1 John 5:14<br />[c]. John 16:23-24<br />[d]. Ps. 32:5-6; Dan. 9:4-19; 1 John 1:9<br />[e]. Ps. 103:1-5; 136; Phil. 4:6?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 99. What rule hath God given for our direction in prayer?",
      Answer:
        "The whole Word of God is of use to direct us in prayer [a]; but the special rule of direction is that form of prayer which Christ taught his disciples, commonly called The Lord’s Prayer. [b]<br />[a]. 1 John 5:14<br />[b]. Matt. 6:9-13?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 100. What doth the preface of the Lord’s Prayer teach us?",
      Answer:
        "The preface of the Lord’s Prayer, which is, Our Father which art in heaven, teacheth us to draw near to God with all holy reverence[a] and confidence [b], as children to a father [c], able and ready to help us [d]; and that we should pray with and for others <br />[e].<br />[a]. Ps. 95:6<br />[b]. Eph. 3:12<br />[c]. Matt. 7:9-11, cf. Luke 11:11-13; Rom. 8:15<br />[d]. Eph. 3:20<br />[e]. Eph. 6:18; 1 Tim. 2:1-2?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 101. What do we pray for in the first petition?",
      Answer:
        "In the first petition, which is, Hallowed be thy name, we pray, that God would enable us, and others, to glorify him in all that whereby he maketh himself known [a]; and that he would dispose all things to his own glory <br />[b].<br />[a]. Ps. 67:1-3; 99:3; 100:3-4<br />[b]. Rom. 11:33-36; Rev. 4:11?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 102. What do we pray for in the second petition?",
      Answer:
        "In the second petition, which is, Thy kingdom come, we pray, that Satan’s kingdom may be destroyed [a]; and that the kingdom of grace may be advanced [b], ourselves and others brought into it, and kept in it [c]; and that the kingdom of glory may be hastened <br />[d].<br />[a]. Matt. 12:25-28; Rom. 16:20; 1 John 3:8<br />[b]. Ps. 72:8-11; Matt. 24:14; 1 Cor. 15:24-25<br />[c]. Ps. 119:5; Luke 22:32; 2 Thess. 3:1-5<br />[d]. Rev. 22:20?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 103. What do we pray for in the third petition?",
      Answer:
        "In the third petition, which is, Thy will be done in earth, as it is in heaven, we pray, that God, by his grace, would make us able and willing to know, obey, and submit to his will in all things [a], as the angels do in heaven <br />[b].<br />[a]. Ps. 19:14; 119; 1 Thess. 5:23; Heb. 13:20-21<br />[b]. Ps. 103:20-21; Heb. 1:14?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 104. What do we pray for in the fourth petition?",
      Answer:
        "In the fourth petition, which is, Give us this day our daily bread, we pray that of God’s free gift we may receive a competent portion of the good things of this life, and enjoy his blessing with them <br />[a].<br />[a]. Prov. 30:8-9; Matt. 6:31-34; Phil. 4:11, 19; 1 Tim. 6:6-8?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 105. What do we pray for in the fifth petition?",
      Answer:
        "In the fifth petition, which is, And forgive us our debts, as we forgive our debtors, we pray that God, for Christ’s sake, would freely pardon all our sins [a]; which we are the rather encouraged to ask, because by his grace we are enabled from the heart to forgive others <br />[b].<br />[a]. Ps. 51:1-2, 7, 9; Dan. 9:17-19; 1 John 1:7<br />[b]. Matt. 18:21-35; Eph. 4:32; Col. 3:13?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 106. What do we pray for in the sixth petition?",
      Answer:
        "In the sixth petition, which is, And lead us not into temptation, but deliver us from evil, we pray, that God would either keep us from being tempted to sin [a], or support and deliver us when we are tempted <br />[b].<br />[a]. Ps. 19:13; Matt. 26:41; John 17:15<br />[b]. Luke 22:31-32; I Cor. 10:13; 2 Cor. 12:7-9; Heb. 2:18?",
    },
    {
      Subject: "Westminster Shorter Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question:
        "Q. 107. What doth the conclusion of the Lord’s Prayer teach us?",
      Answer:
        "The conclusion of the Lord’s Prayer, which is, For thine is the kingdom, and the power, and the glory, for ever, Amen. teacheth us to take our encouragement in prayer from God only [a], and in our prayers to praise him, ascribing kingdom, power, and glory to him [b]; and, in testimony of our desire, and assurance to be heard, we say, Amen. [c]<br />[a]. Dan. 9:4, 7-9, 16-19; Luke 18:1, 7-8<br />[b]. 1 Chron. 29:10-13; 1 Tim. 1:17; Rev. 5:11-13<br />[c]. 1 Cor. 14:16; Rev. 22:20",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Holy Scripture",
      Question: "Q 1: What is the chief and highest end of man?",
      Answer:
        "Man's chief and highest end is to glorify God,1 and fully to enjoy him forever.2<br><br>1: Romans 11:36 , 1 Corinthians 10:31<br>2: Psalm 73:24-28 , John 17:21-23",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Holy Scripture",
      Question: "Q. 2: How doth it appear that there is a God?",
      Answer:
        "The very light of nature in man, and the works of God, declare plainly that there is a God;1 but his word and Spirit only do sufficiently and effectually reveal him unto men for their salvation.2<br><br>1: Romans 1:19-20 , Psalm 19:1-3 , Acts 17:28<br>2: 1 Corinthians 2:9-10 , 2 Timothy 3:15-17 , Isaiah 59:21",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Holy Scripture",
      Question: "Q. 3: What is the word of God?",
      Answer:
        "The holy scriptures of the Old and New Testaments are the word of God,1 the only rule of faith and obedience.2<br><br>1: 2 Timothy 3:16 , 2 Peter 1:19-21<br>2: Ephesians 2:20 , Revelation 22:18-19 , Isaiah 8:20 , Luke 16:29, Luke 16:31 , Galatians 1:8-9 , 2 Timothy 3:15-16",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Holy Scripture",
      Question:
        "Q. 4: How doth it appear that the scriptures are the word of God?",
      Answer:
        "The scriptures manifest themselves to be the word of God, by their majesty 1 and purity;2 by the consent of all the parts,3 and the scope of the whole, which is to give all glory to God;4 by their light and power to convince and convert sinners, to comfort and build up believers unto salvation:5 but the Spirit of God bearing witness by and with the scriptures in the heart of man, is alone able fully to persuade it that they are the very word of God.6<br><br>1: Hosea 8:12 , 1 Corinthians 2:6-7, 1 Corinthians 2:13 , Psalm 119:18, Psalm 119:129<br>2: Psalm 12:6 , Psalm 119:140<br>3: Acts 10:43 , Acts 26:22<br>4: Romans 3:19, Romans 3:27<br>5: Acts 18:28 , Hebrews 4:12 , James 1:18 , Psalm 19:7-9 , Romans 15:4 , Acts 20:32<br>6: John 16:13-14 , 1 John 2:20, 1 John 2:27 , John 20:31",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Holy Scripture",
      Question: "Q. 5: What do the scriptures principally teach?",
      Answer:
        "The scriptures principally teach, what man is to believe concerning God, and what duty God requires of man.1<br><br>1: 2 Timothy 1:13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Holy Scripture",
      Question: "Q. 6: What do the scriptures make known of God?",
      Answer:
        "The scriptures make known what God is,1 the persons in the Godhead,2 his decrees,3 and the execution of his decrees.4<br><br>1: Hebrews 11:6<br>2: Matthew 3:16-17<br>3: Acts 15:14-15, Acts 15:17-18 , Isaiah 46:9<br>4: Acts 4:27-28",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question: "Q. 7: What is God?",
      Answer:
        "God is a Spirit,1 in and of himself infinite in being,2 glory,3 blessedness,4 and perfection;5 all-sufficient,6 eternal,7 unchangeable,8 incomprehensible,9 everywhere present,10 almighty,11 knowing all things,12 most wise,13 most holy,14 most just,15 most merciful and gracious, long-suffering, and abundant in goodness and truth.16<br><br>1: John 4:24<br>2: Exodus 3:14 , Job 11:7-9<br>3: Acts 7:2<br>4: 1 Timothy 6:15<br>5: Matthew 5:48<br>6: Genesis 17:1<br>7: Psalm 90:2<br>8: Malachi 3:6<br>9: 1 Kings 8:27<br>10: Psalm 139:1-13<br>11: Revelation 4:8<br>12: Hebrews 4:13 , Psalm 147:5<br>13: Romans 16:27<br>14: Isaiah 6:3 , Revelation 15:4<br>15: Deuteronomy 32:4<br>16: Exodus 34:6",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question: "Q. 8: Are there more Gods than one?",
      Answer:
        "There is but one only, the living and true God.1<br><br>1: Deuteronomy 6:4 , 1 Corinthians 8:4, 1 Corinthians 8:6 , Jeremiah 10:10",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question: "Q. 9: How many persons are there in the Godhead?",
      Answer:
        "There be three persons in the Godhead, the Father, the Son, and the Holy Ghost; and these three are one true, eternal God, the same in substance, equal in power and glory; although distinguished by their personal properties.1<br><br>1: Matthew 3:16-17 , Matthew 28:19 , 2 Corinthians 13:14 , John 10:30",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question:
        "Q. 10: What are the personal properties of the three persons in the Godhead?",
      Answer:
        "It is proper to the Father to beget the Son,1 and to the Son to be begotten of the Father,2 and to the Holy Ghost to proceed from the Father and the Son from all eternity.3<br><br>1: Hebrews 1:5-6, Hebrews 1:8<br>2: John 1:14, John 1:18<br>3: John 15:26 , Galatians 4:6",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question:
        "Q. 11: How doth it appear that the Son and the Holy Ghost are God equal with the Father?",
      Answer:
        "The scriptures manifest that the Son and the Holy Ghost are God equal with the Father, ascribing unto them such names,1 attributes,2 works,3 and worship,4 as are proper to God only.<br><br>1: Isaiah 6:3, Isaiah 6:5, Isaiah 6:8 , John 12:41 , Acts 28:25 , 1 John 5:20 , Acts 5:3-4<br>2: John 1:1 , Isaiah 9:6 , John 2:24-25 , 1 Corinthians 2:10-11<br>3: Colossians 1:16 , Genesis 1:2<br>4: Matthew 28:19 , 2 Corinthians 13:14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question: "Q. 12: What are the decrees of God?",
      Answer:
        "God's decrees are the wise, free, and holy acts of the counsel of his will,1 whereby, from all eternity, he hath, for his own glory, unchangeably foreordained: Whatsoever comes to pass in time,2 especially concerning angels and men.<br><br>1: Ephesians 1:11 , Romans 11:33 , Romans 9:14-15, Romans 9:18<br>2: Ephesians 1:4, Ephesians 1:11 , Romans 9:22-23 , Psalm 33:11",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question:
        "Q. 13: What hath God especially decreed concerning angels and men?",
      Answer:
        "God, by an eternal and immutable decree, out of his mere love, for the praise of his glorious grace, to be manifested in due time, hath elected some angels to glory;1 and in Christ hath chosen some men to eternal life, and the means thereof:2 and also, according to his sovereign power, and the unsearchable counsel of his own will (whereby he extendeth or withholdeth favor as he pleases), hath passed by and foreordained the rest to dishonor and wrath, to be for their sin inflicted, to the praise of the glory of his justice.3<br><br>1: 1 Timothy 5:21<br>2: Ephesians 1:4-6 , 2 Thessalonians 2:13-14<br>3: Romans 9:17-18, Romans 9:21-22 , Matthew 11:25-26 , 2 Timothy 2:20 , Jude 4 , 1 Peter 2:8",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God, and of the Holy Trinity",
      Question: "Q. 14: How doth God execute his decrees?",
      Answer:
        "God executeth his decrees in the works of creation and providence, according to his infallible foreknowledge, and the free and immutable counsel of his own will.1<br><br>1: Ephesians 1:11",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question: "Q. 15: What is the work of creation?",
      Answer:
        "The work of creation is that wherein God did in the beginning, by the word of his power, make of nothing the world, and all things therein, for himself, within the space of six days, and all very good.1<br><br>1: Genesis 1 , Hebrews 11:3 , Proverbs 16:4",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question: "Q. 16: How did God create angels?",
      Answer:
        "God created all the angels1 spirits,2 immortal,3 holy,4 excelling in knowledge,5 mighty in power,6 to execute his commandments, and to praise his name,7 yet subject to change.8<br><br>1: Colossians 1:16<br>2: Psalm 104:4<br>3: Matthew 22:30<br>4: Matthew 25:31<br>5: 2 Samuel 14:17 , Matthew 24:36<br>6: 2 Thessalonians 1:7<br>7: Psalm 103:20-21<br>8: 2 Peter 2:4",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question: "Q. 17: How did God create man?",
      Answer:
        "After God had made all other creatures, he created man male and female;1 formed the body of the man of the dust of the ground,2 and the woman of the rib of the man,3 endued them with living, reasonable, and immortal souls;4 made them after his own image,5 in knowledge,6 righteousness,and holiness;7 having the law of God written in their hearts,8 and power to fulfil it,9 and dominion over the creatures;10 yet subject to fall.11<br><br>1: Genesis 1:27<br>2: Genesis 2:7<br>3: Genesis 2:22<br>4: Genesis 2:7 , Job 35:11 , Ecclesiastes 12:7 , Matthew 10:28 , Luke 23:43<br>5: Genesis 1:27<br>6: Colossians 3:10<br>7: Ephesians 4:24<br>8: Romans 2:14-15<br>9: Ecclesiastes 7:29<br>10: Genesis 1:28<br>11: Genesis 3:6 , Ecclesiastes 7:29",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question: "Q. 18: What are God's works of providence?",
      Answer:
        "God's works of providence are his most holy,1 wise,2 and powerful preserving3 and governing4 all his creatures; ordering them, and all their actions,5 to his own glory.6<br><br>1: Psalm 145:17<br>2: Psalm 104:24 , Isaiah 28:29<br>3: Hebrews 1:3<br>4: Psalm 103:19<br>5: Matthew 10:29-31 , Genesis 45:7<br>6: Romans 11:36 , Isaiah 63:14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question: "Q. 19: What is God's providence towards the angels?",
      Answer:
        "God by his providence permitted some of the angels, wilfully and irrecoverably, to fall into sin and damnation,1 limiting and ordering that, and all their sins, to his own glory;2 and established the rest in holiness and happiness;3 employing them all,4 at his pleasure, in the administrations of his power, mercy, and justice.5<br><br>1: Jude 6 , 2 Peter 2:4 , Hebrews 2:1 , John 8:44<br>2: Job 1:12 , Matthew 8:31<br>3: 1 Timothy 5:21 , Mark 8:38 , Hebrews 12:22<br>4: Psalm 104:4<br>5: 2 Kings 19:35 , Hebrews 1:14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Creation and Providence",
      Question:
        "Q. 20: What was the providence of God toward man in the estate in which he was created?",
      Answer:
        "The providence of God toward man in the estate in which he was created, was the placing him in paradise, appointing him to dress it, giving him liberty to eat of the fruit of the earth;1 putting the creatures under his dominion,2 and ordaining marriage for his help;3 affording him communion with himself;4 instituting the sabbath;5 entering into a covenant of life with him, upon condition of personal, perfect, and perpetual obedience,6 of which the tree of life was a pledge;7 and forbidding to eat of the tree of the knowledge of good and evil, upon the pain of death.8<br><br>1: Genesis 2:8, Genesis 2:15-16<br>2: Genesis 1:28<br>3: Genesis 2:18<br>4: Genesis 1:26-29 , Genesis 3:8<br>5: Genesis 2:3<br>6: Galatians 3:12 , Romans 10:5<br>7: Genesis 2:9<br>8: Genesis 2:17",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question:
        "Q. 21: Did man continue in that estate wherein God at first created him?",
      Answer:
        "Our first parents being left to the freedom of their own will, through the temptation of Satan, transgressed the commandment of God in eating the forbidden fruit; and thereby fell from the estate of innocency wherein they were created.1<br><br>1: Genesis 3:6-8, Genesis 3:13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question: "Q. 22: Did all mankind fall in that first transgression ?",
      Answer:
        "The covenant being made with Adam as a public person, not for himself only, but for his posterity, all mankind descending from him by ordinary generation,1 sinned in him, and fell with him in that first transgression.2<br><br>1: Acts 17:26<br>2: Genesis 2:16-17 , Romans 5:12-20 , 1 Corinthians 15:21-22",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question: "Q. 23: Into what estate did the fall bring mankind?",
      Answer:
        "The fall brought mankind into an estate of sin and misery.1<br><br>1: Romans 5:12",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question: "Q. 24: What is sin?",
      Answer:
        "Sin is any want of conformity unto, or transgression of, any law of God, given as a rule to the reasonable creature.1<br><br>1: 1 John 3:4 , Galatians 3:10, Galatians 3:12",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question:
        "Q. 25: Wherein consists the sinfulness of that estate whereinto man fell?",
      Answer:
        "The sinfulness of that estate whereinto man fell, consisteth in the guilt of Adam's first sin,1 the want of that righteousness wherein he was created, and the corruption of his nature, whereby he is utterly indisposed, disabled, and made opposite unto all that is spiritually good, and wholly inclined to all evil, and that continually;2 which is commonly called Original Sin, and from which do proceed all actual transgressions.3<br><br>1: Romans 5:12, Romans 5:19<br>2: Romans 3:10-19 , Ephesians 2:1-3 , Romans 5:6 , Romans 8:7-8 , Genesis 6:5<br>3: James 1:14-15 , Matthew 15:19",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question:
        "Q. 26: How is original sin conveyed from our first parents unto their posterity?",
      Answer:
        "Original sin is conveyed from our first parents unto their posterity by natural generation, so as all that proceed from them in that way are conceived and born in sin.1<br><br>1: Psalm 51:5 , Job 14:4 , John 3:6",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question: "Q. 27: What misery did the fall bring upon mankind?",
      Answer:
        "The fall brought upon mankind the loss of communion with God,1 his displeasure and curse; so as we are by nature children of wrath,2 bond slaves to Satan,3 and justly liable to all punishments in this world, and that which is to come.4<br><br>1: Genesis 3:8, Genesis 3:10, Genesis 3:24<br>2: Ephesians 2:2-3<br>3: 2 Timothy 2:26<br>4: Genesis 2:17 , Lamentations 3:39 , Romans 6:23 , Matthew 25:41, Matthew 25:46 , Jude 7",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question: "Q. 28: What are the punishments of sin in this world?",
      Answer:
        "The punishments of sin in this world are either inward, as blindness of mind,1 a reprobate sense,2 strong delusions,3 hardness of heart,4 horror of conscience,5 and vile affections;6 or outward, as the curse of God upon the creatures for our sakes,7 and all other evils that befall us in our bodies, names, estates, relations, and employments;8 together with death itself.9<br><br>1: Ephesians 4:18<br>2: Romans 1:28<br>3: 2 Thessalonians 2:11<br>4: Romans 2:5<br>5: Isaiah 33:14 , Genesis 4:13 , Matthew 27:4<br>6: Romans 1:26<br>7: Genesis 3:17<br>8: Deuteronomy 28:15-18<br>9: Romans 6:21, Romans 6:23",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question: "Q. 29: What are the punishments of sin in the world to come?",
      Answer:
        "The punishments of sin in the world to come, are everlasting separation from the comfortable presence of God, and most grievous torments in soul and body, without intermission, in hell fire forever.1<br><br>1: 2 Thessalonians 1:9 , Mark 9:43-44, Mark 9:48 , Luke 16:24",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Fall of Man, Of Sin, Of Punishment",
      Question:
        "Q. 30: Doth God leave all mankind to perish in the estate of sin and misery?",
      Answer:
        "God doth not leave all men to perish in the estate of sin and misery,1 into which they fell by the breach of the first covenant, commonly called the Covenant of Works;2 but of his mere love and mercy delivereth his elect out of it, and bringeth them into an estate of salvation by the second covenant, commonly called the Covenant of Grace.3<br><br>1: 1 Thessalonians 5:9<br>2: Galatians 3:10, Galatians 3:12<br>3: Titus 3:4-7 , Galatians 3:21 , Romans 3:20-22",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant",
      Question: "Q. 31: With whom was the covenant of grace made?",
      Answer:
        "The covenant of grace was made with Christ as the second Adam, and in him with all the elect as his seed.1<br><br>1: Galatians 3:16 , Romans 5:15-21 , Isaiah 53:10-11",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant",
      Question:
        "Q. 32: How is the grace of God manifested in the second covenant?",
      Answer:
        "The grace of God is manifested in the second covenant, in that he freely provideth and offereth to sinners a Mediator,1 and life and salvation by him;2 and requiring faith as the condition to interest them in him, promiseth and giveth his Holy Spirit 3 to all his elect, to work in them that faith,4 with all other saving graces;5 and to enable them unto all holy obedience,5 as the evidence of the truth of their faith 6 and thankfulness to God,7 and as the way which he hath appointed them to salvation.8<br><br>1: Genesis 3:15 , Isaiah 42:6 , John 6:27<br>2: 1 John 5:11-12<br>3: John 3:16 , John 1:12<br>4: Proverbs 1:23<br>5: 2 Corinthians 4:13<br>6: Galatians 5:22-23<br>7: Ezekiel 36:27<br>8: James 2:18, James 2:22<br>9: 2 Corinthians 5:14-15<br>10: Ephesians 2:18",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant",
      Question:
        "Q. 33: Was the covenant of grace always administered after one and the same manner?",
      Answer:
        "The covenant of grace was not always administered after the same manner, but the administrations of it under the Old Testament were different from those under the New.1<br><br>1: 2 Corinthians 3:6-9",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant",
      Question:
        "Q. 34: How was the covenant of grace administered under the Old Testament?",
      Answer:
        "The covenant of grace was administered under the Old Testament, by promises,1 prophecies, 2 sacrifices,3 circumcision,4 the passover,5 and other types and ordinances, which did all foresignify Christ then to come, and were for that time sufficient to build up the elect in faith in the promised Messiah,6 by whom they then had full remission of sin, and eternal salvation.7<br><br>1: Romans 15:8<br>2: Acts 3:20, Acts 3:24<br>3: Hebrews 10:1<br>4: Romans 4:11<br>5: 1 Corinthians 5:7<br>6: Hebrews 8-10 , Hebrews 11:13<br>7: Galatians 3:7-9, Galatians 3:14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of God's Covenant",
      Question:
        "Q. 35: How is the covenant of grace administered under the New Testament?",
      Answer:
        "Under the New Testament, when Christ the substance was exhibited, the same covenant of grace was and still is to be administered in the preaching of the word,1 and the administration of the sacraments of Baptism2 and the Lord's Supper;3 in which grace and salvation are held forth in more fulness, evidence, and efficacy, to all nations.4<br><br>1: Mark 16:1<br>2: Matthew 28:19-20<br>3: 1 Corinthians 11:23-25<br>4: 2 Corinthians 3:6-9 , Hebrews 8:6, Hebrews 8:10-11",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 36: Who is the Mediator of the covenant of grace?",
      Answer:
        "The only Mediator of the covenant of grace is the Lord Jesus Christ,1 who, being the eternal Son of God, of one substance and equal with the Father,2 in the fulness of time became man,3 and so was and continues to be God and man, in two entire distinct natures, and one person, forever.4<br><br>1: 1 Timothy 2:5<br>2: John 1:1, John 1:14 , John 10:30 , Philippians 2:6<br>3: Galatians 4:4<br>4: Luke 1:35 , Romans 9:5 , Colossians 2:9 , Hebrews 7:24-25",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 37: How did Christ, being the Son of God, become man?",
      Answer:
        "Christ the Son of God became man, by taking to himself a true body, and a reasonable soul,1 being conceived by the power of the Holy Ghost in the womb of the virgin Mary, of her substance, and born of her,2 yet without sin.3<br><br>1: John 1:14 , Matthew 26:38<br>2: Luke 1:27, Luke 1:31, Luke 1:35, Luke 1:42 , Galatians 4:4<br>3: Hebrews 4:15 , Hebrews 7:26",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 38: Why was it requisite that the Mediator should be God?",
      Answer:
        "It was requisite that the Mediator should be God, that he might sustain and keep the human nature from sinking under the infinite wrath of God, and the power of death;1 give worth and efficacy to his sufferings, obedience, and intercession;2 and to satisfy God's justice,3 procure his favor,4 purchase a peculiar people,5 give his Spirit to them,6 conquer all their enemies,7 and bring them to everlasting salvation.8<br><br>1: Acts 2:24-25 , Romans 1:4 , Romans 4:25 , Hebrews 9:14<br>2: Acts 20:28 , Hebrews 9:14 , Hebrews 7:25-28<br>3: Romans 3:24-26<br>4: Ephesians 1:6 , Matthew 3:17<br>5: Titus 2:13, Titus 2:1<br>6: Galatians 4:6<br>7: Luke 1:68-69, Luke 1:71, Luke 1:74<br>8: Hebrews 5:8-9 , Hebrews 9:11-15",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 39: Why was it requisite that the Mediator should be man?",
      Answer:
        "It was requisite that the Mediator should be man, that he might advance our nature,1 perform obedience to the law,2 suffer and make intercession for us in our nature,3 have a fellow feeling of our infirmities;4 that we might receive the adoption of sons,5 and have comfort and access with boldness unto the throne of grace.6<br><br>1: 2 Peter 1:4<br>2: Galatians 4:4<br>3: Hebrews 2:14 , Hebrews 7:24-25<br>4: Hebrews 4:15<br>5: Galatians 4:5<br>6: Hebrews 4:16",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question:
        "Q. 40: Why was it requisite that the Mediator should be God and man in one person ?",
      Answer:
        "It was requisite that the Mediator, who was to reconcile God and man, should himself be both God and man, and this in one person, that the proper works of each nature might be accepted of God for us, and relied on by us,1 as the works of the whole person.2<br><br>1: Matthew 1:21, Matthew 1:23 , Matthew 3:17 , Hebrews 9:14<br>2: 1 Peter 2:6",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 41: Why was our Mediator called Jesus?",
      Answer:
        "Our Mediator was called Jesus, because he saveth his people from their sins.1<br><br>1: Matthew 1:21",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 42: Why was our Mediator called Christ?",
      Answer:
        "Our Mediator was called Christ, because he was anointed with the Holy Ghost above measure;1 and so set apart, and fully furnished with all authority and ability,2 to execute the offices of prophet,3 priest,4 and king of his church,5 in the estate both of his humiliation and exaltation.<br><br>1: John 3:34 , Psalm 45:7<br>2: John 6:27 , Matthew 28:18-20<br>3: Acts 3:21-22 , Luke 4:18, Luke 4:21<br>4: Hebrews 5:5-7 , Hebrews 4:14-15<br>5: Psalm 2:6 , Matthew 21:5 , Isaiah 9:6-7 , Philippians 2:8-11",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 43: How doth Christ execute the office of a prophet?",
      Answer:
        "Christ executeth the office of a prophet, in his revealing to the church,1 in all ages, by his Spirit and word,2 in divers ways of administration,3 the whole will of God,4 in all things concerning their edification and salvation.5<br><br>1: John 1:18<br>2: 1 Peter 1:10-12<br>3: Hebrews 1:1-2<br>4: John 15:15<br>5: Acts 20:23 , Ephesians 4:11-13 , John 20:31",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 44: How doth Christ execute the office of a priest?",
      Answer:
        "Christ executeth the office of a priest, in his once offering himself a sacrifice without spot to God,1 to be a reconciliation for the sins of his people;2 and in making continual intercession for them.3<br><br>1: Hebrews 9:14, Hebrews 9:28<br>2: Hebrews 2:17<br>3: Hebrews 7:25",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 45: How doth Christ execute the office of a king?",
      Answer:
        "Christ executeth the office of a king, in calling out of the world a people to himself,1 and giving them officers,2 laws,3 and censures, by which he visibly governs them;4 in bestowing saving grace upon his elect,5 rewarding their obedience,6 and correcting them for their sins,7 preserving and supporting them under all their temptations and sufferings,8 restraining and overcoming all their enemies,9 and powerfully ordering all things for his own glory,10 and their good;11 and also in taking vengeance on the rest, who know not God, and obey not the gospel.12<br><br>1: Acts 15:14-16 , Genesis 49:10 , Psalm 110:3<br>2: Ephesians 4:11-12 , 1 Corinthians 12:28<br>3: Isaiah 33:22<br>4: Matthew 18:17-18 , 1 Corinthians 5:4-5<br>5: Acts 5:31<br>6: Revelation 22:12 , Revelation 2:10<br>7: Revelation 3:19<br>8: Isaiah 63:9<br>9: 1 Corinthians 15:25 , Psalm 110:1-2<br>10: Romans 14:10-11<br>11: Romans 8:28<br>12: 2 Thessalonians 1:8-9 , Psalm 2:8-9",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 46: What was the estate of Christ's humiliation?",
      Answer:
        "The estate of Christ's humiliation was that low condition, wherein he for our sakes, emptying himself of his glory, took upon him the form of a servant, in his conception and birth, life, death, and after his death, until his resurrection. 1<br><br>1: Philippians 2:6-8 , Luke 1:31 , 2 Corinthians 8:9 , Acts 2:24",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question:
        "Q. 47: How did Christ humble himself in his conception and birth?",
      Answer:
        "Christ humbled himself in his conception and birth, in that, being from all eternity the Son of God, in the bosom of the Father, he was pleased in the fulness of time to become the son of man, made of a woman of low estate, and to be born of her; with divers circumstances of more than ordinary abasement.1<br><br>1: John 1:14, John 1:18 , Galatians 4:4 , Luke 2:7",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 48: How did Christ humble himself in his life?",
      Answer:
        "Christ humbled himself in his life, by subjecting himself to the law,1 which he perfectly fulfilled;2 and by conflicting with the indignities of the world,3 temptations of Satan,4 and infirmities in his flesh, whether common to the nature of man, or particularly accompanying that his low condition.5<br><br>1: Galatians 4:4<br>2: Matthew 5:17 , Romans 5:19<br>3: Psalm 22:6 , Hebrews 12:2-3<br>4: Matthew 4:1-12 , Luke 4:13<br>5: Hebrews 2:17-18 , Hebrews 4:15 , Isaiah 52:13-14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 49: How did Christ humble himself in his death?",
      Answer:
        "Christ humbled himself in his death, in that having been betrayed by Judas,1 forsaken by his disciples,2 scorned and rejected by the world,3 condemned by Pilate, and tormented by his persecutors;4 having also conflicted with the terrors of death, and the powers of darkness, felt and borne the weight of God's wrath,5 he laid down his life an offering for sin,6 enduring the painful, shameful, and cursed death of the cross.7<br><br>1: Matthew 27:4<br>2: Matthew 26:56<br>3: Isaiah 53:2-3<br>4: Matthew 27:26-50 , John 19:34<br>5: Luke 22:44 , Matthew 27:46<br>6: Isaiah 53:10<br>7: Philippians 2:8 , Hebrews 12:2 , Galatians 3:13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question:
        "Q. 50: Wherein consisted Christ's humiliation after his death?",
      Answer:
        "Christ's humiliation after his death consisted in his being buried,1 and continuing in the state of the dead, and under the power of death till the third day;2 which hath been otherwise expressed in these words, he descended into hell.<br><br>1: 1 Corinthians 15:3-4<br>2: Psalm 16:10 , Acts 2:24-27, Acts 2:31 , Romans 6:9 , Matthew 12:40",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 51: What was the estate of Christ's exaltation?",
      Answer:
        "The estate of Christ's exaltation comprehendeth his resurrection,1 ascension,2 sitting at the right hand of the Father,3 and his coming again to judge the world.4<br><br>1: 1 Corinthians 15:4<br>2: Mark 16:19<br>3: Ephesians 1:20<br>4: Acts 1:11 , Acts 17:31",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 52: How was Christ exalted in his resurrection?",
      Answer:
        "Christ was exalted in his resurrection, in that, not having seen corruption in death (of which it was not possible for him to be held),1 and having the very same body in which he suffered, with the essential properties thereof 2 (but without mortality, and other common infirmities belonging to this life), really united to his soul,3 he rose again from the dead the third day by his own power;4 whereby he declared himself to be the Son of God,5 to have satisfied divine justice,6 to have vanquished death, and him that had the power of it,7 and to be Lord of quick and dead:8 all which he did as a public person,9 the head of his church,10 for their justification,11 quickening in grace,12 support against enemies,13 and to assure them of their resurrection from the dead at the last day.14<br><br>1: Acts 2:24, Acts 2:27<br>2: Luke 24:39<br>3: Romans 6:9 , Revelation 1:18<br>4: John 10:18<br>5: Romans 1:4<br>6: Romans 8:34<br>7: Hebrews 2:14<br>8: Romans 14:9<br>9: 1 Corinthians 15:21-22<br>10: Ephesians 1:20-23 , Colossians 1:18<br>11: Romans 4:25<br>12: Ephesians 2:1, Ephesians 2:5-6 , Colossians 2:12<br>13: 1 Corinthians 15:25-27<br>14: 1 Corinthians 15:20",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 53: How was Christ exalted in his ascension?",
      Answer:
        "Christ was exalted in his ascension, in that having after his resurrection often appeared unto and conversed with his apostles, speaking to them of the things pertaining to the kingdom of God,1 and giving them commission to preach the gospel to all nations,2 forty days after his resurrection, he, in our nature, and as our head,3 triumphing over enemies,4 visibly went up into the highest heavens, there to receive gifts for men,5 to raise up our affections thither,6 and to prepare a place for us,7 where himself is, and shall continue till his second coming at the end of the world.8<br><br>1: Acts 1:2-3<br>2: Matthew 28:19-20<br>3: Hebrews 6:20<br>4: Ephesians 4:8<br>5: Acts 1:9-11 , Ephesians 4:10 , Psalm 68:18<br>6: Colossians 3:1-2<br>7: John 14:3<br>8: Acts 3:21",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question:
        "Q. 54: How is Christ exalted in his sitting at the right hand of God?",
      Answer:
        "Christ is exalted in his sitting at the right hand of God, in that as God-man he is advanced to the highest favor with God the Father,1 with all fulness of joy,2 glory,3 and power over all things in heaven and earth;4 and doth gather and defend his church, and subdue their enemies; furnisheth his ministers and people with gifts and graces,5 and maketh intercession for them.6<br><br>1: Philippians 2:9<br>2: Acts 2:28 , Psalm 16:11<br>3: John 17:5<br>4: Ephesians 1:22 , 1 Peter 3:22<br>5: Ephesians 4:10-12 , Psalm 110:1<br>6: Romans 8:34",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 55: How doth Christ make intercession?",
      Answer:
        "Christ maketh intercession, by his appearing in our nature continually before the Father in heaven,1 in the merit of his obedience and sacrifice on earth,2 declaring his will to have it applied to all believers;3 answering all accusations against them,4 and procuring for them quiet of conscience, notwithstanding daily failings,5 access with boldness to the throne of grace,6 and acceptance of their persons 7 and services.8<br><br>1: Hebrews 9:12, Hebrews 9:24<br>2: Hebrews 1:3<br>3: John 3:16 , John 17:9, John 17:20, John 17:24<br>4: Romans 8:33-34<br>5: Romans 5:1-2 , 1 John 2:1-2<br>6: Hebrews 4:16<br>7: Ephesians 1:6<br>8: 1 Peter 2:5",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question:
        "Q. 56: How is Christ to be exalted in his coming again to judge the world?",
      Answer:
        "Christ is to be exalted in his coming again to judge the world, in that he, who was unjustly judged and condemned by wicked men,1 shall come again at the last day in great power,2 and in the full manifestation of his own glory, and of his Father's, with all his holy angels,3 with a shout, with the voice of the archangel, and with the trumpet of God,4 to judge the world in righteousness.5<br><br>1: Acts 3:14-15<br>2: Matthew 24:30<br>3: Luke 9:26 , Matthew 25:31<br>4: 1 Thessalonians 4:16<br>5: Acts 17:31",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 57: What benefits hath Christ procured by his mediation?",
      Answer:
        "Christ, by his mediation, hath procured redemption,1 with all other benefits of the covenant of grace.2<br><br>1: Hebrews 9:12<br>2: 2 Corinthians 1:20",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question:
        "Q. 58: How do we come to be made partakers of the benefits which Christ hath procured?",
      Answer:
        "We are made partakers of the benefits which Christ hath procured,1 by the application of them unto us, which is the work especially of God the Holy Ghost.2<br><br>1: John 1:11-12<br>2: Titus 3:5-6",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question: "Q. 59: Who are made partakers of redemption through Christ?",
      Answer:
        "Redemption is certainly applied, and effectually communicated, to all those for whom Christ hath purchased it;1 who are in time by the Holy Ghost enabled to believe in Christ according to the gospel.2<br><br>1: Ephesians 1:13-14 , John 6:37, John 6:39 , John 10:15-16<br>2: Ephesians 2:8 , 2 Corinthians 4:13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Christ",
      Question:
        "Q. 60: Can they who have never heard the gospel, and so know not Jesus Christ, nor believe in him, be saved by their living according to the light of nature?",
      Answer:
        "They who, having never heard the gospel,1 know not Jesus Christ,2 and believe not in him, cannot be saved,3 be they never so diligent to frame their lives according to the light of nature,4 or the laws of that religion which they profess;5 neither is there salvation in any other, but in Christ alone,6 who is the Savior only of his body the church.7<br><br>1: Romans 10:14<br>2: 2 Thessalonians 1:8-9 , Ephesians 2:12 , John 1:10-12<br>3: John 8:24 , Mark 16:16<br>4: 1 Corinthians 1:20-24<br>5: John 4:22 , Romans 9:31-32 , Philippians 3:4-9<br>6: Acts 4:12<br>7: Ephesians 5:23",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Church",
      Question:
        "Q. 61: Are all they saved who hear the gospel, and live in the church?",
      Answer:
        "All that hear the gospel, and live in the visible church, are not saved; but they only who are true members of the church invisible.1<br><br>1: John 12:38-40 , Romans 9:6 , Matthew 22:14 , Matthew 7:21 , Romans 11:7",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Church",
      Question: "Q. 62: What is the visible church?",
      Answer:
        "The visible church is a society made up of all such as in all ages and places of the world do profess the true religion,1 and of their children.2<br><br>1: 1 Corinthians 1:2 , 1 Corinthians 12:13 , Romans 15:9-12 , Revelation 7:9 , Psalm 2:8 , Psalm 22:27-31 , Psalm 45:17 , Matthew 28:19-20 , Isaiah 59:21<br>2: 1 Corinthians 7:14 , Acts 2:39 , Romans 11:16 , Genesis 17:7",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Church",
      Question: "Q. 63: What are the special privileges of the visible church?",
      Answer:
        "The visible church hath the privilege of being under God's special care and government;1 of being protected and preserved in all ages, not withstanding the opposition of all enemies;2 and of enjoying the communion of saints, the ordinary means of salvation,3 and offers of grace by Christ to all the members of it in the ministry of the gospel, testifying, that whosoever believes in him shall be saved,4 and excluding none that will come unto him.5<br><br>1: Isaiah 9:5-6 , 1 Timothy 4:10<br>2: Psalm 115:1-2, Psalm 115:9 , Isaiah 31:4-5 , Zechariah 12:2-4, Zechariah 12:8-9<br>3: Acts 2:39, Acts 2:42<br>4: Psalm 147:19-20 , Romans 9:4 , Ephesians 4:11-12 , Mark 16:15-16<br>5: John 6:37",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Church",
      Question: "Q. 64: What is the invisible church?",
      Answer:
        "The invisible church is the whole number of the elect, that have been, are, or shall be gathered into one under Christ the head.1<br><br>1: Ephesians 1:10 , Ephesians 1:22-23 , John 10:16 , John 11:52",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the Church",
      Question:
        "Q. 65: What special benefits do the members of the invisible church enjoy by Christ?",
      Answer:
        "The members of the invisible church by Christ enjoy union and communion with him in grace and glory.1<br><br>1: John 17:21 , Ephesians 2:5-6 , John 17:24",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 66: What is that union which the elect have with Christ?",
      Answer:
        "The union which the elect have with Christ is the work of God's grace,1 whereby they are spiritually and mystically, yet really and inseparably, joined to Christ as their head and husband;2 which is done in their effectual calling.3<br><br>1: Ephesians 1:22 , Ephesians 2:6-7<br>2: 1 Corinthians 6:17 , John 10:28 , Ephesians 5:23, Ephesians 5:30<br>3: 1 Peter 5:10 , 1 Corinthians 1:9",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 67: What is effectual calling?",
      Answer:
        "Effectual calling is the work of God's almighty power and grace,1 whereby (out of his free and special love to his elect, and from nothing in them moving him thereunto 2) he doth, in his accepted time, invite and draw them to Jesus Christ, by his word and Spirit;3 savingly enlightening their minds,4 renewing and powerfully determining their wills,5 so as they (although in themselves dead in sin) are hereby made willing and able freely to answer his call, and to accept and embrace the grace offered and conveyed therein.6<br><br>1: John 5:25 , Ephesians 1:18-20 , 2 Timothy 1:8-9<br>2: Titus 3:4-5 , Ephesians 2:4-5, Ephesians 2:7-9 , Romans 9:11<br>3: 2 Corinthians 5:20 , 2 Corinthians 6:1-2 , John 6:44 , 2 Thessalonians 2:13-14<br>4: Acts 26:18 , 1 Corinthians 2:10, 1 Corinthians 2:12<br>5: Ezekiel 11:19 , Ezekiel 36:26-27 , John 6:45<br>6: Ephesians 2:5 , Philippians 2:13 , Deuteronomy 30:6",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 68: Are the elect only effectually called?",
      Answer:
        "All the elect, and they only, are effectually called;1 although others may be, and often are, outwardly called by the ministry of the word,2 and have some common operations of the Spirit;3 who, for their wilful neglect and contempt of the grace offered to them, being justly left in their unbelief, do never truly come to Jesus Christ.4<br><br>1: Acts 13:48<br>2: Matthew 22:14<br>3: Matthew 7:22 , Hebrews 6:4-6<br>4: John 12:38-40 , Acts 28:25-27 , John 6:64-65 , Psalm 81:11-12",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 69: What is the communion in grace which the members of the invisible church have with Christ?",
      Answer:
        "The communion in grace which the members of the invisible church have with Christ, is their partaking of the virtue of his mediation, in their justification,1 adoption,2 sanctification, and whatever else, in this life, manifests their union with him.3<br><br>1: Romans 8:30<br>2: Ephesians 1:5<br>3: 1 Corinthians 1:30",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 70: What is justification?",
      Answer:
        "Justification is an act of God's free grace unto sinners,1 in which he pardoneth all their sins, accepteth and accounteth their persons righteous in his sight;2 not for any thing wrought in them, or done by them,3 but only for the perfect obedience and full satisfaction of Christ, by God imputed to them,4 and received by faith alone.5<br><br>1: Romans 3:22, Romans 3:24-25 , Romans 4:5<br>2: 2 Corinthians 5:19, 2 Corinthians 5:21 , Romans 3:22, Romans 3:24-25, Romans 3:27-28<br>3: Titus 3:5, Titus 3:7 , Ephesians 1:7<br>4: Romans 5:17-19 , Romans 4:6-8<br>5: Acts 10:43 , Galatians 2:16 , Philippians 3:9",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 71: How is justification an act of God's free grace?",
      Answer:
        "Although Christ, by his obedience and death, did make a proper, real, and full satisfaction to God's justice in the behalf of them that are justified;1 yet inasmuch as God accepteth the satisfaction from a surety, which he might have demanded of them, and did provide this surety, his own only Son,2 imputing his righteousness to them,3 and requiring nothing of them for their justification but faith,4 which also is his gift,5 their justification is to them of free grace.6<br><br>1: Romans 5:8-10, Romans 5:19<br>2: 1 Timothy 2:5-6 , Hebrews 10:10 , Matthew 20:28 , Daniel 9:24, Daniel 9:26 , Isaiah 53:4-6, Isaiah 53:10-12 , Hebrews 7:22 , Romans 8:32 , 1 Peter 1:18-19<br>3: 2 Corinthians 5:21<br>4: Romans 3:24-25<br>5: Ephesians 2:8<br>6: Ephesians 1:17",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 72: What is justifying faith?",
      Answer:
        "Justifying faith is a saving grace,1 wrought in the heart of a sinner by the Spirit 2 and word of God,3 whereby he, being convinced of his sin and misery, and of the disability in himself and all other creatures to recover him out of his lost condition,4 not only assenteth to the truth of the promise of the gospel,5 but receiveth and resteth upon Christ and his righteousness, therein held forth, for pardon of sin,6 and for the accepting and accounting of his person righteous in the sight of God for salvation.7<br><br>1: Hebrews 10:39<br>2: 2 Corinthians 4:13 , Ephesians 1:17-19<br>3: Romans 10:14-17<br>4: Acts 2:37 , Acts 16:30 , John 16:8-9 , Romans 6:6 , Ephesians 2:1 , Acts 4:12<br>5: Ephesians 1:13<br>6: John 1:12 , Acts 16:31 , Acts 10:43<br>7: Philippians 3:9 , Acts 15:11",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 73: How doth faith justify a sinner in the sight of God?",
      Answer:
        "Faith justifies a sinner in the sight of God, not because of those other graces which do always accompany it, or of good works that are the fruits of it,3 nor as if the grace of faith, or any act thereof, were imputed to him for his justification;2 but only as it is an instrument by which he receiveth and applies Christ and his righteousness.3<br><br>1: Galatians 3:11 , Romans 3:28<br>2: Romans 4:5 , Romans 10:10<br>3: John 1:12 , Philippians 3:9 , Galatians 1:16",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 74: What is adoption?",
      Answer:
        "Adoption is an act of the free grace of God,1 in and for his only Son Jesus Christ,2 whereby all those that are justified are received into the number of his children,3 have his name put upon them,4 the Spirit of his Son given to them,5 are under his fatherly care and dispensations,6 admitted to all the liberties and privileges of the sons of God, made heirs of all the promises, and fellow heirs with Christ in glory.7<br><br>1: 1 John 3:1<br>2: Ephesians 1:5 , Galatians 4:4-5<br>3: John 1:12<br>4: 2 Corinthians 6:18 , Revelation 3:12<br>5: Galatians 4:6<br>6: Psalm 103:13 , Proverbs 14:26 , Matthew 6:32<br>7: Hebrews 6:12 , Romans 8:17",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 75: What is sanctification?",
      Answer:
        "Sanctification is a work of God's grace, whereby they whom God hath, before the foundation of the world, chosen to be holy, are in time, through the powerful operation of his Spirit 1 applying the death and resurrection of Christ unto them,2 renewed in their whole man after the image of God;3 having the seeds of repentance unto life, and all other saving graces, put into their hearts,4 and those graces so stirred up, increased, and strengthened,5 as that they more and more die unto sin, and rise unto newness of life.6<br><br>1: Ephesians 1:4 , 1 Corinthians 6:11 , 2 Thessalonians 2:13<br>2: Romans 6:4-6<br>3: Ephesians 4:23-24<br>4: Acts 11:18 , 1 John 3:9<br>5: Jude 20 , Hebrews 6:11-12 , Ephesians 3:16-19 , Colossians 1:10-11<br>6: Romans 6:4, Romans 6:6, Romans 6:14 , Galatians 5:24",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 76: What is repentance unto life?",
      Answer:
        "Repentance unto life is a saving grace,1 wrought in the heart of a sinner by the Spirit 2 and word of God,3 whereby, out of the sight and sense, not only of the danger,4 but also of the filthiness and odiousness of his sins,5 and upon the apprehension of God's mercy in Christ to such as are penitent,6 he so grieves for 7 and hates his sins,8 as that he turns from them all to God,9 purposing and endeavoring constantly to walk with him in all the ways of new obedience.10<br><br>1: 2 Timothy 2:25<br>2: Zechariah 12:10<br>3: Acts 11:18, Acts 11:20-21<br>4: Ezekiel 18:28, Ezekiel 18:30, Ezekiel 18:32 , Luke 15:17-18 , Hosea 2:6-7<br>5: Ezekiel 36:31 , Isaiah 30:22<br>6: Joel 2:12-13<br>7: Jeremiah 31:18-19<br>8: 2 Corinthians 7:11<br>9: Acts 26:18 , Ezekiel 14:6 , 1 Kings 8:47-48<br>10: Psalm 119:6, Psalm 119:59, Psalm 119:128 , 2 Kings 23:25",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question: "Q. 77: Wherein do justification and sanctification differ?",
      Answer:
        "Although sanctification be inseparably joined with justification,1 yet they differ, in that God in justification imputeth the righteousness of Christ;2 in sanctification his Spirit infuseth grace, and enableth to the exercise thereof;3 in the former, sin is pardoned;4 in the other, it is subdued:5 the one doth equally free all believers from the revenging wrath of God, and that perfectly in this life, that they never fall into condemnation;6 the other is neither equal in all,7 nor in this life perfect in any,8 but growing up to perfection.9<br><br>1: 1 Corinthians 6:11 , 1 Corinthians 1:30<br>2: Romans 4:6, Romans 4:8<br>3: Ezekiel 36:27<br>4: Romans 3:24-25<br>5: Romans 6:6, Romans 6:14<br>6: Romans 8:33-34<br>7: 1 John 2:12-14 , Hebrews 5:12-14<br>8: 1 John 1:8, 1 John 1:10<br>9: 2 Corinthians 7:1 , Philippians 3:12-14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 78: Whence ariseth the imperfection of sanctification in believers?",
      Answer:
        "The imperfection of sanctification in believers ariseth from the remnants of sin abiding in every part of them, and the perpetual lustings of the flesh against the spirit; whereby they are often foiled with temptations, and fall into many sins,1 are hindered in all their spiritual services,2 and their best works are imperfect and defiled in the sight of God.3<br><br>1: Romans 7:18, Romans 7:23 , Mark 14:66 , Galatians 2:11-12<br>2: Hebrews 12:1<br>3: Isaiah 64:6 , Exodus 28:38",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 79: May not true believers, by reason of their imperfections, and the many temptations and sins they are overtaken with, fall away from the state of grace ?",
      Answer:
        "True believers, by reason of the unchangeable love of God,1 and his decree and covenant to give them perseverance,2 their inseparable union with Christ,3 his continual intercession for them,4 and the Spirit and seed of God abiding in them,5 can neither totally nor finally fall away from the state of grace,6 but are kept by the power of God through faith unto salvation.7<br><br>1: Jeremiah 31:3<br>2: 2 Timothy 2:19 , Hebrews 13:20-21 , 2 Samuel 23:5<br>3: 1 Corinthians 1:8-9<br>4: Hebrews 7:25 , Luke 22:32<br>5: 1 John 3:9 , 1 John 2:27<br>6: Jeremiah 32:40 , John 10:28<br>7: 1 Peter 1:5",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 80: Can true believers be infallibly assured that they are in the estate of grace, and that they shall persevere therein unto salvation?",
      Answer:
        "Such as truly believe in Christ, and endeavor to walk in all good conscience before him,1 may, without extraordinary revelation, by faith grounded upon the truth of God's promises, and by the Spirit enabling them to discern in themselves those graces to which the promises of life are made,2 and bearing witness with their spirits that they are the children of God,3 be infallibly assured that they are in the estate of grace, and shall persevere therein unto salvation.4<br><br>1: 1 John 2:3<br>2: 1 Corinthians 2:12 , 1 John 3:14, 1 John 3:18-19, 1 John 3:21, 1 John 3:24 , 1 John 4:13, 1 John 4:16 , Hebrews 6:11-12<br>3: Romans 8:16<br>4: 1 John 5:13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 81: Are all true believers at all times assured of their present being in the estate of grace, and that they shall be saved?",
      Answer:
        "Assurance of grace and salvation not being of the essence of faith,1 true believers may wait long before they obtain it;2 and, after the enjoyment thereof, may have it weakened and intermitted, through manifold distempers, sins, temptations, and desertions;3 yet are they never left without such a presence and support of the Spirit of God as keeps them from sinking into utter despair.4<br><br>1: Ephesians 1:13<br>2: Isaiah 50:10 , Psalm 88:1-3, Psalm 88:6-7, Psalm 88:9-10, Psalm 88:13-15<br>3: Psalm 77:1-12 , Song of Solomon 5:2-3, Song of Solomon 5:6 , Psalm 51:8, Psalm 51:12 , Psalm 31:22 , Psalm 22:1<br>4: 1 John 3:9 , Psalm 73:15, Psalm 73:23 , Isaiah 54:7-10",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 82: What is the communion in glory which the members of the invisible church have with Christ?",
      Answer:
        "The communion in glory which the members of the invisible church have with Christ, is in this life,1 immediately after death,2 and at last perfected at the resurrection and day of judgment.3<br><br>1: 2 Corinthians 3:18<br>2: Luke 23:43<br>3: 1 Thessalonians 4:17",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of Redemption",
      Question:
        "Q. 83: What is the communion in glory with Christ which the members of the invisible church enjoy in this life?",
      Answer:
        "The members of the invisible church have communicated to them in this life the firstfruits of glory with Christ, as they are members of him their head, and so in him are interested in that glory which he is fully possessed of;1 and, as an earnest thereof, enjoy the sense of God's love,2 peace of conscience, joy in the Holy Ghost, and hope of glory;3 as, on the contrary, sense of God's revenging wrath, horror of conscience, and a fearful expectation of judgment, are to the wicked the beginning of their torments which they shall endure after death.4<br><br>1: Ephesians 2:5-6<br>2: Romans 5:5 , 2 Corinthians 1:22<br>3: Romans 5:1-2 , Romans 14:17<br>4: Genesis 4:13 , Matthew 27:4 , Hebrews 10:27 , Romans 2:9 , Mark 9:48",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the State of Man, Of the Resurrection",
      Question: "Q. 84: Shall all men die?",
      Answer:
        "Death being threatened as the wages of sin,1 it is appointed unto all men once to die;2 for that all have sinned.3<br><br>1: Romans 6:23<br>2: Hebrews 9:27<br>3: Romans 5:12",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the State of Man, Of the Resurrection",
      Question:
        "Q. 85: Death, being the wages of sin, why are not the righteous delivered from death, seeing all their sins are forgiven in Christ?",
      Answer:
        "The righteous shall be delivered from death itself at the last day, and even in death are delivered from the sting and curse of it;1 so that, although they die, yet it is out of God's love,2 to free them perfectly from sin and misery,3 and to make them capable of further communion with Christ in glory, which they then enter upon.4<br><br>1: 1 Corinthians 15:26, 1 Corinthians 15:55-57 , Hebrews 2:15<br>2: Isaiah 57:1-2 , 2 Kings 22:20<br>3: Revelation 14:13 , Ephesians 5:27<br>4: Luke 23:43 , Philippians 1:23",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the State of Man, Of the Resurrection",
      Question:
        "Q. 86: What is the communion in glory with Christ, which the members of the invisible church enjoy immediately after death?",
      Answer:
        "The communion in glory with Christ, which the members of the invisible church enjoy immediately after death, is, in that their souls are then made perfect in holiness,1 and received into the highest heavens,2 where they behold the face of God in light and glory,3 waiting for the full redemption of their bodies,4 which even in death continue united to Christ,5 and rest in their graves as in their beds,6 till at the last day they be again united to their souls.7 Whereas the souls of the wicked are at their death cast into hell, where they remain in torments and utter darkness, and their bodies kept in their graves, as in their prisons, till the resurrection and judgment of the great day.8<br><br>1: Hebrews 12:23<br>2: 2 Corinthians 5:1, 2 Corinthians 5:6, 2 Corinthians 5:8 , Philippians 1:23 , Acts 3:21 , Ephesians 4:10<br>3: 1 John 3:2 , 1 Corinthians 13:12<br>4: Romans 8:23 , Psalm 16:9<br>5: 1 Thessalonians 4:14<br>6: Isaiah 57:2<br>7: Job 19:26-27<br>8: Luke 16:23-24 , Jude 1:6-7",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the State of Man, Of the Resurrection",
      Question: "Q. 87: What are we to believe concerning the resurrection?",
      Answer:
        "We are to believe, that at the last day there shall be a general resurrection of the dead, both of the just and unjust:1 when they that are then found alive shall in a moment be changed; and the selfsame bodies of the dead which were laid in the grave, being then again united to their souls forever, shall be raised up by the power of Christ.2 The bodies of the just, by the Spirit of Christ, and by virtue of his resurrection as their head, shall be raised in power, spiritual, incorruptible, and made like to his glorious body;3 and the bodies of the wicked shall be raised up in dishonor by him, as an offended judge.4<br><br>1: Acts 24:15<br>2: 1 Corinthians 15:51-53 , 1 Thessalonians 4:15-17 , John 5:28-29<br>3: 1 Corinthians 15:21-23, 1 Corinthians 15:42-44 , Philippians 3:21<br>4: John 5:27-29 , Matthew 25:33",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the State of Man, Of the Resurrection",
      Question: "Q. 88: What shall immediately follow after the resurrection?",
      Answer:
        "Immediately after the resurrection shall follow the general and final judgment of angels and men;1 the day and hour whereof no man knows, that all may watch and pray, and be ever ready for the coming of the Lord.2<br><br>1: 2 Peter 2:4, 2 Peter 2:6-7, 2 Peter 2:14-15 , Matthew 25:46<br>2: Matthew 24:36, Matthew 24:42, Matthew 24:44",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the State of Man, Of the Resurrection",
      Question:
        "Q. 89: What shall be done to the wicked at the day of judgment?",
      Answer:
        "At the day of judgment, the wicked shall be set on Christ's left hand,1 and, upon clear evidence, and full conviction of their own consciences,2 shall have the fearful but just sentence of condemnation pronounced against them;3 and thereupon shall be cast out from the favorable presence of God, and the glorious fellowship with Christ, his saints, and all his holy angels, into hell, to be punished with unspeakable torments, both of body and soul, with the devil and his angels forever.4<br><br>1: Matthew 25:33<br>2: Romans 2:15-16<br>3: Matthew 25:41-43<br>4: Luke 16:26 , 2 Thessalonians 1:8-9",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What We are To Believe",
      Deck: "Of the State of Man, Of the Resurrection",
      Question:
        "Q. 90: What shall be done to the righteous at the day of judgment?",
      Answer:
        "At the day of judgment, the righteous, being caught up to Christ in the clouds,1 shall be set on his right hand, and there openly acknowledged and acquitted,2 shall join with him in the judging of reprobate angels and men,3 and shall be received into heaven,4 where they shall be fully and forever freed from all sin and misery;5 filled with inconceivable joys,6 made perfectly holy and happy both in body and soul, in the company of innumerable saints and holy angels,7 but especially in the immediate vision and fruition of God the Father, of our Lord Jesus Christ, and of the Holy Spirit, to all eternity.8 And this is the perfect and full communion, which the members of the invisible church shall enjoy with Christ in glory, at the resurrection and day of judgment.<br><br>1: 1 Thessalonians 4:17<br>2: Matthew 25:33 , Matthew 10:32<br>3: 1 Corinthians 6:2-3<br>4: Matthew 25:34, Matthew 25:46<br>5: Ephesians 5:27 , Revelation 14:13<br>6: Psalm 16:11<br>7: Hebrews 12:22-23<br>8: 1 John 3:2 , 1 Corinthians 13:12 , 1 Thessalonians 4:17-18",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 91: What is the duty which God requireth of man?",
      Answer:
        "The duty which God requireth of man, is obedience to his revealed will.1<br><br>1: Romans 12:1-2 , Micah 6:8 , 1 Samuel 15:22",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 92: What did God at first reveal unto man as the rule of his obedience?",
      Answer:
        "The rule of obedience revealed to Adam in the estate of innocence, and to all mankind in him, besides a special command not to eat of the fruit of the tree of the knowledge of good and evil, was the moral law.1<br><br>1: Genesis 1:26-27 , Romans 2:14-15 , Romans 10:5 , Genesis 2:17",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 93: What is the moral law?",
      Answer:
        "The moral law is the declaration of the will of God to mankind, directing and binding everyone to personal, perfect, and perpetual conformity and obedience thereunto, in the frame and disposition of the whole man, soul and body,1 and in performance of all those duties of holiness and righteousness which he oweth to God and man:2 promising life upon the fulfilling, and threatening death upon the breach of it.3<br><br>1: Deuteronomy 5:1-3, Deuteronomy 5:31, Deuteronomy 5:33 , Luke 10:26-27 , 1 Thessalonians 5:23<br>2: Luke 1:75 , Acts 24:16<br>3: Romans 10:5 , Galatians 3:10, Galatians 3:12",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 94: Is there any use of the moral law to man since the fall?",
      Answer:
        "Although no man, since the fall, can attain to righteousness and life by the moral law;1 yet there is great use thereof, as well common to all men, as peculiar either to the unregenerate, or the regenerate.2<br><br>1: Romans 8:3 , Galatians 2:16<br>2: 1 Timothy 1:8",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 95: Of what use is the moral law to all men?",
      Answer:
        "The moral law is of use to all men, to inform them of the holy nature and will of God,1 and of their duty, binding them to walk accordingly;2 to convince them of their disability to keep it, and of the sinful pollution of their nature, hearts, and lives;3 to humble them in the sense of their sin and misery,4 and thereby help them to a clearer sight of the need they have of Christ,5 and of the perfection of his obedience.6<br><br>1: Leviticus 11:44-45 , Leviticus 20:7-8 , Romans 8:12<br>2: Micah 6:8 , James 2:10-11<br>3: Psalm 19:11-12 , Romans 3:20 , Romans 7:7<br>4: Romans 3:9, Romans 3:23<br>5: Galatians 3:21-22<br>6: Romans 10:4",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 96: What particular use is there of the moral law to unregenerate men?",
      Answer:
        "The moral law is of use to unregenerate men, to awaken their consciences to flee from wrath to come,1 and to drive them to Christ;2 or, upon their continuance in the estate and way of sin, to leave them inexcusable,3 and under the curse thereof.4<br><br>1: 1 Timothy 1:9-10<br>2: Galatians 3:24<br>3: Romans 1:20 , Romans 2:15<br>4: Galatians 3:10",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 97: What special use is there of the moral law to the regenerate?",
      Answer:
        "Although they that are regenerate, and believe in Christ, be delivered from the moral law as a covenant of works,1 so as thereby they are neither justified 2 nor condemned;3 yet, besides the general uses thereof common to them with all men, it is of special use, to show them how much they are bound to Christ for his fulfilling it, and enduring the curse thereof in their stead, and for their good;4 and thereby to provoke them to more thankfulness,5 and to express the same in their greater care to conform themselves thereunto as the rule of their obedience.6<br><br>1: Romans 6:14 , Romans 7:4, Romans 7:6 , Galatians 4:4-5<br>2: Romans 3:20<br>3: Galatians 5:23 , Romans 8:1<br>4: Romans 7:24-25 , Galatians 3:13-14 , Romans 8:3-4<br>5: Luke 1:68-69, Luke 1:74-75 , Colossians 1:12-14<br>6: Romans 7:22 , Romans 12:2 , Titus 2:11-14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 98: Where is the moral law summarily comprehended?",
      Answer:
        "The moral law is summarily comprehended in the ten commandments, which were delivered by the voice of God upon Mount Sinai, and written by him in two tables of stone;1 and are recorded in the twentieth chapter of Exodus. The four first commandments containing our duty to God, and the other six our duty to man.2<br><br>1: Deuteronomy 10:4 , Exodus 34:1-4<br>2: Matthew 22:37-40",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 99: What rules are to be observed for the right understanding of the ten commandments?",
      Answer:
        "For the right understanding of the ten commandments, these rules are to be observed: 1. That the law is perfect, and bindeth everyone to full conformity in the whole man unto the righteousness thereof, and unto entire obedience forever; so as to require the utmost perfection of every duty, and to forbid the least degree of every sin.1 2. That it is spiritual, and so reaches the understanding, will, affections, and all other powers of the soul; as well as words, works, and gestures.2 3. That one and the same thing, in divers respects, is required or forbidden in several commandments.3 4. That as, where a duty is commanded, the contrary sin is forbidden;4 and, where a sin is forbidden, the contrary duty is commanded:5 so, where a promise is annexed, the contrary threatening is included;6 and, where a threatening is annexed, the contrary promise is included.7 5. That what God forbids, is at no time to be done;8 What he commands, is always our duty;9 and yet every particular duty is not to be done at all times.10 6. That under one sin or duty, all of the same kind are forbidden or commanded; together with all the causes, means, occasions, and appearances thereof, and provocations thereunto.11 7. That what is forbidden or commanded to ourselves, we are bound, according to our places, to endeavor that it may be avoided or performed by others, according to the duty of their places.12 8. That in what is commanded to others, we are bound, according to our places and callings, to be helpful to them;13 and to take heed of partaking with others in: What is forbidden them.14<br><br>1: Psalm 19:7 , James 2:10 , Matthew 5:21-22<br>2: Romans 7:14 , Deuteronomy 6:5 , Matthew 22:37-39 , Matthew 5:21-22, Matthew 5:27-28, Matthew 5:33-34, Matthew 5:37-39, Matthew 5:43-44<br>3: Colossians 3:5 , Amos 8:5 , Proverbs 1:19 , 1 Timothy 6:10<br>4: Isaiah 58:13 , Deuteronomy 6:13 , Matthew 4:9-10 , Matthew 15:4-6<br>5: Matthew 5:21-25 , Ephesians 4:28<br>6: Exodus 20:12 , Proverbs 30:17<br>7: Jeremiah 18:7-8 , Exodus 20:7 , Psalm 15:1, Psalm 15:4-5 , Psalm 24:4-5<br>8: Job 13:7-8 , Romans 3:8 , Job 36:21 , Hebrews 11:25<br>9: Deuteronomy 4:8-9<br>10: Matthew 12:7<br>11: Matthew 5:21-22, Matthew 5:27-28 , Matthew 15:4-6 , Hebrews 10:24-25 , Jude 23 , Galatians 5:26 , Colossians 3:21<br>12: Exodus 20:10 , Leviticus 19:17 , Genesis 18:19 , Joshua 14:15 , Deuteronomy 6:6-7<br>13: 2 Corinthians 1:24<br>14: 1 Timothy 5:2 , Ephesians 5:1",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 100: What special things are we to consider in the ten commandments?",
      Answer:
        "We are to consider, in the ten commandments, the preface, the substance of the commandments themselves, and several reasons annexed to some of them, the more to enforce them.<br>",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 101: What is the preface to the ten commandments?",
      Answer:
        "The preface to the ten commandments is contained in these words, I am the Lord thy God, which have brought thee out of the land of Egypt, out of the house of bondage.1 Wherein God manifesteth his sovereignty, as being JEHOVAH, the eternal, immutable, and almighty God;2 having his being in and of himself,3 and giving being to all his words 4 and works:5 and that he is a God in covenant, as with Israel of old, so with all his people;6 who, as he brought them out of their bondage in Egypt, so he delivers us from our spiritual thraldom;7 and that therefore we are bound to take him for our God alone, and to keep all his commandments.8<br><br>1: Exodus 20:2<br>2: Isaiah 44:6<br>3: Exodus 3:14<br>4: Exodus 6:3<br>5: Acts 17:24, Acts 17:28<br>6: Genesis 17:7<br>7: Luke 1:74-75<br>8: 1 Peter 1:15, 1 Peter 1:17-18 , Leviticus 18:30 , Leviticus 19:37",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 102: What is the sum of the four commandments which contain our duty to God?",
      Answer:
        "The sum of the four commandments containing our duty to God is, to love the Lord our God with all our heart, and with all our soul, and with all our strength, and with all our mind.1<br><br>1: Luke 10:27",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 103: Which is the first commandment?",
      Answer:
        "The first commandment is, Thou shall have no other gods before me.1<br><br>1: Exodus 20:3",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 104: What are the duties required in the first commandment?",
      Answer:
        "The duties required in the first commandment are, the knowing and acknowledging of God to be the only true God, and our God;1 and to worship and glorify him accordingly,2 by thinking,3 meditating,4 remembering,5 highly esteeming,6 honoring,7 adoring,8 choosing,9 loving,10 desiring,11 fearing of him;12 believing him;13 trusting,14 hoping,15 delighting,16 rejoicing in him;17 being zealous for him;18 calling upon him, giving all praise and thanks,19 and yielding all obedience and submission to him with the whole man;20 being careful in all things to please him,21 and sorrowful when in anything he is offended;22 and walking humbly with him.23<br><br>1: 1 Chronicles 28:9 , Deuteronomy 26:7 , Isaiah 43:10 , Jeremiah 14:22<br>2: Psalm 95:6-7 , Matthew 4:10 , Psalm 29:2<br>3: Malachi 3:16<br>4: Psalm 63:6<br>5: Ecclesiastes 12:1<br>6: Psalm 71:19<br>7: Malachi 1:6<br>8: Isaiah 45:23<br>9: Joshua 24:15, Joshua 24:22<br>10: Deuteronomy 6:5<br>11: Psalm 73:25<br>12: Isaiah 8:13<br>13: Exodus 14:31<br>14: Isaiah 26:4<br>15: Psalm 130:7<br>16: Psalm 37:4<br>17: Psalm 32:11<br>18: Romans 12:11 , Numbers 25:11<br>19: Philippians 4:6<br>20: Jeremiah 7:23 , James 4:7<br>21: 1 John 3:22<br>22: Jeremiah 31:18 , Psalm 119:136<br>23: Micah 6:8",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 105: What are the sins forbidden in the first commandment?",
      Answer:
        "The sins forbidden in the first commandment are, atheism, in denying or not having a God;1 Idolatry, in having or worshiping more gods than one, or any with or instead of the true God;2 the not having and avouching him for God, and our God;3 the omission or neglect of anything due to him, required in this commandment;4 ignorance,5 forgetfulness,6 misapprehensions,7 false opinions,8 unworthy and wicked thoughts of him;9 bold and curious searching into his secrets;10 all profaneness,11 hatred of God;12 self-love,13 self-seeking,14 and all other inordinate and immoderate setting of our mind, will, or affections upon other things, and taking them off from him in whole or in part;15 vain credulity,16 unbelief,17 heresy,18 misbelief,19 distrust,20 despair,21 incorrigibleness,22 and insensibleness under judgments,23 hardness of heart,24 pride,25 presumption,26 carnal security,27 tempting of God;28 using unlawful means,29 and trusting in lawful means;30 carnal delights and joys;31 corrupt, blind, and indiscreet zeal;32 lukewarmness,33 and deadness in the things of God;34 estranging ourselves, and apostatizing from God;35 praying, or giving any religious worship, to saints, angels, or any other creatures;36 all compacts and consulting with the devil,37 and hearkening to his suggestions;38 making men the lords of our faith and conscience;39 slighting and despising God and his commands;40 resisting and grieving of his Spirit,41 discontent and impatience at his dispensations, charging him foolishly for the evils he inflicts on us;42 and ascribing the praise of any good we either are, have, or can do, to fortune,43 idols,44 ourselves,45 or any other creature.46<br><br>1: Psalm 14:1 , Ephesians 2:12<br>2: Jeremiah 2:27-28 , 1 Thessalonians 1:9<br>3: Psalm 81:1<br>4: Isaiah 43:2, Isaiah 43:23-24<br>5: Jeremiah 4:22 , Hosea 4:1, Hosea 4:6<br>6: Jeremiah 2:32<br>7: Acts 17:23, Acts 17:29<br>8: Isaiah 40:18<br>9: Psalm 50:21<br>10: Deuteronomy 29:29<br>11: Titus 1:16 , Hebrews 12:16<br>12: Romans 1:30<br>13: 2 Timothy 3:2<br>14: Philippians 2:21<br>15: 1 John 2:15-16 , 1 Samuel 2:29 , Colossians 2:2, Colossians 2:5<br>16: 1 John 4:1<br>17: Hebrews 3:12<br>18: Galatians 5:20 , Titus 3:10<br>19: Acts 26:9<br>20: Psalm 78:22<br>21: Genesis 4:13<br>22: Jeremiah 5:3<br>23: Isaiah 42:25<br>24: Romans 2:5<br>25: Jeremiah 13:15<br>26: Psalm 10:13<br>27: Zephaniah 1:12<br>28: Matthew 4:7<br>29: Romans 3:8<br>30: Jeremiah 17:5<br>31: 2 Timothy 3:4<br>32: Galatians 4:17 , John 16:2 , Romans 10:2 , Luke 9:54-55<br>33: Revelation 3:16<br>34: Revelation 2:1<br>35: Ezekiel 14:5 , Isaiah 1:4-5<br>36: Romans 10:13-14 , Hosea 4:12 , Acts 10:25-26 , Revelation 19:10 , Matthew 4:10 , Colossians 2:18 , Romans 1:25<br>37: Leviticus 20:6 , 1 Samuel 28:7, 1 Samuel 28:11 , 1 Chronicles 10:13-14<br>38: Acts 5:3<br>39: 2 Corinthians 1:24 , Matthew 23:9<br>40: Deuteronomy 32:15 , 2 Samuel 12:9 , Proverbs 13:13<br>41: Acts 7:51 , Ephesians 4:30<br>42: Psalm 73:2-3, Psalm 73:13-15, Psalm 73:22 , Job 1:22<br>43: 1 Samuel 6:7-9<br>44: Daniel 5:23<br>45: Deuteronomy 8:17 , Daniel 4:30<br>46: Habakkuk 1:16",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 106: What are we specially taught by these words before me in the first commandment?",
      Answer:
        "These words before me, or before my face, in the first commandment, teach us, that God, who seeth all things, taketh special notice of, and is much displeased with, the sin of having any other God: that so it may be an argument to dissuade from it, and to aggravate it as a most impudent provocation:1 as also to persuade us to do as in his sight,: Whatever we do in his service.2<br><br>1: Ezekiel 8:5-6 , Psalm 44:20-21<br>2: 1 Chronicles 28:9",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 107: Which is the second commandment?",
      Answer:
        "The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: Thou shalt not bow down thyself to them, nor serve them: for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and shewing mercy unto thousands of them that love me, and keep my commandments.1<br><br>1: Exodus 20:4-6",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 108: What are the duties required in the second commandment?",
      Answer:
        "The duties required in the second commandment are, the receiving, observing, and keeping pure and entire, all such religious worship and ordinances as God hath instituted in his word;1 particularly prayer and thanksgiving in the name of Christ;2 the reading, preaching, and hearing of the word;3 the administration and receiving of the sacraments;4 church government and discipline;5 the ministry and maintenance thereof;6 religious fasting;7 swearing by the name of God,8 and vowing unto him:9 as also the disapproving, detesting, opposing, all false worship;10 and, according to each one's place and calling, removing it, and all monuments of idolatry.11<br><br>1: Deuteronomy 32:46-47 , Matthew 28:20 , Acts 2:42 , 1 Timothy 6:13-14<br>2: Philippians 4:6 , Ephesians 5:20<br>3: Deuteronomy 17:18-19 , Acts 15:21 , 2 Timothy 4:2 , James 1:21-22<br>4: Matthew 28:19 , 1 Corinthians 11:23-30<br>5: Matthew 18:15-17 , 1 Corinthians 5 , 1 Corinthians 12:28<br>6: Ephesians 4:11-12 , 1 Timothy 5:17-18 , 1 Corinthians 9:7-15<br>7: Joel 2:12, Joel 2:18 , 1 Corinthians 7:5<br>8: Deuteronomy 6:13<br>9: Psalm 76:11<br>10: Acts 17:16-17 , Psalm 16:4<br>11: Deuteronomy 7:5 , Isaiah 30:22",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 109: What are the sins forbidden in the second commandment?",
      Answer:
        "The sins forbidden in the second commandment are, all devising,1 counseling,2 commanding,3 using,4 and anywise approving, any religious worship not instituted by God himself;5 tolerating a false religion;6 the making any representation of God, of all or of any of the three persons, either inwardly in our mind, or outwardly in any kind of image or likeness of any creature whatsoever;7 all worshiping of it,8 or God in it or by it;9 the making of any representation of feigned deities,10 and all worship of them, or service belonging to them;11 all superstitious devices,12 corrupting the worship of God,13 adding to it, or taking from it,14 whether invented and taken up of ourselves,15 or received by tradition from others,16 though under the title of antiquity,17 custom,18 devotion,19 good intent, or any other pretense whatsoever;20 simony;21 sacrilege;22 all neglect,23 contempt,24 hindering,25 and opposing the worship and ordinances which God hath appointed.26<br><br>1: Numbers 15:39<br>2: Deuteronomy 13:6-8<br>3: Hosea 5:11 , Micah 6:16<br>4: 1 Kings 11:33 , 1 Kings 12:33<br>5: Deuteronomy 12:30-32<br>6: Deuteronomy 4:15-19 , Acts 17:29 , Romans 1:21-23, Romans 1:25<br>7: Daniel 3:18 , Galatians 4:8<br>8: Exodus 32:5<br>9: Exodus 32:8<br>10: 1 Kings 18:26, 1 Kings 18:28 , Isaiah 65:11<br>11: Acts 17:22 , Colossians 2:21-23<br>12: Malachi 1:7-8, Malachi 1:14<br>13: Deuteronomy 4:2<br>14: Psalm 106:39<br>15: Matthew 15:9<br>16: 1 Peter 1:18<br>17: Jeremiah 44:17<br>18: Isaiah 65:3-5 , Galatians 1:13-14<br>19: 1 Samuel 13:11-12 , 1 Samuel 15:21<br>20: Acts 8:18<br>21: Romans 2:22 , Malachi 3:8<br>22: Exodus 4:24-26<br>23: Matthew 22:5 , Malachi 1:7, Malachi 1:13<br>24: Matthew 23:13<br>25: Acts 13:44-45 , 1 Thessalonians 2:15-16",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 110: What are the reasons annexed to the second commandment, the more to enforce it?",
      Answer:
        "The reasons annexed to the second commandment, the more to enforce it, contained in these words, For I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and showing mercy unto thousands of them that love me, and keep my commandments;1 are, besides God's sovereignty over us, and propriety in us,2 his fervent zeal for his own worship,3 and his revengeful indignation against all false worship, as being a spiritual whoredom;4 accounting the breakers of this commandment such as hate him, and threatening to punish them unto divers generations;5 and esteeming the observers of it such as love him and keep his commandments, and promising mercy to them unto many generations.6<br><br>1: Exodus 20:5-6<br>2: Psalm 45:11 , Revelation 15:3-4<br>3: Exodus 34:13-14<br>4: 1 Corinthians 10:20-22 , Deuteronomy 32:16-20<br>5: Hosea 2:2-4<br>6: Deuteronomy 5:29",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 111: Which is the third commandment?",
      Answer:
        "The third commandment is, Thou shalt not take the name of the Lord thy God in vain: for the Lord will not hold him guiltless that taketh his name in vain.1<br><br>1: Exodus 20:7",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 112: What is required in the third commandment?",
      Answer:
        "The third commandment requires, That the name of God, his titles, attributes,1 ordinances,2 the word,3 sacraments,4 prayer,5 oaths,6 vows,7 lots,8 his works,9 and whatsoever else there is whereby he makes himself known, be holily and reverently used in thought,10 meditation,11 word,12 and writing;13 by an holy profession,14 and Answerable conversation,15 to the glory of God,16 and the good of ourselves,17 and others.18<br><br>1: Matthew 11:9 , Deuteronomy 28:58 , Psalm 29:2 , Psalm 68:4 , Revelation 15:3-4<br>2: Malachi 1:14 , Ecclesiastes 5:1<br>3: Psalm 138:2<br>4: 1 Corinthians 11:24-25, 1 Corinthians 11:28-29<br>5: 1 Timothy 2:8<br>6: Jeremiah 4:2<br>7: Ecclesiastes 5:2, Ecclesiastes 5:4-6<br>8: Acts 1:24, Acts 1:26<br>9: Job 36:24<br>10: Malachi 3:16<br>11: Psalm 8:1, Psalm 8:3-4, Psalm 8:9<br>12: Colossians 3:17 , Psalm 105:2, Psalm 105:5<br>13: Psalm 102:18<br>14: 1 Peter 3:15 , Micah 4:5<br>15: Philippians 1:27<br>16: 1 Corinthians 10:31<br>17: Jeremiah 32:39<br>18: 1 Peter 2:12",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 113: What are the sins forbidden in the third commandment?",
      Answer:
        "The sins forbidden in the third commandment are, the not using of God's name as is required;1 and the abuse of it in an ignorant,2 vain,3 irreverent, profane,4 superstitious,5 or wicked mentioning, or otherwise using his titles, attributes,6 ordinances,7 or works,8 by blasphemy,9 perjury;10 all sinful cursings,11 oaths,12 vows,13 and lots;14 violating of our oaths and vows, if lawful;15 and fulfilling them, if of things unlawful;16 murmuring and quarreling at,17 curious prying into,18 and misapplying of God's decrees 19 and providences;20 misinterpreting,21 misapplying,22 or any way perverting the word, or any part of it,23 to profane jests,24 curious or unprofitable Questions,25 vain janglings, or the maintaining of false doctrines;26 abusing it, the creatures, or anything contained under the name of God, to charms,27 or sinful lusts and practices;28 the maligning,29 scorning,30 reviling,31 or any wise opposing of God's truth, grace, and ways;32 making profession of religion in hypocrisy, or for sinister ends;33 being ashamed of it,34 or a shame to it, by unconformable,35 unwise,36 unfruitful,37 and offensive walking,38 or backsliding from it.39<br><br>1: Malachi 2:2<br>2: Acts 17:23<br>3: Proverbs 30:9<br>4: Malachi 1:6-7, Malachi 1:12 , Malachi 3:14<br>5: 1 Samuel 4:3-5 , Jeremiah 7:4, Jeremiah 7:9-10, Jeremiah 7:14, Jeremiah 7:31 , Colossians 2:20-22<br>6: 2 Kings 18:30, 2 Kings 18:35 , Exodus 5:2 , Psalm 139:20<br>7: Psalm 50:16-17<br>8: Isaiah 5:12<br>9: 2 Kings 19:22 , Leviticus 24:11<br>10: Zechariah 5:4 , Zechariah 8:17<br>11: 1 Samuel 17:43 , 2 Samuel 16:5<br>12: Jeremiah 5:7 , Jeremiah 23:10<br>13: Deuteronomy 23:18 , Acts 23:12, Acts 23:14<br>14: Esther 3:7 , Esther 9:24 , Psalm 22:18<br>15: Psalm 24:4 , Ezekiel 17:16, Ezekiel 17:18-19<br>16: Mark 6:26 , 1 Samuel 25:22, 1 Samuel 25:32-34<br>17: Romans 9:14, Romans 9:19-20<br>18: Deuteronomy 29:29<br>19: Romans 3:5, Romans 3:7 , Romans 6:1<br>20: Ecclesiastes 8:11 , Ecclesiastes 9:3<br>21: Matthew 5:21-22<br>22: Ezekiel 13:22<br>23: 2 Peter 3:16 , Matthew 22:24-31 , Matthew 25:28-30<br>24: Isaiah 22:13 , Jeremiah 23:34, Jeremiah 23:36, Jeremiah 23:38<br>25: 1 Timothy 1:4, 1 Timothy 1:6-7 , 1 Timothy 6:4-5, 1 Timothy 6:20 , 2 Timothy 2:14 , Titus 3:9<br>26: Deuteronomy 18:10-14 , Acts 19:13<br>27: 2 Timothy 4:3-4 , Romans 13:13-14 , 1 Kings 21:9-10 , Jude 4<br>28: Acts 13:45 , 1 John 3:12<br>29: Psalm 1:1 , 2 Peter 3:3<br>30: 1 Peter 4:4<br>31: Acts 13:45-46, Acts 13:50 , Acts 4:18 , Acts 19:9 , 1 Thessalonians 2:16 , Hebrews 10:29<br>32: 2 Timothy 3:5 , Matthew 6:1-2, Matthew 6:5, Matthew 6:16<br>33: Mark 8:38<br>34: Psalm 73:14-15<br>35: 1 Corinthians 6:5-6 , Ephesians 5:15-17<br>36: Isaiah 5:4 , 2 Peter 1:8-9<br>37: Romans 2:23-24<br>38: Galatians 3:1, Galatians 3:3 , Hebrews 6:6",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 114: What reasons are annexed to the third commandment?",
      Answer:
        "The reasons annexed to the third commandment, in these words, The Lord thy God, and, For the Lord will not hold him guiltless that taketh his name in vain,1 are, because he is the Lord and our God, therefore his name is not to be profaned, or any way abused by us;2 especially because he will be so far from acquitting and sparing the transgressors of this commandment, as that he will not suffer them to escape his righteous judgment,3 albeit many such escape the censures and punishments of men.4<br><br>1: Exodus 20:7<br>2: Leviticus 19:12<br>3: Ezekiel 36:21-23 , Deuteronomy 28:58-59 , Zechariah 5:2-4<br>4: 1 Samuel 2:12, 1 Samuel 2:17, 1 Samuel 2:22, 1 Samuel 2:24 , 1 Samuel 3:13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 115: Which is the fourth commandment?",
      Answer:
        "The fourth commandment is, Remember the sabbath day, to keep it holy. Six days shalt thou labor, and do all thy work: but the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates: For in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the sabbath day, and hallowed it.1<br><br>1: Exodus 20:8-11",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 116: What is required in the fourth commandment?",
      Answer:
        "The fourth commandment requires of all men the sanctifying or keeping holy to God such set times as he hath appointed in his word, expressly one whole day in seven; which was the seventh from the beginning of the world to the resurrection of Christ, and the first day of the week ever since, and so to continue to the end of the world; which is the Christian sabbath,1 and in the New Testament called The Lord's day.2<br><br>1: Deuteronomy 5:12-14 , Genesis 2:2-3 , 1 Corinthians 16:1-2 , Matthew 5:17-18 , Isaiah 56:2, Isaiah 56:4, Isaiah 56:6-7<br>2: Revelation 1:10",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 117: How is the sabbath or the Lord's day to be sanctified?",
      Answer:
        "The sabbath or Lord's day is to be sanctified by an holy resting all the day,1 not only from such works as are at all times sinful, but even from such worldly employments and recreations as are on other days lawful;2 and making it our delight to spend the whole time (except so much of it as is to betaken up in works of necessity and mercy)3 in the public and private exercises of God's worship:4 and, to that end, we are to prepare our hearts, and with such foresight, diligence, and moderation, to dispose and seasonably dispatch our worldly business, that we may be the more free and fit for the duties of that day.5<br><br>1: Exodus 20:8, Exodus 20:10<br>2: Exodus 16:25-28 , Nehemiah 13:15-22 , Jeremiah 17:21-22<br>3: Matthew 12:1-13<br>4: Isaiah 58:13 , Luke 4:16 , Acts 20:7 , 1 Corinthians 16:1-2 , Psalm 9 , Isaiah 66:23 , Leviticus 23:3<br>5: Exodus 20:8 , Luke 23:54, Luke 23:56 , Exodus 16:22, Exodus 16:25-26, Exodus 16:29 , Nehemiah 13:19",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 118: Why is the charge of keeping the sabbath more specially directed to governors of families, and other superiors?",
      Answer:
        "The charge of keeping the sabbath is more specially directed to governors of families, and other superiors, because they are bound not only to keep it themselves, but to see that it be observed by all those that are under their charge; and because they are prone ofttimes to hinder them by employments of their own.1<br><br>1: Exodus 20:10 , Joshua 24:15 , Nehemiah 13:15, Nehemiah 13:17 , Jeremiah 17:20-22 , Exodus 23:12",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 119: What are the sins forbidden in the fourth commandment?",
      Answer:
        "The sins forbidden in the fourth commandment are, all omissions of the duties required,1 all careless, negligent, and unprofitable performing of them, and being weary of them;2 all profaning the day by idleness, and doing that which is in itself sinful;3 and by all needless works, words, and thoughts, about our worldly employments and recreations.4<br><br>1: Ezekiel 22:26<br>2: Acts 20:7, Acts 20:9 , Ezekiel 33:30-32 , Amos 8:5 , Malachi 1:13<br>3: Ezekiel 23:38<br>4: Jeremiah 17:24, Jeremiah 17:27 , Isaiah 58:13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 120: What are the reasons annexed to the fourth commandment, the more to enforce it?",
      Answer:
        "The reasons annexed to the fourth commandment, the more to enforce it, are taken from the equity of it, God allowing us six days of seven for our own affairs, and reserving but one for himself, in these words, Six days shalt thou labor, and do all thy work:1 from God's challenging a special propriety in that day, The seventh day is the sabbath of the Lord thy God:2 from the example of God, who in six days made heaven and earth, the sea, and all that in them is, and rested the seventh day: and from that blessing which God put upon that day, not only in sanctifying it to be a day for his service, but in ordaining it to be a means of blessing to us in our sanctifying it; Wherefore the Lord blessed the sabbath day, and hallowed it.3<br><br>1: Exodus 20:9<br>2: Exodus 20:10<br>3: Exodus 20:11",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 121: Why is the word Remember set in the beginning of the fourth commandment?",
      Answer:
        "The word Remember is set in the beginning of the fourth commandment,1 partly, because of the great benefit of remembering it, we being thereby helped in our preparation to keep it,2 and, in keeping it, better to keep all the rest of the commandments,3 and to continue a thankful remembrance of the two great benefits of creation and redemption, which contain a short abridgment of religion;4 and partly, because we are very ready to forget it,5 for that there is less light of nature for it,6 and yet it restraineth our natural liberty in things at other times lawful;7 that it comesthbut once in seven days, and many worldly businesses come between, and too often take off our minds from thinking of it, either to prepare for it, or to sanctify it;8 and that Satan with his instruments much labor to blot out the glory, and even the memory of it, to bring in all irreligion and impiety.9<br><br>1: Exodus 20:8<br>2: Exodus 16:23 , Luke 23:54, Luke 23:56 , Nehemiah 13:19<br>3: Psalm 92 , Ezekiel 20:12, Ezekiel 20:19-20<br>4: Genesis 2:2-3 , Psalm 118:22, Psalm 118:24 , Acts 4:10-11 , Revelation 1:10<br>5: Ezekiel 22:26<br>6: Nehemiah 9:14<br>7: Exodus 34:21<br>8: Deuteronomy 5:14-15 , Amos 8:5<br>9: Lamentations 1:7 , Jeremiah 17:21-23 , Nehemiah 13:15-22",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 122: What is the sum of the six commandments which contain our duty to man?",
      Answer:
        "The sum of the six commandments which contain our duty to man is, to love our neighbor as ourselves,1 and to do to others what we would have them to do to us.2<br><br>1: Matthew 22:39<br>2: Matthew 7:12",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 123: Which is the fifth commandment?",
      Answer:
        "The fifth commandment is, Honor thy father and thy mother; that thy days may be long upon the land which the Lord thy God giveth thee.1<br><br>1: Exodus 20:12",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 124: Who are meant by father and mother in the fifth commandment?",
      Answer:
        "By father and mother, in the fifth commandment, are meant, not only natural parents,1 but all superiors in age 2 and gifts;3 and especially such as, by God's ordinance, are over us in place of authority, whether in family,4 church,5 or commonwealth.6<br><br>1: Proverbs 23:22, Proverbs 23:25 , Ephesians 6:1-2<br>2: 1 Timothy 5:1-2<br>3: Genesis 4:20-22 , Genesis 45:8<br>4: 2 Kings 5:13<br>5: 2 Kings 2:12 , 2 Kings 13:14 , Galatians 4:19<br>6: Isaiah 49:23",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 125: Why are superiors styled Father and Mother?",
      Answer:
        "Superiors are styled Father and Mother, both to teach them in all duties toward their inferiors, like natural parents, to express love and tenderness to them, according to their several relations;1 and to work inferiors to a greater willingness and cheerfulness in performing their duties to their superiors, as to their parents.2<br><br>1: Ephesians 6:4 , 2 Corinthians 12:14 , 1 Thessalonians 2:7-8, 1 Thessalonians 2:11 , Numbers 11:11-12<br>2: 1 Corinthians 4:14-16 , 2 Kings 5:13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 126: What is the general scope of the fifth commandment?",
      Answer:
        "The general scope of the fifth commandment is, the performance of those duties which we mutually owe in our several relations, as inferiors, superiors, or equals.1<br><br>1: Ephesians 5:21 , 1 Peter 2:17 , Romans 12:10",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 127: What is the honor that inferiors owe to their superiors?",
      Answer:
        "The honor which inferiors owe to their superiors is, all due reverence in heart,1 word,2 and behavior;3 prayer and thanksgiving for them;4 imitation of their virtues and graces;5 willing obedience to their lawful commands and counsels;6 due submission to their corrections;7 fidelity to,8 defense 9 and maintenance of their persons and authority, according to their several ranks, and the nature of their places;10 bearing with their infirmities, and covering them in love, that so they may be an honor to them and to their government.11<br><br>1: Malachi 1:6 , Leviticus 19:3<br>2: Proverbs 31:28<br>3: Leviticus 19:32 , 1 Kings 2:19<br>4: 1 Timothy 2:1-2<br>5: Hebrews 13:7 , Philippians 3:17<br>6: Ephesians 6:1-2, Ephesians 6:6-7 , 1 Peter 2:13-14 , Romans 13:1-5 , Hebrews 13:17 , Proverbs 4:3-4 , Proverbs 23:22 , Exodus 18:19, Exodus 18:24<br>7: Hebrews 12:9 , 1 Peter 2:18-20<br>8: Titus 2:9-10<br>9: 1 Samuel 26:15-16 , 2 Samuel 18:3 , Esther 6:2<br>10: Matthew 22:21 , Romans 13:6-7 , 1 Timothy 5:17-18 , Galatians 6:6 , Genesis 45:11 , Genesis 47:12<br>11: 1 Peter 2:18 , Proverbs 23:22 , Genesis 9:23<br>12: Psalm 127:3-5 , Proverbs 31:23",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 128: What are the sins of inferiors against their superiors?",
      Answer:
        "The sins of inferiors against their superiors are, all neglect of the duties required toward them;1 envying at,2 contempt of,3 and rebellion 4 against, their persons 5 and places,6 in their lawful counsels,7 commands, and corrections;8 cursing, mocking,9 and all such refractory and scandalous carriage, as proves a shame and dishonor to them and their government.10<br><br>1: Matthew 15:4-6<br>2: Numbers 11:28-29<br>3: 2 Samuel 15:1-12<br>4: Exodus 21:15<br>5: 1 Samuel 10:27<br>6: 1 Samuel 2:25<br>7: Deuteronomy 21:18-21<br>8: Proverbs 30:11, Proverbs 30:17<br>9: Proverbs 19:26",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 129: What is required of superiors towards their inferiors?",
      Answer:
        "It is required of superiors, according to that power they receive from God, and that relation wherein they stand, to love,1 pray for,2 and bless their inferiors;3 to instruct,4 counsel, and admonish them;5 countenancing,6 commending,7 and rewarding such as do well;8 and discountenancing,9 reproving, and chastising such as do ill;10 protecting,11 and providing for them all things necessary for soul 12 and body:13 and by grave, wise, holy, and exemplary carriage, to procure glory to God,14 honor to themselves,15 and so to preserve that authority which God hath put upon them.16<br><br>1: Colossians 3:19 , Titus 2:4<br>2: 1 Samuel 12:23 , Job 1:5<br>3: 1 Kings 8:55-56 , Hebrews 7:7 , Genesis 49:28<br>4: Deuteronomy 6:6-7<br>5: Ephesians 6:4<br>6: 1 Peter 3:7<br>7: 1 Peter 2:14 , Romans 13:3<br>8: Esther 6:3<br>9: Romans 13:3-4<br>10: Proverbs 29:15 , 1 Peter 2:14<br>11: Job 29:13-16 , Isaiah 1:10, Isaiah 1:17<br>12: Ephesians 6:4<br>13: 1 Timothy 5:8<br>14: 1 Timothy 4:12 , Titus 2:3-5<br>15: 1 Kings 3:28<br>16: Titus 2:15",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 130: What are the sins of superiors?",
      Answer:
        "The sins of superiors are, besides the neglect of the duties required of them,1 an inordinate seeking of themselves,2 their own glory,3 ease, profit, or pleasure;4 commanding things unlawful,5 or not in the power of inferiors to perform;6 counseling,7 encouraging,8 or favoring them in that which is evil;9 dissuading, discouraging, or discountenancing them in that which is good;10 correcting them unduly;11 careless exposing, or leaving them to wrong, temptation, and danger;12 provoking them to wrath;13 or any way dishonoring themselves, or lessening their authority, by an unjust, indiscreet, rigorous, or remiss behavior.14<br><br>1: Ezekiel 34:2-4<br>2: Philippians 2:21<br>3: John 5:44 , John 7:18<br>4: Isaiah 56:10-11 , Deuteronomy 17:17<br>5: Daniel 3:4-6 , Acts 4:17-18<br>6: Exodus 5:10-18 , Matthew 23:2, Matthew 23:4<br>7: Matthew 14:8 , Mark 6:24<br>8: 2 Samuel 13:28<br>9: 1 Samuel 3:13<br>10: John 7:46-49 , Exodus 5:17<br>11: 1 Peter 2:18-20 , Hebrews 12:10 , Deuteronomy 25:3<br>12: Genesis 38:11, Genesis 38:26 , Acts 18:17<br>13: Ephesians 6:4<br>14: Genesis 9:21 , 1 Kings 12:13-16 , 1 Kings 1:6 , 1 Samuel 2:29-31",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 131: What are the duties of equals?",
      Answer:
        "The duties of equals are, to regard the dignity and worth of each other,1 in giving honor to go one before another;2 and to rejoice in each other's gifts and advancement, as their own.3<br><br>1: 1 Peter 2:17<br>2: Romans 12:10<br>3: Romans 12:15-16 , Philippians 2:3-4",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 132: What are the sins of equals?",
      Answer:
        "The sins of equals are, besides the neglect of the duties required,1 the undervaluing of the worth,2 envying the gifts,3 grieving at the advancement of prosperity one of another;4 and usurping preeminence one over another.5<br><br>1: Romans 13:8<br>2: 2 Timothy 3:3<br>3: Acts 7:9 , Galatians 5:26<br>4: Numbers 12:2 , Esther 6:12-13<br>5: 3 John 1:9 , Luke 22:24",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 133: What is the reason annexed to the fifth commandment, the more to enforce it?",
      Answer:
        "The reason annexed to the fifth commandment, in these words, That thy days may be long upon the land which the Lord thy God giveth thee,1 is an express promise of long life and prosperity, as far as it shall serve for God's glory and their own good, to all such as keep this commandment.2<br><br>1: Exodus 20:12<br>2: Deuteronomy 5:16 , 1 Kings 8:25 , Ephesians 6:2-3",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 134: Which is the sixth commandment?",
      Answer:
        "The sixth commandment is, Thou shalt not kill.1<br><br>1: Exodus 20:13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 135: What are the duties required in the sixth commandment?",
      Answer:
        "The duties required in the sixth commandment are, all careful studies, and lawful endeavors, to preserve the life of ourselves 1 and others 2 by resisting all thoughts and purposes,3 subduing all passions,4 and avoiding all occasions,5 temptations,6 and practices, which tend to the unjust taking away the life of any;7 by just defense thereof against violence,8 patient bearing of the hand of God,9 quietness of mind,10 cheerfulness of spirit;11 a sober use of meat,12 drink,13 physic,14 sleep,15 labor,16 and recreations;17 by charitable thoughts,18 love,19 compassion,20 meekness, gentleness, kindness;21 peaceable,22 mild and courteous speeches and behavior;23 forbearance, readiness to be reconciled, patient bearing and forgiving of injuries, and requiting good for evil;24 comforting and succoring the distressed, and protecting and defending the innocent.25<br><br>1: Ephesians 5:28-29<br>2: 1 Kings 18:4<br>3: Jeremiah 26:15-16 , Acts 23:12, Acts 23:16-17, Acts 23:21, Acts 23:27<br>4: Ephesians 4:26-27<br>5: 2 Samuel 2:22 , Deuteronomy 22:8<br>6: Matthew 4:6-7 , Proverbs 1:10-11, Proverbs 1:15-16<br>7: 1 Samuel 24:12 , 1 Samuel 26:9-11 , Genesis 37:21-22<br>8: Psalm 82:4 , Proverbs 24:11-12 , 1 Samuel 14:45<br>9: James 5:7-11 , Hebrews 12:9<br>10: 1 Thessalonians 4:11 , 1 Peter 3:3-4 , Psalm 37:8-11<br>11: Proverbs 17:22<br>12: Proverbs 25:16, Proverbs 25:27<br>13: 1 Timothy 5:23<br>14: Isaiah 38:21<br>15: Psalm 127:2<br>16: Ecclesiastes 5:12 , 2 Thessalonians 3:10, 2 Thessalonians 3:12 , Proverbs 16:20<br>17: Ecclesiastes 3:4, Ecclesiastes 3:11<br>18: 1 Samuel 19:4-5 , 1 Samuel 22:13-14<br>19: Romans 13:10<br>20: Luke 10:33-34<br>21: Colossians 3:12-13<br>22: James 3:17<br>23: 1 Peter 3:8-11 , Proverbs 15:1 , Judges 8:1-3<br>24: Matthew 5:24 , Ephesians 5:2, Ephesians 5:32 , Romans 12:17<br>25: 1 Thessalonians 5:14 , Job 31:19-20 , Matthew 25:35-36 , Proverbs 31:8-9",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 136: What are the sins forbidden in the sixth commandment?",
      Answer:
        "The sins forbidden in the sixth commandment are, all taking away the life of ourselves,1 or of others,2 except in case of public justice,3 lawful war,4 or necessary defense;5 the neglecting or withdrawing the lawful and necessary means of preservation of life;6 sinful anger,7 hatred,8 envy,9 desire of revenge;10 all excessive passions,11 distracting cares;12 immoderate use of meat, drink,13 labor,14 and recreations;15 provoking words,16 oppression,17 quarreling,18 striking, wounding,19 and: Whatsoever else tends to the destruction of the life of any.20<br><br>1: Acts 16:28<br>2: Genesis 9:6<br>3: Numbers 35:31, Numbers 35:33<br>4: Jeremiah 48:10 , Deuteronomy 20:1<br>5: Exodus 22:2-3<br>6: Matthew 25:42-43 , James 2:15-16 , Ecclesiastes 6:1-2<br>7: Matthew 5:22<br>8: 1 John 3:15<br>9: Proverbs 14:30<br>10: Romans 12:19<br>11: Ephesians 4:31<br>12: Matthew 6:31, Matthew 6:34<br>13: Luke 21:34 , Romans 13:13<br>14: Ecclesiastes 12:12 , Ecclesiastes 2:22-23<br>15: Isaiah 5:12<br>16: Proverbs 15:1<br>17: Ezekiel 18:18 , Exodus 1:14<br>18: Galatians 5:15<br>19: Numbers 35:16-18, Numbers 35:21<br>20: Exodus 21:18-36",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 137: Which is the seventh commandment?",
      Answer:
        "The seventh commandment is, Thou shalt not commit adultery.1<br><br>1: Exodus 20:14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 138: What are the duties required in the seventh commandment?",
      Answer:
        "The duties required in the seventh commandment are, chastity in body, mind, affections,1 words,2 and behavior;3 and the preservation of it in ourselves and others;4 watchfulness over the eyes and all the senses;5 temperance,6 keeping of chaste company,7 modesty in apparel;8 marriage by those that have not the gift of continency,9 conjugal love,10 and cohabitation;11 diligent labor in our callings;12 shunning all occasions of uncleanness, and resisting temptations thereunto.13<br><br>1: 1 Thessalonians 4:4 , Job 31:1 , 1 Corinthians 7:34<br>2: Colossians 4:6<br>3: 1 Peter 3:2<br>4: 1 Corinthians 7:2, 1 Corinthians 7:35-36<br>5: Job 31:1<br>6: Acts 24:24-25<br>7: Proverbs 2:16-20<br>8: 1 Timothy 2:9<br>9: 1 Corinthians 7:2, 1 Corinthians 7:9<br>10: Proverbs 5:19-20<br>11: 1 Peter 3:7<br>12: Proverbs 31:11, Proverbs 31:27-28<br>13: Proverbs 5:8 , Genesis 39:8-10",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 139: What are the sins forbidden in the seventh commandment?",
      Answer:
        "The sins forbidden in the seventh commandment, besides the neglect of the duties required,1 are, adultery, fornication,2 rape, incest,3 sodomy, and all unnatural lusts;4 all unclean imaginations, thoughts, purposes, and affections;5 all corrupt or filthy communications, or listening thereunto;6 wanton looks,7 impudent or light behavior, immodest apparel;8 prohibiting of lawful,9 and dispensing with unlawful marriages;10 allowing, tolerating, keeping of stews, and resorting to them;11 entangling vows of single life,12 undue delay of marriage;13 having more wives or husbands than one at the same time;14 unjust divorce,15 or desertion;16 idleness, gluttony, drunkenness,17 unchaste company;18 lascivious songs, books, pictures, dancings, stage plays;19 and all other provocations to, or acts of uncleanness, either in ourselves or others.20<br><br>1: Proverbs 5:7<br>2: Hebrews 13:4 , Galatians 5:19<br>3: 2 Samuel 13:14 , 1 Corinthians 5:1<br>4: Romans 1:24, Romans 1:26-27 , Leviticus 20:15-16<br>5: Matthew 5:28 , Matthew 15:19 , Colossians 3:5<br>6: Ephesians 5:3-4 , Proverbs 7:5, Proverbs 7:21-22<br>7: Isaiah 3:16 , 2 Peter 2:14<br>8: Proverbs 7:10, Proverbs 7:13<br>9: 1 Timothy 4:3<br>10: Leviticus 18:1-21 , Mark 6:18 , Malachi 2:11-12<br>11: 1 Kings 15:12 , 2 Kings 23:7 , Deuteronomy 23:17-18 , Leviticus 19:29 , Jeremiah 5:7 , Proverbs 7:24-27<br>12: Matthew 19:10-11<br>13: 1 Corinthians 7:7-9 , Genesis 38:26<br>14: Malachi 2:14-15 , Matthew 19:5<br>15: Malachi 2:16 , Matthew 5:32<br>16: 1 Corinthians 7:12-13<br>17: Ezekiel 16:49 , Proverbs 23:30-33<br>18: Genesis 39:19 , Proverbs 5:8<br>19: Ephesians 5:4 , Ezekiel 23:14-16 , Isaiah 23:15-17 , Isaiah 3:16 , Mark 6:22 , 1 Peter 4:3<br>20: 2 Kings 9:30 , Jeremiah 4:30 , Ezekiel 23:40",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 140: Which is the eighth commandment?",
      Answer:
        "The eighth commandment is, Thou shalt not steal.1<br><br>1: Exodus 20:15",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 141: What are the duties required in the eighth commandment?",
      Answer:
        "The duties required in the eighth commandment are, truth, faithfulness, and justice in contracts and commerce between man and man;1 rendering to everyone his due;2 restitution of goods unlawfully detained from the right owners thereof;3 giving and lending freely, according to our abilities, and the necessities of others;4 moderation of our judgments, wills, and affections concerning worldly goods;5 a provident care and study to get,6 keep, use, and dispose these things which are necessary and convenient for the sustentation of our nature, and suitable to our condition;7 a lawful calling,8 and diligence in it;9 frugality;10 avoiding unnecessary lawsuits 11 and suretyship, or other like engagements;12 and an endeavor, by all just and lawful means, to procure, preserve, and further the wealth and outward estate of others, as well as our own.13<br><br>1: Psalm 15:2, Psalm 15:4 , Zechariah 7:4, Zechariah 7:10 , Zechariah 8:16-17<br>2: Leviticus 6:2-5 , Luke 19:8<br>3: Luke 6:30, Luke 6:38 , 1 John 3:17 , Ephesians 4:28 , Galatians 6:10<br>4: 1 Timothy 6:6-9<br>5: 1 Timothy 5:8<br>6: Proverbs 27:23-27 , Ecclesiastes 3:12-13 , Isaiah 38:1 , Matthew 11:8<br>7: 1 Corinthians 7:20 , Genesis 3:19<br>8: Ephesians 4:28 , Proverbs 10:4<br>9: John 6:12 , Proverbs 21:20<br>10: 1 Corinthians 6:1-9<br>11: Proverbs 6:1-6<br>12: Leviticus 25:35 , Deuteronomy 22:1-4 , Exodus 23:4-5 , Philippians 2:4",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 142: What are the sins forbidden in the eighth commandment?",
      Answer:
        "The sins forbidden in the eighth commandment, besides the neglect of the duties required,1 are, theft,2 robbery,3 man-stealing,4 and receiving anything that is stolen;5 fraudulent dealing,6 false weights and measures,7 removing land marks,8 injustice and unfaithfulness in contracts between man and man,9 or in matters of trust;10 oppression,11 extortion,12 usury,13 bribery,14 vexatious lawsuits,15 unjust enclosures and depopulations;16 engrossing commodities to enhance the price;17 unlawful callings,18 and all other unjust or sinful ways of taking or withholding from our neighbor what belongs to him, or of enriching ourselves;19 covetousness;20 inordinate prizing and affecting worldly goods;21 distrustful and distracting cares and studies in getting, keeping, and using them;22 envying at the prosperity of others;23 as likewise idleness,24 prodigality, wasteful gaming; and all other ways whereby we do unduly prejudice our own outward estate,25 and defrauding ourselves of the due use and comfort of that estate which God hath given us.26<br><br>1: James 2:15-16 , 1 John 3:17<br>2: Ephesians 4:28<br>3: Psalm 62:10<br>4: 1 Timothy 1:10<br>5: Proverbs 29:24 , Psalm 50:18<br>6: 1 Thessalonians 4:6<br>7: Proverbs 11:1<br>8: Deuteronomy 19:14 , Proverbs 23:10<br>9: Amos 8:5 , Psalm 37:21<br>10: Luke 16:10-12<br>11: Ezekiel 22:29 , Leviticus 25:17<br>12: Matthew 23:25 , Ezekiel 22:12<br>13: Psalm 15:5<br>14: Job 15:34<br>15: 1 Corinthians 6:6-8 , Proverbs 3:29-30<br>16: Isaiah 5:8 , Micah 2:2<br>17: Proverbs 11:26<br>18: Acts 19:19, Acts 19:24-25<br>19: Job 20:19 , James 5:4 , Proverbs 21:6<br>20: Luke 12:15<br>21: 1 Timothy 6:5 , Colossians 3:2 , Proverbs 23:5 , Psalm 62:10<br>22: Matthew 6:25, Matthew 6:31, Matthew 6:34 , Ecclesiastes 5:12<br>23: Psalm 73:3 , Psalm 37:1, Psalm 37:7<br>24: 2 Thessalonians 3:11 , Proverbs 18:9<br>25: Proverbs 21:17 , Proverbs 23:20-21 , Proverbs 28:19<br>26: Ecclesiastes 4:8 , Ecclesiastes 6:2 , 1 Timothy 5:8",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 143: Which is the ninth commandment?",
      Answer:
        "The ninth commandment is, Thou shalt not bear false witness against thy neighbor.1<br><br>1: Exodus 20:16",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 144: What are the duties required in the ninth commandment?",
      Answer:
        "The duties required in the ninth commandment are, the preserving and promoting of truth between man and man,1 and the good name of our neighbor, as well as our own;12 appearing and standing for the truth;3 and from the heart,4 sincerely,5 freely,6 clearly,7 and fully,8 speaking the truth, and only the truth, in matters of judgment and justice,9 and in all other things whatsoever;10 a charitable esteem of our neighbors;11 loving, desiring, and rejoicing in their good name;12 sorrowing for,13 and covering of their infirmities;14 freely acknowledging of their gifts and graces,15 defending their innocency;16 a ready receiving of a good report,17 and unwillingness to admit of an evil report,18 concerning them; discouraging talebearers,19 flatterers,20 and slanderers;21 love and care of our own good name, and defending it when need requireth;22 keeping of lawful promises;23 studying and practicing of whatsoever things are true, honest, lovely, and of good report.24<br><br>1: Zechariah 8:16<br>2: 3 John 1:12<br>3: Proverbs 31:8-9<br>4: Psalm 15:2<br>5: 2 Chronicles 19:9<br>6: 1 Samuel 19:4-5<br>7: Joshua 7:19<br>8: 2 Samuel 14:18-20<br>9: Leviticus 19:15<br>10: 2 Corinthians 1:17-18 , Ephesians 4:25<br>11: Hebrews 6:9 , 1 Corinthians 13:7<br>12: Romans 1:8 , 2 John 1:4 , 3 John 1:3-4<br>13: 2 Corinthians 2:4 , 2 Corinthians 12:21<br>14: Proverbs 17:9 , 1 Peter 4:8<br>15: 1 Corinthians 1:4-5, 1 Corinthians 1:7 , 2 Timothy 1:4-5<br>16: 1 Samuel 22:14<br>17: 1 Corinthians 13:6-7<br>18: Psalm 15:3<br>19: Proverbs 25:23<br>20: Proverbs 26:24-25<br>21: Psalm 101:5<br>22: Proverbs 22:1 , John 8:49<br>23: Psalm 15:4<br>24: Philippians 4:8",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 145: What are the sins forbidden in the ninth commandment?",
      Answer:
        "The sins forbidden in the ninth commandment are, all prejudicing the truth, and the good name of our neighbors, as well as our own,1 especially in public judicature;2 giving false evidence,3 suborning false witnesses,4 wittingly appearing and pleading for an evil cause, outfacing and overbearing the truth;5 passing unjust sentence,6 calling evil good, and good evil; rewarding the wicked according to the work of the righteous, and the righteous according to the work of the wicked;7 forgery,8 concealing the truth, undue silence in a just cause,9 and holding our peace when iniquity calleth for either a reproof from ourselves,10 or complaint to others;11 speaking the truth unseasonably,12 or maliciously to a wrong end,13 or perverting it to a wrong meaning,14 or in doubtful and equivocal expressions, to the prejudice of truth or justice;15 speaking untruth,16 lying,17 slandering,18 backbiting,19 detracting,20 tale bearing,21 whispering,22 scoffing,23 reviling,24 rash,25 harsh,26 and partial censuring;27 misconstructing intentions, words, and actions;28 flattering,29 vainglorious boasting,30 thinking or speaking too highly or too meanly of ourselves or others;31 denying the gifts and graces of God;32 aggravating smaller faults;33 hiding, excusing, or extenuating of sins, when called to a free confession;34 unnecessary discovering of infirmities;35 raising false rumors,36 receiving and countenancing evil reports,37 and stopping our ears against just defense;38 evil suspicion;39 envying or grieving at the deserved credit of any,40 endeavoring or desiring to impair it,41 rejoicing in their disgrace and infamy;42 scornful contempt,43 fond admiration;44 breach of lawful promises;45 neglecting such things as are of good report,46 and practicing, or not avoiding ourselves, or not hindering: What we can in others, such things as procure an ill name.47<br><br>1: 1 Samuel 17:28 , 2 Samuel 16:3 , 2 Samuel 1:9-10, 2 Samuel 1:15-16<br>2: Leviticus 19:15 , Habakkuk 1:4<br>3: Proverbs 19:5 , Proverbs 6:16, Proverbs 6:19<br>4: Acts 6:13<br>5: Jeremiah 9:3, Jeremiah 9:5 , Acts 24:2, Acts 24:5 , Psalm 12:3-4 , Psalm 52:1-4<br>6: Proverbs 17:15 , 1 Kings 21:9-14<br>7: Isaiah 5:23<br>8: Psalm 119:69 , Luke 19:8 , Luke 16:5-7<br>9: Leviticus 5:1 , Deuteronomy 13:8 , Acts 5:3, Acts 5:8-9 , 2 Timothy 4:6<br>10: 1 Kings 1:6 , Leviticus 19:17<br>11: Isaiah 59:4<br>12: Proverbs 29:11<br>13: 1 Samuel 22:9-10 , Psalm 52:1-5<br>14: Psalm 56:5 , John 2:19 , Matthew 26:60-61<br>15: Genesis 3:5 , Genesis 26:7, Genesis 26:9<br>16: Isaiah 59:13<br>17: Leviticus 19:11 , Colossians 3:9<br>18: Psalm 50:20<br>19: James 4:11 , Jeremiah 38:4<br>20: Leviticus 19:19<br>21: Romans 1:29-30<br>22: Genesis 21:9 , Galatians 4:29<br>23: 1 Corinthians 6:10<br>24: Matthew 7:1<br>25: Acts 28:4<br>26: Genesis 38:24 , Romans 2:1<br>27: Nehemiah 6:6-8 , Romans 3:8 , Psalm 69:10 , 1 Samuel 1:13-15 , 2 Samuel 10:3<br>28: Psalm 12:2-3<br>29: 2 Timothy 3:2<br>30: Luke 18:9, Luke 18:11 , Romans 12:16 , 1 Corinthians 4:6 , Acts 12:22 , Exodus 4:10-14<br>31: Job 27:5-6<br>32: Matthew 7:3-5<br>33: Proverbs 28:13 , Proverbs 30:20 , Genesis 3:12-13 , Jeremiah 2:35 , 2 Kings 5:25 , Genesis 4:9<br>34: Genesis 9:22 , Proverbs 25:9-10<br>35: Exodus 23:1<br>36: Proverbs 29:12<br>37: Acts 7:56-57 , Job 31:13-14<br>38: 1 Corinthians 13:5 , 1 Timothy 6:4<br>39: Numbers 11:29 , Matthew 21:15<br>40: Ezra 4:12-13<br>41: Jeremiah 48:27<br>42: Psalm 35:15-16, Psalm 35:21 , Matthew 27:28-29<br>43: Jude 16 , Acts 12:22<br>44: Romans 1:31 , 2 Timothy 3:3<br>45: 1 Samuel 2:24<br>46: 2 Samuel 13:12-13 , Proverbs 5:8-9 , Proverbs 6:33",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 146: Which is the tenth commandment?",
      Answer:
        "The tenth commandment is, Thou shalt not covet thy neighbor's house, thou shalt not covet thy neighbor's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbor's.1<br><br>1: Exodus 20:17",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 147: What are the duties required in the tenth commandment?",
      Answer:
        "The duties required in the tenth commandment are, such a full contentment with our own condition,1 and such a charitable frame of the whole soul toward our neighbor, as that all our inward motions and affections touching him, tend unto, and further all that good which is his.2<br><br>1: Hebrews 13:5 , 1 Timothy 6:6<br>2: Job 31:29 , Romans 12:15 , Psalm 122:7-9 , Esther 10:3 , 1 Corinthians 13:4-7",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 148: What are the sins forbidden in the tenth commandment?",
      Answer:
        "The sins forbidden in the tenth commandment are, discontentment with our own estate;1 envying 2 and grieving at the good of our neighbor,3 together with all inordinate motions and affections to anything that is his.4<br><br>1: 1 Kings 21:4 , Esther 5:13 , 1 Corinthians 10:10<br>2: Galatians 5:26 , James 3:14, James 3:16<br>3: Psalm 112:9-10 , Nehemiah 2:10<br>4: Romans 7:7-8 , Romans 13:9 , Colossians 3:5 , Deuteronomy 5:21",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 149: Is any man able perfectly to keep the commandments of God?",
      Answer:
        "No man is able, either of himself,1 or by any grace received in this life, perfectly to keep the commandments of God;2 but doth daily break them in thought,3 word, and deed.4<br><br>1: James 3:2 , John 15:5 , Romans 8:3<br>2: Ecclesiastes 7:20 , 1 John 1:8, 1 John 1:10 , Galatians 5:17 , Romans 7:18-19<br>3: Genesis 6:5 , Genesis 8:21<br>4: Romans 3:9-19 , James 3:2-13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 150: Are all transgressions of the law of God equally heinous in themselves, and in the sight of God?",
      Answer:
        "All transgressions of the law of God are not equally heinous; but some sins in themselves, and by reason of several aggravations, are more heinous in the sight of God than others.1<br><br>1: John 19:11 , Ezekiel 8:6, Ezekiel 8:13, Ezekiel 8:15 , 1 John 5:16 , Psalm 78:17, Psalm 78:32, Psalm 78:56",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question:
        "Q. 151: What are those aggravations that make some sins more heinous than others?",
      Answer:
        "Sins receive their aggravations, 1. From the persons offending:1 if they be of riper age,2 greater experience or grace,3 eminent for profession,4 gifts,5 place,6 office,7 guides to others,8 and whose example is likely to be followed by others.9 2. From the parties offended:10 if immediately against God,11 his attributes,12 and worship;13 against Christ, and his grace;14 the Holy Spirit,15 his witness,16 and workings;17 against superiors, men of eminency,18 and such as we stand especially related and engaged unto;19 against any of the saints,20 particularly weak brethren,21 the souls of them, or any other,22 and the common good of all or many.23 3. From the nature and quality of the offense:24 if it be against the express letter of the law,25 break many commandments, contain in it many sins:26 if not only conceived in the heart, but breaks forth in words and actions,27 scandalize others,28 and admit of no reparation:29 if against means,30 mercies,31 judgments,32 light of nature,33 conviction of conscience,34 public or private admonition,35 censures of the church,36 civil punishments;37 and our prayers, purposes, promises,38 vows,39 covenants,40 and engagements to God or men:41 if done deliberately,42 wilfully,43 presumptuously,44 impudently,45 boastingly,46 maliciously,47 frequently,48 obstinately,49 with delight,50 continuance,51 or relapsing after repentance.52 4. From circumstances of time 53 and place:54 if on the Lordâ€™s day,55 or other times of divine worship;56 or immediately before57 or after these,58 or other helps to prevent or remedy such miscarriages:59 if in public, or in the presence of others, who are thereby likely to be provoked or defiled.60<br><br>1: Jeremiah 2:8<br>2: Job 32:7, Job 32:9 , Ecclesiastes 4:13<br>3: 1 Kings 11:4, 1 Kings 11:9<br>4: 2 Samuel 12:14 , 1 Corinthians 5:1<br>5: James 4:17 , Luke 12:47-48<br>6: Jeremiah 5:4-5<br>7: 2 Samuel 12:7-9 , Ezekiel 8:11-12<br>8: Romans 2:17-24<br>9: Galatians 2:11-14<br>10: Matthew 21:38-39<br>11: 1 Samuel 2:25 , Acts 5:4 , Psalm 5:4<br>12: Romans 2:4<br>13: Malachi 1:8 , Malachi 1:14<br>14: Hebrews 2:2-3 , Hebrews 7:25<br>15: Hebrews 10:29 , Matthew 12:31-32<br>16: Ephesians 4:30<br>17: Hebrews 6:4-6<br>18: Jude 8 , Numbers 12:8-9 , Isaiah 3:5<br>19: Proverbs 30:17 , 2 Corinthians 12:15 , Psalm 55:12-15<br>20: Zephaniah 2:8, Zephaniah 2:10-11 , Matthew 18:6 , Revelation 17:6<br>21: 1 Corinthians 8:11-12 , Romans 14:13, Romans 14:15, Romans 14:21<br>22: Ezekiel 13:19 , 1 Corinthians 8:12 , Revelation 18:12-13 , Matthew 23:15<br>23: 1 Thessalonians 2:15-16 , Joshua 22:20<br>24: Proverbs 6:30-33<br>25: Ezra 9:10-12 , 1 Kings 11:9-10<br>26: Colossians 3:5 , 1 Timothy 6:10 , Proverbs 5:8-12 , Proverbs 6:32-33 , Joshua 7:21<br>27: James 1:14-15 , Matthew 5:22 , Micah 2:1<br>28: Matthew 18:7 , Romans 2:23-24<br>29: Deuteronomy 22:22, Deuteronomy 22:28-29 , Proverbs 6:32-35<br>30: Matthew 11:21-24 , John 15:22<br>31: Isaiah 1:3 , Deuteronomy 32:6<br>32: Amos 4:8-11 , Jeremiah 5:3<br>33: Romans 1:26-27<br>34: Romans 1:32 , Daniel 5:22 , Titus 3:10-11<br>35: Proverbs 29:1<br>36: Titus 3:10<br>37: Proverbs 27:22 , Proverbs 23:35<br>38: Psalm 78:34-37 , Jeremiah 13:5-6, Jeremiah 13:20-21<br>39: Ecclesiastes 5:4-6 , Proverbs 20:25<br>40: Leviticus 26:25<br>41: Proverbs 2:17 , Ezekiel 7:18-19<br>42: Psalm 36:4<br>43: Jeremiah 6:16<br>44: Numbers 15:30 , Exodus 21:14<br>45: Jeremiah 3:3 , Proverbs 7:13<br>46: Psalm 52:1<br>47: 3 John 1:10<br>48: Numbers 14:22<br>49: Zechariah 7:11-12<br>50: Proverbs 2:14<br>51: Isaiah 57:17<br>52: Jeremiah 34:8-11 , 2 Peter 2:20-22<br>53: 2 Kings 5:26<br>54: Jeremiah 7:10 , Isaiah 26:10<br>55: Ezekiel 23:37-39<br>56: Isaiah 58:3-5 , Numbers 25:6-7<br>57: 1 Corinthians 11:20-21<br>58: Jeremiah 7:8-10 , Proverbs 7:14-15 , John 13:27, John 13:30<br>59: Ezra 9:13-14<br>60: 2 Samuel 16:22 , 1 Samuel 2:22-24",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Law of God",
      Question: "Q. 152: What doth every sin deserve at the hands of God?",
      Answer:
        "Every sin, even the least, being against the sovereignty,1 goodness,2 and holiness of God,3 and against his righteous law,4 deserveth his wrath and curse,5 both in this life,6 and that which is to come;7 and cannot be expiated but by the blood of Christ.8<br><br>1: James 2:10-11<br>2: Exodus 20:1-2<br>3: Habakkuk 1:13 , Leviticus 10:3 , Leviticus 11:44-45<br>4: 1 John 3:4 , Romans 7:12<br>5: Ephesians 5:6 , Galatians 3:10<br>6: Lamentations 3:39 , Deuteronomy 28:15-18<br>7: Matthew 25:41<br>8: Hebrews 9:22 , 1 Peter 1:18-19",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 153: What doth God require of us, that we may escape his wrath and curse due to us by reason of the transgression of the law?",
      Answer:
        "That we may escape the wrath and curse of God due to us by reason of the transgression of the law, he requireth of us repentance toward God, and faith toward our Lord Jesus Christ,1 and the diligent use of the outward means whereby Christ communicates to us the benefits of his mediation.2<br><br>1: Acts 20:21 , Matthew 3:7-8 , Luke 13:3, Luke 13:5 , Acts 16:30-31 , John 3:16, John 3:18<br>2: Proverbs 2:1-5 , Proverbs 8:33-36",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 154: What are the outward means whereby Christ communicates to us the benefits of his mediation?",
      Answer:
        "The outward and ordinary means whereby Christ communicates to his church the benefits of his mediation, are all his ordinances; especially the word, sacraments, and prayer; all which are made effectual to the elect for their salvation.1<br><br>1: Matthew 28:19-20 , Acts 2:42, Acts 2:46-47",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 155: How is the word made effectual to salvation?",
      Answer:
        "The Spirit of God maketh the reading, but especially the preaching of the word, an effectual means of enlightening,1 convincing, and humbling sinners;2 of driving them out of themselves, and drawing them unto Christ;3 of conforming them to his image,4 and subduing them to his will;5 of strengthening them against temptations and corruptions;6 of building them up in grace,7 and establishing their hearts in holiness and comfort through faith unto salvation.8<br><br>1: Nehemiah 8:8 , Acts 26:18 , Psalm 19:8<br>2: 1 Corinthians 14:24-25 , 2 Chronicles 34:18-19, 2 Chronicles 34:26-28<br>3: Acts 2:37, Acts 2:41 , Acts 8:27-30, Acts 8:35-38<br>4: 2 Corinthians 3:18<br>5: 2 Corinthians 10:4-6 , Romans 6:17<br>6: Matthew 4:4, Matthew 4:7, Matthew 4:10 , Ephesians 6:16-17 , Psalm 19:11<br>7: Acts 20:32 , 2 Timothy 3:15-17<br>8: Romans 16:25 , 1 Thessalonians 3:2, 1 Thessalonians 3:10-11, 1 Thessalonians 3:13 , Romans 15:4 , Romans 10:13-17 , Romans 1:16",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 156: Is the word of God to be read by all?",
      Answer:
        "Although all are not to be permitted to read the word publicly to the congregation,1 yet all sorts of people are bound to read it apart by themselves,2 and with their families:3 to which end, the holy scriptures are to be translated out of the original into vulgar languages.4<br><br>1: Deuteronomy 31:9, Deuteronomy 31:11-13 , Nehemiah 8:2-3 , Nehemiah 9:3-5<br>2: Deuteronomy 17:19 , Revelation 1:3 , Isaiah 34:16<br>3: Deuteronomy 6:6-9 , Genesis 18:17 , Psalm 78:5-7<br>4: 1 Corinthians 14:6, 1 Corinthians 14:9, 1 Corinthians 14:11-12, 1 Corinthians 14:15-16, 1 Corinthians 14:24, 1 Corinthians 14:27-28",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 157: How is the word of God to be read?",
      Answer:
        "The holy scriptures are to be read with an high and reverent esteem of them;1 with a firm persuasion that they are the very word of God,2 and that he only can enable us to understand them;3 with desire to know, believe, and obey the will of God revealed in them;4 with diligence,5 and attention to the matter and scope of them;6 with meditation,7 application,8 self-denial,9 and prayer.10<br><br>1: Psalm 19:10 , Nehemiah 8:3-6, Nehemiah 8:10 , Exodus 24:7 , 2 Chronicles 34:27 , Isaiah 66:2<br>2: 2 Peter 1:19-21<br>3: Luke 24:45 , 2 Corinthians 3:13-16<br>4: Deuteronomy 17:10, Deuteronomy 17:20<br>5: Acts 17:11<br>6: Acts 8:30, Acts 8:34 , Luke 10:26-28<br>7: Psalm 1:2 , Psalm 119:97<br>8: 2 Chronicles 34:21<br>9: Proverbs 3:5 , Deuteronomy 33:3<br>10: Proverbs 2:1-6 , Psalm 119:18 , Nehemiah 7:6, Nehemiah 7:8",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 158: By whom is the word of God to be preached?",
      Answer:
        "The word of God is to be preached only by such as are sufficiently gifted,1 and also duly approved and called to that office.2<br><br>1: 1 Timothy 3:2, 1 Timothy 3:6 , Ephesians 4:8-11 , Hosea 4:6 , Malachi 2:7 , 2 Corinthians 3:6<br>2: Jeremiah 14:15 , Romans 10:15 , Hebrews 5:4 , 1 Corinthians 12:28-29 , 1 Timothy 3:10 , 1 Timothy 4:14 , 1 Timothy 5:22",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 159: How is the word of God to be preached by those that are called thereunto?",
      Answer:
        "They that are called to labor in the ministry of the word, are to preach sound doctrine,1 diligently,2 in season and out of season;3 plainly,4 not in the enticing words of man's wisdom, but in demonstration of the Spirit, and of power;5 faithfully,6 making known the whole counsel of God;7 wisely,8 applying themselves to the necessities and capacities of the hearers;9 zealously,10 with fervent love to God 11 and the souls of his people;12 sincerely,13 aiming at his glory,14 and their conversion,15 edification,16 and salvation.17<br><br>1: Titus 2:1, Titus 2:8<br>2: Acts 18:25<br>3: 2 Timothy 4:2<br>4: 1 Corinthians 14:19<br>5: 1 Corinthians 2:4<br>6: Jeremiah 23:28 , 1 Corinthians 4:1-2<br>7: Acts 20:27<br>8: Colossians 1:28 , 2 Timothy 2:15<br>9: 1 Corinthians 3:2 , Hebrews 5:12-14 , Luke 12:42<br>10: Acts 18:25<br>11: 2 Corinthians 5:13-14 , Philippians 1:15-17<br>12: Colossians 4:12 , 2 Corinthians 12:15<br>13: 2 Corinthians 2:17 , 2 Corinthians 4:2<br>14: 1 Thessalonians 2:4-6 , John 7:18<br>15: 1 Corinthians 9:19-22<br>16: 2 Corinthians 12:19 , Ephesians 4:12<br>17: 1 Timothy 4:16 , Acts 26:16-18",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 160: What is required of those that hear the word preached?",
      Answer:
        "It is required of those that hear the word preached, that they attend upon it with diligence,1 preparation,2 and prayer;3 examine: What they hear by the scriptures;4 receive the truth with faith,5 love,6 meekness,7 and readiness of mind,8 as the word of God;9 meditate,10 and confer of it;11 hide it in their hearts,12 and bring forth the fruit of it in their lives.13<br><br>1: Proverbs 8:34<br>2: 1 Peter 2:1-2<br>3: Psalm 119:18 , Ephesians 6:18-19<br>4: Acts 17:11<br>5: Hebrews 4:2<br>6: 2 Thessalonians 2:10<br>7: James 1:21<br>8: Acts 17:11<br>9: 1 Thessalonians 2:13<br>10: Luke 9:44 , Hebrews 2:1<br>11: Luke 24:14 , Deuteronomy 6:6-7<br>12: Proverbs 2:1 , Psalm 119:11<br>13: Luke 8:15 , James 1:25",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 161: How do the sacraments become effectual means of salvation?",
      Answer:
        "The sacraments become effectual means of salvation, not by any power in themselves, or any virtue derived from the piety or intention of him by whom they are administered, but only by the working of the Holy Ghost, and the blessing of Christ, by whom they are instituted.1<br><br>1: 1 Peter 3:21 , Acts 8:13, Acts 8:23 , 1 Corinthians 3:6-7 , 1 Corinthians 12:13",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 162: What is a sacrament?",
      Answer:
        "A sacrament is a holy ordinance instituted by Christ in his church,1 to signify, seal, and exhibit 2 unto those that are within the covenant of grace,3 the benefits of his mediation;4 to strengthen and increase their faith, and all other graces;5 to oblige them to obedience;6 to testify and cherish their love and communion one with another;7 and to distinguish them from those that are without.8<br><br>1: Genesis 17:7, Genesis 17:10 , Exodus 12 , Matthew 26:26-28<br>2: Romans 4:11 , 1 Corinthians 11:24-25<br>3: Romans 15:8 , Exodus 12:48<br>4: Acts 2:38 , 1 Corinthians 10:16<br>5: Romans 4:11 , Galatians 3:27<br>6: Romans 6:3-4 , 1 Corinthians 10:21<br>7: Ephesians 4:2-5 , 1 Corinthians 12:13<br>8: Ephesians 2:11-12 , Genesis 34:14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 163: What are the parts of a sacrament?",
      Answer:
        "The parts of a sacrament are two; the one an outward and sensible sign, used according to Christ's own appointment; the other an inward and spiritual grace thereby signified.1<br><br>1: Matthew 3:11 , 1 Peter 3:21 , Romans 2:28-29",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 164: How many sacraments hath Christ instituted in his church under the New Testament?",
      Answer:
        "Under the New Testament Christ hath instituted in his church only two sacraments, Baptism and the Lord's supper.1<br><br>1: Matthew 28:19 , 1 Corinthians 11:20, 1 Corinthians 11:23 , Matthew 26:26-28",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 165: What is Baptism?",
      Answer:
        "Baptism is a sacrament of the New Testament, wherein Christ hath ordained the washing with water in the name of the Father, and of the Son, and of the Holy Ghost,1 to be a sign and seal of ingrafting into himself,2 of remission of sins by his blood,3 and regeneration by his Spirit;4 of adoption,5 and resurrection unto everlasting life;6 and whereby the parties baptized are solemnly admitted into the visible church,7 and enter into an open and professed engagement to be wholly and only the Lord's.8<br><br>1: Matthew 28:19<br>2: Galatians 3:27<br>3: Mark 1:4 , Revelation 1:5<br>4: Titus 3:5 , Ephesians 5:26<br>5: Galatians 3:26-27<br>6: 1 Corinthians 15:29 , Romans 6:5<br>7: 1 Corinthians 12:13<br>8: Romans 6:4",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 166: Unto whom is Baptism to be administered?",
      Answer:
        "Baptism is not to be administered to any that are out of the visible church, and so strangers from the covenant of promise, till they profess their faith in Christ, and obedience to him,1 but infants descending from parents, either both, or but one of them, professing faith in Christ, and obedience to him, are in that respect within the covenant, and to be baptized.2<br><br>1: Acts 8:36-37 , Acts 2:38<br>2: Genesis 17:7, Genesis 17:9 , Galatians 3:9, Galatians 3:14 , Colossians 2:11-12 , Acts 2:38-39 , Romans 4:11-12 , 1 Corinthians 7:14 , Matthew 28:19 , Luke 18:15-16 , Romans 11:16",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 167: How is our Baptism to be improved by us?",
      Answer:
        "The needful but much neglected duty of improving our Baptism, is to be performed by us all our life long, especially in the time of temptation, and when we are present at the administration of it to others;1 by serious and thankful consideration of the nature of it, and of the ends for which Christ instituted it, the privileges and benefits conferred and sealed thereby, and our solemn vow made therein;2 by being humbled for our sinful defilement, our falling short of, and walking contrary to, the grace of baptism, and our engagements;3 by growing up to assurance of pardon of sin, and of all other blessings sealed to us in that sacrament;4 by drawing strength from the death and resurrection of Christ, into whom we are baptized, for the mortifying of sin, and quickening of grace;5 and by endeavoring to live by faith,6 to have our conversation in holiness and righteousness,7 as those that have therein given up their names to Christ;8 and to walk in brotherly love, as being baptized by the same Spirit into one body.9<br><br>1: Colossians 2:11-12 , Romans 6:4, Romans 6:6, Romans 6:11<br>2: Romans 6:3-5<br>3: 1 Corinthians 1:11-13 , Romans 6:2-3<br>4: Romans 4:11-12 , 1 Peter 3:21<br>5: Romans 6:3-5<br>6: Galatians 3:26-27<br>7: Romans 6:22<br>8: Acts 2:38<br>9: 1 Corinthians 12:13, 1 Corinthians 12:25",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question: "Q. 168: What is the Lord's supper?",
      Answer:
        "The Lord's supper is a sacrament of the New Testament,1 wherein, by giving and receiving bread and wine according to the appointment of Jesus Christ, his death is showed forth; and they that worthily communicate feed upon his body and blood, to their spiritual nourishment and growth in grace;2 have their union and communion with him confirmed;3 testify and renew their thankfulness,4 and engagement to God,5 and their mutual love and fellowship each with other, as members of the same mystical body.6<br><br>1: Luke 22:20<br>2: Matthew 26:26-28 , 1 Corinthians 11:23-26<br>3: 1 Corinthians 10:16<br>4: 1 Corinthians 11:24<br>5: 1 Corinthians 10:14-16, 1 Corinthians 10:21<br>6: 1 Corinthians 10:17",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 169: How hath Christ appointed bread and wine to be given and received in the sacrament of the Lord's supper?",
      Answer:
        "Christ hath appointed the ministers of his word, in the administration of this sacrament of the Lord's Supper, to set apart the bread and wine from common use, by the word of institution, thanksgiving, and prayer; to take and break the bread, and to give both the bread and the wine to the communicants: who are, by the same appointment, to take and eat the bread, and to drink the wine, in thankful remembrance that the body of Christ was broken and given, and his blood shed, for them.1<br><br>1: 1 Corinthians 11:23-24 , Matthew 26:26-28 , Mark 14:22-24 , Luke 22:19-20",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 170: How do they that worthily communicate in the Lord's supper feed upon the body and blood of Christ therein?",
      Answer:
        "As the body and blood of Christ are not corporally or carnally present in, with, or under the bread and wine in the Lord's supper,1 and yet are spiritually present to the faith of the receiver, no less truly and really than the elements themselves are to their outward senses;2 so they that worthily communicate in the sacrament of the Lord's supper, do therein feed upon the body and blood of Christ, not after a corporal and carnal, but in a spiritual manner; yet truly and really,3 while by faith they receive and apply unto themselves Christ crucified, and all the benefits of his death.4<br><br>1: Acts 3:21<br>2: Matthew 26:26, Matthew 26:28<br>3: 1 Corinthians 11:24-29<br>4: 1 Corinthians 10:16",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 171: How are they that receive the sacrament of the Lord's supper to prepare themselves before they come unto it?",
      Answer:
        "They that receive the sacrament of the Lord's supper are, before they come, to prepare themselves thereunto, by examining themselves 1 of their being in Christ,2 of their sins and wants;3 of the truth and measure of their knowledge,4 faith,5 repentance;6 love to God and the brethren,7 charity to all men,8 forgiving those that have done them wrong;9 of their desires after Christ,10 and of their new obedience;11 and by renewing the exercise of these graces,12 by serious meditation,13 and fervent prayer.14<br><br>1: 1 Corinthians 11:28<br>2: 2 Corinthians 13:5<br>3: 1 Corinthians 5:7 , Exodus 12:15<br>4: 1 Corinthians 11:29<br>5: 1 Corinthians 13:5<br>6: Zechariah 12:10 , 1 Corinthians 11:31<br>7: 1 Corinthians 10:16-17 , Acts 2:46-47<br>8: 1 Corinthians 5:8 , 1 Corinthians 11:18, 1 Corinthians 11:20<br>9: Matthew 5:23-24<br>10: Isaiah 55:1 , John 7:37<br>11: 1 Corinthians 5:7-8<br>12: 1 Corinthians 11:25-26, 1 Corinthians 11:28 , Hebrews 10:21-22 , Hebrews 10:24 , Psalm 26:6<br>13: 1 Corinthians 11:24-25<br>14: 2 Chronicles 30:18-19 , Matthew 26:26",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 172: May one who doubteth of his being in Christ, or of his due preparation, come to the Lord's supper?",
      Answer:
        "One who doubteth of his being in Christ, or of his due preparation to the sacrament of the Lord's supper, may have true interest in Christ, though he be not yet assured thereof;1 and in God's account hath it, if he be duly affected with the apprehension of the want of it,2 and unfeignedly desires to be found in Christ,3 and to depart from iniquity:4 in which case (because promises are made, and this sacrament is appointed, for the relief even of weak and doubting Christians)5 he is to bewail his unbelief,6 and labor to have his doubts resolved;7 and, so doing, he may and ought to come to the Lord's supper, that he may be further strengthened.8<br><br>1: Isaiah 50:10 , 1 John 5:13 , Psalm 88 , Psalm 77:1-4, Psalm 77:7-10 , Jonah 2:4<br>2: Isaiah 54:7-10 , Matthew 5:3-4 , Psalm 31:22 , Psalm 73:13, Psalm 73:22-23<br>3: Philippians 3:8-9 , Psalm 42:1-2, Psalm 42:5, Psalm 42:11<br>4: 2 Timothy 2:19 , Isaiah 50:10 , Psalm 66:18-20<br>5: Isaiah 40:11, Isaiah 40:29, Isaiah 40:31 , Matthew 11:28 , Matthew 12:20 , Matthew 26:28<br>6: Mark 9:24<br>7: Acts 2:37 , Acts 16:30<br>8: Romans 4:11 , 1 Corinthians 11:28",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 173: May any who profess the faith, and desire to come to the Lord's supper, be kept from it?",
      Answer:
        "Such as are found to be ignorant or scandalous, notwithstanding their profession of the faith, and desire to come to the Lord's supper, may and ought to be kept from that sacrament, by the power which Christ hath left in his church,1 until they receive instruction, and manifest their reformation.2<br><br>1: 1 Corinthians 11:27-34 , Matthew 7:6 , 1 Corinthians 5 , Jude 23 , 1 Timothy 5:22<br>2: 2 Corinthians 2:7",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 174: What is required of them that receive the sacrament of the Lord's supper in the time of the administration of it?",
      Answer:
        "It is required of them that receive the sacrament of the Lord's supper, that, during the time of the administration of it, with all holy reverence and attention they wait upon God in that ordinance,1 diligently observe the sacramental elements and actions,2 heedfully discern the Lord's body,3 and affectionately meditate on his death and sufferings,4 and thereby stir up themselves to a vigorous exercise of their graces;5 in judging themselves,6 and sorrowing for sin;7 in earnest hungering and thirsting after Christ,8 feeding on him by faith,9 receiving of his fulness,10 trusting in his merits,11 rejoicing in his love,12 giving thanks for his grace;13 in renewing of their covenant with God, and love to all the saints.14<br><br>1: Leviticus 10:3 , Hebrews 12:28 , Psalm 5:7 , 1 Corinthians 11:17, 1 Corinthians 11:26-27<br>2: Exodus 24:8 , Matthew 26:28<br>3: 1 Corinthians 11:29<br>4: Luke 22:19<br>5: 1 Corinthians 11:26 , 1 Corinthians 10:3-5, 1 Corinthians 10:11, 1 Corinthians 10:14<br>6: 1 Corinthians 11:31<br>7: Zechariah 12:10<br>8: Revelation 22:17<br>9: John 6:35<br>10: John 1:16<br>11: Philippians 1:16<br>12: Psalm 58:4-5 , 2 Chronicles 30:21<br>13: Psalm 22:26<br>14: Jeremiah 50:5 , Psalm 50:5<br>15: Acts 2:42",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 175: What is the duty of Christians, after they have received the sacrament of the Lord's supper?",
      Answer:
        "The duty of Christians, after they have received the sacrament of the Lord's supper, is seriously to consider how they have behaved themselves therein, and with what success;1 if they find quickening and comfort, to bless God for it,2 beg the continuance of it,3 watch against relapses,4 fulfil their vows,5 and encourage themselves to a frequent attendance on that ordinance:6 but if they find no present benefit, more exactly to review their preparation to, and carriage at, the sacrament;7 in both which, if they can approve themselves to God and their own consciences, they are to wait for the fruit of it in due time:8 but, if they see they have failed in either, they are to be humbled,9 and to attend upon it afterwards with more care and diligence.10<br><br>1: Psalm 28:7 , 1 Corinthians 11:7, 1 Corinthians 11:30-31<br>2: 2 Chronicles 30:21-23, 2 Chronicles 30:25-26 , Acts 2:42, Acts 2:46-47<br>3: Psalm 36:10 , Song of Solomon 3:4 , 1 Chronicles 29:18<br>4: 1 Corinthians 10:3-5, 1 Corinthians 10:12<br>5: Psalm 50:14<br>6: 1 Corinthians 11:25-26 , Acts 2:42, Acts 2:46<br>7: Song of Solomon 5:1-6 , Ecclesiastes 5:1-6<br>8: Psalm 123:1-2 , Psalm 42:5, Psalm 42:8 , Psalm 43:3-5<br>9: 2 Chronicles 30:18-19<br>10: 2 Corinthians 7:11 , 1 Chronicles 15:12-14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 176: Wherein do the sacraments of baptism and the Lord's supper agree?",
      Answer:
        "The sacraments of baptism and the Lord's supper agree, in that the author of both is God;1 the spiritual part of both is Christ and his benefits;2 both are seals of the same covenant,3 are to be dispensed by ministers of the gospel, and by none other;4 and to be continued in the church of Christ until his second coming.5<br><br>1: Matthew 28:19 , 1 Corinthians 11:23<br>2: Romans 6:3-4 , 1 Corinthians 10:16<br>3: Romans 4:11 , Colossians 2:12 , Matthew 26:27-28<br>4: John 1:33 , Matthew 28:19 , 1 Corinthians 11:23 , 1 Corinthians 4:1 , Hebrews 5:4<br>5: Matthew 28:19-20 , 1 Corinthians 11:26",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of the Word and Sacraments",
      Question:
        "Q. 177: Wherein do the sacraments of baptism and the Lord's supper differ?",
      Answer:
        "The sacraments of baptism and the Lord's supper differ, in that baptism is to be administered but once, with water, to be a sign and seal of our regeneration and ingrafting into Christ,1 and that even to infants;2 whereas the Lord's supper is to be administered often, in the elements of bread and wine, to represent and exhibit Christ as spiritual nourishment to the soul,3 and to confirm our continuance and growth in him,4 and that only to such as are of years and ability to examine themselves.5<br><br>1: Matthew 3:11 , Titus 3:5 , Galatians 3:27<br>2: Genesis 17:7, Genesis 17:9 , Acts 2:38-39 , 1 Corinthians 7:14<br>3: 1 Corinthians 11:23-26<br>4: 1 Corinthians 10:16<br>5: 1 Corinthians 11:28-29",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 178: What is prayer?",
      Answer:
        "Prayer is an offering up of our desires unto God,1 in the name of Christ,2 by the help of his Spirit;3 with confession of our sins,4 and thankful acknowledgment of his mercies.5<br><br>1: Psalm 62:8<br>2: John 16:23<br>3: Romans 8:26<br>4: Psalm 32:5-6 , Daniel 9:4<br>5: Philippians 4:6",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 179: Are we to pray unto God only?",
      Answer:
        "God only being able to search the hearts,1 hear the requests,2 pardon the sins,3 and fulfil the desires of all;4 and only to be believed in,5 and worshiped with religious worship;6 prayer, which is a special part thereof,7 is to be made by all to him alone,8 and to none other.9<br><br>1: 1 Kings 8:39 , Acts 1:24 , Romans 8:27<br>2: Psalm 65:2<br>3: Micah 7:18<br>4: Psalm 145:18<br>5: Romans 10:14<br>6: Matthew 4:10<br>7: 1 Corinthians 1:2<br>8: Psalm 50:15<br>9: Romans 10:14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 180: What is it to pray in the name of Christ?",
      Answer:
        "To pray in the name of Christ is, in obedience to his command, and in confidence on his promises, to ask mercy for his sake;1 not by bare mentioning of his name,2 but by drawing our encouragement to pray, and our boldness, strength, and hope of acceptance in prayer, from Christ and his mediation.3<br><br>1: John 14:13-14 , John 16:24 , Daniel 9:17<br>2: Matthew 7:21<br>3: Hebrews 4:14-16 , 1 John 5:13-15",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 181: Why are we to pray in the name of Christ?",
      Answer:
        "The sinfulness of man, and his distance from God by reason thereof, being so great, as that we can have no access into his presence without a mediator;1 and there being none in heaven or earth appointed to, or fit for, that glorious work but Christ alone,2 we are to pray in no other name but his only.3<br><br>1: John 14:6 , Isaiah 59:2 , Ephesians 3:12<br>2: John 6:27 , Hebrews 7:25-27 , 1 Timothy 2:5<br>3: Colossians 3:17 , Hebrews 13:15",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 182: How doth the Spirit help us to pray?",
      Answer:
        "We not knowing: What to pray for as we ought, the Spirit helps our infirmities, by enabling us to understand both for whom, and: What, and: How prayer is to be made; and by working and quickening in our hearts (although not in all persons, nor at all times, in the same measure) those apprehensions, affections, and graces which are requisite for the right performance of that duty.1<br><br>1: Romans 8:26-27 , Psalm 10:17 , Zechariah 12:10",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 183: For whom are we to pray?",
      Answer:
        "We are to pray for the whole church of Christ upon earth;1 for magistrates,2 and ministers;3 for ourselves,4 our brethren,5 yea, our enemies;6 and for all sorts of men living,7 or that shall live hereafter;8 but not for the dead,9 nor for those that are known to have sinned the sin unto death.10<br><br>1: Ephesians 6:18 , Psalm 28:9<br>2: 1 Timothy 2:1-2<br>3: Colossians 4:3<br>4: Genesis 32:11<br>5: James 5:16<br>6: Matthew 5:44<br>7: 1 Timothy 2:1-2<br>8: John 17:20 , 2 Samuel 7:29<br>9: 2 Samuel 12:21-23<br>10: 1 John 5:16",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 184: For what things are we to pray?",
      Answer:
        "We are to pray for all things tending to the glory of God,1 the welfare of the church,2 our own 3 or others good;4 but not for anything that is unlawful.5<br><br>1: Matthew 6:9<br>2: Psalm 51:18 , Psalm 122:6<br>3: Matthew 7:11<br>4: Psalm 125:4<br>5: 1 John 5:14",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 185: How are we to pray?",
      Answer:
        "We are to pray with an awful apprehension of the majesty of God,1 and deep sense of our own unworthiness,2 necessities,3 and sins;4 with penitent,5 thankful,6 and enlarged hearts;7 with understanding,8 faith,9 sincerity,10 fervency,11 love,12 and perseverance,13 waiting upon him,14 with humble submission to his will.15<br><br>1: Ecclesiastes 5:1<br>2: Genesis 18:27 , Genesis 32:10<br>3: Luke 15:17-19<br>4: Luke 18:13-14<br>5: Psalm 51:17<br>6: Philippians 4:6<br>7: 1 Samuel 1:15 , 1 Samuel 2:1<br>8: 1 Corinthians 14:15<br>9: Mark 11:24 , James 1:6<br>10: Psalm 145:18 , Psalm 17:1<br>11: James 5:16<br>12: 1 Timothy 2:8<br>13: Ephesians 6:18<br>14: Micah 7:7<br>15: Matthew 26:39",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question:
        "Q. 186: What rule hath God given for our direction in the duty of prayer?",
      Answer:
        "The whole word of God is of use to direct us in the duty of prayer;1 but the special rule of direction is that form of prayer which our Savior Christ taught his disciples, commonly called The Lord's prayer.2<br><br>1: 1 John 5:14<br>2: Matthew 6:9-13 , Luke 11:2-4",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 187: How is the Lord's prayer to be used?",
      Answer:
        "The Lord's prayer is not only for direction, as a pattern, according to which we are to make other prayers; but may also be used as a prayer, so that it be done with understanding, faith, reverence, and other graces necessary to the right performance of the duty of prayer.1<br><br>1: Matthew 6:9 , Luke 11:2",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 188: Of how many parts doth the Lord's prayer consist?",
      Answer:
        "The Lord's prayer consists of three parts; a preface, petitions, and a conclusion.<br>",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 189: What doth the preface of the Lord's prayer teach us?",
      Answer:
        "The preface of the Lord's prayer (contained in these words, Our Father which art in heaven,)1 teacheth us, when we pray, to draw near to God with confidence of his fatherly goodness, and our interest therein;2 with reverence, and all other childlike dispositions,3 heavenly affections,4 and due apprehensions of his sovereign power, majesty, and gracious condescension:5 as also, to pray with and for others.6<br><br>1: Matthew 6:9<br>2: 2 Corinthians 3:5<br>3: Psalm 67:2-3<br>4: Psalm 83:18<br>5: Psalm 86:10-13, Psalm 86:15<br>6: 2 Thessalonians 3:1 , Psalm 147:19-20 , Psalm 138:1-3 , 2 Corinthians 2:14-15<br>7: Psalm 145<br>8: Psalm 103:1 , Psalm 19:14<br>9: Philippians 1:9, Philippians 1:11<br>10: Psalm 67:1-4<br>11: Ephesians 1:17-18<br>12: Psalm 97:7<br>13: Psalm 74:18, Psalm 74:22-23<br>14: 2 Kings 19:15-16<br>15: 2 Chronicles 20:6, 2 Chronicles 20:10-12 , Psalm 83 , Psalm 140:4, Psalm 140:8",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 190: What do we pray for in the first petition?",
      Answer:
        "In the first petition (which is, Hallowed be thy name,)1 acknowledging the utter inability and indisposition that is in ourselves and all men to honor God aright,2 pray, that God would by his grace enable and incline us and others to know, to acknowledge, and highly to esteem him,3 his titles,4 attributes,5 ordinances, word,6 works, and whatsoever he is pleased to make himself known by;7 and to glorify him in thought, word,8 and deed:9 that he would prevent and remove atheism,10 ignorance,11 idolatry,12 profaneness,13 and: whatsoever is dishonorable to him;14 and, by his overruling providence, direct and dispose of all things to his own glory.15<br><br>1: Matthew 6:9<br>2: 2 Corinthians 3:5<br>3: Psalm 67:2-3<br>4: Psalm 83:18<br>5: Psalm 86:10-13, Psalm 86:15<br>6: 2 Thessalonians 3:1 , Psalm 147:19-20 , Psalm 138:1-3 , 2 Corinthians 2:14-15<br>7: Psalm 145<br>8: Psalm 103:1 , Psalm 19:14<br>9: Philippians 1:9, Philippians 1:11<br>10: Psalm 67:1-4<br>11: Ephesians 1:17-18<br>12: Psalm 97:7<br>13: Psalm 74:18, Psalm 74:22-23<br>14: 2 Kings 19:15-16<br>15: 2 Chronicles 20:6, 2 Chronicles 20:10-12 , Psalm 83 , Psalm 140:4, Psalm 140:8",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 191: What do we pray for in the second petition?",
      Answer:
        "In the second petition (which is, Thy kingdom come,)1 acknowledging ourselves and all mankind to be by nature under the dominion of sin and Satan,2 we pray, that the kingdom of sin and Satan may be destroyed,3 the gospel propagated throughout the world,4 the Jews called,5 the fulness of the Gentiles brought in;6 the church furnished with all gospel officers and ordinances,7 purged from corruption,8 countenanced and maintained by the civil magistrate:9 that the ordinances of Christ may be purely dispensed, and made effectual to the converting of those that are yet in their sins, and the confirming, comforting, and building up of those that are already converted:10 that Christ would rule in our hearts here,11 and hasten the time of his second coming, and our reigning with him forever:12 and that he would be pleased so to exercise the kingdom of his power in all the world, as may best conduce to these ends.13<br><br>1: Matthew 6:10<br>2: Ephesians 2:2-3<br>3: Psalm 68:1, Psalm 68:18 , Revelation 12:10-11<br>4: 2 Thessalonians 3:1<br>5: Romans 10:1<br>6: John 17:9, John 17:20 , Romans 11:25-26 , Psalm 67<br>7: Matthew 9:38 , 2 Thessalonians 3:1<br>8: Malachi 1:11 , Zephaniah 3:9<br>9: 1 Timothy 2:1-2<br>10: Acts 4:29-30 , Ephesians 6:18-20 , Romans 15:29-30, Romans 15:32 , 2 Thessalonians 1:11 , 2 Thessalonians 2:16-17<br>11: Ephesians 3:14-20<br>12: Revelation 22:20<br>13: Isaiah 64:1-2 , Revelation 4:8-11",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 192: What do we pray for in the third petition?",
      Answer:
        "In the third petition (which is, Thy will be done in earth, as it is in heaven,)1 acknowledging, that by nature we and all men are not only utterly unable and unwilling to know and do the will of God,2 but prone to rebel against his word,3 to repine and murmur against his providence,4 and wholly inclined to do the will of the flesh, and of the devil:5 we pray, that God would by his Spirit take away from ourselves and others all blindness,6 weakness,7 indisposedness,8 and perverseness of heart;9 and by his grace make us able and willing to know, do, and submit to his will in all things,10 with the like humility,11 cheerfulness,12 faithfulness,13 diligence,14 zeal,15 sincerity,16 and constancy,17 as the angels do in heaven.18<br><br>1: Matthew 6:10<br>2: Romans 7:18 , Job 21:14 , 1 Corinthians 2:14<br>3: Romans 8:7<br>4: Exodus 17:7 , Numbers 14:2<br>5: Ephesians 2:2<br>6: Ephesians 1:17-18<br>7: Ephesians 3:16<br>8: Matthew 26:40-41<br>9: Jeremiah 31:18-19<br>10: Psalm 119:1, Psalm 119:8, Psalm 119:35-36<br>11: Micah 6:8<br>12: Psalm 100:2 , Job 1:21 , 2 Samuel 15:25-26<br>13: Isaiah 38:3<br>14: Psalm 119:4-5<br>15: Romans 12:11<br>16: Psalm 119:80<br>17: Psalm 119:112<br>18: Isaiah 6:2-3 , Psalm 103:20-21 , Matthew 18:10",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 193: What do we pray for in the fourth petition?",
      Answer:
        "In the fourth petition (which is, Give us this day our daily bread,)1 acknowledging, that in Adam, and by our own sin, we have forfeited our right to all the outward blessings of this life, and deserve to be wholly deprived of them by God, and to have them cursed to us in the use of them;2 and that neither they of themselves are able to sustain us,3 nor we to merit,4 or by our own industry to procure them;5 but prone to desire,6 get,7 and use them unlawfully:8 we pray for ourselves and others, that both they and we, waiting upon the providence of God from day to day in the use of lawful means, may, of his free gift, and as to his fatherly wisdom shall seem best, enjoy a competent portion of them;9 and have the same continued and blessed unto us in our holy and comfortable use of them,10 and contentment in them;11 and be kept from all things that are contrary to our temporal support and comfort.12<br><br>1: Matthew 6:11<br>2: Genesis 2:17 , Genesis 3:17 , Romans 8:20-22 , Deuteronomy 28:15-17<br>3: Deuteronomy 8:3<br>4: Genesis 32:10<br>5: Deuteronomy 8:17-18<br>6: Jeremiah 6:13 , Mark 7:21-22<br>7: Hosea 12:7<br>8: James 4:3<br>9: Genesis 43:12-14 , Genesis 28:20 , Ephesians 4:28 , 2 Thessalonians 3:11-12 , Philippians 4:6<br>10: 1 Timothy 4:3-5<br>11: 1 Timothy 6:6-8<br>12: Proverbs 30:8-9",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 194: What do we pray for in the fifth petition?",
      Answer:
        "In the fifth petition (which is, Forgive us our debts, as we forgive our debtors,)1 acknowledging, that we and all others are guilty both of original and actual sin, and thereby become debtors to the justice of God; and that neither we, nor any other creature, can make the least satisfaction for that debt:2 we pray for ourselves and others, that God of his free grace would, through the obedience and satisfaction of Christ, apprehended and applied by faith, acquit us both from the guilt and punishment of sin,3 accept us in his Beloved;4 continue his favor and grace to us,5 pardon our daily failings,6 and fill us with peace and joy, in giving us daily more and more assurance of forgiveness;7 which we are the rather emboldened to ask, and encouraged to expect, when we have this testimony in ourselves, that we from the heart forgive others their offenses.8<br><br>1: Matthew 6:12<br>2: Romans 3:9-22 , Matthew 18:24-25 , Psalm 130:3-4<br>3: Romans 3:24-26 , Hebrews 9:22<br>4: Ephesians 1:6-7<br>5: 2 Peter 1:2<br>6: Hosea 14:2 , Jeremiah 14:7<br>7: Romans 15:13 , Psalm 51:7-10, Psalm 51:12<br>8: Luke 11:4 , Matthew 6:14-15 , Matthew 18:35",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question: "Q. 195: What do we pray for in the sixth petition?",
      Answer:
        "In the sixth petition (which is, And lead us not into temptation, but deliver us from evil,)1 acknowledging, that the most wise, righteous, and gracious God, for divers holy and just ends, may so order things, that we may be assaulted, foiled, and for a time led captive by temptations;2 that Satan,3 the world,4 and the flesh, are ready powerfully to draw us aside, and ensnare us;5 and that we, even after the pardon of our sins, by reason of our corruption,6 weakness, and want of watchfulness,7 are not only subject to be tempted, and forward to expose ourselves unto temptations,8 but also of ourselves unable and unwilling to resist them, to recover out of them, and to improve them;9 and worthy to be left under the power of them:10 we pray, that God would so overrule the world and all in it,11 subdue the flesh,12 and restrain Satan,13 order all things,14 bestow and bless all means of grace,15 and quicken us to watchfulness in the use of them, that we and all his people may by his providence be kept from being tempted to sin;16 or, if tempted, that by his Spirit we may be powerfully supported and enabled to stand in the hour of temptation;17 or when fallen, raised again and recovered out of it,18 and have a sanctified use and improvement thereof:19 that our sanctification and salvation may be perfected,20 Satan trodden under our feet,21 and we fully freed from sin, temptation, and all evil, forever.22<br><br>1: Matthew 6:13<br>2: 2 Chronicles 32:31<br>3: 1 Chronicles 21:1<br>4: Luke 21:34 , Mark 4:19<br>5: James 1:14<br>6: Galatians 5:17<br>7: Matthew 26:41<br>8: Matthew 26:69-72 , Galatians 2:11-14 , 2 Chronicles 18:3 , 2 Chronicles 19:2<br>9: Romans 7:23-24 , 1 Chronicles 21:1-4 , 2 Chronicles 16:7-10<br>10: Psalm 81:11-12<br>11: John 17:15<br>12: Psalm 51:10<br>13: 2 Corinthians 12:7-8<br>14: 1 Corinthians 10:12-13<br>15: Hebrews 13:20-21<br>16: Matthew 26:41 , Psalm 19:13<br>17: Ephesians 3:14-17 , 1 Thessalonians 3:13 , Jude 24<br>18: Psalm 51:12<br>19: 1 Peter 5:8-10<br>20: 2 Corinthians 13:7, 2 Corinthians 13:9<br>21: Romans 16:20 , Luke 22:31-32<br>22: John 17:15 , 1 Thessalonians 5:23",
    },
    {
      Subject: "Westminster Larger Catechism",
      Topic: "What we are To Do",
      Deck: "Of Prayer",
      Question:
        "Q. 196: What doth the conclusion of the Lord's prayer teach us?",
      Answer:
        "The conclusion of the Lord's prayer (which is, For thine is the kingdom, and the power, and the glory, forever. Amen.),1 teaches us to enforce our petitions with arguments,2 which are to be taken, not from any worthiness in ourselves, or in any other creature, but from God;3 and with our prayers to join praises,4 ascribing to God alone eternal sovereignty, omnipotency, and glorious excellency;5 in regard whereof, as he is able and willing to help us,6 so we by faith are emboldened to plead with him that he would,7 and quietly to rely upon him, that he will fulfil our requests.8 And, to testify this our desire and assurance, we say, Amen.9<br><br>1: Matthew 6:13<br>2: Romans 15:30<br>3: Daniel 9:4, Daniel 9:7-9, Daniel 9:16-19<br>4: Philippians 4:6<br>5: 1 Chronicles 29:10-13<br>6: Ephesians 3:20-21 , Luke 11:13<br>7: 2 Chronicles 20:6, 2 Chronicles 20:11<br>8: 2 Chronicles 14:11<br>9: 1 Corinthians 14:16 , Revelation 22:20-21",
    },
    {
      Subject: "Test Subject 1",
      Topic: "Test topic 1",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },
    {
      Subject: "Test Subject 1",
      Topic: "Test topic 2",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },
    {
      Subject: "Test Subject 1",
      Topic: "Test topic 3",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },
    {
      Subject: "Test Subject 1",
      Topic: "Test topic 4",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },

    {
      Subject: "Test Subject 2",
      Topic: "Test topic 1",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },
    {
      Subject: "Test Subject 2",
      Topic: "Test topic 2",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },
    {
      Subject: "Test Subject 2",
      Topic: "Test topic 3",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },
    {
      Subject: "Test Subject 2",
      Topic: "Test topic 4",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },

    {
      Subject: "Test Subject 3",
      Topic: "Test topic 1",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },
    {
      Subject: "Test Subject 3",
      Topic: "Test topic 2",
      Deck: "Christ",
      Question: "Define the essential character of Christ.",
      Answer: "holy, harmless, undefiled and entirely separate from sinners",
    },
  ];
  subject: any = "RPCGA Licensure";
  topicTitlesArray: any = [
    "Christology",
    "Covenants",
    "Doctrine of Man",
    "Eschatology",
    "Hermeneutics",
    "Soteriology",
    "Theology Proper",
  ];
  // topicTitlesArray: any = [];
  // res: any;
  // subject: any = "";

  topicsArray: any = [];
  questionsToDisplay: any = [];
  lastPosX = 0;
  lastPosY = 0;
  isDragging = false;

  cardheight = "37%";

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    // this.route.queryParams.subscribe((params) => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.subject = this.router.getCurrentNavigation().extras.state.subject;
    //     this.topicTitlesArray = this.router.getCurrentNavigation().extras.state.topics;
    //     this.res = this.router.getCurrentNavigation().extras.state.res;

    //     // this.topicTitlesArray.forEach(topicString => {
    //     //   this.topicsArray.push({
    //     //     topic: topicString,
    //     //     questions: this.getQuestions(this.res, this.subject, topicString)
    //     //   })
    //     // });
    //     //       console.log(this.topicsArray);
    //   }
    // });

    this.topicTitlesArray.forEach((topicString) => {
      this.topicsArray.push({
        title: topicString,
        questions: this.getQuestions(this.res, this.subject, topicString),
        decks: this.getDecks(this.res, this.subject, topicString),
      });
    });
    console.log(this.topicsArray);




    // THis is meant to be the logic for viewing questions card in full screen
      // let tinderQuestionElement = document.getElementById("questionsCard");
      // let hammer = new Hammer(tinderQuestionElement);
      
      // hammer.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );

      // // tie in the handler that will be called
      // hammer.on("pan", (ev) =>{
      //   if(ev.target.id == "questionsTitle"){
      //   this.handleDrag(ev, tinderQuestionElement)
      //   }
      // });
  }

  handleDrag(ev, element) {

    if (!this.isDragging) {
        this.isDragging = true;
  }

  if (ev.isFinal) {

          // Upward drag
      if (ev.deltaY < 0) {
      this.cardheight = "68.5%";

        // this.topicsArray.forEach(topic =>{
        //   topic.isContentHidden = true;
        //   topic.cardHeight = "12%"
        // })

      } else if (ev.deltaY > 0) {
        this.cardheight = "37%";

        // this.topicsArray.forEach(topic =>{
        //   topic.isContentHidden = false;
        //   topic.cardHeight = "52%"
        // })
      }
    this.isDragging = false;
  }
}

// Fetches all questions based on their subject and topic
  getQuestions(jsonData, subject, topic) {
    var questionsArray = [];
    jsonData.forEach((element) => {
      if (element.Subject == subject && element.Topic == topic) {
        questionsArray.push({
          question: element.Question,
          answer: element.Answer,
          deck: element.Deck,
          hideAnswer: true,
        });
      }
    });

    // Clears duplicates
    var uniqueQuestionsArray = questionsArray.filter((elem, index, self) => {
      return index === self.indexOf(elem);
    });

    return uniqueQuestionsArray;
  }

  // Fetched all decks based on their subject and topic
  getDecks(jsonData, subject, topic) {
    var decksArray = [];

    jsonData.forEach((element) => {
      if (element.Subject == subject && element.Topic == topic) {
        // decksArray.push(element.Deck)
        
        decksArray.push({
          title: element.Deck,
          dates: ["15th March", "18th March", "12th March", "15th March"],
          isChecked: true
        });
      }
    });

    // Clears duplicates
    var uniqueDecksArray = decksArray.filter((elem, index, self) => {
      return index === self.indexOf(elem);
    });

    // console.log(uniqueDecksArray);

    return uniqueDecksArray;
  }

  hideOrShowAnswer(index) {
    this.topicsArray[0].questions[index].hideAnswer = !this.topicsArray[0]
      .questions[index].hideAnswer;
  }
}
