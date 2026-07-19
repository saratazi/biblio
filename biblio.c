#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct
{
    char titre[50];
    char auteur[50];
    int nbrPages;
    float prix;
} Livre;

int main()
{
    Livre L[50];
    int choix, i, n = 0;
    char a[50];

    do
    {
        printf("\n----------------------------------------------------\n");
        printf("Appuyez sur 1 pour ajouter les details des livres.\n");
        printf("Appuyez sur 2 pour afficher les details des livres.\n");
        printf("Appuyez sur 3 pour afficher le livre de l'auteur donne.\n");
        printf("Appuyez sur 4 pour compter le nombre de livres.\n");
        printf("Appuyez sur 5 pour sortir.\n");
        printf("----------------------------------------------------\n");

        printf("Saisissez votre choix : ");
        scanf("%d", &choix);

        switch (choix)
        {
        case 1:

            printf("Combien de livres vous souhaitez ajouter : ");
            scanf("%d", &n);

            for (i = 0; i < n; i++)
            {
                printf("----------------------------------------------\n");
                printf("Entrer les details du livre num %d\n", i + 1);
                printf("----------------------------------------------\n");

                printf("Titre : ");
                scanf(" %[^\n]", L[i].titre);

                printf("Auteur : ");
                scanf(" %[^\n]", L[i].auteur);

                printf("Nombre de pages : ");
                scanf("%d", &L[i].nbrPages);

                printf("Prix : ");
                scanf("%f", &L[i].prix);
            }
            break;

        case 2:

            printf("\nLes details des livres :\n");

            for (i = 0; i < n; i++)
            {
                printf("----------------------------------------------\n");
                printf("Livre num %d\n", i + 1);
                printf("Titre : %s\n", L[i].titre);
                printf("Auteur : %s\n", L[i].auteur);
                printf("Nombre de pages : %d\n", L[i].nbrPages);
                printf("Prix : %.2f DH\n", L[i].prix);
            }

            break;

        case 3:

            printf("Saisissez le nom de l'auteur : ");
            scanf(" %[^\n]", a);

            printf("\nLivres trouves :\n");

            for (i = 0; i < n; i++)
            {
                if (strcmp(L[i].auteur, a) == 0)
                {
                    printf("%s\t%.2f DH\n", L[i].titre, L[i].prix);
                }
            }

            break;

        case 4:

            printf("Nombre total de livres dans la bibliotheque : %d\n", n);

            break;

        case 5:

            printf("Au revoir !\n");
            break;

        default:

            printf("Choix invalide !\n");
        }

    } while (choix != 5);

    return 0;
}