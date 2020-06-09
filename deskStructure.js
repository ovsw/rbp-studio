import S from '@sanity/desk-tool/structure-builder'
import {MdSettings, MdMap, MdFolder} from 'react-icons/md/'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'page', 'siteSettings', 'mapMarker'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Future Families Section Pages')
                .icon(MdFolder)
                .child(
                  S.list()
                    .title('Future Families Section Pages')
                    .items([
                      S.documentListItem()
                        .id('programs')
                        .title('Programs')
                        .schemaType('page'),
                      S.listItem()
                        .title('Program Pages')
                        .id('programsPages')
                        .child(
                          S.list()
                            .title('Programs Pages')
                            .items([
                              S.documentListItem()
                                .id('pineConeCampProgram')
                                .title('Pine Cone Camp')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('dayCampProgram')
                                .title('Day Camp')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('teenCampProgram')
                                .title('Teen Camp Program')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('leaderInTrainingProgram')
                                .title('Leader In Training')
                                .schemaType('page')
                            ])
                        )
                        .icon(MdFolder),
                      S.documentListItem()
                        .id('activities')
                        .title('Activities')
                        .schemaType('page'),
                      S.listItem()
                        .title('Activities Pages')
                        .id('activitiesPages')
                        .child(
                          S.list()
                            .title('Activities Pages')
                            .items([
                              S.documentListItem()
                                .id('clubsElectives')
                                .title('Clubs & Electives')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('learnToSwim')
                                .title('Learn to Swim')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('calendar')
                                .title('Calendar')
                                .schemaType('page'),
                              S.documentListItem()
                                .id('specialEvents')
                                .title('Special Events')
                                .schemaType('page')
                            ])
                        )
                        .icon(MdFolder),
                      S.documentListItem()
                        .id('transportation')
                        .title('Transportation')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('Lunch')
                        .title('Lunch')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('beforeAfterCare')
                        .title('Before & After Care')
                        .schemaType('page'),
                      // S.documentListItem()
                      //   .id('earlyEnrollMent')
                      //   .title('Early Enrollment')
                      // .schemaType('page'),
                      S.documentListItem()
                        .id('datesRates')
                        .title('Dates & Rates')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('reviews')
                        .title('Reviews')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('tuitionAssistance')
                        .title('Tuition Assistance')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('faqs')
                        .title('FAQs')
                        .schemaType('page')
                    ])
                ),
              S.listItem()
                .title('About Section Pages')
                .id('aboutSection')
                .child(
                  S.list()
                    .title('About Section Pages')
                    .items([
                      S.documentListItem()
                        .id('aMessageFromOurDirectors')
                        .title('Message from our Directors')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('2bded937-a7ca-4784-b728-877c86f8eab0')
                        .title('Our Directors')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('7ff6a741-2162-4497-8482-50f8f67674f5')
                        .title('Our Staff')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('03370fe5-2325-4475-ae11-52c7b36d1733')
                        .title('History')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('f6c7622a-6a77-4347-a69a-440d01d39988')
                        .title('Location')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('directions')
                        .title('Directions')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('e768a61e-a59c-49a9-8caf-d4a2a90e04dd')
                        .title('ACA Accreditation')
                        .schemaType('page')
                    ])
                )
                .icon(MdFolder),
              S.listItem()
                .title('Current Families Section Pages')
                .icon(MdFolder)
                .child(
                  S.list()
                    .title('Current Families Section Pages')
                    .items([
                      S.documentListItem()
                        .id('lunchMenu')
                        .title('Lunch Menu')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('referAFamily')
                        .title('Refer a Family')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('newthisyear')
                        .title('New for 2020')
                        .schemaType('page')
                    ])
                ),
              S.listItem()
                .title('Staff Pages')
                .icon(MdFolder)
                .child(
                  S.list()
                    .title('Staff Pages')
                    .items([
                      S.documentListItem()
                        .id('workingAtRBP')
                        .title('Working at Rambling Pines')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('currentOpenings')
                        .title('Current Openings')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('staffSummerDates')
                        .title('Summer Dates')
                        .schemaType('page')
                    ])
                ),
              S.documentListItem()
                .id('termsConditions')
                .title('Terms & Conditions')
                .schemaType('page'),
              S.documentListItem()
                .id('privacyPolicy')
                .title('Privacy Policy')
                .schemaType('page'),
              S.documentListItem()
                .id('adaCompliance')
                .title('ADA Compliance')
                .schemaType('page'),
              S.documentListItem()
                .id('requestInfo')
                .title('Request Info')
                .schemaType('page'),
              S.listItem()
                .title('Hidden Form Pages')
                .icon(MdFolder)
                .child(
                  S.list()
                    .title('Hidden Form Pages')
                    .items([
                      S.documentListItem()
                        .id('returningStaffForm')
                        .title('Returning Staff Form')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('campExtensionForm')
                        .title('Camp Extension Form')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('familyNightForm')
                        .title('Family Night Form')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('survey1')
                        .title('Survey 1')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('survey2')
                        .title('Survey 2')
                        .schemaType('page')
                    ])
                )
            ])),
      S.listItem()
        .title('Interactive Map')
        .icon(MdMap)
        .schemaType('mapMarker')
        .child(S.documentTypeList('mapMarker').title('Map Markers')),
      // S.listItem()
      //   .title('Blog posts')
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Blog posts')),
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
