#ifndef HEADER_DH_H
#include <openssl/dh.h>
#endif
DH *get_dh512()
	{
	static unsigned char dh512_p[]={
		0xCB,0x52,0x99,0x4D,0x68,0x6A,0x11,0x73,0xE5,0x88,0x3F,0xA6,
		0x9A,0x70,0x0F,0x54,0x91,0xD7,0x58,0x05,0x91,0x67,0xD1,0x6D,
		0x20,0xCF,0x91,0xBC,0xBE,0x9C,0xA6,0x79,0xB7,0x9F,0xED,0xB9,
		0x98,0xA0,0xDD,0xB6,0x71,0xDE,0xAB,0x0A,0x63,0xE2,0x89,0x58,
		0x50,0x8F,0xF2,0xD2,0xB6,0xDE,0xA9,0xB6,0x9B,0x1E,0x3C,0x82,
		0x39,0x90,0x5F,0xBB,
		};
	static unsigned char dh512_g[]={
		0x02,
		};
	DH *dh;

	if ((dh=DH_new()) == NULL) return(NULL);
	dh->p=BN_bin2bn(dh512_p,sizeof(dh512_p),NULL);
	dh->g=BN_bin2bn(dh512_g,sizeof(dh512_g),NULL);
	if ((dh->p == NULL) || (dh->g == NULL))
		{ DH_free(dh); return(NULL); }
	return(dh);
	}
