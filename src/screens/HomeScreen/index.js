import Footer from '../../components/patterns/Footer'
//import Link from '../../components/Link'
import { theme } from '../../theme/theme'
import { Image, Box, Text, Icon, Input, Button } from '../../theme/components'

const LOGO_NIKE = '/image/image%2023.png'
const SIDE_IMAGE_URL = '/image/nike.png'

function SideImage() {
  return (
    <Box
      styleSheet={{
        paddingHorizontal: {
          md: theme.space.x9
        },
        marginHorizontal: {
          sm: 'auto'
        },
        maxWidth: {
          sm: theme.space.xcontainer_md
        }
      }}
    >
      <Box
        styleSheet={{
          top: 0,
          bottom: 0,
          right: {
            lg: theme.space.x2
          },
          width: {
            lg: theme.space['x1/2']
          },
          paddingTop: {
            xs: theme.space.x12,
            sm: theme.space.x16
          },
          paddingBottom: {
            lg: theme.space.x16
          },
          position: {
            sm: 'relative',
            lg: 'absolute'
          }
        }}
      >
        <Box
          styleSheet={{
            height: {
              lg: theme.space['x1/1']
            },
            maxWidth: {
              sm: theme.space.xcontainer_md,
              lg: 'none'
            },
            position: 'relative',
            paddingHorizontal: {
              sm: theme.space.x0
            },
            paddingLeft: {
              lg: theme.space.x12
            },
            marginRight: {
              lg: `-${theme.space.x40}`
            },
            marginHorizontal: {
              sm: 'auto'
            }
          }}
        >
          <Image
            styleSheet={{
              boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4
              },
              maxWidth: {
                lg: 'none'
              },
              width: {
                lg: 'auto'
              },
              height: {
                lg: theme.space['x1/1']
              }
            }}
            src={SIDE_IMAGE_URL}
            alt=""
          />

          <Box
            styleSheet={{
              top: 0,
              bottom: 0,
              right: {
                lg: theme.space['x4/5']
              },
              width: {
                lg: theme.space['x1/2']
              },
              paddingTop: {
                xs: theme.space.x12,
                sm: theme.space.x16
              },
              paddingBottom: {
                lg: theme.space.x16
              },
              position: {
                sm: 'relative',
                lg: 'absolute'
              }
            }}
          ></Box>

          <Box
            styleSheet={{
              height: {
                lg: theme.space['x1/1']
              },
              maxWidth: {
                sm: theme.space.xcontainer_md,
                lg: 'none'
              },
              position: 'relative',
              paddingHorizontal: {
                sm: theme.space.x0
              },
              paddingLeft: {
                lg: theme.space.x12
              },
              marginRight: {
                lg: `-${theme.space.x40}`
              },
              marginHorizontal: {
                sm: 'auto'
              }
            }}
          />

          <Image
            styleSheet={{
              boxShadow: `10 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4
              },
              maxWidth: {
                lg: 'none'
              },
              width: {
                lg: 'auto'
              },
              height: {
                lg: theme.space['x1/1']
              }
            }}
            src={SIDE_IMAGE_URL}
            alt=""
          />
        </Box>
      </Box>
    </Box>
  )
}

export default function HomeScreen() {
  return (
    <Box>
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          backgroundColor: theme.colors.neutral['999']
        }}
      >
        <Box
          styleSheet={{
            overflow: 'hidden',
            position: {
              lg: 'relative'
            },
            paddingTop: {
              xs: theme.space.x2,
              sm: theme.space.x12
            },
            paddingVertical: {
              md: theme.space.x20,
              lg: theme.space.x20
            }
          }}
        >
          <Box
            styleSheet={{
              marginHorizontal: 'auto',
              paddingHorizontal: {
                xs: theme.space.x5,
                sm: theme.space.x6,
                lg: theme.space.x8
              },
              maxWidth: {
                sm: theme.space.xcontainer_md,
                lg: theme.space.xcontainer_lg
              },
              display: {
                lg: 'grid'
              },
              gap: {
                lg: theme.space.x24
              },
              gridTemplateColumns: {
                lg: 'repeat(2, minmax(0, 1fr))'
              }
            }}
          >
            <Box>
              <Box>
                <Image
                  styleSheet={{
                    width: 'auto',
                    height: theme.space.x11
                  }}
                  src={LOGO_NIKE}
                  alt="Logo NIKE"
                />
              </Box>
              <Box
                styleSheet={{
                  marginTop: {
                    xs: theme.space.x17,
                    sm: theme.space.x20
                  }
                }}
              >
                <Box
                  styleSheet={{
                    marginTop: theme.space.x6,
                    maxWidth: theme.space.xcontainer_sm
                  }}
                >
                  <Text
                    as="h1"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading1,
                      color: theme.colors.neutral['050']
                    }}
                  >
                    LP - Esportes
                  </Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral['050'],
                      marginTop: theme.space.x6
                    }}
                  >
                    Agora vem descobrir tudo que pode ganhar sendo um Membro
                    Nike.
                  </Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral['050'],
                      marginTop: theme.space.x6
                    }}
                  >
                    Agora vem descobrir tudo que pode ganhar sendo um Membro
                    Nike. Quando você se torna um Membro Nike, você tem acesso
                    antecipado a lançamentos e ofertas, produtos exclusivos,
                    frete grátis (seguindo a política de frete), trocas grátis
                    (seguindo a política de trocas e devoluções), entre outras
                    experiências exclusivas para membros Nike.
                  </Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral['900'],
                      marginTop: theme.space.x6
                    }}
                  ></Text>
                </Box>
                <Box
                  as="form"
                  action="#"
                  styleSheet={{
                    display: {
                      sm: 'flex'
                    },
                    marginTop: theme.space.x12,
                    width: {
                      sm: theme.space['x1/1']
                    },
                    maxWidth: {
                      sm: theme.space.xcontainer_lg
                    }
                  }}
                >
                  <Box
                    styleSheet={{
                      minWidth: 0,
                      flex: 1
                    }}
                  >
                    <Text
                      as="label"
                      htmlFor="email"
                      styleSheet={{
                        srOnly: true
                      }}
                    ></Text>
                  </Box>
                  <Box
                    styleSheet={{
                      marginTop: {
                        xs: theme.space.x4,
                        sm: theme.space.x0
                      },
                      marginLeft: {
                        sm: theme.space.x3
                      }
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <SideImage />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
